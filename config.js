import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['51927909197', 'Sunkovv', true],
]


global.ownerLid = [
  ['198119006412828', 'Sunkovv', true],
  ['132929590181978', 'Clang', true],
  ['138079390183445', 'Javi', true]
]

global.sessions = 'Sessions'
global.bot = 'Serbot' 
global.AFBots = true

global.packname = '𝗣𝗔𝗜𝗡 𝗕𝗢𝗧'
global.namebot = '𝗣𝗔𝗜𝗡 𝗕𝗢𝗧'
global.author = 'Sunkovv'
global.moneda = 'USD'


global.canal = ''

global.ch = {
ch1: '',
}

global.mods =   []
global.prems = []

global.multiplier = 69 
global.maxwarn = '2'

global.APIs = {
vreden: { url: "https://api.vreden.web.id", key: null },
delirius: { url: "https://api.delirius.store", key: null },
zenzxz: { url: "https://api.zenzxz.my.id", key: null },
siputzx: { url: "https://api.siputzx.my.id", key: null }
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
