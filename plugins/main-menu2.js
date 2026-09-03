let handler = async (m, { conn, usedPrefix }) => {
  const menu = `
🔮 𝙈𝘼𝙔-𝘽𝙊𝙏 🔮

📌 *Hola,* @${m.sender.split('@')[0]}

╭━━━━━━ ◜◌◝ ━━━━━━╮
│ _*< LISTA DE HERRAMIENTAS />*_
│
│ 🛡️ *ANTI*
├ • 🚫 _${usedPrefix}antipalabra_
│
│ 🎵 *AUDIO*
├ • 🐌 _${usedPrefix}slow_
├ • ⚡ _${usedPrefix}speed_
├ • 🎙️ _${usedPrefix}stt_ *<responder audio>*
├ • 🔊 _${usedPrefix}tts_ *<texto / responder>*
├ • 🎶 _${usedPrefix}play2_ *<canción>*
│
│ 🛠️ *HERRAMIENTAS*
├ • 🖼️ _${usedPrefix}imgay_ *<foto + texto>*
├ • 🖌️ _${usedPrefix}sfimg_ *<foto + texto>*
├ • 🎵 _${usedPrefix}ssimg_ *<foto + título|artista>*
├ • 🎵 _${usedPrefix}spotimg_ *<foto + título|artista>*
├ • 🔤 _${usedPrefix}text_ *<imagen / sticker>*
├ • 🔤 _${usedPrefix}ocr_ *<imagen / sticker>*
├ • ✨ _${usedPrefix}hd_ *<imagen / sticker>*
├ • 📄 _${usedPrefix}pdf_ *<imagen> <nombre>*
├ • 📐 _${usedPrefix}resize_ *<imagen> <tamaño>*
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
├ • 🔲 _${usedPrefix}ge_ *<texto / enlace / imagen>*
├ • 📷 _${usedPrefix}leerqr_ *<imagen>*
├ • 📄 _${usedPrefix}tepdf_ *<texto / imagen> <nombre>*
│
│ 📥 *DESCARGAS*
├ • ▶️ _${usedPrefix}yt_ *<búsqueda>*
├ • ☁️ _${usedPrefix}sc_ *<búsqueda/url/número>*
├ • 🎵 _${usedPrefix}soundcloud_ *<búsqueda>*
├ • 🎬 _${usedPrefix}video_ *<búsqueda/url/número>*
├ • 📹 _${usedPrefix}ytmp4_ *<enlace>*
├ • 🎼 _${usedPrefix}ly_ *<canción>*
├ • 🔎 _${usedPrefix}scsearch_ *<búsqueda>*
├ • 🔎 _${usedPrefix}scs_ *<búsqueda>*
├ • 🖼️ _${usedPrefix}wall_ *<búsqueda>*
├ • 🎵 _${usedPrefix}tiktok_ *<búsqueda/link>*
│
│ 📥 *DOWNLOADER*
├ • 📘 _${usedPrefix}facebook_ *<url>*
├ • 📘 _${usedPrefix}fb_ *<url>*
├ • 📸 _${usedPrefix}instagram_ *<url/búsqueda>*
├ • 📸 _${usedPrefix}ig_ *<url/búsqueda>*
├ • 🔎 _${usedPrefix}igsearch_ *<búsqueda>*
├ • 🔎 _${usedPrefix}igs_ *<búsqueda>*
├ • 📌 _${usedPrefix}pinterest_ *<búsqueda/link>*
├ • 🎵 _${usedPrefix}spotify_ *<canción/link>*
├ • 🎵 _${usedPrefix}tiktok2_ *<búsqueda/link>*
│
│ 🔎 *BÚSQUEDA*
├ • ▶️ _${usedPrefix}yt_ *<búsqueda>*
├ • 🖼️ _${usedPrefix}imagen_ *<texto>*
├ • 🎼 _${usedPrefix}ly_ *<canción>*
├ • 🎵 _${usedPrefix}tiktok_ *<búsqueda/link>*
├ • 🔍 _${usedPrefix}google_ *<búsqueda>*
│
│ 💰 *ECONOMÍA*
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
│ 👑 *OWNER*
├ • 📢 _${usedPrefix}canalid_
├ • 📢 _${usedPrefix}getcanal_
├ • 📢 _${usedPrefix}newsletter_
├ • 🔌 _${usedPrefix}plugin_ *<nombre.js>*
├ • 🚪 _${usedPrefix}exit_
├ • 🔗 _${usedPrefix}join_ *<link>*
├ • 📂 _${usedPrefix}nameplugins_
├ • ✏️ _${usedPrefix}nameplugins_ *<archivo> > <nuevo>*
├ • ⏱️ _${usedPrefix}one_ *<tiempo>*
├ • 🔄 _${usedPrefix}replugin_
├ • 🔄 _${usedPrefix}restart_
├ • 👁️ _${usedPrefix}setvist_ *<on/off>*
├ • 📢 _${usedPrefix}subme_ *<mensaje>*
├ • 🔄 _${usedPrefix}update_
├ • 👨‍💻 _${usedPrefix}verplugin_ *<nombre.js>*
├ • 🤖 _${usedPrefix}maxsubs_ *<número>*
│
│ ℹ️ *INFO*
├ • 🆔 _${usedPrefix}id_
├ • 🆔 _${usedPrefix}getid_
├ • 👥 _${usedPrefix}infogrupo_
│
│ 🔞 *NSFW*
├ • 🔞 _${usedPrefix}hentai_ *<búsqueda/url>*
├ • 🔞 _${usedPrefix}corean_
├ • 🔞 _${usedPrefix}coreanas_
├ • 🔞 _${usedPrefix}girls_
├ • 🔞 _${usedPrefix}girls18_
├ • 🔞 _${usedPrefix}neko_
├ • 🔞 _${usedPrefix}tetas_
├ • 🔞 _${usedPrefix}tch_
├ • 🔞 _${usedPrefix}ts_
├ • 🔞 _${usedPrefix}tik18_
├ • 🔞 _${usedPrefix}tk18_
├ • 🔞 _${usedPrefix}tk_
├ • 🔞 _${usedPrefix}waifu_
├ • 🔞 _${usedPrefix}waifu2_
├ • 🔞 _${usedPrefix}xnxx_ *<búsqueda>*
├ • 🔞 _${usedPrefix}xvideos_ *<búsqueda>*
│
│ 🤖 *IA*
├ • 🎨 _${usedPrefix}animg_ *<prompt>*
├ • 🧠 _${usedPrefix}deep_ *<texto>*
├ • 🤖 _${usedPrefix}copilot_ *<texto>*
├ • 🤖 _${usedPrefix}kora_ *<texto>*
├ • 🤖 _${usedPrefix}replia_ *<texto>*
├ • 🌐 _${usedPrefix}traduc_ *<respuesta>*
│
│ 🖼️ *IMÁGENES*
├ • 🎨 _${usedPrefix}animg_ *<prompt>*
├ • 🐱 _${usedPrefix}cat_ *<texto>*
├ • 🖼️ _${usedPrefix}wall_ *<búsqueda>*
│
│ 🎭 *FUN*
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
│ 👥 *GRUPOS*
├ • 👥 _${usedPrefix}infogrupo_
├ • 📢 _${usedPrefix}hidetag_
├ • 👋 _${usedPrefix}bienvenidas_
├ • 🤖 _${usedPrefix}modosub_
├ • 🤖 _${usedPrefix}modosub_ *<n>*
├ • 🤖 _${usedPrefix}modosub_ *all*
│
│ 🤖 *SUBBOTS*
├ • 🔄 _${usedPrefix}reconnectbots_
├ • 📱 _${usedPrefix}qr_
├ • 🔢 _${usedPrefix}code_
├ • 🤖 _${usedPrefix}bots_
├ • 🤖 _${usedPrefix}subbots_
├ • 📋 _${usedPrefix}listbots_
├ • ℹ️ _${usedPrefix}info_
├ • 🤖 _${usedPrefix}infobot_
├ • 🔢 _${usedPrefix}maxsubs_ *<número>*
│
│ 👤 *PERFILES*
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
│ 🎲 *JUEGOS*
├ • 🧩 _${usedPrefix}adivinanza_
├ • 💣 _${usedPrefix}bomba_ *<@usuario> <apuesta>*
├ • 🎲 _${usedPrefix}dado_
├ • 📅 _${usedPrefix}daily_
├ • ❌⭕ _${usedPrefix}michi_ *<@usuario>*
├ • ⛏️ _${usedPrefix}miner_ *<@usuario>*
├ • 🪙 _${usedPrefix}moneda_
├ • 🎣 _${usedPrefix}pescar_
├ • 🏃 _${usedPrefix}robar_
├ • 🎰 _${usedPrefix}ruleta_
├ • 🎰 _${usedPrefix}slot_
├ • 🍀 _${usedPrefix}suerte_
├ • 🔮 _${usedPrefix}fortuna_
├ • 💼 _${usedPrefix}work_
├ • 🎁 _${usedPrefix}sorpresa_
│
│ ⚔️ *RPG*
├ • 🏦 _${usedPrefix}banco_
├ • 🏃 _${usedPrefix}robar_
├ • 🎁 _${usedPrefix}sorpresa_
├ • 🍀 _${usedPrefix}suerte_
├ • 🔮 _${usedPrefix}fortuna_
├ • 💼 _${usedPrefix}work_
│
│ 👥 *MULTIJUGADOR*
├ • 💣 _${usedPrefix}bomba_ *<@usuario> <apuesta>*
├ • ❌⭕ _${usedPrefix}michi_ *<@usuario>*
├ • ⛏️ _${usedPrefix}miner_ *<@usuario>*
│
│ 🎮 *GAME*
├ • 🎁 _${usedPrefix}sorpresa_
│
│ 🏷️ *STICKERS*
├ • 🔎 _${usedPrefix}search-sticker_ *<término>*
├ • 🖼️ _${usedPrefix}toimg_
├ • 🗑️ _${usedPrefix}delstickermeta_
├ • ✏️ _${usedPrefix}delmeta_ *<nombre|autor>*
├ • ✏️ _${usedPrefix}remeta_ *<nombre|autor>*
├ • ✏️ _${usedPrefix}take_ *<nombre|autor>*
├ • 🏷️ _${usedPrefix}setmeta_ *<pack | autor>*
├ • 🏳️‍🌈 _${usedPrefix}sgay_ *<foto + texto>*
├ • 🎵 _${usedPrefix}sp_ *<texto>*
├ • 💾 _${usedPrefix}sss_ *<responder foto/video>*
├ • 🖼️ _${usedPrefix}sticker_ *<imagen/video/link>*
├ • 🖼️ _${usedPrefix}s_ *<imagen/video/link>*
├ • 🖼️ _${usedPrefix}stickers_ *<imagen/video/link>*
├ • 💬 _${usedPrefix}sw_ *<@mención> <texto>*
├ • 🎨 _${usedPrefix}st_ *<texto>*
│
│ 🤖 *SERBOT*
├ • 👁️ _${usedPrefix}setautoread_ *<on/off>*
├ • 🖼️ _${usedPrefix}setbotimg_
├ • ✏️ _${usedPrefix}setbotname_
│
│ ❤️ *REACCIONES*
├ • 🤗 _${usedPrefix}abrazo_ *@user*
├ • 💋 _${usedPrefix}kiss_ *@user*
├ • 👋 _${usedPrefix}slap_ *@user*
│
│ 😂 *DIVERSIÓN*
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
│
│ 🔎 *BUSCADOR*
├ • 🔞 _${usedPrefix}xnxx_ *<búsqueda>*
├ • 🔞 _${usedPrefix}xvideos_ *<búsqueda>*
│
╰━━━━━━ ◟◌◞ ━━━━━━╯
`

  await conn.sendMessage(
    m.chat,
    {
      text: menu,
      mentions: [m.sender]
    },
    { quoted: m }
  )
}

handler.command = ['menu', 'tools']

export default handler
