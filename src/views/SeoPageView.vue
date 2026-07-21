<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { getPage, SITE_URL, OG_IMAGE } from '@/data/seoContent'
import { useSeo } from '@/composables/useSeo'

const props = defineProps({
  slug: { type: String, required: true },
  schemaType: { type: String, default: 'WebPage' },
})

const route = useRoute()
const page = computed(() => getPage(props.slug))

useSeo(() => {
  if (!page.value) return null
  const path = route.path.startsWith('/') ? route.path : `/${route.path}`
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': props.schemaType,
      name: page.value.h1,
      description: page.value.description,
      url: `${SITE_URL}${path}`,
      publisher: { '@type': 'Organization', name: 'Arissa', url: SITE_URL },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: (page.value.faq || []).map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ]
  if (props.schemaType === 'Service') {
    jsonLd.push({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: page.value.h1,
      description: page.value.description,
      provider: { '@type': 'Organization', name: 'Arissa', url: SITE_URL },
      areaServed: 'MX',
      offers: {
        '@type': 'Offer',
        priceCurrency: 'USD',
        price: '2000',
        description: 'Ticket mínimo por fase de implementación',
      },
    })
  }
  return {
    title: page.value.title,
    description: page.value.description,
    path,
    image: OG_IMAGE,
    jsonLd,
  }
})
</script>

<template>
  <article v-if="page" class="seo-page">
    <header class="seo-hero">
      <div class="container">
        <p class="seo-eyebrow">Arissa</p>
        <h1>{{ page.h1 }}</h1>
        <p class="seo-lead">{{ page.description }}</p>
        <div class="seo-actions">
          <RouterLink to="/diagnostico" class="btn btn-primary">Agendar Diagnóstico</RouterLink>
          <RouterLink to="/contacto" class="btn btn-outline">Contactar</RouterLink>
        </div>
      </div>
    </header>

    <div class="container seo-body">
      <section v-for="(section, i) in page.sections" :key="i" class="seo-section">
        <h2>{{ section.h2 }}</h2>
        <p v-for="(p, pi) in section.paragraphs" :key="pi">{{ p }}</p>
        <div v-for="(sub, si) in section.h3s || []" :key="`h3-${si}`" class="seo-sub">
          <h3>{{ sub.h3 }}</h3>
          <p v-for="(p, pi) in sub.paragraphs" :key="pi">{{ p }}</p>
        </div>
      </section>

      <section v-if="page.faq?.length" class="seo-faq">
        <h2>Preguntas frecuentes</h2>
        <details v-for="(item, i) in page.faq" :key="i" class="faq-item">
          <summary>{{ item.q }}</summary>
          <p>{{ item.a }}</p>
        </details>
      </section>

      <section class="seo-cta">
        <h2>{{ page.ctaTitle }}</h2>
        <p>{{ page.ctaText }}</p>
        <div class="seo-actions">
          <RouterLink to="/diagnostico" class="btn btn-primary">Agendar Diagnóstico</RouterLink>
          <RouterLink to="/contacto" class="btn btn-outline">Contacto / WhatsApp</RouterLink>
        </div>
      </section>
    </div>
  </article>
  <div v-else class="container" style="padding: 4rem 0">
    <h1>Página no encontrada</h1>
  </div>
</template>

<style scoped>
.seo-page {
  background: var(--color-background);
}

.seo-hero {
  padding: 4rem 0 3rem;
  border-bottom: 1px solid var(--color-border-subtle);
  background:
    radial-gradient(ellipse at top right, rgba(13, 92, 90, 0.18), transparent 55%),
    var(--color-background);
}

.seo-eyebrow {
  font-family: 'Space Grotesk', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.75rem;
  color: var(--color-action);
  margin-bottom: 1rem;
}

.seo-hero h1 {
  max-width: 18ch;
  font-size: clamp(1.75rem, 4vw, 2.75rem);
  margin-bottom: 1rem;
}

.seo-lead {
  max-width: 62ch;
  color: var(--color-text-muted);
  font-size: 1.05rem;
  margin-bottom: 1.75rem;
}

.seo-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.seo-body {
  padding: 3rem 0 5rem;
  max-width: 820px;
}

.seo-section {
  margin-bottom: 2.75rem;
}

.seo-section h2 {
  font-size: 1.35rem;
  margin-bottom: 1rem;
}

.seo-section p,
.seo-sub p,
.seo-faq p,
.seo-cta p {
  color: var(--color-text-muted);
  margin-bottom: 1rem;
  line-height: 1.75;
}

.seo-sub {
  margin-top: 1.5rem;
  padding-left: 1rem;
  border-left: 2px solid var(--color-border);
}

.seo-sub h3 {
  font-size: 1.05rem;
  text-transform: none;
  letter-spacing: 0.04em;
  margin-bottom: 0.75rem;
}

.seo-faq {
  margin: 3rem 0;
}

.faq-item {
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-lg);
  padding: 1rem 1.25rem;
  margin-bottom: 0.75rem;
  background: rgba(255, 255, 255, 0.02);
}

.faq-item summary {
  cursor: pointer;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  color: var(--color-text-main);
  list-style: none;
}

.faq-item summary::-webkit-details-marker {
  display: none;
}

.faq-item[open] summary {
  margin-bottom: 0.75rem;
  color: var(--color-action);
}

.seo-cta {
  margin-top: 3rem;
  padding: 2rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: rgba(13, 92, 90, 0.08);
}

.seo-cta h2 {
  font-size: 1.35rem;
  margin-bottom: 0.75rem;
}
</style>
