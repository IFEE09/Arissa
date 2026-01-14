<script setup>
import { useRoute } from 'vue-router'
import { useNews } from '@/composables/useNews'
import { computed } from 'vue'

const route = useRoute()
const { getArticleBySlug } = useNews()

const article = computed(() => getArticleBySlug(route.params.slug))
</script>

<template>
  <div v-if="article" class="article-view">
    <!-- Hero Image -->
    <div class="article-hero" :style="{ backgroundImage: `url(${article.image})` }">
      <div class="hero-overlay"></div>
      <div class="container hero-content">
        <span class="badge" :class="`badge-${article.categoryColor}`">{{ article.category }}</span>
        <h1>{{ article.title }}</h1>
        <div class="article-meta">
          <div class="meta-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            {{ article.author }}
          </div>
          <div class="meta-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            {{ article.date }}
          </div>
          <div class="meta-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            {{ article.readTime }}
          </div>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="container ">
      <div class="content-wrapper">
        <div class="article-body" v-html="article.content"></div>
        
        <!-- Sidebar placeholder -->
        <aside class="sidebar">
          <div class="sidebar-box">
            <h3>Compartir</h3>
            <div class="share-buttons">
              <button class="btn btn-outline btn-sm">X (Twitter)</button>
              <button class="btn btn-outline btn-sm">Facebook</button>
              <button class="btn btn-outline btn-sm">LinkedIn</button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </div>
  
  <div v-else class="container not-found">
    <h2>Artículo no encontrado</h2>
    <router-link to="/" class="btn btn-primary">Volver al inicio</router-link>
  </div>
</template>

<style scoped>
.article-hero {
  position: relative;
  height: 60vh;
  min-height: 400px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  color: var(--color-white);
  padding-bottom: 4rem;
  margin-bottom: 4rem;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(15, 23, 42, 0.1), rgba(15, 23, 42, 0.9));
}

.hero-content {
  position: relative;
  width: 100%;
  z-index: 1;
}

.article-hero h1 {
  font-size: 3rem;
  font-weight: 800;
  margin: 1rem 0 1.5rem;
  max-width: 900px;
  line-height: 1.1;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
  color: var(--color-white);
}

.article-meta {
  display: flex;
  gap: 2rem;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.content-wrapper {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
}

.article-body {
  font-size: 1.125rem;
  line-height: 1.8;
  color: var(--color-text);
}

.article-body :deep(h3) {
  font-size: 1.5rem;
  margin: 2rem 0 1rem;
  color: var(--color-text);
}

.article-body :deep(p) {
  margin-bottom: 1.5rem;
}

.sidebar-box {
  background: var(--color-background-soft);
  padding: 1.5rem;
  border-radius: var(--radius-xl);
}

.sidebar-box h3 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

.share-buttons {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.not-found {
  padding: 4rem 0;
  text-align: center;
}

.not-found h2 {
  margin-bottom: 1.5rem;
}

@media (min-width: 1024px) {
  .content-wrapper {
    grid-template-columns: 2fr 1fr;
  }
}

@media (max-width: 768px) {
  .article-hero h1 {
    font-size: 2rem;
  }
  
  .article-meta {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
