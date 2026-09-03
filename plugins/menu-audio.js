let handler = async (m, { conn, usedPrefix }) => {
  const menu = `
🔮 𝙈𝘼𝙔-𝘽𝙊𝙏 🔮

╭━━━━━━ ◜◌◝ ━━━━━━╮
│ 🎵 *AUDIO*
│
├ • 🐌 _${usedPrefix}slow_
├ • ⚡ _${usedPrefix}speed_
├ • 🎙️ _${usedPrefix}stt_ *<responder audio>*
├ • 🔊 _${usedPrefix}tts_ *<texto/responder>*
├ • 🎶 _${usedPrefix}play2_ *<canción>*
│
╰━━━━━━ ◟◌◞ ━━━━━━╯
`
  await conn.sendMessage(m.chat, {
    text: menu,
    mentions: [m.sender]
  }, { quoted: m })
}

handler.command = ['audio']

export default handler