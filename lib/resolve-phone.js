/**
 * Resolución de número real (PN) desde LID / mensaje Baileys.
 * Prioridad según Baileys 7:
 * 1) número explícito (.code 521...)
 * 2) key.remoteJidAlt / key.participantAlt (PN que Baileys adjunta)
 * 3) signalRepository.lidMapping.getPNForLID(lid)
 * 4) participantes del grupo (phoneNumber / jid)
 * 5) mapeo ownerLid
 */

const VALID_COUNTRY_CODES = [
  '1', '7', '20', '27', '30', '31', '32', '33', '34', '36', '39', '40', '41', '43', '44', '45', '46', '47', '48', '49',
  '51', '52', '53', '54', '55', '56', '57', '58', '60', '61', '62', '63', '64', '65', '66', '81', '82', '84', '86', '90',
  '91', '92', '93', '94', '95', '98', '211', '212', '213', '216', '218', '220', '221', '222', '223', '224', '225', '226',
  '227', '228', '229', '230', '231', '232', '233', '234', '235', '236', '237', '238', '239', '240', '241', '242', '243',
  '244', '245', '246', '248', '249', '250', '251', '252', '253', '254', '255', '256', '257', '258', '260', '261', '262',
  '263', '264', '265', '266', '267', '268', '269', '290', '291', '297', '298', '299', '350', '351', '352', '353', '354',
  '355', '356', '357', '358', '359', '370', '371', '372', '373', '374', '375', '376', '377', '378', '379', '380', '381',
  '382', '383', '385', '386', '387', '389', '420', '421', '423', '500', '501', '502', '503', '504', '505', '506', '507',
  '508', '509', '590', '591', '592', '593', '594', '595', '596', '597', '598', '599', '670', '672', '673', '674', '675',
  '676', '677', '678', '679', '680', '681', '682', '683', '685', '686', '687', '688', '689', '690', '691', '692', '850',
  '852', '853', '855', '856', '880', '886', '960', '961', '962', '963', '964', '965', '966', '967', '968', '970', '971',
  '972', '973', '974', '975', '976', '977', '978', '979', '992', '993', '994', '995', '996', '998'
]

export function isValidWhatsAppPhone(numero = '') {
  const n = String(numero).replace(/\D/g, '')
  const len = n.length
  if (len < 8 || len > 13) return false
  if (len > 10 && n.startsWith('9')) return false
  return VALID_COUNTRY_CODES.some((codigo) => n.startsWith(codigo))
}

export function isKnownLid(digits = '') {
  const n = String(digits).replace(/\D/g, '')
  if (!n) return false

  for (const [lid] of global.ownerLid || []) {
    if (String(lid).replace(/\D/g, '') === n) return true
  }

  
  return n.length >= 14
}

export function normalizePhoneNumber(phone = '') {
  let digits = String(phone).replace(/\D/g, '')
  if (!digits) return null

  
  if (digits.includes(':')) digits = digits.split(':')[0]
  digits = digits.replace(/^0+/, '')

  
  if (digits.startsWith('521') && digits.length >= 12 && digits.length <= 13) {
    
  } else if (digits.startsWith('52') && !digits.startsWith('521') && digits.length === 12) {
    digits = `521${digits.slice(2)}`
  }

  if (!digits || !isValidWhatsAppPhone(digits)) return null
  return digits
}

function decodeMaybe(conn, jid) {
  if (!jid) return ''
  try {
    return conn?.decodeJid?.(jid) || String(jid)
  } catch {
    return String(jid)
  }
}

function sameJidUser(a, b) {
  if (!a || !b) return false
  const na = String(a).split('@')[0].split(':')[0].replace(/\D/g, '')
  const nb = String(b).split('@')[0].split(':')[0].replace(/\D/g, '')
  return na.length > 5 && na === nb
}

function isPnJid(jid = '') {
  const j = String(jid)
  return j.endsWith('@s.whatsapp.net') || j.endsWith('@c.us') || j.endsWith('@hosted')
}

function isLidJid(jid = '') {
  const j = String(jid)
  return j.endsWith('@lid') || j.endsWith('@hosted.lid')
}

export function phoneFromJid(jid = '') {
  const decoded = String(jid || '').trim()
  if (!decoded.includes('@')) return null

  const userPart = decoded.split('@')[0].split(':')[0]
  const digits = userPart.replace(/\D/g, '')
  if (!digits || isKnownLid(digits)) return null

  if (isPnJid(decoded)) return normalizePhoneNumber(digits)
  return null
}

function altJidsFromMessage(m) {
  if (!m) return []
  const keys = m.key || {}
  return [
    keys.participantAlt,
    keys.remoteJidAlt,
    m.participantAlt,
    m.remoteJidAlt,
    m.senderPn,
    m.participantPn
  ].filter(Boolean)
}

function candidateJidsFromMessage(m, conn, jid) {
  const list = [
    ...altJidsFromMessage(m),
    jid,
    m?.sender,
    m?.participant,
    m?.key?.participant,
    m?.key?.remoteJid,
    
    !m?.isGroup ? m?.chat : null,
    !m?.isGroup ? m?.key?.remoteJid : null
  ]
  return [...new Set(list.filter(Boolean).map(j => decodeMaybe(conn, j)))]
}

function isPlaceholderNumber(value = '') {
  const raw = String(value || '').trim()
  if (!raw) return true
  if (!/\d{8,}/.test(raw.replace(/\D/g, ''))) return true
  return /^(tunumero|tu.?numero|your.?number|acael|numero|number|xxx+)/i.test(raw)
}

function phoneFromOwnerMapping(jid = '') {
  const raw = String(jid).split('@')[0].split(':')[0].replace(/\D/g, '')
  if (!raw) return null

  for (let i = 0; i < (global.ownerLid || []).length; i++) {
    const lidEntry = global.ownerLid[i]
    const lidNum = String(lidEntry?.[0] || '').replace(/\D/g, '')
    if (lidNum && lidNum === raw) {
      const ownerMatch = (global.owner || []).find(o => o[1] === lidEntry[1])
      const candidates = [ownerMatch?.[0], global.owner?.[0]?.[0]].filter(Boolean)
      for (const candidate of candidates) {
     
        if (isPlaceholderNumber(candidate)) continue
        const phone = normalizePhoneNumber(candidate)
        if (phone) return phone
      }
    }
  }

  for (const [number] of global.owner || []) {
    if (isPlaceholderNumber(number)) continue
    const clean = String(number).replace(/\D/g, '')
    if (clean === raw) {
      const phone = normalizePhoneNumber(number)
      if (phone) return phone
    }
  }

  for (const [number] of global.mods || []) {
    if (isPlaceholderNumber(number)) continue
    const clean = String(number).replace(/\D/g, '')
    if (clean === raw) {
      const phone = normalizePhoneNumber(number)
      if (phone) return phone
    }
  }

  return null
}

/**
 * Método oficial Baileys: LID → PN vía signalRepository.lidMapping
 */
async function phoneFromLidMapping(lidJid, conn) {
  const lid = decodeMaybe(conn, lidJid)
  if (!lid || !isLidJid(lid)) return null

  const mapping = conn?.signalRepository?.lidMapping
  if (!mapping || typeof mapping.getPNForLID !== 'function') return null

  try {
    const pnJid = await mapping.getPNForLID(lid)
    if (!pnJid) return null
    return phoneFromJid(decodeMaybe(conn, pnJid) || pnJid)
  } catch (e) {
    console.error('[resolve-phone] getPNForLID:', e?.message || e)
    return null
  }
}

async function phoneFromGroupParticipants(lidOrPn, conn, preferredGroup = null, participantsHint = null) {
  const target = decodeMaybe(conn, lidOrPn)
  const targetNum = String(target).split('@')[0].split(':')[0].replace(/\D/g, '')
  if (!targetNum) return null

  const tryList = async (list) => {
    if (!Array.isArray(list) || !list.length) return null

    for (const p of list) {
      const pid = decodeMaybe(conn, p.id)
      const pJid = p.jid ? decodeMaybe(conn, p.jid) : ''
      const pLid = p.lid
        ? decodeMaybe(conn, p.lid.includes('@') ? p.lid : `${p.lid}@lid`)
        : ''
      const pPhoneRaw = p.phoneNumber
        ? (String(p.phoneNumber).includes('@')
          ? String(p.phoneNumber)
          : `${String(p.phoneNumber).replace(/\D/g, '')}@s.whatsapp.net`)
        : ''

      
      try {
        const mapping = conn?.signalRepository?.lidMapping
        if (mapping?.storeLIDPNMappings) {
          if (isLidJid(pid) && isPnJid(pPhoneRaw)) {
            await mapping.storeLIDPNMappings([{ lid: pid, pn: decodeMaybe(conn, pPhoneRaw) || pPhoneRaw }])
          } else if (isPnJid(pid) && isLidJid(pLid)) {
            await mapping.storeLIDPNMappings([{ lid: pLid, pn: pid }])
          }
        }
      } catch {}

      const matches =
        sameJidUser(pid, target) ||
        sameJidUser(pJid, target) ||
        sameJidUser(pLid, target) ||
        sameJidUser(pPhoneRaw, target) ||
        (pLid && pLid.split('@')[0].split(':')[0].replace(/\D/g, '') === targetNum) ||
        (pid && pid.split('@')[0].split(':')[0].replace(/\D/g, '') === targetNum)

      if (!matches) continue

      for (const candidate of [pPhoneRaw, pJid, pid]) {
        const phone = phoneFromJid(candidate)
        if (phone) return phone
      }
    }
    return null
  }

  
  const fromHint = await tryList(participantsHint)
  if (fromHint) return fromHint

  const chatIds = []
  if (preferredGroup?.endsWith?.('@g.us')) chatIds.push(preferredGroup)
  for (const id of Object.keys(conn?.chats || {})) {
    if (id.endsWith('@g.us') && !chatIds.includes(id)) chatIds.push(id)
  }

  for (const chatId of chatIds) {
    try {
      
      const meta = await conn.groupMetadata(chatId).catch(() => conn.chats?.[chatId]?.metadata || null)
      const phone = await tryList(meta?.participants || [])
      if (phone) return phone
    } catch {}
  }

  return null
}

/**
 * En algunos forks onWhatsApp devuelve { jid, lid } para un PN.
 * Baileys oficial NO acepta LID en onWhatsApp.
 */
async function phoneFromOnWhatsAppPn(jid, conn) {
  if (!conn || typeof conn.onWhatsApp !== 'function') return null
  const decoded = decodeMaybe(conn, jid)
  if (!decoded || isLidJid(decoded)) return null
  if (!isPnJid(decoded) && !isValidWhatsAppPhone(String(decoded).split('@')[0])) return null

  try {
    const result = await conn.onWhatsApp(decoded)
    const entry = result?.[0]
    if (!entry?.jid) return null
    return phoneFromJid(entry.jid) || phoneFromJid(decodeMaybe(conn, entry.jid))
  } catch {
    return null
  }
}

export async function resolvePhoneNumber(jid, conn, explicitPhone = null, m = null, options = {}) {
  const manual = normalizePhoneNumber(explicitPhone)
  if (manual && !isKnownLid(manual)) return manual

  const participantsHint = options.participants || null
  const candidates = candidateJidsFromMessage(m, conn, jid)

 
  const authorGuess = m?.key?.participantAlt || m?.key?.remoteJidAlt || m?.key?.participant || m?.key?.remoteJid
  if (authorGuess) candidates.unshift(decodeMaybe(conn, authorGuess))

  
  for (const candidate of [...new Set(candidates)]) {
    const phone = phoneFromJid(candidate)
    if (phone) return phone
  }

  
  for (const candidate of [...new Set(candidates)]) {
    if (!isLidJid(candidate)) continue
    const phone = await phoneFromLidMapping(candidate, conn)
    if (phone) return phone
  }

 
  const groupId = m?.isGroup ? (m.chat || m.key?.remoteJid) : (options.groupId || null)
  for (const candidate of [...new Set(candidates)]) {
    const phone = await phoneFromGroupParticipants(candidate, conn, groupId, participantsHint)
    if (phone) return phone
  }

  
  if (groupId?.endsWith?.('@g.us')) {
    for (const candidate of [...new Set(candidates)]) {
      if (!isLidJid(candidate)) continue
      try {
        const real = await Promise.race([
          String.prototype.resolveLidToRealJid.call(candidate, groupId, conn, 1, 0),
          new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 8000))
        ])
        const phone = phoneFromJid(decodeMaybe(conn, real))
        if (phone) return phone
      } catch {}
    }
  }


  for (const candidate of [...new Set(candidates)]) {
    const phone = phoneFromOwnerMapping(candidate)
    if (phone) return phone
  }

  
  for (const candidate of [...new Set(candidates)]) {
    const phone = await phoneFromOnWhatsAppPn(candidate, conn)
    if (phone) return phone
  }

  return null
}

export function extractPhoneFromArgs(args = []) {
  for (const arg of args) {
    if (!arg || /^(code|--code)$/i.test(String(arg).trim())) continue
    const phone = normalizePhoneNumber(arg)
    if (phone && !isKnownLid(phone)) return phone
  }
  return null
}

export function getPrivateReplyJid(m, conn) {
  return decodeMaybe(conn, m?.chat) || m?.chat || m?.key?.remoteJid || ''
}

export async function sendPrivateReply(m, conn, text, options = {}) {
  const jid = getPrivateReplyJid(m, conn)
  const { contextInfo, ...rest } = options
  return conn.sendMessage(jid, {
    text,
    ...(contextInfo ? { contextInfo } : {}),
    ...rest
  }, { quoted: m })
}
