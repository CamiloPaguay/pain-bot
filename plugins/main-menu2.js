let handler = async (m, { conn }) => {
  await conn.sendMessage(m.chat, { text: '👋 Hola Mundo' }, { quoted: m })
}

handler.command = ['menu', 'menus']

export default handler
