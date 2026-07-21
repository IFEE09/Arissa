<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { getPage } from '@/data/seoContent'
import { useSeo } from '@/composables/useSeo'
import {
  SITE_URL,
  OG_IMAGE,
  CONTACT,
  PAGE_CTAS,
  DEFAULT_CTA,
  whatsappUrl,
} from '@/data/siteConfig'

const props = defineProps({
  slug: { type: String, required: true },
  schemaType: { type: String, default: 'WebPage' },
})

const route = useRoute()
const page = computed(() => getPage(props.slug))
const ctas = computed(() => PAGE_CTAS[props.slug] || DEFAULT_CTA)

function resolveCta(cta) {
  if (cta.to === 'whatsapp') {
    const wa = whatsappUrl()
    return wa
      ? { href: wa, external: true, label: cta.label }
      : { to: '/contacto', external: false, label: cta.label }
  }
  if (cta.to.startsWith('http')) {
    return { href: cta.to, external: true, label: cta.label }
  }
  return { to: cta.to, external: false, label: cta.label }
}

const primaryCta = computed(() => resolveCta(ctas.value.primary))
const secondaryCta = computed(() => resolveCta(ctas.value.secondary))

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
  if (props.slug === 'contacto') {
    jsonLd.push({
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: CONTACT.businessName,
      url: SITE_URL,
      email: CONTACT.email,
      areaServed: CONTACT.areaServed,
      openingHours: 'Mo-Fr 09:00-18:00',
      description:
        'Arissa diseña y construye sistemas digitales a la medida para clínicas y empresas en México.',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: CONTACT.email,
        availableLanguage: ['Spanish'],
        areaServed: 'MX',
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
          <a
            v-if="primaryCta.external"
            class="btn btn-primary"
            :href="primaryCta.href"
            target="_blank"
            rel="noopener"
            >{{ primaryCta.label }}</a
          >
          <RouterLink v-else class="btn btn-primary" :to="primaryCta.to">{{
            primaryCta.label
          }}</RouterLink>
          <a
            v-if="secondaryCta.external"
            class="btn btn-outline"
            :href="secondaryCta.href"
            target="_blank"
            rel="noopener"
            >{{ secondaryCta.label }}</a
          >
          <RouterLink v-else class="btn btn-outline" :to="secondaryCta.to">{{
            secondaryCta.label
          }}</RouterLink>
        </div>
      </div>
    </header>

    <div class="container seo-body">
      <section
        v-for="(section, i) in page.sections"
        :id="i === 2 ? 'proceso' : undefined"
        :key="i"
        class="seo-section"
      >
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
          <a
            v-if="primaryCta.external"
            class="btn btn-primary"
            :href="primaryCta.href"
            target="_blank"
            rel="noopener"
            >{{ primaryCta.label }}</a
          >
          <RouterLink v-else class="btn btn-primary" :to="primaryCta.to">{{
            primaryCta.label
          }}</RouterLink>
          <a
            v-if="secondaryCta.external"
            class="btn btn-outline"
            :href="secondaryCta.href"
            target="_blank"
            rel="noopener"
            >{{ secondaryCta.label }}</a
          >
          <RouterLink v-else class="btn btn-outline" :to="secondaryCta.to">{{
            secondaryCta.label
          }}</RouterLink>
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
  border-bottom: 1px solid var(--glass-border);
  background:
    radial-gradient(ellipse at top right, rgba(13, 92, 90, 0.18), transparent 55%),
    var(--glass-bg);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
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
  font-size: clamp(1.75rem, 4vw, 2.75rem);
  max-width: 18ch;
  margin-bottom: 1rem;
  text-transform: none;
  letter-spacing: 0.02em;
}

.seo-lead {
  max-width: 62ch;
  color: var(--color-text-muted);
  margin-bottom: 1.75rem;
  font-size: 1.05rem;
}

.seo-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.seo-body {
  padding: 3rem 0 5rem;
  max-width: 800px;
}

.seo-section {
  margin-bottom: 2.75rem;
}

.seo-section h2 {
  font-size: 1.35rem;
  margin-bottom: 1rem;
  text-transform: none;
  letter-spacing: 0.02em;
}

.seo-section p,
.seo-sub p,
.seo-faq p,
.seo-cta p {
  color: var(--color-text-muted);
  line-height: 1.75;
  margin-bottom: 1rem;
}

.seo-sub {
  margin-top: 1.25rem;
  padding-left: 1rem;
  border-left: 2px solid var(--color-border);
}

.seo-sub h3 {
  font-size: 1.05rem;
  margin-bottom: 0.5rem;
  text-transform: none;
}

.seo-faq {
  margin-bottom: 3rem;
}

.faq-item {
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);
  padding: 1rem 1.25rem;
  margin-bottom: 0.75rem;
  background: var(--glass-bg);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.faq-item summary {
  cursor: pointer;
  font-weight: 600;
  color: var(--color-text-main);
}

.faq-item[open] summary {
  margin-bottom: 0.75rem;
  color: var(--color-action);
}

.seo-cta {
  padding: 2rem;
  border-radius: var(--radius-lg);
  border: 1px solid var(--glass-border);
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  box-shadow: var(--glass-shadow);
}

.seo-cta h2 {
  font-size: 1.35rem;
  margin-bottom: 0.75rem;
  text-transform: none;
}
</style>
