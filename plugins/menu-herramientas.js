let handler = async (m, { conn, usedPrefix }) => {
  const menu = `
🔮 𝙈𝘼𝙔-𝘽𝙊𝙏 🔮

╭━━━━━━ ◜◌◝ ━━━━━━╮
│ 🛠️ *HERRAMIENTAS*
│
├ • 🔤 _${usedPrefix}text_ *<imagen/sticker>*
├ • 🔤 _${usedPrefix}ocr_ *<imagen/sticker>*
├ • ✨ _${usedPrefix}hd_ *<imagen/sticker>*
├ • 📄 _${usedPrefix}pdf_ *<imagen> <nombre>*
├ • 📐 _${usedPrefix}resize_ *<imagen> <tamaño>*
├ • 🖼️ _${usedPrefix}imgay_ *<foto + texto>*
├ • 🖌️ _${usedPrefix}sfimg_ *<foto + texto>*
├ • 🎵 _${usedPrefix}ssimg_ *<foto + título|artista>*
├ • 🎵 _${usedPrefix}spotimg_ *<foto + título|artista>*
├ • 🌐 _${usedPrefix}ip_
├ • 📡 _${usedPrefix}ipinfo_
├ • 🌎 _${usedPrefix}ipwhois_
├ • 🔎 _${usedPrefix}ip2_
├ • 📋 _${usedPrefix}whois_
├ • 🔍 _${usedPrefix}ipwhois2_
├ • 🕵️ _${usedPrefix}sherlock_
├ • 👁️ _${usedPrefix}osint_
├ • 🔎 _${usedPrefix}buscar_
├ • 🕵️ _${usedPrefix}stalk_
├ • 🎵 _${usedPrefix}tik_ *<usuario>*
├ • 🌐 _${usedPrefix}webinfo_
├ • 🌐 _${usedPrefix}web_
├ • 📑 _${usedPrefix}pagina_
├ • 🔲 _${usedPrefix}ge_ *<texto/enlace/imagen>*
├ • 📷 _${usedPrefix}leerqr_ *<imagen>*
├ • 📄 _${usedPrefix}tepdf_ *<texto/imagen> <nombre>*
│
╰━━━━━━ ◟◌◞ ━━━━━━╯
`
  await conn.sendMessage(m.chat, {
    text: menu,
    mentions: [m.sender]
  }, { quoted: m })
}

handler.command = ['tools']

export default handler
