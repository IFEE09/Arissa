<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import ParticleCloud from './ParticleCloud.vue'

const isMenuOpen = ref(false)
const isScrolledPastHero = ref(false)
const isMobile = ref(false)

const mainLinks = [
  { name: 'Inicio', path: '/' },
  { name: 'Sistemas', path: '/sistemas-a-medida' },
  { name: 'Clínicas', path: '/captacion-digital-clinicas' },
  { name: 'Integración', path: '/integracion-procesos' },
  { name: 'Blog', path: '/blog' },
  { name: 'Recursos', path: '/recursos' },
  { name: 'Portafolio', path: '/portafolio' },
]

/** En móvil el círculo de partículas siempre; en desktop solo tras pasar el hero */
const showParticles = computed(() => isMobile.value || isScrolledPastHero.value)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

let ticking = false
let mobileMq

const updateMobile = () => {
  isMobile.value = mobileMq?.matches ?? window.innerWidth < 768
}

const handleScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const heroHeight = window.innerHeight * 0.8
      isScrolledPastHero.value = window.scrollY > heroHeight
      ticking = false
    })
    ticking = true
  }
}

onMounted(() => {
  mobileMq = window.matchMedia('(max-width: 767px)')
  updateMobile()
  mobileMq.addEventListener('change', updateMobile)
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  mobileMq?.removeEventListener('change', updateMobile)
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header class="header">
    <div class="container header-content">
      <!-- Izquierda: partículas -->
      <div class="header-left">
        <div v-if="showParticles" class="logo-particles-cloud" aria-hidden="true">
          <ParticleCloud :count="40" :mini="true" />
        </div>
      </div>

      <!-- Centro (móvil) / marca: isotipo + ARISSA -->
      <RouterLink to="/" class="brand" aria-label="Arissa — inicio">
        <svg
          class="brand-iso"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <!-- Arcos del círculo (con huecos para la aguja) -->
          <path
            d="M20.5 18.5a18.5 18.5 0 0 0 0 27"
            fill="none"
            stroke="currentColor"
            stroke-width="5.5"
            stroke-linecap="butt"
          />
          <path
            d="M43.5 18.5a18.5 18.5 0 0 1 0 27"
            fill="none"
            stroke="currentColor"
            stroke-width="5.5"
            stroke-linecap="butt"
          />
          <!-- Aguja / diamante vertical -->
          <path d="M32 6 L37.2 32 L32 58 L26.8 32 Z" fill="currentColor" />
        </svg>
        <span class="brand-name">ARISSA</span>
      </RouterLink>

      <!-- Derecha: nav desktop + CTA + hamburguesa -->
      <div class="header-right">
        <nav class="nav-desktop">
          <RouterLink v-for="link in mainLinks" :key="link.path" :to="link.path" class="nav-link">
            {{ link.name }}
          </RouterLink>
        </nav>

        <div class="header-actions">
          <RouterLink to="/diagnostico" class="btn btn-primary btn-subscribe">
            <span>Agendar Diagnóstico</span>
          </RouterLink>
        </div>

        <button
          class="menu-toggle"
          type="button"
          :class="{ open: isMenuOpen }"
          :aria-expanded="isMenuOpen"
          aria-label="Menú"
          @click="toggleMenu"
        >
          <span class="menu-toggle-lines" aria-hidden="true">
            <span class="menu-line"></span>
            <span class="menu-line"></span>
            <span class="menu-line"></span>
          </span>
        </button>
      </div>
    </div>

    <nav class="nav-mobile" :class="{ open: isMenuOpen }">
      <RouterLink
        v-for="link in mainLinks"
        :key="link.path"
        :to="link.path"
        class="nav-link-mobile"
        @click="isMenuOpen = false"
      >
        {{ link.name }}
      </RouterLink>

      <RouterLink
        to="/diagnostico"
        class="btn btn-primary"
        style="width: 100%; margin-top: 1rem"
        @click="isMenuOpen = false"
        >Agendar Diagnóstico</RouterLink
      >
    </nav>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: var(--glass-bg-strong);
  backdrop-filter: blur(var(--glass-blur)) saturate(1.35);
  -webkit-backdrop-filter: blur(var(--glass-blur)) saturate(1.35);
  border-bottom: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow);
}

.header-content {
  display: grid;
  grid-template-columns: 48px 1fr 48px;
  align-items: center;
  height: 72px;
  gap: 0.5rem;
}

.header-left {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-height: 48px;
}

.logo-particles-cloud {
  width: 44px;
  height: 44px;
  position: relative;
  background: radial-gradient(circle, rgba(13, 92, 90, 0.18) 0%, transparent 70%);
  border-radius: 50%;
}

/* Marca centrada en móvil */
.brand {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  text-decoration: none;
  color: var(--color-text-main);
  justify-self: center;
  z-index: 1;
}

.brand:hover {
  color: var(--color-text-main);
  text-shadow: none;
}

.brand-iso {
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  color: var(--color-text-main);
}

.brand-name {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  line-height: 1;
  padding-left: 0.05em; /* equilibra el tracking al final */
}

.header-right {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
}

.nav-desktop {
  display: none;
  align-items: center;
  gap: 1.35rem;
}

.nav-link {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-muted);
  transition: all var(--transition-smooth);
  position: relative;
  padding: 0.5rem 0;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background-color: var(--color-action);
  transition: width var(--transition-smooth);
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--color-text-main);
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  width: 100%;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.btn-subscribe {
  display: none;
}

/* Hamburguesa fina / glass */
.menu-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  padding: 0;
  border-radius: 12px;
  border: 1px solid var(--glass-border);
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  cursor: pointer;
  position: relative;
  z-index: 1001;
  transition:
    background var(--transition-fast),
    border-color var(--transition-fast);
}

.menu-toggle:hover {
  background: rgba(255, 255, 255, 0.07);
  border-color: rgba(255, 255, 255, 0.14);
}

.menu-toggle:focus-visible {
  outline: 1px solid var(--color-action);
  outline-offset: 2px;
}

.menu-toggle-lines {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 18px;
  height: 14px;
}

.menu-line {
  display: block;
  width: 100%;
  height: 1.25px;
  border-radius: 1px;
  background: var(--color-text-main);
  opacity: 0.88;
  transform-origin: center;
  transition:
    transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
    opacity 0.25s ease,
    width 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.menu-toggle.open .menu-line:nth-child(1) {
  transform: translateY(6.25px) rotate(45deg);
}

.menu-toggle.open .menu-line:nth-child(2) {
  opacity: 0;
  width: 40%;
}

.menu-toggle.open .menu-line:nth-child(3) {
  transform: translateY(-6.25px) rotate(-45deg);
}

.nav-mobile {
  position: fixed;
  top: 72px;
  left: 0;
  width: 100%;
  background: var(--glass-bg-strong);
  backdrop-filter: blur(var(--glass-blur)) saturate(1.3);
  -webkit-backdrop-filter: blur(var(--glass-blur)) saturate(1.3);
  border-bottom: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow);
  padding: 0;
  max-height: 0;
  overflow: hidden;
  transition: max-height var(--transition-smooth);
}

.nav-mobile.open {
  max-height: 100vh;
  padding: 0.75rem 0 1.5rem;
}

.nav-link-mobile {
  display: block;
  padding: 0.95rem 1.5rem;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--color-text-muted);
  border-bottom: 1px solid var(--glass-border);
  transition:
    color var(--transition-fast),
    background var(--transition-fast);
}

.nav-link-mobile:hover,
.nav-link-mobile.router-link-active {
  color: var(--color-text-main);
  background: rgba(255, 255, 255, 0.03);
}

@media (min-width: 768px) {
  .header-content {
    display: flex;
    grid-template-columns: unset;
    height: 88px;
    gap: 1.75rem;
  }

  .header-left {
    display: flex;
    order: 0;
    width: auto;
    min-width: 0;
  }

  .header-left:not(:has(.logo-particles-cloud)) {
    display: none;
  }

  .brand {
    justify-self: unset;
    order: 1;
    gap: 0.65rem;
    margin-right: 0.25rem;
  }

  .brand-iso {
    width: 32px;
    height: 32px;
  }

  .brand-name {
    font-size: 1.15rem;
    letter-spacing: 0.24em;
  }

  .header-right {
    order: 2;
    flex: 1;
    justify-content: flex-end;
    gap: 1.5rem;
  }

  .nav-desktop {
    display: flex;
    margin-right: auto;
  }

  .btn-subscribe {
    display: flex;
  }

  .menu-toggle {
    display: none;
  }

  .nav-mobile {
    display: none;
  }
}
</style>
