let handler = async (m, { conn, usedPrefix }) => {
  const menu = `
🔮 𝙈𝘼𝙔-𝘽𝙊𝙏 🔮

╭━━━━━━ ◜◌◝ ━━━━━━╮
│ 🔎 *BÚSQUEDA*
│
├ • ▶️ _${usedPrefix}yt_ *<búsqueda>*
├ • 🖼️ _${usedPrefix}imagen_ *<texto>*
├ • 🎼 _${usedPrefix}ly_ *<canción>*
├ • 🎵 _${usedPrefix}tiktok_ *<búsqueda/link>*
├ • 🔍 _${usedPrefix}google_ *<búsqueda>*
│
╰━━━━━━ ◟◌◞ ━━━━━━╯
`
  await conn.sendMessage(m.chat, {
    text: menu,
    mentions: [m.sender]
  }, { quoted: m })
}

handler.command = ['busqueda']

export default handler