<script setup>
import { RouterLink } from 'vue-router'
import { blogPosts, SITE_URL, OG_IMAGE } from '@/data/seoContent'
import { useSeo } from '@/composables/useSeo'

useSeo(() => ({
  title: 'Blog software empresarial México | Arissa',
  description:
    'Guías prácticas de software a medida, captación digital para clínicas y automatización de procesos en México.',
  path: '/blog',
  image: OG_IMAGE,
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Blog Arissa',
    url: `${SITE_URL}/blog`,
    publisher: { '@type': 'Organization', name: 'Arissa', url: SITE_URL },
  },
}))
</script>

<template>
  <div class="blog-hub">
    <header class="blog-hero">
      <div class="container">
        <p class="eyebrow">Blog</p>
        <h1>Software empresarial en México</h1>
        <p class="lead">
          Guías para dueños y operaciones: precios, captación digital, automatización e integración
          de procesos — sin relleno.
        </p>
      </div>
    </header>

    <div class="container posts">
      <article v-for="post in blogPosts" :key="post.slug" class="post-card">
        <time :datetime="post.datePublished">{{ post.datePublished }}</time>
        <h2>
          <RouterLink :to="`/blog/${post.slug}`">{{ post.title }}</RouterLink>
        </h2>
        <p>{{ post.description }}</p>
        <RouterLink class="read-more" :to="`/blog/${post.slug}`">
          Leer artículo <i class="fa-solid fa-arrow-right"></i>
        </RouterLink>
      </article>
    </div>
  </div>
</template>

<style scoped>
.blog-hero {
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

.blog-hero h1 {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  margin-bottom: 0.75rem;
}

.lead {
  max-width: 60ch;
  color: var(--color-text-muted);
}

.posts {
  padding: 3rem 0 5rem;
  display: grid;
  gap: 1.5rem;
}

.post-card {
  padding: 1.75rem;
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.02);
}

.post-card time {
  font-size: 0.8rem;
  color: var(--color-text-muted);
}

.post-card h2 {
  font-size: 1.25rem;
  text-transform: none;
  letter-spacing: 0.02em;
  margin: 0.75rem 0;
}

.post-card h2 a {
  color: var(--color-text-main);
  text-decoration: none;
}

.post-card h2 a:hover {
  color: var(--color-action);
}

.post-card p {
  color: var(--color-text-muted);
  margin-bottom: 1rem;
}

.read-more {
  color: var(--color-action);
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  text-decoration: none;
}
</style>
