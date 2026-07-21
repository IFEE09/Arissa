import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

function htmlCacheBust() {
  const buildId = process.env.ARISSA_BUILD_ID || new Date().toISOString()
  return {
    name: 'html-cache-bust',
    transformIndexHtml(html) {
      const block = `
    <meta name="arissa-build-id" content="${buildId}" />
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
    <meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv="Expires" content="0" />
    <!-- arissa-build-id:${buildId} -->`
      if (html.includes('arissa-build-id')) return html
      return html.replace('<head>', `<head>${block}`)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: '/Arissa/',
  plugins: [vue(), htmlCacheBust()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
