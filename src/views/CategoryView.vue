<script setup>
import { useRoute } from 'vue-router' // Import route to get params
import { useNews } from '@/composables/useNews'
import { computed } from 'vue' // Import computed
import NewsCard from '@/components/NewsCard.vue'

const route = useRoute()
const { getArticlesByCategory } = useNews()

// Define dictionary to map slug to display title
const categoryTitles = {
  ia: 'Inteligencia Artificial',
  gaming: 'Gaming',
  startups: 'Startups',
  negocios: 'Negocios',
  tecnologia: 'Tecnología',
  ciberseguridad: 'Ciberseguridad',
  mundo: 'Mundo',
}

// Compute the Category Title based on the route slug
const categoryTitle = computed(() => {
  const slug = route.params.category
  return categoryTitles[slug] || slug.charAt(0).toUpperCase() + slug.slice(1)
})

// Compute the articles filtered by current category
const categoryArticles = computed(() => getArticlesByCategory(route.params.category))
</script>

<template>
  <div class="category-view">
    <div class="category-header">
      <div class="container">
        <span class="overline">Explora</span>
        <h1>{{ categoryTitle }}</h1>
        <p>Las últimas noticias y análisis sobre {{ categoryTitle.toLowerCase() }}.</p>
      </div>
    </div>

    <div class="container section-content">
      <div v-if="categoryArticles.length > 0" class="news-grid">
        <NewsCard v-for="article in categoryArticles" :key="article.id" :article="article" />
      </div>
      <div v-else class="empty-state">
        <div class="icon-box">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <line x1="10" y1="9" x2="8" y2="9"></line>
          </svg>
        </div>
        <h3>No hay artículos aquí todavía</h3>
        <p>Estamos redactando nuevo contenido para esta sección. Vuelve pronto.</p>
        <router-link to="/" class="btn btn-primary">Volver al Inicio</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.category-view {
  min-height: 100vh;
  background: var(--color-background);
}

.category-header {
  background: linear-gradient(135deg, #1a1a1a 0%, #050505 100%);
  color: var(--color-white);
  padding: 8rem 0 4rem;
  margin-bottom: 4rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.category-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(ellipse at center, rgba(255, 0, 153, 0.1) 0%, transparent 70%);
  pointer-events: none;
}

.category-header .container {
  position: relative;
  z-index: 1;
}

.category-header h1 {
  font-size: 3rem;
  margin: 0.5rem 0 1rem;
  color: var(--color-white);
  font-weight: 800;
}

.category-header p {
  color: var(--color-text-soft);
  font-size: 1.125rem;
  max-width: 600px;
  margin: 0 auto;
}

.overline {
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.875rem;
  font-weight: 600;
  color: #ff0099; /* Magenta */
}

.section-content {
  padding-bottom: 4rem;
}

.news-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.empty-state {
  text-align: center;
  padding: 4rem 2rem;
  background: var(--color-background-soft);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-2xl);
  max-width: 600px;
  margin: 0 auto;
}

.icon-box {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: rgba(255, 0, 153, 0.1);
  border: 2px solid rgba(255, 0, 153, 0.3);
  border-radius: 50%;
  margin-bottom: 1.5rem;
  color: #ff0099;
}

.empty-state h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--color-white);
}

.empty-state p {
  margin-bottom: 2rem;
  color: var(--color-text-soft);
}

@media (max-width: 640px) {
  .category-header {
    padding: 6rem 0 3rem;
  }

  .category-header h1 {
    font-size: 2rem;
  }
}

@media (min-width: 640px) {
  .news-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .news-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
