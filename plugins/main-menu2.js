let handler = async (m, { conn }) => {
  const plugins = Object.values(global.plugins || {}).filter(p => p && !p.disabled)

  const categorias = {}
  for (const plugin of plugins) {
    const tags = plugin.tags || ['otros']
    const comandos = plugin.help || []
    if (comandos.length === 0) continue

    for (const tag of tags) {
      if (!categorias[tag]) categorias[tag] = []
      categorias[tag].push(...comandos)
    }
  }

  let txt = '🛠️ *Lista de herramientas del bot*\n\n'

  for (const [tag, comandos] of Object.entries(categorias)) {
    txt += `╭─「 *${tag.toUpperCase()}* 」\n`
    comandos.forEach(cmd => {
      txt += `│ ➤ ${cmd}\n`
    })
    txt += `╰────────────\n\n`
  }

  await conn.sendMessage(m.chat, { text: txt.trim() }, { quoted: m })
}

handler.command = ['tools', 'herramientas', 'plugins']

export default handler
