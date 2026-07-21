#!/usr/bin/env node
/**
 * Build + deploy a gh-pages y fuerza/verifica que el HTML nuevo esté en vivo.
 *
 * Uso: node scripts/deploy-pages.mjs
 *   o: npm run deploy:pages
 */
import { execSync } from 'node:child_process'
import { readFileSync, writeFileSync, cpSync, rmSync, mkdtempSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const SITE = 'https://ifee09.github.io/Arissa/'
const REPO = 'IFEE09/Arissa'

function sh(cmd, opts = {}) {
  console.log(`$ ${cmd}`)
  return execSync(cmd, { stdio: 'inherit', ...opts })
}

function shOut(cmd) {
  return execSync(cmd, { encoding: 'utf8' }).trim()
}

const buildId = new Date().toISOString().replace(/[:.]/g, '-')
const startBranch = shOut('git branch --show-current')
if (startBranch !== 'main') {
  console.error(`Debes estar en main (ahora: ${startBranch})`)
  process.exit(1)
}

console.log(`\n▶ Build id: ${buildId}\n`)
sh('npm run build')

// Inyectar build-id + anti-cache en el HTML de producción
const distIndex = 'dist/index.html'
let html = readFileSync(distIndex, 'utf8')
const bustBlock = `
    <meta name="arissa-build-id" content="${buildId}" />
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
    <meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv="Expires" content="0" />
    <!-- arissa-build-id:${buildId} -->`
if (!html.includes('arissa-build-id')) {
  html = html.replace('<head>', `<head>${bustBlock}`)
} else {
  html = html.replace(
    /<meta name="arissa-build-id"[^>]*>/,
    `<meta name="arissa-build-id" content="${buildId}" />`,
  )
  html = html.replace(/<!-- arissa-build-id:[^>]*-->/, `<!-- arissa-build-id:${buildId} -->`)
}
writeFileSync(distIndex, html)

const tmp = mkdtempSync(join(tmpdir(), 'arissa-dist-'))
cpSync('dist', tmp, { recursive: true })

const msg = shOut('git log -1 --pretty=%s').replace(/"/g, "'")
sh('git checkout gh-pages')
sh('git pull origin gh-pages')

// Sync runtime files from main that Pages needs, then overlay dist
try {
  sh(
    'git checkout main -- src/components/AppHeader.vue src/App.vue src/router/index.js src/data src/views public/recursos public/sitemap.xml .env.example',
  )
} catch {
  /* best-effort sync */
}
cpSync(tmp, '.', { recursive: true })
rmSync(tmp, { recursive: true, force: true })

sh('git add -A')
const dirty = shOut('git status --porcelain')
if (dirty) {
  sh(`git commit -m "deploy: ${msg} [${buildId}]"`)
  sh('git push -u origin gh-pages')
} else {
  console.log('Sin cambios que publicar en gh-pages')
}

sh('git checkout main')

console.log('\n▶ Esperando build de GitHub Pages…')
let builtSha = ''
for (let i = 0; i < 24; i++) {
  await new Promise((r) => setTimeout(r, 5000))
  try {
    const raw = shOut(
      `gh api repos/${REPO}/pages/builds --jq '.[0] | "\\(.status)|\\(.commit[0:7])"'`,
    )
    const [status, sha] = raw.split('|')
    console.log(`  [${i + 1}] status=${status} commit=${sha}`)
    if (status === 'built') {
      builtSha = sha
      break
    }
    if (status === 'errored') {
      console.error('Pages build falló')
      process.exit(1)
    }
  } catch (err) {
    console.log(`  poll error: ${err.message}`)
  }
}

console.log('\n▶ Forzando bypass de caché CDN/navegación…')
const bustUrl = `${SITE}?v=${encodeURIComponent(buildId)}&nocache=1`
for (let i = 0; i < 12; i++) {
  const res = await fetch(bustUrl, {
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      Pragma: 'no-cache',
    },
    redirect: 'follow',
  })
  const body = await res.text()
  const liveId = body.match(/arissa-build-id" content="([^"]+)"/)?.[1]
  const asset = body.match(/assets\/index-[A-Za-z0-9_-]+\.js/)?.[0]
  console.log(`  fetch ${i + 1}: status=${res.status} build=${liveId || '?'} asset=${asset || '?'}`)
  if (liveId === buildId) {
    console.log(`\n✓ En vivo: ${SITE}`)
    console.log(`  build-id: ${buildId}`)
    console.log(`  Hard refresh si aún ves lo viejo: ${bustUrl}`)
    process.exit(0)
  }
  await new Promise((r) => setTimeout(r, 5000))
}

console.log(`\n⚠ Deploy empujado (pages commit ${builtSha || 'n/d'}) pero el HTML cacheado aún no muestra build-id.`)
console.log(`  Abre con bypass: ${bustUrl}`)
console.log('  La CDN de GitHub Pages cachea HTML ~10 min (max-age=600).')
process.exit(0)
