import fetch from "node-fetch"
import yts from "yt-search"

const handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) {
    return conn.sendMessage(m.chat, {
      text: `[❗] Uso incorrecto.\n> *Ejemplo:* ${usedPrefix}play2 <canción>`,
      contextInfo: {
        ...rcanal.contextInfo
      }
    }, { quoted: m })
  }

  try {
    const search = await yts(text)
    if (!search || !search.videos || search.videos.length === 0) {
      return conn.sendMessage(m.chat, {
        text: `[❗] No se encontró resultados para: ${text}`,
        contextInfo: {
          ...rcanal.contextInfo
        }
      }, { quoted: m })
    }

    const video = search.videos[0]

    const downloadApi = `https://api.delirius.online/download/ytmp3?url=${encodeURIComponent(video.url)}`
    const dres = await fetch(downloadApi).then(r => r.json())

    if (!dres?.status || !dres.data) {
      return conn.sendMessage(m.chat, {
        text: `[❌] No se pudo descargar el audio.`,
        contextInfo: {
          ...rcanal.contextInfo
        }
      }, { quoted: m })
    }

    const audioUrl = typeof dres.data.download === "string" ? dres.data.download : dres.data.download?.url

    if (!audioUrl) {
      return conn.sendMessage(m.chat, {
        text: `[❌] No se encontró la URL del audio.`,
        contextInfo: {
          ...rcanal.contextInfo
        }
      }, { quoted: m })
    }

    await conn.sendMessage(m.chat, {
      audio: { url: audioUrl },
      mimetype: "audio/mpeg",
      ptt: false
    }, { quoted: m })

  } catch (e) {
    console.error('Error en play2:', e)
    await conn.sendMessage(m.chat, {
      text: `[❌] *Error:* ${e.message}`,
      contextInfo: {
        ...rcanal.contextInfo
      }
    }, { quoted: m })
  }
}

handler.command = ["play2"]
handler.tags = ["descargas"]
handler.group = true

export default handler
