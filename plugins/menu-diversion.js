let handler = async (m, { conn, usedPrefix }) => {
  const menu = `
🔮 𝙈𝘼𝙔-𝘽𝙊𝙏 🔮

╭━━━━━━ ◜◌◝ ━━━━━━╮
│ 😂 *DIVERSIÓN*
│
├ • 💃 _${usedPrefix}dance_
├ • 💃 _${usedPrefix}danzar_
├ • 😡 _${usedPrefix}angry_
├ • 😡 _${usedPrefix}enojado_
├ • 😄 _${usedPrefix}alegre_
├ • 😄 _${usedPrefix}happy_
├ • 😂 _${usedPrefix}reir_
├ • 😂 _${usedPrefix}risa_
├ • 😢 _${usedPrefix}triste_
├ • 😢 _${usedPrefix}sad_
├ • 😂 _${usedPrefix}meme_
├ • 🏳️‍🌈 _${usedPrefix}sgay_ *<foto + texto>*
├ • 🐴 _${usedPrefix}topburros_
├ • 🏆 _${usedPrefix}top_ *<nombre>|<emoji>*
├ • 🏳️‍🌈 _${usedPrefix}topgays_
├ • 🎓 _${usedPrefix}topotakus_
├ • 💕 _${usedPrefix}topparejas_
├ • 💔 _${usedPrefix}topinfieles_
├ • 🥰 _${usedPrefix}toplindos_
├ • 😎 _${usedPrefix}topmachos_
├ • 🤪 _${usedPrefix}topfeos_
├ • 🤣 _${usedPrefix}topfracasados_
├ • 🧑‍💻 _${usedPrefix}topingenieros_
├ • 🫶 _${usedPrefix}topfieles_
├ • 🏳️‍🌈 _${usedPrefix}topfemboys_
├ • 🦾 _${usedPrefix}topmancos_
├ • 😏 _${usedPrefix}toppajeros_
├ • 🏳️‍⚧️ _${usedPrefix}toptransexuales_
│
╰━━━━━━ ◟◌◞ ━━━━━━╯
`
  await conn.sendMessage(m.chat, {
    text: menu,
    mentions: [m.sender]
  }, { quoted: m })
}

handler.command = ['diversion']

export default handler