let handler = async (m, { conn, usedPrefix }) => {
  const menu = `
🔮 𝙈𝘼𝙔-𝘽𝙊𝙏 🔮

╭━━━━━━ ◜◌◝ ━━━━━━╮
│ 🏷️ *STICKERS*
│
├ • 🔎 _${usedPrefix}search-sticker_ *<término>*
├ • 🖼️ _${usedPrefix}toimg_
├ • 🗑️ _${usedPrefix}delstickermeta_
├ • ✏️ _${usedPrefix}delmeta_ *<nombre|autor>*
├ • ✏️ _${usedPrefix}remeta_ *<nombre|autor>*
├ • ✏️ _${usedPrefix}take_ *<nombre|autor>*
├ • 🏷️ _${usedPrefix}setmeta_ *<pack|autor>*
├ • 🏳️‍🌈 _${usedPrefix}sgay_ *<foto + texto>*
├ • 🎵 _${usedPrefix}sp_ *<texto>*
├ • 💾 _${usedPrefix}sss_ *<responder foto/video>*
├ • 🖼️ _${usedPrefix}sticker_ *<imagen/video/link>*
├ • 🖼️ _${usedPrefix}s_ *<imagen/video/link>*
├ • 💬 _${usedPrefix}sw_ *<@mención> <texto>*
├ • 🎨 _${usedPrefix}st_ *<texto>*
│
╰━━━━━━ ◟◌◞ ━━━━━━╯
`
  await conn.sendMessage(m.chat, {
    text: menu,
    mentions: [m.sender]
  }, { quoted: m })
}

handler.command = ['stickers']

export default handler