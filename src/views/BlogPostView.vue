<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { getPost, SITE_URL, OG_IMAGE } from '@/data/seoContent'
import { useSeo } from '@/composables/useSeo'

const route = useRoute()
const post = computed(() => getPost(route.params.slug))
const guidePath = computed(() =>
  post.value?.leadMagnet ? `/recursos/${post.value.leadMagnet}` : '/recursos',
)

useSeo(() => {
  if (!post.value) return null
  return {
    title: `${post.value.title} | Arissa`,
    description: post.value.description,
    path: `/blog/${post.value.slug}`,
    type: 'article',
    image: OG_IMAGE,
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.value.title,
        description: post.value.description,
        datePublished: post.value.datePublished,
        image: OG_IMAGE,
        author: { '@type': 'Organization', name: 'Arissa' },
        publisher: { '@type': 'Organization', name: 'Arissa', url: SITE_URL },
        mainEntityOfPage: `${SITE_URL}/blog/${post.value.slug}`,
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: (post.value.faq || []).map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
    ],
  }
})
</script>

<template>
  <article v-if="post" class="post">
    <header class="post-hero">
      <div class="container">
        <RouterLink to="/blog" class="back">← Blog</RouterLink>
        <time :datetime="post.datePublished">{{ post.datePublished }}</time>
        <h1>{{ post.title }}</h1>
        <p class="lead">{{ post.description }}</p>
      </div>
    </header>

    <div class="container body">
      <section v-for="(section, i) in post.sections" :key="i">
        <h2>{{ section.h2 }}</h2>
        <p v-for="(p, pi) in section.paragraphs" :key="pi">{{ p }}</p>
      </section>

      <section v-if="post.faq?.length" class="faq">
        <h2>Preguntas frecuentes</h2>
        <details v-for="(item, i) in post.faq" :key="i">
          <summary>{{ item.q }}</summary>
          <p>{{ item.a }}</p>
        </details>
      </section>

      <section class="cta">
        <h2>Agenda un diagnóstico con Arissa</h2>
        <p>{{ post.ctaText }}</p>
        <div class="cta-actions">
          <RouterLink :to="guidePath" class="btn btn-primary">Descargar Guía</RouterLink>
          <RouterLink to="/diagnostico" class="btn btn-outline">Agendar Diagnóstico</RouterLink>
        </div>
      </section>
    </div>
  </article>
  <div v-else class="container" style="padding: 4rem 0">
    <h1>Artículo no encontrado</h1>
    <RouterLink to="/blog">Volver al blog</RouterLink>
  </div>
</template>

<style scoped>
.post-hero {
  padding: 3.5rem 0 2rem;
  border-bottom: 1px solid var(--color-border-subtle);
}

.back {
  display: inline-block;
  margin-bottom: 1rem;
  color: var(--color-action);
  text-decoration: none;
  font-size: 0.9rem;
}

.post-hero time {
  display: block;
  color: var(--color-text-muted);
  font-size: 0.85rem;
  margin-bottom: 0.75rem;
}

.post-hero h1 {
  font-size: clamp(1.6rem, 3.5vw, 2.4rem);
  max-width: 20ch;
  text-transform: none;
  letter-spacing: 0.02em;
  margin-bottom: 1rem;
}

.lead {
  max-width: 62ch;
  color: var(--color-text-muted);
}

.body {
  padding: 2.5rem 0 5rem;
  max-width: 780px;
}

.body section {
  margin-bottom: 2.5rem;
}

.body h2 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

.body p {
  color: var(--color-text-muted);
  line-height: 1.75;
  margin-bottom: 1rem;
}

.faq details {
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-lg);
  padding: 1rem 1.25rem;
  margin-bottom: 0.75rem;
}

.faq summary {
  cursor: pointer;
  font-weight: 600;
  color: var(--color-text-main);
}

.faq details[open] summary {
  margin-bottom: 0.75rem;
  color: var(--color-action);
}

.cta {
  padding: 2rem;
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  background: rgba(13, 92, 90, 0.08);
}

.cta-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1rem;
}
</style>
