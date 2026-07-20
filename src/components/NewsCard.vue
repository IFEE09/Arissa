<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  article: {
    type: Object,
    required: true,
  },
  variant: {
    type: String,
    default: 'default', // 'default', 'featured', 'compact'
    validator: (v) => ['default', 'featured', 'compact'].includes(v),
  },
})
</script>

<template>
  <article class="news-card" :class="[`news-card--${variant}`]">
    <RouterLink :to="`/articulo/${article.slug}`" class="card-link">
      <!-- Image -->
      <div class="card-image">
        <img :src="article.image" :alt="article.title" loading="lazy" />
        <span class="card-category badge" :class="`badge-${article.categoryColor || 'primary'}`">
          {{ article.category }}
        </span>
      </div>

      <!-- Content -->
      <div class="card-content">
        <h3 class="card-title">{{ article.title }}</h3>
        <p v-if="variant !== 'compact'" class="card-excerpt">
          {{ article.excerpt }}
        </p>
        <div class="card-meta">
          <span class="card-author">{{ article.author }}</span>
          <span class="card-divider">•</span>
          <span class="card-time">{{ article.readTime }}</span>
        </div>
      </div>
    </RouterLink>
  </article>
</template>

<style scoped>
.news-card {
  background: var(--color-background-soft); /* Dark gray instead of white */
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-smooth);
}

.news-card:hover {
  transform: translateY(-6px) scale(1.02);
  box-shadow: 0 10px 30px rgba(13, 92, 90, 0.15);
  border-color: var(--color-action);
}

.card-link {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  height: 100%;
}

/* Image */
.card-image {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.news-card:hover .card-image img {
  transform: scale(1.05);
}

.card-category {
  position: absolute;
  top: 1rem;
  left: 1rem;
}

/* Content */
.card-content {
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.card-title {
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.4;
  color: var(--color-white); /* White text for dark background */
  margin-bottom: 0.75rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-excerpt {
  font-size: 0.875rem;
  color: var(--color-text-soft); /* Light gray for readability */
  line-height: 1.6;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
}

.card-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: var(--color-text-muted);
}

.card-divider {
  opacity: 0.5;
}

/* Featured Variant */
.news-card--featured {
  grid-column: span 2;
}

.news-card--featured .card-image {
  aspect-ratio: 4 / 1; /* Thin banner style */
}

.news-card--featured .card-title {
  font-size: 1.5rem;
}

.news-card--featured .card-excerpt {
  font-size: 1rem;
  -webkit-line-clamp: 3;
}

/* Compact Variant */
.news-card--compact .card-link {
  flex-direction: row;
}

.news-card--compact .card-image {
  width: 120px;
  min-width: 120px;
  aspect-ratio: 1;
}

.news-card--compact .card-content {
  padding: 1rem;
}

.news-card--compact .card-title {
  font-size: 0.938rem;
  margin-bottom: 0.5rem;
}

.news-card--compact .card-category {
  top: 0.5rem;
  left: 0.5rem;
  font-size: 0.625rem;
  padding: 0.125rem 0.375rem;
}

/* Responsive */
@media (max-width: 768px) {
  .news-card--featured {
    grid-column: span 1;
  }

  .news-card--featured .card-image {
    aspect-ratio: 16 / 9;
  }

  .news-card--featured .card-title {
    font-size: 1.25rem;
  }
}
</style>
