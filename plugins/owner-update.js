import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'

/** Config local del servidor: no se pierde al actualizar */
const PRESERVE_ON_UPDATE = ['storage/maxsubs.json']

/** Carpetas que git NO debe tocar al hacer checkout (evita archivos bloqueados en Windows) */
const EXCLUDE_FROM_CHECKOUT = ['node_modules/']

function run(cmd) {
  return execSync(cmd, { encoding: 'utf-8', stdio: 'pipe' })
}
function runIgnore(cmd) {
  try {
    execSync(cmd, { stdio: 'ignore' })
  } catch {}
}

function backupPreserveFiles() {
  const data = {}
  for (const rel of PRESERVE_ON_UPDATE) {
    const full = path.join(process.cwd(), rel)
    if (!fs.existsSync(full)) continue
    try {
      data[rel] = fs.readFileSync(full, 'utf-8')
    } catch {}
  }
  return data
}

function restorePreserveFiles(data) {
  for (const [rel, content] of Object.entries(data)) {
    const full = path.join(process.cwd(), rel)
    try {
      fs.mkdirSync(path.dirname(full), { recursive: true })
      fs.writeFileSync(full, content)
    } catch (e) {
      console.error(`No se pudo restaurar ${rel}:`, e)
    }
  }
}

/**
 * Configura sparse-checkout (una sola vez) para que git ignore
 * carpetas como node_modules al hacer reset/checkout. Esto es
 * 100% local al servidor, no afecta el repositorio remoto.
 */
function ensureExcludedPathsAreSafe() {
  try {
    const gitDir = run('git rev-parse --git-dir').trim()
    const sparseFile = path.join(process.cwd(), gitDir, 'info', 'sparse-checkout')

    const desired = ['/*', ...EXCLUDE_FROM_CHECKOUT.map(p => `!/${p}`)].join('\n') + '\n'

    let current = ''
    if (fs.existsSync(sparseFile)) {
      try {
        current = fs.readFileSync(sparseFile, 'utf-8')
      } catch {}
    }

    if (current.trim() === desired.trim()) return // ya configurado, nada que hacer

    fs.mkdirSync(path.dirname(sparseFile), { recursive: true })
    fs.writeFileSync(sparseFile, desired)
    runIgnore('git config core.sparseCheckout true')
    runIgnore('git read-tree -mu HEAD')
  } catch (e) {
    console.error('No se pudo configurar sparse-checkout:', e)
    // No es fatal: si falla, seguimos intentando el update normal
  }
}

function getRemoteBranch() {
  try {
    const upstream = run('git rev-parse --abbrev-ref @{u}').trim()
    const slash = upstream.indexOf('/')
    if (slash > 0) {
      return {
        remote: upstream.slice(0, slash),
        branch: upstream.slice(slash + 1)
      }
    }
  } catch {}
  let branch = 'main'
  try {
    branch = run('git rev-parse --abbrev-ref HEAD').trim() || 'main'
  } catch {}
  return { remote: 'origin', branch }
}

/**
 * Actualiza igual que el repo remoto (sin merge conflictivo).
 * Muestra salida similar a git pull (archivos y commits).
 */
function gitPullHard() {
  ensureExcludedPathsAreSafe()

  runIgnore('git fetch origin')
  const { remote, branch } = getRemoteBranch()
  const ref = `${remote}/${branch}`

  const before = run('git rev-parse HEAD').trim()
  let remoteHash = ''
  try {
    remoteHash = run(`git rev-parse ${ref}`).trim()
  } catch {
    throw new Error(`No se encontró la rama remota ${ref}`)
  }

  if (before === remoteHash) {
    return 'Already up to date.'
  }

  for (const rel of PRESERVE_ON_UPDATE) {
    runIgnore(`git rm --cached -f "${rel}"`)
    runIgnore(`git update-index --assume-unchanged "${rel}"`)
  }

  try {
    run(`git reset --hard ${ref}`)
  } catch (error) {
    const msg = error?.stderr?.toString?.() || error?.message || String(error)
    if (msg.includes('unlink') || msg.includes('Invalid argument')) {
      throw new Error(
        'Algunos archivos de node_modules están en uso por el propio bot y no se pudieron reemplazar. ' +
        'Detén el bot completamente, corre .actualizar una vez desde ahí (o "git read-tree -mu HEAD" manualmente) para aplicar la exclusión, y vuelve a iniciarlo.'
      )
    }
    throw error
  }

  for (const rel of PRESERVE_ON_UPDATE) {
    runIgnore(`git update-index --no-assume-unchanged "${rel}"`)
    runIgnore(`git rm --cached -f "${rel}"`)
  }

  const after = run('git rev-parse HEAD').trim()
  const shortBefore = before.slice(0, 7)
  const shortAfter = after.slice(0, 7)

  let out = `Updating ${shortBefore}..${shortAfter}\nFast-forward\n`
  try {
    const stat = run(`git diff --stat ${before}..${after}`).trim()
    if (stat) out += stat + '\n'
  } catch {}
  try {
    const commits = run(`git log ${before}..${after} --oneline`).trim()
    if (commits) out += '\n' + commits
  } catch {}

  return out.trim()
}

let handler = async (m, { conn, text, isOwner }) => {
  if (!isOwner) {
    return m.reply('*[❗] Solo los dueños pueden usar este comando.*')
  }

  m.react = async emoji => {
    await conn.sendMessage(m.chat, {
      react: { text: emoji, key: m.key }
    })
  }

  await m.react('🕓')
  const backed = backupPreserveFiles()

  try {
    const stdout = gitPullHard()
    restorePreserveFiles(backed)
    const reply = stdout.trim()
    await conn.reply(m.chat, reply || '[✅] Actualización completada.', m, rcanal)
    await m.react('✅')
  } catch (error) {
    restorePreserveFiles(backed)
    console.error('Error ejecutando plugin owner-update.js:', error)
    const msg = error?.stderr?.toString?.() || error?.stdout?.toString?.() || error?.message || String(error)
    await m.reply(`*[❌] Error al actualizar.*\n\n\`\`\`${msg.slice(0, 1500)}\`\`\``)
    await m.react('❌')
  }
}

handler.help = ['update']
handler.tags = ['owner']
handler.command = ['update', 'actualizar', 'fix', 'fixed']
handler.rowner = true

export default handler
