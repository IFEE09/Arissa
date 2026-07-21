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
      <!-- Logo -->
      <RouterLink to="/" class="logo" aria-label="Arissa">
        <transition name="fade" mode="out-in">
          <div v-if="showParticles" key="particles" class="logo-particles-cloud">
            <ParticleCloud :count="40" :mini="true" />
          </div>
          <img
            v-else
            key="logo"
            src="@/assets/Arissa-logo.png"
            alt="Arissa Logo"
            class="logo-icon"
            style="filter: brightness(0) invert(1)"
          />
        </transition>
      </RouterLink>

      <!-- Desktop Navigation -->
      <nav class="nav-desktop">
        <!-- Enlaces directos -->
        <RouterLink v-for="link in mainLinks" :key="link.path" :to="link.path" class="nav-link">
          {{ link.name }}
        </RouterLink>


      </nav>

      <!-- Actions -->
      <div class="header-actions">
        <RouterLink to="/diagnostico" class="btn btn-primary btn-subscribe">
          <span>Agendar Diagnóstico</span>
        </RouterLink>
      </div>

      <!-- Mobile Menu Button -->
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

    <!-- Mobile Navigation -->
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
/* Header Background */
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  gap: 1rem;
}

@media (min-width: 768px) {
  .header-content {
    gap: 2rem;
  }
}

/* Logo Styles */
.logo {
  text-decoration: none;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  height: 60px;
}

.logo-icon {
  height: 140px;
  width: auto;
  margin: -40px 0;
  object-fit: contain;
}

.logo-particles-cloud {
  width: 50px;
  height: 50px;
  position: relative;
  background: radial-gradient(circle, rgba(13, 92, 90, 0.15) 0%, transparent 70%);
  border-radius: 50%;
}

/* Vue Transitions */
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px) scale(0.9);
}

.logo:hover .logo-icon {
  opacity: 0.9;
}

/* Desktop Navigation */
.nav-desktop {
  display: none;
  align-items: center;
  gap: 1.5rem;
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

@media (min-width: 768px) {
  .nav-desktop {
    display: flex;
  }
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.btn-subscribe {
  display: none;
}

/* Mobile Menu Toggle — fino / glass */
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
    border-color var(--transition-fast),
    box-shadow var(--transition-fast);
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

/* Mobile Navigation */
.nav-mobile {
  position: fixed;
  top: 100px;
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
  transition: color var(--transition-fast), background var(--transition-fast);
}

.nav-link-mobile:hover,
.nav-link-mobile.router-link-active {
  color: var(--color-text-main);
  background: rgba(255, 255, 255, 0.03);
}

@media (min-width: 768px) {
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

/* Dropdown Styles */
.nav-dropdown {
  position: relative;
  display: flex;
  align-items: center;
}

.dropdown-toggle {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: none;
  border: none;
  cursor: pointer;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-muted);
  padding: 0.5rem 0;
  line-height: normal;
  transition: all var(--transition-fast);
}

.dropdown-toggle:hover {
  color: var(--color-text-main);
}

.dropdown-toggle svg {
  transition: transform var(--transition-fast);
}

.nav-dropdown:hover .dropdown-toggle svg,
.dropdown-menu.open + .dropdown-toggle svg {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 180px;
  background: var(--glass-bg-strong);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-md);
  box-shadow: var(--glass-shadow);
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: all var(--transition-fast);
  z-index: 100;
  padding: 0.5rem 0;
  margin-top: 0.5rem;
}

.dropdown-menu.open {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-item {
  display: block;
  padding: 0.75rem 1.25rem;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-muted);
  text-decoration: none;
  transition: all var(--transition-fast);
}

.dropdown-item:hover {
  background: rgba(13, 92, 90, 0.15);
  color: var(--color-action);
}

.mobile-section-title {
  padding: 1.5rem 2rem 0.5rem;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--color-action);
  border-top: 1px solid var(--color-border-subtle);
  margin-top: 1rem;
}

.nav-link-sub {
  padding-left: 3rem;
  font-size: 1rem;
}
</style>
