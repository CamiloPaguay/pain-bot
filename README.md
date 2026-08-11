# Pain Bot

Bot de WhatsApp multi-dispositivo basado en [Baileys](https://github.com/WhiskeySockets/Baileys). Incluye descargas, inteligencia artificial, administración de grupos, RPG, stickers y más.

**Repositorio:** [github.com/nexusday/pain-bot](https://github.com/nexusday/pain-bot)

---

## Requisitos

| Entorno | Versión mínima |
|---------|----------------|
| Node.js | 20.x (recomendado 20 LTS o superior) |
| npm     | 10.x o superior |
| Git     | cualquier versión reciente |

Opcional pero recomendado:

- **FFmpeg** — audio, video y stickers
- Conexión estable a internet
- Almacenamiento libre: al menos ~500 MB (dependencias + sesiones)

---

## Instalación en PC (Windows / Linux / macOS)

```bash
git clone https://github.com/nexusday/pain-bot.git
cd pain-bot
npm install
```

Si `npm install` falla con algún módulo nativo (`sharp`, etc.):

```bash
npm install --legacy-peer-deps
```

En Linux puede hacer falta:

```bash
# Debian / Ubuntu
sudo apt update
sudo apt install -y ffmpeg git
```

---

## Instalación en Termux (Android)

### 1. Preparar Termux

Instala Termux desde [F-Droid](https://f-droid.org/packages/com.termux/) (recomendado). Evita versiones muy antiguas de Play Store.

Abre Termux y da permiso de almacenamiento:

```bash
termux-setup-storage
```

### 2. Paquetes base

```bash
pkg update -y && pkg upgrade -y
pkg install -y nodejs-lts git ffmpeg
```

Comprueba las versiones:

```bash
node -v
npm -v
git --version
```

### 3. Clonar y dependencias

En Termux usa `--no-bin-links` para evitar errores de enlaces simbólicos:

```bash
cd ~
git clone https://github.com/nexusday/pain-bot.git
cd pain-bot
npm install --no-bin-links
```

Si el dispositivo se queda sin memoria:

```bash
npm install --no-bin-links --no-optional
```

---

## Primer arranque

Desde la carpeta del proyecto:

```bash
npm start
```

1. Espera a que el bot cargue plugins y módulos.
2. Cuando pida autenticación, escanea el **código QR** con WhatsApp:
   - App → **Dispositivos vinculados** → **Vincular un dispositivo**
3. Tras el escaneo, la sesión se guarda en `Sessions/`.
4. No borres esa carpeta si quieres reutilizar la misma sesión.

Para detener el bot: `Ctrl + C`.

### Mantenerlo activo en Termux (PM2)

Si cierras Termux, el proceso se detiene. Con **PM2** el bot sigue en segundo plano y se puede reiniciar solo:

```bash
# Instalar PM2 (una sola vez)
npm install -g pm2

# Desde la carpeta del bot
cd ~/pain-bot

# Primera vez: es mejor arrancar una vez con npm start, escanear el QR,
# detener con Ctrl+C y luego dejar PM2 a cargo.
pm2 start index.js --name painbot
pm2 save
```

Comandos útiles:

```bash
pm2 status              # estado
pm2 logs painbot        # logs en vivo
pm2 restart painbot     # reiniciar
pm2 stop painbot        # detener
pm2 delete painbot      # quitar del listado de PM2
```

Para que PM2 recupere el proceso al abrir Termux de nuevo:

```bash
pm2 startup
# Ejecuta el comando que imprima PM2 (si lo muestra)
pm2 save
```

Nota: en Android, desactiva la optimización de batería para Termux o el sistema puede matar el proceso aunque uses PM2.
---

## Configuración

Edita `config.js` **antes o después** del primer arranque (con el bot apagado al tocar owners):

| Variable        | Uso |
|-----------------|-----|
| `global.owner`  | Números owner: `['codigoPais+numero', 'Nombre', true]` |
| `global.namebot`| Nombre del bot |
| `global.packname` | Nombre por defecto en stickers |
| `global.author` | Autor del bot |
| `global.moneda` | Moneda del sistema RPG |
| `global.APIs`   | Endpoints de APIs externas |

Ejemplo de owner (sin `+` ni espacios):

```js
global.owner = [
  ['51999999999', 'TuNombre', true],
]
```

---

## Uso básico

El prefijo por defecto es el punto: `.`

```
.menu
.play nombre de canción
.video enlace o búsqueda
.ia mensaje
.s  (sticker desde imagen)
```

La lista completa depende de los plugins cargados; usa `.menu` o `.menu2` en el chat.

---

## Estructura del proyecto

```
pain-bot/
├── config.js          # Configuración global
├── index.js           # Entrada
├── main.js            # Conexión y ciclo del bot
├── handler.js         # Enrutado de mensajes y comandos
├── plugins/           # Comandos (se cargan en caliente)
├── lib/               # Utilidades, modos, antis, APIs
├── storage/           # Datos persistentes
├── Sessions/          # Sesión de WhatsApp (no subir a git)
└── package.json
```

Los plugins en `plugins/` se recargan al guardar el archivo. Si un plugin nuevo no aparece, reinicia con `npm start`.

---

## Actualizar

```bash
cd pain-bot
git pull origin main
npm install
npm start
```

Haz backup de `Sessions/` y de tu `config.js` si modificaste owners o APIs antes de un `git pull`.

---

## Problemas frecuentes

**QR no aparece o expira**  
Cierra otras instancias del bot y vuelve a ejecutar `npm start`.

**Error al instalar `sharp` en Termux**  
Actualiza Node a LTS e intenta de nuevo:

```bash
pkg reinstall nodejs-lts -y
cd ~/pain-bot
rm -rf node_modules
npm install --no-bin-links
```

**Sesión cerrada / “logged out”**  
Borra la carpeta de sesión y vincula de nuevo (perderás el dispositivo vinculado actual):

```bash
rm -rf Sessions
npm start
```

**El bot no responde en un grupo**  
Comprueba que no esté desactivado, que no falten permisos de admin si hace falta, y que el bot no esté muteado por anti-sistemas del grupo.

**Termux se cierra solo**  
Desactiva optimización de batería para Termux en Ajustes de Android.

---

## Aviso

Este proyecto es para uso personal o educativo. Respetá las [políticas de WhatsApp](https://www.whatsapp.com/legal) y las leyes locales. El abuso de automatización puede resultar en ban de la cuenta vinculada. Usa una cuenta secundaria si es posible.

---

## Licencia

GPL-3.0-or-later. Consulta los detalles en el repositorio si aplica.

---

## Créditos

- Nucleo: [Baileys](https://github.com/WhiskeySockets/Baileys) (WhiskeySockets)
- Autor / mantenimiento: según `package.json` y commits del repo

Repositorio de este fork / release:

```
https://github.com/nexusday/pain-bot.git
```
