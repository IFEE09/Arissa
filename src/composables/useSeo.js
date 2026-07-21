import { onMounted, onUnmounted, watch } from 'vue'
import { OG_IMAGE, SITE_URL } from '@/data/seoContent'

function upsertMeta(attr, key, content) {
  if (!content) return
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function upsertJsonLd(id, data) {
  let el = document.getElementById(id)
  if (!el) {
    el = document.createElement('script')
    el.type = 'application/ld+json'
    el.id = id
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

/**
 * @param {() => ({
 *   title?: string
 *   description?: string
 *   path?: string
 *   image?: string
 *   type?: string
 *   jsonLd?: object | object[]
 * })} getSeo
 */
export function useSeo(getSeo) {
  const apply = () => {
    const seo = typeof getSeo === 'function' ? getSeo() : getSeo
    if (!seo) return

    const title = seo.title || 'Arissa'
    const description = seo.description || ''
    const path = seo.path || '/'
    const url = `${SITE_URL}${path === '/' ? '/' : path}`
    const image = seo.image || OG_IMAGE

    document.title = title
    upsertMeta('name', 'description', description)
    upsertMeta('name', 'title', title)
    upsertMeta('property', 'og:type', seo.type || 'website')
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:image', image)
    upsertMeta('property', 'og:locale', 'es_MX')
    upsertMeta('property', 'og:site_name', 'Arissa')
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:url', url)
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', image)
    upsertLink('canonical', url)

    if (seo.jsonLd) {
      const blocks = Array.isArray(seo.jsonLd) ? seo.jsonLd : [seo.jsonLd]
      blocks.forEach((block, i) => upsertJsonLd(`jsonld-${i}`, block))
    }
  }

  onMounted(apply)
  const stop = watch(getSeo, apply, { deep: true })
  onUnmounted(() => {
    stop()
  })
}

export { SITE_URL, OG_IMAGE }
