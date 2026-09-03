let handler = async (m, { conn, usedPrefix }) => {
  const menu = `
🔮 𝙈𝘼𝙔-𝘽𝙊𝙏 🔮

╭━━━━━━ ◜◌◝ ━━━━━━╮
│ 🖼️ *IMÁGENES*
│
├ • 🎨 _${usedPrefix}animg_ *<prompt>*
├ • 🐱 _${usedPrefix}cat_ *<texto>*
├ • 🖼️ _${usedPrefix}wall_ *<búsqueda>*
├ • 🖌️ _${usedPrefix}imgay_ *<foto + texto>*
├ • ✨ _${usedPrefix}hd_ *<imagen>*
├ • 📐 _${usedPrefix}resize_ *<imagen> <tamaño>*
│
╰━━━━━━ ◟◌◞ ━━━━━━╯
`
  await conn.sendMessage(m.chat, {
    text: menu,
    mentions: [m.sender]
  }, { quoted: m })
}

handler.command = ['imagenes']

export default handler