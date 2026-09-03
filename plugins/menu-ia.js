let handler = async (m, { conn, usedPrefix }) => {
  const menu = `
🔮 𝙈𝘼𝙔-𝘽𝙊𝙏 🔮

╭━━━━━━ ◜◌◝ ━━━━━━╮
│ 🤖 *INTELIGENCIA*
│
├ • 🎨 _${usedPrefix}animg_ *<prompt>*
├ • 🧠 _${usedPrefix}deep_ *<texto>*
├ • 🤖 _${usedPrefix}copilot_ *<texto>*
├ • 🤖 _${usedPrefix}kora_ *<texto>*
├ • 🤖 _${usedPrefix}replia_ *<texto>*
├ • 🌐 _${usedPrefix}traduc_ *<respuesta>*
│
╰━━━━━━ ◟◌◞ ━━━━━━╯
`
  await conn.sendMessage(m.chat, {
    text: menu,
    mentions: [m.sender]
  }, { quoted: m })
}

handler.command = ['ia']

export default handler