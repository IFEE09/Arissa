<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import ParticleCloud from '@/components/ParticleCloud.vue'

// Typewriter effect — focused on the three core offers
const typedText = ref('')
const words = [
  'Captación Digital',
  'Sistemas a Medida',
  'Integración de Procesos',
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
    typeSpeed = 2500
    isDeleting = true
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false
    wordIndex = (wordIndex + 1) % words.length
    typeSpeed = 500
  }

  setTimeout(typeWriter, typeSpeed)
}

// Three core offerings — static, no API dependency
const offerings = [
  {
    id: 1,
    title: 'Captación Digital para Clínicas',
    description:
      'Landing pages de alta conversión con agenda, seguimiento de prospectos y conexión directa a tu CRM. Más solicitudes calificadas, menos citas perdidas.',
    icon: 'fa-solid fa-stethoscope',
    features: ['Landing optimizada por especialidad', 'Agenda y confirmaciones automáticas', 'Seguimiento de prospectos', 'Tablero de resultados'],
    tag: 'Desde $2,000 USD',
  },
  {
    id: 2,
    title: 'Sistemas Operativos a Medida',
    description:
      'Digitalizamos el flujo crítico de tu operación: cotizaciones, pedidos, aprobaciones, inventario, reportes. Menos retrabajo, mayor trazabilidad y control total.',
    icon: 'fa-solid fa-code',
    features: ['Dashboard con roles y permisos', 'Reglas de negocio y aprobaciones', 'Trazabilidad de procesos', 'Reportes en tiempo real'],
    tag: 'Proyectos por fases',
  },
  {
    id: 3,
    title: 'Optimización e Integración',
    description:
      'Conectamos las herramientas que ya usas —CRM, correo, hojas de cálculo, ERP— para que la información fluya sin captura manual ni errores de copiado.',
    icon: 'fa-solid fa-link',
    features: ['Integración entre sistemas existentes', 'Eliminación de tareas manuales', 'Sincronización de datos', 'Alertas y notificaciones'],
    tag: 'Sprint de 4–6 semanas',
  },
]

// Process steps
const steps = [
  {
    number: '01',
    title: 'Diagnóstico',
    description:
      'Mapeamos tu proceso actual, identificamos fricciones y definimos el indicador de éxito. 1–2 semanas, pagado y acreditable al proyecto.',
    icon: 'fa-solid fa-magnifying-glass-chart',
  },
  {
    number: '02',
    title: 'Sprint de Automatización',
    description:
      'Implementamos un flujo crítico conectado y probado en 4–6 semanas. Tu equipo empieza a usarlo desde la primera semana.',
    icon: 'fa-solid fa-bolt',
  },
  {
    number: '03',
    title: 'Sistema a Medida',
    description:
      'Construimos el módulo completo con roles, reglas, trazabilidad e integraciones. Entrega por fases con demostración semanal.',
    icon: 'fa-solid fa-layer-group',
  },
  {
    number: '04',
    title: 'Continuidad',
    description:
      'Soporte, monitoreo, mejoras priorizadas y evolución. Tu sistema sigue mejorando sin empezar de cero cada vez.',
    icon: 'fa-solid fa-infinity',
  },
]

// UI/UX differentiator section
const differentiators = [
  {
    title: 'Diseño que tu equipo puede usar',
    description:
      'No entregamos software que nadie quiere abrir. Cada interfaz se diseña para que el equipo la adopte desde el primer día, sin manual de 200 páginas.',
    icon: 'fa-solid fa-pen-ruler',
  },
  {
    title: 'Arquitectura que crece contigo',
    description:
      'Construimos sobre stack moderno —Vue, Node, PostgreSQL— con código limpio, documentado y mantenible. No te encerramos: tú eres dueño de tu sistema.',
    icon: 'fa-solid fa-cubes',
  },
  {
    title: 'Resultados medibles',
    description:
      'Cada proyecto parte de una línea base: tiempo, error, volumen o atraso. Al cierre comparamos antes y después. Si no hay mejora, no terminó.',
    icon: 'fa-solid fa-chart-line',
  },
]

// Dynamic Particle Count
const particleCount = ref(400)
const updateParticleCount = () => {
  particleCount.value = window.innerWidth >= 1024 ? 800 : 400
}

onMounted(() => {
  setTimeout(typeWriter, 1000)
  updateParticleCount()
  window.addEventListener('resize', updateParticleCount)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateParticleCount)
})
</script>

<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content animate-fadeIn">
          <span class="hero-badge badge badge-accent">Software Empresarial a la Medida</span>
          <h1>
            Arissa
            <br />
            <span class="hero-tagline">
              Diseñamos y construimos
              <span class="text-gradient typewriter-container">
                <span class="typewriter-text">{{ typedText }}</span>
                <span class="typewriter-cursor">|</span>
              </span>
            </span>
          </h1>

          <div class="particle-wrapper">
            <ParticleCloud :count="particleCount" />
          </div>

          <p class="hero-subtitle">
            Sistemas digitales a la medida para clínicas y empresas que necesitan captar mejor,
            operar con menos fricción y conectar sus herramientas. Diseño que tu equipo adopta,
            arquitectura que crece contigo.
          </p>
          <div class="hero-actions">
            <a href="#diagnostico" class="btn btn-primary btn-lg">
              Agendar Diagnóstico
              <i class="fa-solid fa-calendar"></i>
            </a>
            <a href="#servicios" class="btn btn-outline btn-lg">Ver Soluciones</a>
          </div>
        </div>

        <!-- Stats -->
        <div class="hero-stats">
          <div class="stat">
            <span class="stat-value">3</span>
            <span class="stat-label">Ofertas Enfocadas</span>
          </div>
          <div class="stat">
            <span class="stat-value">$2K+</span>
            <span class="stat-label">Ticket Mínimo</span>
          </div>
          <div class="stat">
            <span class="stat-value">4–6</span>
            <span class="stat-label">Semanas por Sprint</span>
          </div>
        </div>
      </div>

      <div class="hero-bg-gradient"></div>
      <div class="hero-bg-pattern"></div>
    </section>

    <!-- Offerings Section -->
    <section id="servicios" class="section-services">
      <div class="container">
        <div class="section-header">
          <h2><i class="fa-solid fa-rocket"></i> Lo que hacemos</h2>
        </div>

        <div class="offerings-grid">
          <div v-for="offering in offerings" :key="offering.id" class="offering-card">
            <div class="offering-header">
              <div class="offering-icon">
                <i :class="offering.icon"></i>
              </div>
              <span class="offering-tag">{{ offering.tag }}</span>
            </div>
            <h3>{{ offering.title }}</h3>
            <p>{{ offering.description }}</p>
            <ul class="offering-features">
              <li v-for="feature in offering.features" :key="feature">
                <i class="fa-solid fa-check"></i>
                {{ feature }}
              </li>
            </ul>
            <a href="#diagnostico" class="offering-cta">
              Conocer más <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section id="proceso" class="section-process">
      <div class="container">
        <div class="section-header">
          <h2><i class="fa-solid fa-route"></i> Cómo trabajamos</h2>
        </div>

        <div class="process-grid">
          <div v-for="step in steps" :key="step.number" class="process-card">
            <div class="process-number">{{ step.number }}</div>
            <div class="process-icon">
              <i :class="step.icon"></i>
            </div>
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Differentiators Section -->
    <section id="diferenciadores" class="section-differentiators">
      <div class="container">
        <div class="section-header">
          <h2><i class="fa-solid fa-gem"></i> Por qué Arissa</h2>
        </div>

        <div class="differentiators-grid">
          <div v-for="item in differentiators" :key="item.title" class="differentiator-card">
            <div class="differentiator-icon">
              <i :class="item.icon"></i>
            </div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA: Diagnóstico -->
    <section id="diagnostico" class="section-cta">
      <div class="container">
        <div class="cta-card">
          <div class="cta-content">
            <span class="cta-badge badge badge-accent">Primer paso</span>
            <h2>Agenda tu diagnóstico de operación</h2>
            <p>
              En 1–2 semanas mapeamos tu proceso actual, identificamos las fricciones que más te
              cuestan y te entregamos un plan de implementación priorizado. El diagnóstico es pagado
              y se acredita al proyecto cuando decidas avanzar.
            </p>
            <div class="cta-actions">
              <a href="mailto:hola@arissa.dev?subject=Diagnóstico%20de%20operación" class="btn btn-primary btn-lg">
                Solicitar Diagnóstico
                <i class="fa-solid fa-arrow-right"></i>
              </a>
              <a href="#servicios" class="btn btn-outline btn-lg">Ver Soluciones Primero</a>
            </div>
          </div>
          <div class="cta-visual">
            <ParticleCloud :count="200" />
          </div>
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
  background: rgba(13, 92, 90, 0.15);
  color: var(--color-action);
  border: 1px solid rgba(13, 92, 90, 0.4);
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
  color: #ffffff;
  line-height: 1.8;
  margin-bottom: 2.5rem;
  max-width: 600px;
  font-weight: 300;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

/* Typewriter */
.typewriter-container {
  display: inline-block;
  color: var(--color-action);
  min-width: 280px;
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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid var(--color-border-subtle);
}

.stat {
  display: flex;
  flex-direction: column;
}

@media (max-width: 767px) {
  .hero-stats {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .hero-stats {
    gap: 0.5rem;
  }
  .stat-value {
    font-size: 1.75rem !important;
  }
  .stat-label {
    font-size: 0.65rem !important;
  }
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
  background: radial-gradient(circle, rgba(26, 77, 143, 0.15) 0%, transparent 70%);
  filter: blur(60px);
  pointer-events: none;
  z-index: 0;
}

/* Particle Wrapper */
.particle-wrapper {
  position: absolute;
  top: 50%;
  left: 110%;
  transform: translateY(-50%);
  width: 50vw;
  height: 80vh;
  z-index: 1;
  opacity: 0.8;
  pointer-events: none;
  display: block;
}

@media (max-width: 1023px) {
  .hero {
    flex-direction: column;
    padding-top: 3rem;
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

  .particle-wrapper {
    position: relative;
    top: auto;
    left: auto;
    right: auto;
    transform: none;
    width: 100%;
    height: 320px;
    margin: 1rem 0;
    opacity: 1;
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

/* Offerings Section */
.section-services {
  padding: 4rem 0;
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border-subtle);
}

.offerings-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.offering-card {
  background: rgba(26, 26, 46, 0.4);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-lg);
  padding: 2.5rem 2rem;
  transition: all var(--transition-smooth);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  overflow: hidden;
}

.offering-card::before {
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

.offering-card:hover {
  background: rgba(26, 26, 46, 0.7);
  border-color: var(--color-action);
  transform: translateY(-5px) scale(1.01);
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.4),
    0 0 20px rgba(13, 92, 90, 0.05);
}

.offering-card:hover::before {
  opacity: 1;
}

.offering-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1.5rem;
}

.offering-icon {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(13, 92, 90, 0.15), rgba(26, 77, 143, 0.15));
  border: 1px solid rgba(13, 92, 90, 0.2);
  border-radius: var(--radius-md);
  font-size: 1.5rem;
  color: var(--color-action);
  transition: all var(--transition-smooth);
}

.offering-card:hover .offering-icon {
  background: linear-gradient(135deg, rgba(13, 92, 90, 0.3), rgba(26, 77, 143, 0.25));
  transform: scale(1.1);
  box-shadow: 0 0 20px rgba(13, 92, 90, 0.3);
}

.offering-tag {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-action);
  background: rgba(13, 92, 90, 0.12);
  border: 1px solid rgba(13, 92, 90, 0.3);
  border-radius: 99px;
  padding: 0.3rem 0.8rem;
  white-space: nowrap;
}

.offering-card h3 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--color-text-main);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.offering-card p {
  color: var(--color-text-muted);
  line-height: 1.7;
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
}

.offering-features {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  width: 100%;
}

.offering-features li {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-family: 'Manrope', sans-serif;
  font-size: 0.9rem;
  color: var(--color-text-muted);
  padding: 0.4rem 0;
  border-bottom: 1px solid rgba(42, 42, 74, 0.3);
}

.offering-features li:last-child {
  border-bottom: none;
}

.offering-features li i {
  color: var(--color-action);
  font-size: 0.75rem;
  flex-shrink: 0;
}

.offering-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-action);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-decoration: none;
  transition: all var(--transition-smooth);
  margin-top: auto;
}

.offering-card:hover .offering-cta {
  text-shadow: 0 0 8px var(--color-action-glow);
}

.offering-card:hover .offering-cta i {
  transform: translateX(5px);
}

/* Process Section */
.section-process {
  padding: 4rem 0;
  background: var(--color-background);
  border-bottom: 1px solid var(--color-border-subtle);
}

.process-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.process-card {
  background: rgba(26, 26, 46, 0.3);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-lg);
  padding: 2.5rem 2rem;
  position: relative;
  overflow: hidden;
  transition: all var(--transition-smooth);
}

.process-card:hover {
  border-color: var(--color-action);
  background: rgba(26, 26, 46, 0.5);
  transform: translateY(-3px);
}

.process-number {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 3rem;
  font-weight: 700;
  color: rgba(13, 92, 90, 0.2);
  position: absolute;
  top: 0.5rem;
  right: 1rem;
  line-height: 1;
}

.process-icon {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(13, 92, 90, 0.12), rgba(26, 77, 143, 0.12));
  border: 1px solid rgba(13, 92, 90, 0.2);
  border-radius: var(--radius-md);
  font-size: 1.25rem;
  color: var(--color-action);
  margin-bottom: 1.5rem;
}

.process-card h3 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: var(--color-text-main);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.process-card p {
  color: var(--color-text-muted);
  line-height: 1.7;
  font-size: 0.9rem;
  margin-bottom: 0;
}

/* Differentiators Section */
.section-differentiators {
  padding: 4rem 0;
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border-subtle);
}

.differentiators-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.differentiator-card {
  background: rgba(11, 12, 16, 0.5);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-lg);
  padding: 2.5rem 2rem;
  transition: all var(--transition-smooth);
}

.differentiator-card:hover {
  border-color: var(--color-action);
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.differentiator-icon {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(13, 92, 90, 0.12), rgba(26, 77, 143, 0.12));
  border: 1px solid rgba(13, 92, 90, 0.2);
  border-radius: var(--radius-md);
  font-size: 1.25rem;
  color: var(--color-action);
  margin-bottom: 1.5rem;
}

.differentiator-card h3 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: var(--color-text-main);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.differentiator-card p {
  color: var(--color-text-muted);
  line-height: 1.7;
  font-size: 0.9rem;
  margin-bottom: 0;
}

/* CTA Section */
.section-cta {
  padding: 4rem 0;
  background: var(--color-background);
}

.cta-card {
  background: linear-gradient(135deg, rgba(26, 26, 46, 0.6), rgba(26, 77, 143, 0.15));
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 3rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  position: relative;
  overflow: hidden;
}

.cta-content {
  flex: 1;
  position: relative;
  z-index: 2;
}

.cta-badge {
  margin-bottom: 1.5rem;
}

.cta-content h2 {
  margin-bottom: 1rem;
}

.cta-content p {
  font-size: 1.05rem;
  line-height: 1.8;
  max-width: 500px;
  margin-bottom: 2rem;
}

.cta-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.cta-visual {
  width: 300px;
  height: 300px;
  position: relative;
  flex-shrink: 0;
  opacity: 0.6;
}

@media (max-width: 1023px) {
  .cta-card {
    flex-direction: column;
    text-align: center;
    padding: 2.5rem 1.5rem;
  }

  .cta-content p {
    margin-left: auto;
    margin-right: auto;
  }

  .cta-actions {
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-width: 320px;
  }

  .cta-visual {
    display: none;
  }
}

/* Responsive Grids */
@media (min-width: 640px) {
  .hero h1 {
    font-size: 4rem;
  }
  .offerings-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .process-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .differentiators-grid {
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
  .offerings-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .process-grid {
    grid-template-columns: repeat(4, 1fr);
  }
  .differentiators-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .hero-stats {
    gap: 4rem;
  }
}
</style>
