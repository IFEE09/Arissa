<script setup>
import { useNews } from '@/composables/useNews'
import NewsCard from '@/components/NewsCard.vue'

const { getArticlesByCategory } = useNews()

// Define sections
const sections = [
  { id: 'ia', title: 'Inteligencia Artificial', color: 'accent' },
  { id: 'gaming', title: 'Gaming', color: 'primary' },
  { id: 'startups', title: 'Startups', color: 'accent' },
  { id: 'negocios', title: 'Negocios', color: 'primary' },
  { id: 'ciberseguridad', title: 'Ciberseguridad', color: 'accent' }
]

// Fetch articles for each section
const getCategoryArticles = (categoryId) => {
    return getArticlesByCategory(categoryId).slice(0, 4) // Limit to 4 if more exist
}
</script>

<template>
  <div class="explore-view">
    <div class="explore-header">
      <div class="container">
        <h1>Explorar Noticias</h1>
      </div>
    </div>

    <div class="container">
      <section v-for="section in sections" :key="section.id" class="section-category">
        <div class="section-header">
           <h2 :class="`text-${section.color}`">{{ section.title }}</h2>
           <router-link :to="`/categoria/${section.id}`" class="view-all">Ver Más</router-link>
        </div>
        <div class="news-grid">
           <NewsCard 
             v-for="article in getCategoryArticles(section.id)" 
             :key="article.id" 
             :article="article" 
             variant="default"
           />
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.explore-header {
  background: var(--color-background-soft);
  padding: 4rem 0;
  margin-bottom: 3rem;
  text-align: center;
}

.explore-header h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.section-category {
    margin-bottom: 5rem;
}

.section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--color-border-light);
}

.section-header h2 {
    font-size: 1.75rem;
    position: relative;
}

/* Add color indicators to headers */
.text-primary {
    color: var(--color-primary-dark);
}

.text-accent {
    color: var(--color-accent-dark);
}

.news-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.view-all {
    font-weight: 600;
    color: var(--color-text-muted);
}

@media (min-width: 640px) {
  .news-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .news-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
