# Pain Bot

**By Sunkovv**

Bot de WhatsApp multi-dispositivo (Baileys). Descargas, IA, administración de grupos, RPG, stickers y más.

```
git clone https://github.com/nexusday/pain-bot.git
```

| | |
|---|---|
| **Repositorio** | [github.com/nexusday/pain-bot](https://github.com/nexusday/pain-bot) |
| **Runtime** | Node.js 20+ |
| **Licencia** | GPL-3.0-or-later |

---

## Índice

1. [Requisitos](#requisitos)
2. [Instalación en PC](#instalación-en-pc)
3. [Instalación en Termux](#instalación-en-termux)
4. [Vincular cuenta](#vincular-cuenta)
5. [PM2 en Termux](#pm2-en-termux)
6. [Configuración](#configuración)
7. [Uso](#uso)
8. [Estructura](#estructura)
9. [Actualizar](#actualizar)
10. [Problemas frecuentes](#problemas-frecuentes)
11. [Aviso y créditos](#aviso-y-créditos)

---

## Requisitos

| Componente | Detalle |
|------------|---------|
| Node.js | 20 LTS o superior |
| npm | 10+ |
| Git | versión reciente |
| FFmpeg | recomendado (audio, video, stickers) |
| Espacio | ~500 MB libre (dependencias + sesión) |

---

## Instalación en PC

Windows, Linux o macOS:

```bash
git clone https://github.com/nexusday/pain-bot.git
cd pain-bot
npm install
```

Si falla un módulo nativo:

```bash
npm install --legacy-peer-deps
```

En Debian/Ubuntu:

```bash
sudo apt update
sudo apt install -y ffmpeg git
```

---

## Instalación en Termux

### Preparar el entorno

Termux desde [F-Droid](https://f-droid.org/packages/com.termux/). Luego:

```bash
termux-setup-storage
pkg update -y && pkg upgrade -y
pkg install -y nodejs-lts git ffmpeg
```

Verifica:

```bash
node -v && npm -v && git --version
```

### Clonar e instalar

En Termux usa `--no-bin-links` para evitar fallos de enlaces simbólicos:

```bash
cd ~
git clone https://github.com/nexusday/pain-bot.git
cd pain-bot
npm install --no-bin-links
```

Con poca RAM:

```bash
npm install --no-bin-links --no-optional
```

---

## Vincular cuenta

El método principal de vinculación es por **código de 8 dígitos** (pairing code). No hace falta escanear QR.

### Arranque

```bash
cd pain-bot   # o: cd ~/pain-bot en Termux
npm start
```

### Pasos en la terminal

1. Cuando pregunte el método de sesión, escribe:

```text
code
```

2. Ingresa el número del WhatsApp que usará el bot, **con código de país y sin símbolos**:

```text
51999999999
```

3. La terminal mostrará un código de **8 caracteres** (ej. `ABCD-EFGH`).

### Pasos en WhatsApp (teléfono)

1. Abre WhatsApp en el dispositivo del número indicado  
2. **Ajustes → Dispositivos vinculados → Vincular un dispositivo**  
3. Elige **Vincular con número de teléfono**  
4. Escribe el código de 8 dígitos que salió en la terminal  

La sesión se guarda en `Sessions/`. Conserva esa carpeta si no quieres volver a vincular.

> Tip: la primera vinculación hazla con `npm start` en primer plano para copiar el código con calma. Después puedes pasar a PM2.

Detener el proceso: `Ctrl + C`.

---

## PM2 en Termux

Para mantener el bot en segundo plano sin dejar la terminal abierta:

```bash
npm install -g pm2
cd ~/pain-bot
```

**Importante:** vincula primero con `npm start` y el código. Cuando la sesión ya esté en `Sessions/`:

```bash
pm2 start index.js --name painbot
pm2 save
```

| Comando | Acción |
|---------|--------|
| `pm2 status` | Estado del proceso |
| `pm2 logs painbot` | Logs en vivo |
| `pm2 restart painbot` | Reiniciar |
| `pm2 stop painbot` | Detener |
| `pm2 delete painbot` | Eliminar de PM2 |

Recuperar PM2 al reabrir Termux:

```bash
pm2 startup
pm2 save
```

Desactiva la optimización de batería para Termux en Android; si no, el sistema puede matar el proceso.

---

## Configuración

Edita `config.js` (mejor con el bot detenido al cambiar owners):

| Variable | Descripción |
|----------|-------------|
| `global.owner` | Owners: `['codigoPaisNumero', 'Nombre', true]` |
| `global.namebot` | Nombre del bot |
| `global.packname` | Nombre en stickers |
| `global.author` | Autor |
| `global.moneda` | Moneda del RPG |
| `global.APIs` | APIs externas |

```js
global.owner = [
  ['51999999999', 'TuNombre', true],
]
```

Sin `+`, espacios ni guiones en el número.

---

## Uso

Prefijo por defecto: `.`

```text
.menu
.menu2
.play nombre de canción
.video búsqueda o enlace
.ia mensaje
.s
```

Más comandos en `.menu` / `.menu2` dentro del chat.

---

## Estructura

```text
pain-bot/
├── config.js       Configuración global
├── index.js        Entrada
├── main.js         Conexión y ciclo
├── handler.js      Mensajes y comandos
├── plugins/        Comandos (hot reload)
├── lib/            Utilidades y modos
├── storage/        Datos persistentes
├── Sessions/       Sesión de WhatsApp (no versionar)
└── package.json
```

Los plugins suelen recargarse al guardar. Si no aparece uno nuevo, reinicia con `npm start` o `pm2 restart painbot`.

---

## Actualizar

```bash
cd pain-bot
git pull origin main
npm install
# En Termux: npm install --no-bin-links
npm start
# o: pm2 restart painbot
```

Haz backup de `Sessions/` y de tu `config.js` antes de un `git pull` si tocaste owners o APIs.

---

## Problemas frecuentes

**No sale el código de vinculación**  
Escribe `code` (no `qr`) cuando pregunte el método. Cierra otras instancias del bot y vuelve a `npm start`.

**El código expira o no se acepta**  
Pide uno nuevo reiniciando. En WhatsApp usa *Vincular con número de teléfono*, no el escáner de cámara.

**Error al instalar `sharp` en Termux**

```bash
pkg reinstall nodejs-lts -y
cd ~/pain-bot
rm -rf node_modules
npm install --no-bin-links
```

**Sesión cerrada / logged out**

```bash
rm -rf Sessions
npm start
```

Vuelve a vincular con el código de 8 dígitos.

**El bot no responde en un grupo**  
Revisa si está desactivado, silenciado o si faltan permisos de admin para comandos de grupo.

**Termux se cierra solo**  
Ajustes de Android → sin optimización de batería para Termux.

---

## Aviso y créditos

Uso personal o educativo. Respeta las [políticas de WhatsApp](https://www.whatsapp.com/legal) y la ley de tu país. El uso indebido de automatización puede banear la cuenta vinculada; conviene un número secundario.

| | |
|---|---|
| **Proyecto** | Pain Bot |
| **By** | Sunkovv |
| **Núcleo** | [Baileys](https://github.com/WhiskeySockets/Baileys) (WhiskeySockets) |
| **Repositorio** | https://github.com/nexusday/pain-bot.git |

---

*Pain Bot — By Sunkovv*
