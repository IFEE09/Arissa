#!/usr/bin/env node
/**
 * Fuerza el re-scrape de Open Graph en Meta (Facebook / WhatsApp).
 *
 * Uso:
 *   npm run refresh:og
 *   npm run refresh:og -- https://ifee09.github.io/Arissa/
 *
 * Opcional (mejor resultado):
 *   FACEBOOK_ACCESS_TOKEN=... npm run refresh:og
 *
 * Token: https://developers.facebook.com/tools/explorer/
 */

const DEFAULT_URLS = [
  'https://ifee09.github.io/Arissa/',
  'https://ifee09.github.io/Arissa',
  'https://arissa.com/',
  'https://arissa.com',
]

const urls = process.argv.slice(2).filter((a) => !a.startsWith('-'))
const targets = urls.length ? urls : DEFAULT_URLS
const token = process.env.FACEBOOK_ACCESS_TOKEN || process.env.FB_ACCESS_TOKEN || ''

function debuggerUrl(pageUrl) {
  return `https://developers.facebook.com/tools/debug/?q=${encodeURIComponent(pageUrl)}`
}

async function scrape(pageUrl) {
  const endpoint = new URL('https://graph.facebook.com/')
  endpoint.searchParams.set('id', pageUrl)
  endpoint.searchParams.set('scrape', 'true')
  if (token) endpoint.searchParams.set('access_token', token)

  const res = await fetch(endpoint, { method: 'POST' })
  const text = await res.text()
  let data
  try {
    data = JSON.parse(text)
  } catch {
    data = { raw: text }
  }
  return { ok: res.ok, status: res.status, data }
}

console.log('Refrescando cache Open Graph (Meta / WhatsApp)...\n')
if (!token) {
  console.log(
    'Nota: sin FACEBOOK_ACCESS_TOKEN la API puede fallar; el Debugger sigue siendo válido.\n',
  )
}

let failures = 0
for (const pageUrl of targets) {
  process.stdout.write(`→ ${pageUrl}\n`)
  try {
    const { ok, status, data } = await scrape(pageUrl)
    if (ok && !data.error) {
      const title = data.title || data.og_object?.title || '(sin título)'
      const image =
        data.image?.[0]?.url ||
        data.og_object?.image?.[0]?.url ||
        data.image ||
        '(sin imagen)'
      console.log(`  OK (${status}) title: ${title}`)
      console.log(`  image: ${image}`)
    } else {
      failures += 1
      const msg = data.error?.message || JSON.stringify(data)
      console.log(`  FAIL (${status}): ${msg}`)
      console.log(`  Abre y pulsa "Scrape Again": ${debuggerUrl(pageUrl)}`)
    }
  } catch (err) {
    failures += 1
    console.log(`  ERROR: ${err.message}`)
    console.log(`  Abre y pulsa "Scrape Again": ${debuggerUrl(pageUrl)}`)
  }
  console.log()
}

console.log('Debugger (forzar a mano si hace falta):')
for (const pageUrl of targets) {
  console.log(`  ${debuggerUrl(pageUrl)}`)
}

process.exit(failures === targets.length ? 1 : 0)
