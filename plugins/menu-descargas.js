let handler = async (m, { conn, usedPrefix }) => {
  const menu = `
🔮 𝙈𝘼𝙔-𝘽𝙊𝙏 🔮

╭━━━━━━ ◜◌◝ ━━━━━━╮
│ 📥 *DESCARGAS*
│
├ • ▶️ _${usedPrefix}yt_ *<búsqueda>*
├  • 📘 _${usedPrefix}facebook_ *<url>*
├  • 📘 _${usedPrefix}fb_ *<url>*
├  • 📸 _${usedPrefix}instagram_ *<url/búsqueda>*
├  • 📸 _${usedPrefix}ig_ *<url/búsqueda>*
├   • 🔎 _${usedPrefix}igsearch_ *<búsqueda>*
├   • 🔎 _${usedPrefix}igs_ *<búsqueda>*
├   • 📌 _${usedPrefix}pinterest_ *<búsqueda/link>*
├   • 🎵 _${usedPrefix}spotify_ *<canción/link>*
├   • 🎵 _${usedPrefix}tiktok2_ *<búsqueda/link>*
├ • ☁️ _${usedPrefix}sc_ *<búsqueda/url/número>*
├ • 🎵 _${usedPrefix}soundcloud_ *<búsqueda>*
├ • 🎬 _${usedPrefix}video_ *<búsqueda/url/número>*
├ • 📹 _${usedPrefix}ytmp4_ *<enlace>*
├ • 🎼 _${usedPrefix}ly_ *<canción>*
├ • 🔎 _${usedPrefix}scsearch_ *<búsqueda>*
├ • 🔎 _${usedPrefix}scs_ *<búsqueda>*
├ • 🖼️ _${usedPrefix}wall_ *<búsqueda>*
├ • 🎵 _${usedPrefix}tiktok_ *<búsqueda/link>*
│
╰━━━━━━ ◟◌◞ ━━━━━━╯
`
  await conn.sendMessage(m.chat, {
    text: menu,
    mentions: [m.sender]
  }, { quoted: m })
}

handler.command = ['descargas']

export default handler