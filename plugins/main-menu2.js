let handler = async (m, { conn, args, participants, isAdmin, isBotAdmin, isOwner, isPrems, usedPrefix, command }) => {
  try {
    return conn.sendMessage(m.chat, {
      text: '👋 Hola Mundo',
      contextInfo: {
        ...rcanal.contextInfo
      }
    }, { quoted: m })
  } catch (e) {
    console.error('Error en holamundo:', e)
    return conn.sendMessage(m.chat, {
      text: '[❌] Ocurrió un error al enviar el mensaje.',
      contextInfo: {
        ...rcanal.contextInfo
      }
    }, { quoted: m })
  }
}

handler.help = ['#holamundo']
handler.tags = ['fun']
handler.command = ['menu', 'menus']

export default handler
