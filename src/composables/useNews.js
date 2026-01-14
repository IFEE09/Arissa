import { ref, computed } from 'vue'

const generateArticles = () => {
  const categories = [
    { id: 'ia', name: 'Inteligencia Artificial', color: 'accent' },
    { id: 'gaming', name: 'Gaming', color: 'primary' },
    { id: 'startups', name: 'Startups', color: 'accent' },
    { id: 'negocios', name: 'Negocios', color: 'primary' },
    { id: 'ciberseguridad', name: 'Ciberseguridad', color: 'accent' },
    { id: 'mundo', name: 'Mundo', color: 'accent' },
  ]

  let allArticles = []
  let globalId = 1

  categories.forEach((cat) => {
    const titles = [
      `Avances Revolucionarios en ${cat.name}`,
      `El Futuro de ${cat.name}: Nuevas Perspectivas`,
      `Impacto Global de ${cat.name} en la Industria`,
      `Descubrimientos Recientes en ${cat.name}`,
    ]

    for (let i = 1; i <= 4; i++) {
      allArticles.push({
        id: globalId++,
        slug: `${cat.id}-noticia-${i}`,
        title: titles[i - 1],
        excerpt: `Explora los desarrollos más recientes y significativos en el campo de ${cat.name}. Un análisis detallado sobre cómo estas innovaciones están moldeando el futuro del sector.`,
        content: `
          <p>Este es el contenido detallado del artículo sobre <strong>${cat.name}</strong>.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <h3>Análisis Profundo</h3>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        `,
        image: `https://source.unsplash.com/random/800x600?${cat.id},tech&sig=${globalId}`, // Dynamic placeholder
        // Fallback images since source.unsplash might be deprecated or slow, let's use the ones we had or similar static ones if possible, but random string helps uniqueness.
        // Better: wrap standard images.
        category: cat.name,
        categoryId: cat.id,
        categoryColor: cat.color,
        author: 'Editor Arissa',
        date: '1 de Enero, 2026',
        readTime: `${3 + i} min lectura`,
      })
    }
  })

  // Add a specific featured one if needed, or just use the first one of IA as featured.
  // Let's add the specific featured one from before as the very first one (unshift) to keep HomeView looking good.
  allArticles.unshift({
    id: 0,
    slug: 'revolucion-realidad-mixta',
    title: 'El Futuro de la Realidad Mixta: Nuevos Horizontes en 2026',
    excerpt:
      'La próxima generación de dispositivos inmersivos promete revolucionar nuestra interacción digital con funciones de productividad avanzadas y mayor accesibilidad.',
    content: `<p>Contenido destacado...</p>`,
    image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=1200&q=80',
    category: 'Tecnología',
    categoryId: 'tecnologia',
    categoryColor: 'primary',
    author: 'María González',
    date: '1 de Enero, 2026',
    readTime: '5 min lectura',
  })

  return allArticles
}

const articles = ref(generateArticles())

export function useNews() {
  const latestNews = computed(() => articles.value.slice(1))
  const featuredArticle = computed(() => articles.value[0])

  const getArticleBySlug = (slug) => {
    return articles.value.find((article) => article.slug === slug)
  }

  const getArticlesByCategory = (categoryId) => {
    return articles.value.filter(
      (article) =>
        article.categoryId === categoryId ||
        article.category.toLowerCase() === categoryId.toLowerCase(),
    )
  }

  const trendingTopics = ref([
    { name: 'Inteligencia Artificial', count: 234, slug: 'ia' },
    { name: 'Tecnología Móvil', count: 189, slug: 'tecnologia' },
    { name: 'Gaming', count: 156, slug: 'gaming' },
    { name: 'Startups', count: 143, slug: 'startups' },
    { name: 'Ciberseguridad', count: 128, slug: 'ciberseguridad' },
  ])

  return {
    articles,
    latestNews,
    featuredArticle,
    trendingTopics,
    getArticleBySlug,
    getArticlesByCategory,
  }
}
