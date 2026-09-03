let handler = async (m, { conn, usedPrefix }) => {
  const menu = `
🔮 𝙈𝘼𝙔-𝘽𝙊𝙏 🔮

╭━━━━━━ ◜◌◝ ━━━━━━╮
│ 👤 *PERFILES*
│
├ • 🎂 _${usedPrefix}allbirthdays_
├ • 🎂 _${usedPrefix}allbirths_
├ • 🎂 _${usedPrefix}birthdays_
├ • 🎂 _${usedPrefix}cumpleaños_
├ • 🎂 _${usedPrefix}births_
├ • 🗑️ _${usedPrefix}delbirth_ *<fecha>*
├ • 🚻 _${usedPrefix}delgenre_
├ • 👤 _${usedPrefix}profile_ *[@mención]*
├ • 👤 _${usedPrefix}perfil_ *[@mención]*
├ • 🎂 _${usedPrefix}setbirth_ *<fecha>*
├ • 📝 _${usedPrefix}setdescription_ *<descripción>*
├ • ⭐ _${usedPrefix}setfav_ *<personaje>*
├ • 🚻 _${usedPrefix}setgenre_ *<Hombre/Mujer>*
├ • ✏️ _${usedPrefix}setname_ *<nuevo nombre>*
│
╰━━━━━━ ◟◌◞ ━━━━━━╯
`
  await conn.sendMessage(m.chat, {
    text: menu,
    mentions: [m.sender]
  }, { quoted: m })
}

handler.command = ['perfiles']

export default handler