let handler = async (m, { conn, usedPrefix }) => {
  const menu = `
🔮 𝙈𝘼𝙔-𝘽𝙊𝙏 🔮

╭━━━━━━ ◜◌◝ ━━━━━━╮
│ ❤️ *REACCIONES*
│
├ • 🤗 _${usedPrefix}abrazo_ *@user*
├ • 💋 _${usedPrefix}kiss_ *@user*
├ • 👋 _${usedPrefix}slap_ *@user*
│
╰━━━━━━ ◟◌◞ ━━━━━━╯
`
  await conn.sendMessage(m.chat, {
    text: menu,
    mentions: [m.sender]
  }, { quoted: m })
}

handler.command = ['reacciones']

export default handler