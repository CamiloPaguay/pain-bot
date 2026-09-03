let handler = async (m, { conn }) => {
  await conn.sendMessage(m.chat, { text: '🔮 𝙈𝘼𝙔-𝘽𝙊𝙏 🔮

📌 *Hola,* @${m.sender.split('@')[0]}

╭━━━━━━ ◜◌◝ ━━━━━━╮
│ **< LISTA DE HERRAMIENTAS />**
│
│ 🛡️ *ANTI*
├ • 🚫 *${usedPrefix}antipalabra*
│
│ 🎵 *AUDIO*
├ • 🐌 *${usedPrefix}slow*
├ • ⚡ *${usedPrefix}speed*
├ • 🎙️ *${usedPrefix}stt* *<responder audio>*
├ • 🔊 *${usedPrefix}tts* *<texto / responder>*
├ • 🎶 *${usedPrefix}play2* *<canción>*
│
│ 🛠️ *HERRAMIENTAS*
├ • 🎙️ *${usedPrefix}stt* *<audio>*
├ • 🖼️ *${usedPrefix}imgay* *<foto + texto>*
├ • 🖌️ *${usedPrefix}sfimg* *<foto + texto>*
├ • 🎵 *${usedPrefix}ssimg* *<foto + título|artista>*
├ • 🎵 *${usedPrefix}spotimg* *<foto + título|artista>*
├ • 🔤 *${usedPrefix}text* *<imagen / sticker>*
├ • 🔤 *${usedPrefix}ocr* *<imagen / sticker>*
├ • ✨ *${usedPrefix}hd* *<imagen / sticker>*
├ • 📄 *${usedPrefix}pdf* *<imagen> <nombre>*
├ • 📐 *${usedPrefix}resize* *<imagen> <tamaño>*
├ • 🌐 *${usedPrefix}ip*
├ • 📡 *${usedPrefix}ipinfo*
├ • 🌎 *${usedPrefix}ipwhois*
├ • 🔎 *${usedPrefix}ip2*
├ • 📋 *${usedPrefix}whois*
├ • 🔍 *${usedPrefix}ipwhois2*
├ • 🕵️ *${usedPrefix}sherlock*
├ • 👁️ *${usedPrefix}osint*
├ • 🔎 *${usedPrefix}buscar*
├ • 🕵️ *${usedPrefix}stalk*
├ • 🎵 *${usedPrefix}tik* *<usuario>*
├ • 🌐 *${usedPrefix}webinfo*
├ • 🌐 *${usedPrefix}web*
├ • 📑 *${usedPrefix}pagina*
├ • 🔲 *${usedPrefix}ge* *<texto / enlace / imagen>*
├ • 📷 *${usedPrefix}leerqr* *<imagen>*
├ • 📄 *${usedPrefix}tepdf* *<texto / imagen> <nombre>*
│
│ 📥 *DESCARGAS*
├ • ▶️ *${usedPrefix}yt* *<búsqueda>*
├ • ☁️ *${usedPrefix}sc* *<búsqueda/url/número>*
├ • 🎵 *${usedPrefix}soundcloud* *<búsqueda>*
├ • 🎬 *${usedPrefix}video* *<búsqueda/url/número>*
├ • 📹 *${usedPrefix}ytmp4* *<enlace>*
├ • 🎼 *${usedPrefix}ly* *<canción>*
├ • 🔎 *${usedPrefix}scsearch* *<búsqueda>*
├ • 🔎 *${usedPrefix}scs* *<búsqueda>*
├ • 🖼️ *${usedPrefix}wall* *<búsqueda>*
├ • 🎵 *${usedPrefix}tiktok* *<búsqueda/link>*
│
│ 📥 *DOWNLOADER*
├ • 📘 *${usedPrefix}facebook* *<url>*
├ • 📘 *${usedPrefix}fb* *<url>*
├ • 📸 *${usedPrefix}instagram* *<url/búsqueda>*
├ • 📸 *${usedPrefix}ig* *<url/búsqueda>*
├ • 🔎 *${usedPrefix}igsearch* *<búsqueda>*
├ • 🔎 *${usedPrefix}igs* *<búsqueda>*
├ • 📌 *${usedPrefix}pinterest* *<búsqueda/link>*
├ • 🎵 *${usedPrefix}spotify* *<canción/link>*
├ • 🎵 *${usedPrefix}tiktok2* *<búsqueda/link>*
│
│ 🔎 *BÚSQUEDA*
├ • ▶️ *${usedPrefix}yt* *<búsqueda>*
├ • 🖼️ *${usedPrefix}imagen* *<texto>*
├ • 🎼 *${usedPrefix}ly* *<canción>*
├ • 🎵 *${usedPrefix}tiktok* *<búsqueda/link>*
├ • 🔍 *${usedPrefix}google* *<búsqueda>*
│
│ 💰 *ECONOMÍA*
├ • 💵 *${usedPrefix}balance*
├ • 💵 *${usedPrefix}bal*
├ • 🪙 *${usedPrefix}coins*
├ • 🧩 *${usedPrefix}adivinanza*
├ • 🏦 *${usedPrefix}banco*
├ • 🏦 *${usedPrefix}bank*
├ • 🎲 *${usedPrefix}dado*
├ • 📅 *${usedPrefix}daily*
├ • 📅 *${usedPrefix}day*
├ • 🪙 *${usedPrefix}moneda*
├ • 🪙 *${usedPrefix}cara*
├ • 🪙 *${usedPrefix}sello*
├ • 🎣 *${usedPrefix}pescar*
├ • 🏃 *${usedPrefix}robar*
├ • 🏃 *${usedPrefix}rob*
├ • 🏃 *${usedPrefix}steal*
├ • 🎰 *${usedPrefix}ruleta* *<apuesta>*
├ • 🎰 *${usedPrefix}slot*
├ • 🎰 *${usedPrefix}slots*
├ • 💰 *${usedPrefix}apostar*
├ • 🍀 *${usedPrefix}suerte*
├ • 🍀 *${usedPrefix}luck*
├ • 🔮 *${usedPrefix}fortuna*
├ • 💸 *${usedPrefix}transf* *<@usuario> <cantidad>*
├ • 💼 *${usedPrefix}work*
├ • 💼 *${usedPrefix}trabajar*
├ • 💼 *${usedPrefix}trabajo*
├ • 🏆 *${usedPrefix}topcoins*
│
│ 👑 *OWNER*
├ • 📢 *${usedPrefix}canalid*
├ • 📢 *${usedPrefix}getcanal*
├ • 📢 *${usedPrefix}newsletter*
├ • 🔌 *${usedPrefix}plugin* *<nombre.js>*
├ • 🚪 *${usedPrefix}exit*
├ • 🔗 *${usedPrefix}join* *<link>*
├ • 📂 *${usedPrefix}nameplugins*
├ • ✏️ *${usedPrefix}nameplugins* *<archivo> > <nuevo>*
├ • ⏱️ *${usedPrefix}one* *<tiempo>*
├ • 🔄 *${usedPrefix}replugin*
├ • 🔄 *${usedPrefix}restart*
├ • 👁️ *${usedPrefix}setvist* *<on/off>*
├ • 📢 *${usedPrefix}subme* *<mensaje>*
├ • 🔄 *${usedPrefix}update*
├ • 👨‍💻 *${usedPrefix}verplugin* *<nombre.js>*
├ • 🤖 *${usedPrefix}maxsubs* *<número>*
│
│ ℹ️ *INFO*
├ • 🆔 *${usedPrefix}id*
├ • 🆔 *${usedPrefix}getid*
├ • 👥 *${usedPrefix}infogrupo*
│
│ 🔞 *NSFW*
├ • 🔞 *${usedPrefix}hentai* *<búsqueda/url>*
├ • 🔞 *${usedPrefix}corean*
├ • 🔞 *${usedPrefix}coreanas*
├ • 🔞 *${usedPrefix}girls*
├ • 🔞 *${usedPrefix}girls18*
├ • 🔞 *${usedPrefix}neko*
├ • 🔞 *${usedPrefix}tetas*
├ • 🔞 *${usedPrefix}tch*
├ • 🔞 *${usedPrefix}ts*
├ • 🔞 *${usedPrefix}tik18*
├ • 🔞 *${usedPrefix}tk18*
├ • 🔞 *${usedPrefix}tk*
├ • 🔞 *${usedPrefix}waifu*
├ • 🔞 *${usedPrefix}waifu2*
├ • 🔞 *${usedPrefix}xnxx* *<búsqueda>*
├ • 🔞 *${usedPrefix}xvideos* *<búsqueda>*
│
│ 🤖 *IA*
├ • 🎨 *${usedPrefix}animg* *<prompt>*
├ • 🧠 *${usedPrefix}deep* *<texto>*
├ • 🤖 *${usedPrefix}copilot* *<texto>*
├ • 🤖 *${usedPrefix}kora* *<texto>*
├ • 🤖 *${usedPrefix}replia* *<texto>*
├ • 🌐 *${usedPrefix}traduc* *<respuesta>*
│
│ 🖼️ *IMÁGENES*
├ • 🎨 *${usedPrefix}animg* *<prompt>*
├ • 🐱 *${usedPrefix}cat* *<texto>*
├ • 🖼️ *${usedPrefix}wall* *<búsqueda>*
│
│ 🎭 *FUN*
├ • 🖼️ *${usedPrefix}imgay* *<foto + texto>*
├ • 😂 *${usedPrefix}meme*
├ • 🏳️‍🌈 *${usedPrefix}sgay* *<foto + texto>*
├ • 🐴 *${usedPrefix}topburros*
├ • 🏆 *${usedPrefix}top* *<nombre>|<emoji>*
├ • 🏳️‍🌈 *${usedPrefix}topgays*
├ • 🎓 *${usedPrefix}topotakus*
├ • 💕 *${usedPrefix}topparejas*
├ • 💔 *${usedPrefix}topinfieles*
├ • 🥰 *${usedPrefix}toplindos*
├ • 😎 *${usedPrefix}topmachos*
├ • 🤪 *${usedPrefix}topfeos*
├ • 🤣 *${usedPrefix}topfracasados*
├ • 🧑‍💻 *${usedPrefix}topingenieros*
├ • 🫶 *${usedPrefix}topfieles*
├ • 🏳️‍🌈 *${usedPrefix}topfemboys*
├ • 🦾 *${usedPrefix}topmancos*
├ • 😏 *${usedPrefix}toppajeros*
├ • 🏳️‍⚧️ *${usedPrefix}toptransexuales*
│
│ 👥 *GRUPOS*
├ • 👥 *${usedPrefix}infogrupo*
├ • 📢 *${usedPrefix}hidetag*
├ • 👋 *${usedPrefix}bienvenidas*
├ • 🤖 *${usedPrefix}modosub*
├ • 🤖 *${usedPrefix}modosub* *<n>*
├ • 🤖 *${usedPrefix}modosub* *all*
│
│ 🤖 *SUBBOTS*
├ • 🤖 *${usedPrefix}modosub*
├ • 🔄 *${usedPrefix}reconnectbots*
├ • 📱 *${usedPrefix}qr*
├ • 🔢 *${usedPrefix}code*
├ • 🤖 *${usedPrefix}bots*
├ • 🤖 *${usedPrefix}subbots*
├ • 📋 *${usedPrefix}listbots*
├ • ℹ️ *${usedPrefix}info*
├ • 🤖 *${usedPrefix}infobot*
├ • 🔢 *${usedPrefix}maxsubs* *<número>*
│
│ 👤 *PERFILES*
├ • 🎂 *${usedPrefix}allbirthdays*
├ • 🎂 *${usedPrefix}allbirths*
├ • 🎂 *${usedPrefix}birthdays*
├ • 🎂 *${usedPrefix}cumpleaños*
├ • 🎂 *${usedPrefix}births*
├ • 🗑️ *${usedPrefix}delbirth* *<fecha>*
├ • 🚻 *${usedPrefix}delgenre*
├ • 👤 *${usedPrefix}profile* *[@mención]*
├ • 👤 *${usedPrefix}perfil* *[@mención]*
├ • 🎂 *${usedPrefix}setbirth* *<fecha>*
├ • 📝 *${usedPrefix}setdescription* *<descripción>*
├ • ⭐ *${usedPrefix}setfav* *<personaje>*
├ • 🚻 *${usedPrefix}setgenre* *<Hombre/Mujer>*
├ • ✏️ *${usedPrefix}setname* *<nuevo nombre>*
│
│ 🎲 *JUEGOS*
├ • 🧩 *${usedPrefix}adivinanza*
├ • 💣 *${usedPrefix}bomba* *<@usuario> <apuesta>*
├ • 🏦 *${usedPrefix}banco*
├ • 🎲 *${usedPrefix}dado*
├ • 💰 *${usedPrefix}daily*
├ • ❌⭕ *${usedPrefix}michi* *<@usuario>*
├ • ⛏️ *${usedPrefix}miner* *<@usuario>*
├ • 🪙 *${usedPrefix}moneda*
├ • 🪙 *${usedPrefix}cara*
├ • 🪙 *${usedPrefix}sello*
├ • 🎣 *${usedPrefix}pescar*
├ • 🏃 *${usedPrefix}robar*
├ • 🎰 *${usedPrefix}ruleta*
├ • 🎰 *${usedPrefix}slot*
├ • 🍀 *${usedPrefix}suerte*
├ • 🔮 *${usedPrefix}fortuna*
├ • 💼 *${usedPrefix}work*
├ • 🎁 *${usedPrefix}sorpresa*
│
│ ⚔️ *RPG*
├ • 🏦 *${usedPrefix}banco*
├ • 🏃 *${usedPrefix}robar*
├ • 🎁 *${usedPrefix}sorpresa*
├ • 🍀 *${usedPrefix}suerte*
├ • 🔮 *${usedPrefix}fortuna*
├ • 💼 *${usedPrefix}work*
│
│ 👥 *MULTIJUGADOR*
├ • 💣 *${usedPrefix}bomba* *<@usuario> <apuesta>*
├ • ❌⭕ *${usedPrefix}michi* *<@usuario>*
├ • ⛏️ *${usedPrefix}miner* *<@usuario>*
│
│ 🎮 *GAME*
├ • 🎁 *${usedPrefix}sorpresa*
│
│ 🏷️ *STICKERS*
├ • 🔎 *${usedPrefix}search-sticker* *<término>*
├ • 🖼️ *${usedPrefix}toimg*
├ • 🗑️ *${usedPrefix}delstickermeta*
├ • ✏️ *${usedPrefix}delmeta* *<nombre|autor>*
├ • ✏️ *${usedPrefix}remeta* *<nombre|autor>*
├ • ✏️ *${usedPrefix}take* *<nombre|autor>*
├ • 🏷️ *${usedPrefix}setmeta* *<pack | autor>*
├ • 🏳️‍🌈 *${usedPrefix}sgay* *<foto + texto>*
├ • 🎵 *${usedPrefix}sp* *<texto>*
├ • 💾 *${usedPrefix}sss* *<responder foto/video>*
├ • 🖼️ *${usedPrefix}sticker* *<imagen/video/link>*
├ • 🖼️ *${usedPrefix}s* *<imagen/video/link>*
├ • 🖼️ *${usedPrefix}stickers* *<imagen/video/link>*
├ • 💬 *${usedPrefix}sw* *<@mención> <texto>*
├ • 🎨 *${usedPrefix}st* *<texto>*
│
│ 🤖 *SERBOT*
├ • 👁️ *${usedPrefix}setautoread* *<on/off>*
├ • 🖼️ *${usedPrefix}setbotimg*
├ • ✏️ *${usedPrefix}setbotname*
│
│ ❤️ *REACCIONES*
├ • 🤗 *${usedPrefix}abrazo* *@user*
├ • 💋 *${usedPrefix}kiss* *@user*
├ • 👋 *${usedPrefix}slap* *@user*
│
│ 😂 *DIVERSIÓN*
├ • 💃 *${usedPrefix}dance*
├ • 💃 *${usedPrefix}danzar*
├ • 😡 *${usedPrefix}angry*
├ • 😡 *${usedPrefix}enojado*
├ • 😄 *${usedPrefix}alegre*
├ • 😄 *${usedPrefix}happy*
├ • 😂 *${usedPrefix}reir*
├ • 😂 *${usedPrefix}risa*
├ • 😢 *${usedPrefix}triste*
├ • 😢 *${usedPrefix}sad*
│
│ 🔎 *BUSCADOR*
├ • 🔞 *${usedPrefix}xnxx* *<búsqueda>*
├ • 🔞 *${usedPrefix}xvideos* *<búsqueda>*
│
╰━━━━━━ ◟◌◞ ━━━━━━╯
' }, { quoted: m })
}

handler.command = ['menu', 'tools']

export default handler
