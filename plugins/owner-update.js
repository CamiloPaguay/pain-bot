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

    if (current.trim() === desired.trim()) return

    fs.mkdirSync(path.dirname(sparseFile), { recursive: true })
    fs.writeFileSync(sparseFile, desired)
    runIgnore('git config core.sparseCheckout true')
    runIgnore('git read-tree -mu HEAD')
  } catch (e) {
    console.error('No se pudo configurar sparse-checkout:', e)
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
    remoteHash = run(`git rev-parse
