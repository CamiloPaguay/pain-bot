let handler = async (m, { conn, usedPrefix }) => {
  const menu = `
╭━━━━━━ ◜◌◝ ━━━━━━╮
│ ✨ *MENÚ PRINCIPAL*
│
├ • 🛠️ .tools
├ • 🎵 .audio
├ • 📥 .descargas
├ • 💰 .economia
├ • 🎮 .juegos
├ • 🤖 .ia
├ • 🖼️ .imagenes
├ • 🎭 .fun
├ • 👥 .grupos
├ • 🤖 .subbots
├ • 👤 .perfil
├ • 🏷️ .stickers
├ • ❤️ .reacciones
├ • 😂 .diversion
├ • 👑 .owner
│
╰━━━━━━ ◟◌◞ ━━━━━━╯
`

  await conn.sendMessage(
    m.chat,
    {
      text: menu,
      mentions: [m.sender]
    },
    { quoted: m }
  )
}

handler.command = ['menu', 'tools']

export default handler
