let handler = async (m, { conn, usedPrefix }) => {
  const menu = `
🔮 𝙈𝘼𝙔-𝘽𝙊𝙏 🔮

📌 Hola, @usuario

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
