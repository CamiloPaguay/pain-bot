let handler = async (m, { conn, usedPrefix }) => {
  const menu = `
🔮 𝙈𝘼𝙔-𝘽𝙊𝙏 🔮

╭━━━━━━ ◜◌◝ ━━━━━━╮
│ 💰 *ECONOMÍA*
│
├ • 💵 _${usedPrefix}balance_
├ • 💵 _${usedPrefix}bal_
├ • 🪙 _${usedPrefix}coins_
├ • 🧩 _${usedPrefix}adivinanza_
├ • 🏦 _${usedPrefix}banco_
├ • 🏦 _${usedPrefix}bank_
├ • 🎲 _${usedPrefix}dado_
├ • 📅 _${usedPrefix}daily_
├ • 📅 _${usedPrefix}day_
├ • 🪙 _${usedPrefix}moneda_
├ • 🪙 _${usedPrefix}cara_
├ • 🪙 _${usedPrefix}sello_
├ • 🎣 _${usedPrefix}pescar_
├ • 🏃 _${usedPrefix}robar_
├ • 🏃 _${usedPrefix}rob_
├ • 🏃 _${usedPrefix}steal_
├ • 🎰 _${usedPrefix}ruleta_ *<apuesta>*
├ • 🎰 _${usedPrefix}slot_
├ • 🎰 _${usedPrefix}slots_
├ • 💰 _${usedPrefix}apostar_
├ • 🍀 _${usedPrefix}suerte_
├ • 🍀 _${usedPrefix}luck_
├ • 🔮 _${usedPrefix}fortuna_
├ • 💸 _${usedPrefix}transf_ *<@usuario> <cantidad>*
├ • 💼 _${usedPrefix}work_
├ • 💼 _${usedPrefix}trabajar_
├ • 💼 _${usedPrefix}trabajo_
├ • 🏆 _${usedPrefix}topcoins_
│
╰━━━━━━ ◟◌◞ ━━━━━━╯
`
  await conn.sendMessage(m.chat, {
    text: menu,
    mentions: [m.sender]
  }, { quoted: m })
}

handler.command = ['economia']

export default handler