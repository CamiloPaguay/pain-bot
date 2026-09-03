let handler = async (m, { conn, usedPrefix }) => {
  const menu = `
🔮 𝙈𝘼𝙔-𝘽𝙊𝙏 🔮

╭━━━━━━ ◜◌◝ ━━━━━━╮
│ 🎮 *JUEGOS*
│
├ • 🧩 _${usedPrefix}adivinanza_
├ • 💣 _${usedPrefix}bomba_ *<@usuario> <apuesta>*
├ • 🎲 _${usedPrefix}dado_
├ • 📅 _${usedPrefix}daily_
├ • ❌⭕ _${usedPrefix}michi_ *<@usuario>*
├ • ⛏️ _${usedPrefix}miner_ *<@usuario>*
├ • 🪙 _${usedPrefix}moneda_
├ • 🪙 _${usedPrefix}cara_
├ • 🪙 _${usedPrefix}sello_
├ • 🎣 _${usedPrefix}pescar_
├ • 🏃 _${usedPrefix}robar_
├ • 🎰 _${usedPrefix}ruleta_
├ • 🎰 _${usedPrefix}slot_
├ • 🍀 _${usedPrefix}suerte_
├ • 🔮 _${usedPrefix}fortuna_
├ • 💼 _${usedPrefix}work_
├ • 🎁 _${usedPrefix}sorpresa_
│
╰━━━━━━ ◟◌◞ ━━━━━━╯
`
  await conn.sendMessage(m.chat, {
    text: menu,
    mentions: [m.sender]
  }, { quoted: m })
}

handler.command = ['juegos']

export default handler