/**
 * sharp seguro: carga nativo o, en Android/Termux, fuerza runtime wasm.
 * Los plugins importan esto en lugar de "sharp" para no tumbar el arranque.
 */
import { createRequire } from 'module'
import { pathToFileURL } from 'url'
import path from 'path'

const require = createRequire(import.meta.url)
let cached = null
let loadError = null

function tryRequireSharp() {
  return require('sharp')
}

function tryLoadWasmBinaryPath() {
  try {
    const wasmPkg = path.dirname(require.resolve('@img/sharp-wasm32/package.json'))
    return path.join(wasmPkg, 'lib', 'sharp-wasm32.node')
  } catch {
    return null
  }
}

/**
 * @returns {typeof import('sharp')}
 */
export function getSharp() {
  if (cached) return cached
  if (loadError) throw loadError

  try {
    cached = tryRequireSharp()
    return cached
  } catch (firstErr) {
    // Reintento vía variable de entorno de sharp (algunas builds)
    const wasmPath = tryLoadWasmBinaryPath()
    if (wasmPath) {
      process.env.SHARP_FORCE_GLOBAL_LIBVIPS = '0'
      try {
        // Second require after optional reconfig — same module id may stay cached failed on android.
        // Clear require cache entries for sharp.
        for (const key of Object.keys(require.cache || {})) {
          if (key.includes(`${path.sep}sharp${path.sep}`) || key.endsWith(`${path.sep}sharp`)) {
            delete require.cache[key]
          }
        }
        cached = tryRequireSharp()
        return cached
      } catch {
        // fallthrough
      }
    }

    loadError = Object.assign(
      new Error(
        'sharp no está disponible en esta plataforma (android-arm64 / Termux).\n\n' +
          'Solución definitiva (una vez):\n' +
          '  cd ~/pain-bot\n' +
          '  npm install --cpu=wasm32 sharp@0.34.1 @img/sharp-wasm32@0.34.1 --no-bin-links\n' +
          '  npm start\n\n' +
          'O deja que el arranque lo instale: se ejecuta scripts/ensure-sharp.js'
      ),
      { cause: firstErr, code: 'SHARP_UNAVAILABLE' }
    )
    throw loadError
  }
}

/** API compatible: default export callable como sharp(...) */
function sharpProxy(...args) {
  return getSharp()(...args)
}

Object.defineProperty(sharpProxy, 'kernel', {
  get() {
    return getSharp().kernel
  }
})

Object.defineProperty(sharpProxy, 'fit', {
  get() {
    return getSharp().fit
  }
})

Object.defineProperty(sharpProxy, 'format', {
  get() {
    return getSharp().format
  }
})

Object.defineProperty(sharpProxy, 'concurrency', {
  value: (...a) => getSharp().concurrency(...a)
})

Object.defineProperty(sharpProxy, 'cache', {
  value: (...a) => getSharp().cache(...a)
})

export default sharpProxy
export { getSharp as sharp }
