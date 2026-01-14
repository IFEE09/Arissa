<script setup>
import { ref, onMounted } from 'vue'
import ParticleCloud from '@/components/ParticleCloud.vue'
import { servicesAPI } from '@/services/api.js'

// Services from API
const services = ref([])
const isLoadingServices = ref(true)

// Typewriter effect
const typedText = ref('')
const words = [
  'Automatización',
  'Software a Medida',
  'Integraciones',
  'Inteligencia Artificial',
  'Dashboards',
]
let wordIndex = 0
let charIndex = 0
let isDeleting = false

const typeWriter = () => {
  const currentWord = words[wordIndex]

  if (isDeleting) {
    typedText.value = currentWord.substring(0, charIndex - 1)
    charIndex--
  } else {
    typedText.value = currentWord.substring(0, charIndex + 1)
    charIndex++
  }

  let typeSpeed = isDeleting ? 50 : 100

  if (!isDeleting && charIndex === currentWord.length) {
    typeSpeed = 2000
    isDeleting = true
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false
    wordIndex = (wordIndex + 1) % words.length
    typeSpeed = 500
  }

  setTimeout(typeWriter, typeSpeed)
}

// Load services from API
const loadServices = async () => {
  try {
    services.value = await servicesAPI.getAll()
  } catch (error) {
    console.error('Failed to load services:', error)
    // Fallback to static data if API fails
    services.value = [
      {
        id: 1,
        title: 'Automatización',
        description: 'Optimizamos tus flujos de trabajo eliminando tareas manuales.',
        icon: 'fa-solid fa-bolt',
      },
      {
        id: 2,
        title: 'Software a Medida',
        description: 'Desarrollamos soluciones escalables adaptadas a tu negocio.',
        icon: 'fa-solid fa-code',
      },
      {
        id: 3,
        title: 'Integraciones',
        description: 'Conectamos tus herramientas para un ecosistema unificado.',
        icon: 'fa-solid fa-link',
      },
      {
        id: 4,
        title: 'Bots Multitareas',
        description: 'Bots inteligentes que automatizan procesos 24/7.',
        icon: 'fa-solid fa-robot',
      },
      {
        id: 5,
        title: 'Bots para WhatsApp',
        description: 'Chatbots inteligentes para atención al cliente.',
        icon: 'fa-brands fa-whatsapp',
      },
    ]
  } finally {
    isLoadingServices.value = false
  }
}

onMounted(() => {
  setTimeout(typeWriter, 1000)
  loadServices()
})
</script>

<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content animate-fadeIn">
          <span class="hero-badge badge badge-accent">Soluciones Empresariales</span>
          <h1>
            Arissa
            <br />
            <span class="hero-tagline">
              Expertos en
              <span class="text-gradient typewriter-container">
                <span class="typewriter-text">{{ typedText }}</span>
                <span class="typewriter-cursor">|</span>
              </span>
            </span>
          </h1>

          <!-- Particle Cloud Component (Moved inside content for better flow control) -->
          <div class="particle-wrapper">
            <ParticleCloud :count="1500" />
          </div>

          <p class="hero-subtitle">
            Transformamos tu empresa con software a la medida y automatizaciones inteligentes.
            Elimina tareas repetitivas, optimiza procesos y escala tu negocio con tecnología de
            vanguardia.
          </p>
          <div class="hero-actions">
            <button class="btn btn-primary btn-lg">
              Agendar Consulta
              <i class="fa-solid fa-calendar"></i>
            </button>
            <router-link to="/casos-de-exito" class="btn btn-outline"
              >Ver Casos de Éxito</router-link
            >
          </div>
        </div>

        <!-- Stats -->
        <div class="hero-stats">
          <div class="stat">
            <span class="stat-value">+500</span>
            <span class="stat-label">Procesos Automatizados</span>
          </div>
          <div class="stat">
            <span class="stat-value">98%</span>
            <span class="stat-label">Eficiencia Operativa</span>
          </div>
          <div class="stat">
            <span class="stat-value">10x</span>
            <span class="stat-label">ROI Promedio</span>
          </div>
        </div>
      </div>

      <!-- Decorative elements -->
      <div class="hero-bg-gradient"></div>
      <div class="hero-bg-pattern"></div>
    </section>

    <!-- Services Section -->
    <section class="section-services">
      <div class="container">
        <div class="section-header">
          <h2><i class="fa-solid fa-rocket"></i> Nuestros Servicios</h2>
        </div>

        <!-- Loading State -->
        <div v-if="isLoadingServices" class="services-loading">
          <i class="fa-solid fa-spinner fa-spin"></i>
          <p>Cargando servicios...</p>
        </div>

        <!-- Services Grid -->
        <div v-else class="services-grid">
          <div v-for="service in services" :key="service.id" class="service-card">
            <div class="service-icon">
              <i :class="service.icon"></i>
            </div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
            <span class="service-cta">Conocer más <i class="fa-solid fa-arrow-right"></i></span>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Stories Section - Maintenance -->
    <section class="section-success">
      <div class="container">
        <div class="section-header">
          <h2><i class="fa-solid fa-trophy"></i> Casos de Éxito</h2>
        </div>
        <div class="maintenance-card">
          <div class="maintenance-icon">
            <i class="fa-solid fa-gear fa-spin"></i>
          </div>
          <h3>Sección en Mantenimiento</h3>
          <p>Estamos preparando algo increíble para ti. Próximamente.</p>
        </div>
      </div>
    </section>

    <!-- Featured Article - Maintenance -->
    <section class="section-featured">
      <div class="container">
        <div class="section-header">
          <h2><i class="fa-solid fa-fire"></i> Destacado</h2>
        </div>
        <div class="maintenance-card">
          <div class="maintenance-icon">
            <i class="fa-solid fa-wand-magic-sparkles fa-bounce"></i>
          </div>
          <h3>Contenido en Desarrollo</h3>
          <p>Nuestro equipo está trabajando en artículos exclusivos.</p>
        </div>
      </div>
    </section>

    <!-- Latest News - Maintenance -->
    <section class="section-latest">
      <div class="container">
        <div class="section-header">
          <h2><i class="fa-solid fa-newspaper"></i> Últimas Noticias</h2>
        </div>
        <div class="maintenance-card">
          <div class="maintenance-icon">
            <i class="fa-solid fa-feather-pointed fa-shake"></i>
          </div>
          <h3>Blog Próximamente</h3>
          <p>Nuestro blog de tecnología y automatización está en camino.</p>
        </div>
      </div>
    </section>

    <!-- Trending - Maintenance -->
    <section class="section-trending">
      <div class="container">
        <div class="section-header" style="border-bottom: none">
          <h2><i class="fa-solid fa-chart-line"></i> Tendencias</h2>
        </div>
        <div class="maintenance-card">
          <div class="maintenance-icon">
            <i class="fa-solid fa-chart-simple fa-fade"></i>
          </div>
          <h3>Análisis en Proceso</h3>
          <p>Estamos recopilando las tendencias más relevantes del sector.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  overflow-x: hidden;
}

/* Hero Section */
.hero {
  position: relative;
  padding: 5rem 0 4rem;
  overflow: hidden;
  background: var(--color-background);
}

.hero-content {
  max-width: 800px;
  position: relative;
  z-index: 2;
}

.hero-badge {
  margin-bottom: 2rem;
  background: rgba(9, 52, 122, 0.2);
  color: #a0c4ff;
  border: 1px solid rgba(9, 52, 122, 0.4);
}

.hero h1 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-main);
}

.hero-tagline {
  font-size: 0.57em;
  font-weight: 500;
  letter-spacing: normal;
  text-transform: none;
  display: block;
  margin-top: 0.5rem;
}

.hero-subtitle {
  font-family: 'Manrope', sans-serif;
  font-size: 1.25rem;
  color: #ffffff; /* pure white for maximum legibility */
  line-height: 1.8;
  margin-bottom: 2.5rem;
  max-width: 600px;
  font-weight: 300;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5); /* subtle shadow to pop more */
}

/* Typewriter */
.typewriter-container {
  display: inline-block;
  color: var(--color-action);
  min-width: 200px;
  font-family: 'Space Grotesk', monospace;
}

.typewriter-cursor {
  display: inline-block;
  margin-left: 4px;
  color: var(--color-action);
  animation: blink 1s infinite;
}

@keyframes blink {
  0%,
  50% {
    opacity: 1;
  }
  51%,
  100% {
    opacity: 0;
  }
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.btn-lg {
  padding: 1rem 2.5rem;
  font-size: 1rem;
}

/* Hero Stats */
.hero-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid var(--color-border-subtle);
}

.stat {
  display: flex;
  flex-direction: column;
}

.stat-value {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-text-main);
  letter-spacing: -0.05em;
  line-height: 1;
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-muted);
}

/* Hero Background */
.hero-bg-pattern {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-image:
    linear-gradient(var(--color-border-subtle) 1px, transparent 1px),
    linear-gradient(90deg, var(--color-border-subtle) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.05;
  pointer-events: none;
  z-index: 0;
}

.hero-bg-gradient {
  position: absolute;
  top: 20%;
  right: -10%;
  width: 50%;
  height: 80%;
  background: radial-gradient(circle, rgba(9, 52, 122, 0.15) 0%, transparent 70%);
  filter: blur(60px);
  pointer-events: none;
  z-index: 0;
}

/* Particle Wrapper - Desktop Layout */
.particle-wrapper {
  position: absolute;
  top: 50%;
  right: -25vw; /* Off-center to the right */
  transform: translateY(-50%);
  width: 60vw;
  height: 90vh;
  z-index: 1;
  opacity: 0.8;
  pointer-events: none;
}

@media (max-width: 1023px) {
  .hero {
    flex-direction: column;
    padding-top: 2rem;
    height: auto;
    min-height: auto;
    text-align: center;
  }

  .hero-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1rem 4rem;
    max-width: 100%;
  }

  /* Particles strictly BELOW "Expertos en..." and ABOVE the subtitle */
  .particle-wrapper {
    position: relative;
    top: auto;
    right: auto;
    transform: none;
    width: 100%;
    height: 320px; /* Space dedicated only to particles */
    margin: 1.5rem 0;
    opacity: 1;
    z-index: 1;
  }

  .hero-subtitle {
    margin-left: auto;
    margin-right: auto;
    color: #ffffff;
    opacity: 1;
    font-size: 1.15rem;
  }

  .hero-actions {
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-width: 320px;
  }

  .hero-bg-gradient {
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.15;
  }
}

/* Section Headers */
.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 1rem;
}

.section-header h2 {
  margin-bottom: 0;
}

/* Services Section */
.section-services {
  padding: 4rem 0;
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border-subtle);
}

.services-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.service-card {
  background: rgba(31, 40, 51, 0.5);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 2.5rem 2rem;
  transition: all var(--transition-normal);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  overflow: hidden;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, var(--color-action), var(--color-brand));
  opacity: 0;
  transition: opacity var(--transition-fast);
}

.service-card:hover {
  background: rgba(31, 40, 51, 0.8);
  border-color: var(--color-action);
  transform: translateY(-8px);
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.3),
    0 0 30px rgba(102, 252, 241, 0.1);
}

.service-card:hover::before {
  opacity: 1;
}

.service-icon {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(102, 252, 241, 0.15), rgba(9, 52, 122, 0.2));
  border: 1px solid rgba(102, 252, 241, 0.2);
  border-radius: var(--radius-md);
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  color: var(--color-action);
  transition: all var(--transition-normal);
}

.service-card:hover .service-icon {
  background: linear-gradient(135deg, rgba(102, 252, 241, 0.25), rgba(9, 52, 122, 0.3));
  transform: scale(1.1);
  box-shadow: 0 0 20px rgba(102, 252, 241, 0.3);
}

.service-card h3 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--color-text-main);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.service-card p {
  color: var(--color-text-muted);
  line-height: 1.7;
  font-size: 0.95rem;
  flex: 1;
  margin-bottom: 1.5rem;
}

.service-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-action);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  opacity: 0;
  transform: translateY(10px);
  transition: all var(--transition-normal);
}

.service-card:hover .service-cta {
  opacity: 1;
  transform: translateY(0);
}

.service-card:hover .service-cta i {
  transform: translateX(5px);
}

/* Other Sections */
.section-success,
.section-featured,
.section-latest,
.section-trending {
  padding: 4rem 0;
  background: var(--color-background);
}

/* Maintenance Card */
.maintenance-card {
  background: rgba(31, 40, 51, 0.3);
  border: 1px dashed var(--color-border);
  border-radius: var(--radius-lg);
  padding: 4rem 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.maintenance-icon {
  font-size: 3rem;
  color: var(--color-action);
  margin-bottom: 1rem;
}

.maintenance-card h3 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text-main);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.maintenance-card p {
  color: var(--color-text-muted);
  font-size: 1rem;
  max-width: 400px;
}

/* Responsive */
@media (min-width: 480px) {
  .hero h1 {
    font-size: 3rem;
  }
  .stat-value {
    font-size: 2.25rem;
  }
}

@media (min-width: 640px) {
  .hero h1 {
    font-size: 4rem;
  }
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .hero {
    padding: 10rem 0 8rem;
  }
  .hero h1 {
    font-size: 5rem;
  }
  .services-grid {
    grid-template-columns: repeat(3, 1fr); /* 3 columns for better balance with 5 items */
  }
  .hero-stats {
    gap: 4rem;
  }
}
</style>
