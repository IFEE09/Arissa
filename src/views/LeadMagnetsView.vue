<script setup>
import { RouterLink } from 'vue-router'
import { leadMagnets } from '@/data/leadMagnets'
import { useSeo } from '@/composables/useSeo'
import { SITE_URL, OG_IMAGE } from '@/data/siteConfig'

useSeo(() => ({
  title: 'Recursos gratis: guías y checklists | Arissa',
  description:
    'Descarga guías de precios, checklist de automatización y plantilla de diagnóstico de captación digital para clínicas. Lead magnets de Arissa.',
  path: '/recursos',
  image: OG_IMAGE,
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Recursos Arissa',
    url: `${SITE_URL}/recursos`,
    publisher: { '@type': 'Organization', name: 'Arissa', url: SITE_URL },
  },
}))
</script>

<template>
  <div class="recursos">
    <header class="hero">
      <div class="container">
        <p class="eyebrow">Lead magnets</p>
        <h1>Recursos prácticos para decidir con menos riesgo</h1>
        <p class="lead">
          Guías y plantillas para dueños de clínicas y empresas en México. Déjanos tu correo y
          descarga al instante.
        </p>
      </div>
    </header>

    <div class="container grid">
      <article v-for="item in leadMagnets" :key="item.slug" class="card">
        <p class="format">{{ item.format }}</p>
        <h2>
          <RouterLink :to="`/recursos/${item.slug}`">{{ item.title }}</RouterLink>
        </h2>
        <p>{{ item.description }}</p>
        <ul>
          <li v-for="b in item.bullets" :key="b">{{ b }}</li>
        </ul>
        <RouterLink class="btn btn-primary" :to="`/recursos/${item.slug}`">
          Descargar guía
        </RouterLink>
      </article>
    </div>
  </div>
</template>

<style scoped>
.hero {
  padding: 4rem 0 2.5rem;
  border-bottom: 1px solid var(--color-border-subtle);
}
.eyebrow {
  font-family: 'Space Grotesk', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.75rem;
  color: var(--color-action);
  margin-bottom: 1rem;
}
.hero h1 {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  margin-bottom: 0.75rem;
  max-width: 18ch;
}
.lead {
  max-width: 60ch;
  color: var(--color-text-muted);
}
.grid {
  padding: 3rem 0 5rem;
  display: grid;
  gap: 1.5rem;
}
@media (min-width: 900px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
.card {
  padding: 1.75rem;
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur)) saturate(1.2);
  -webkit-backdrop-filter: blur(var(--glass-blur)) saturate(1.2);
  box-shadow: var(--glass-shadow);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.format {
  font-size: 0.75rem;
  color: var(--color-action);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
.card h2 {
  font-size: 1.15rem;
  text-transform: none;
  letter-spacing: 0.02em;
}
.card h2 a {
  color: var(--color-text-main);
  text-decoration: none;
}
.card p,
.card li {
  color: var(--color-text-muted);
  font-size: 0.95rem;
}
.card ul {
  margin: 0 0 0.5rem 1.1rem;
  flex: 1;
}
.card .btn {
  align-self: flex-start;
  margin-top: auto;
}
</style>
