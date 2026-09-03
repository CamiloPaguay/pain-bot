let handler = async (m, { conn, usedPrefix }) => {
  const menu = `
🔮 𝙈𝘼𝙔-𝘽𝙊𝙏 🔮

📌 *Hola,* @${m.sender.split('@')[0]}

╭━━━━━━ ◜◌◝ ━━━━━━╮
│ _*< MENÚ PRINCIPAL />*_
│
├ • 🛠️ _${usedPrefix}tools_
├ • 🎵 _${usedPrefix}audio_
├ • 📥 _${usedPrefix}descargas_
├ • 📱 _${usedPrefix}downloader_
├ • 🔎 _${usedPrefix}busqueda_
├ • 💰 _${usedPrefix}economia_
├ • 🤖 _${usedPrefix}ia_
├ • 🖼️ _${usedPrefix}imagenes_
├ • 🎭 _${usedPrefix}fun_
├ • 🎮 _${usedPrefix}juegos_
├ • 👥 _${usedPrefix}grupos_
├ • 🤖 _${usedPrefix}subbots_
├ • 👤 _${usedPrefix}perfiles_
├ • 🏷️ _${usedPrefix}stickers_
├ • ❤️ _${usedPrefix}reacciones_
├ • 😂 _${usedPrefix}diversion_
├ • 🔞 _${usedPrefix}nsfw_
├ • ℹ️ _${usedPrefix}info_
├ • 👑 _${usedPrefix}owner_
│
╰━━━━━━ ◟◌◞ ━━━━━━╯
`

  await conn.sendMessage(m.chat, {
    text: menu,
    mentions: [m.sender]
  }, { quoted: m })
}

handler.command = ['menu', 'tools']

export default handler
