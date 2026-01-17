<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import ParticleCloud from './ParticleCloud.vue'

const isMenuOpen = ref(false)
const isDropdownOpen = ref(false)
const isScrolledPastHero = ref(false)

// Enlaces principales (directos)
const mainLinks = [
  { name: 'Inicio', path: '/' },
  { name: 'Servicios', path: '/#servicios' },
  { name: 'Casos de Éxito', path: '/casos-de-exito' },
  { name: 'Nosotros', path: '/about' },
]

// Categorías de noticias (dropdown)
const newsCategories = [
  { name: 'IA', path: '/categoria/ia' },
  { name: 'Gaming', path: '/categoria/gaming' },
  { name: 'Startups', path: '/categoria/startups' },
  { name: 'Negocios', path: '/categoria/negocios' },
  { name: 'Ciberseguridad', path: '/categoria/ciberseguridad' },
  { name: 'Mundo', path: '/categoria/mundo' },
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const closeDropdown = () => {
  isDropdownOpen.value = false
}

// Scroll detection logic - optimized with RAF throttle
let ticking = false

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
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header class="header">
    <div class="container header-content">
      <!-- Logo -->
      <RouterLink to="/" class="logo">
        <transition name="fade" mode="out-in">
          <img
            v-if="!isScrolledPastHero"
            key="logo"
            src="@/assets/Arissa-logo.png"
            alt="Arissa Logo"
            class="logo-icon"
            style="filter: brightness(0) invert(1)"
          />
          <div v-else key="particles" class="logo-particles-cloud">
            <ParticleCloud :count="150" :mini="true" />
          </div>
        </transition>
      </RouterLink>

      <!-- Desktop Navigation -->
      <nav class="nav-desktop">
        <!-- Enlaces directos -->
        <RouterLink v-for="link in mainLinks" :key="link.path" :to="link.path" class="nav-link">
          {{ link.name }}
        </RouterLink>

        <!-- Dropdown Noticias Tech -->
        <div class="nav-dropdown" @mouseleave="closeDropdown">
          <button
            class="nav-link dropdown-toggle"
            @click="toggleDropdown"
            @mouseenter="isDropdownOpen = true"
          >
            Noticias Tech
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
          <div class="dropdown-menu" :class="{ open: isDropdownOpen }">
            <RouterLink
              v-for="cat in newsCategories"
              :key="cat.path"
              :to="cat.path"
              class="dropdown-item"
              @click="closeDropdown"
            >
              {{ cat.name }}
            </RouterLink>
          </div>
        </div>
      </nav>

      <!-- Search & Actions -->
      <div class="header-actions">
        <button class="btn-icon" aria-label="Buscar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
        </button>
        <button class="btn btn-primary btn-subscribe">
          <span>Suscribirse</span>
        </button>
      </div>

      <!-- Mobile Menu Button -->
      <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle menu">
        <span :class="{ active: isMenuOpen }"></span>
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

      <!-- Mobile: Noticias Tech como sección -->
      <div class="mobile-section-title">Noticias Tech</div>
      <RouterLink
        v-for="cat in newsCategories"
        :key="cat.path"
        :to="cat.path"
        class="nav-link-mobile nav-link-sub"
        @click="isMenuOpen = false"
      >
        {{ cat.name }}
      </RouterLink>

      <button class="btn btn-primary" style="width: 100%; margin-top: 1rem">Suscribirse</button>
    </nav>
  </header>
</template>

<style scoped>
/* Header Background */
.header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(11, 12, 16, 0.85); /* Dark background with slight transparency */
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--color-border);
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px; /* Reduced header height */
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
  height: 60px; /* Force height to match navbar */
}

.logo-icon {
  height: 140px;
  width: auto;
  margin: -40px 0; /* Adjusted crop */
  object-fit: contain;
}

.logo-particles-cloud {
  width: 50px;
  height: 50px;
  position: relative;
  background: radial-gradient(circle, rgba(102, 252, 241, 0.1) 0%, transparent 70%);
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

/* Hover & Active States - Minimalist Line */
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

/* Monitor Styles */
@media (min-width: 768px) {
  .nav-desktop {
    display: flex;
  }
}

/* Header Actions */
.header-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.btn-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: transparent;
  border: 1px solid transparent;
  border-radius: var(--radius-sm);
  color: var(--color-text-muted);
  cursor: pointer;
  transition: all var(--transition-smooth);
}

.btn-icon:hover {
  border-color: var(--color-border);
  color: var(--color-text-main);
  background: rgba(255, 255, 255, 0.02);
}

.btn-subscribe {
  display: none;
}

/* Mobile Menu Toggle */
.menu-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
  position: relative;
  z-index: 1001;
}

.menu-toggle span,
.menu-toggle span::before,
.menu-toggle span::after {
  display: block;
  width: 24px;
  height: 1px; /* Thinner lines */
  background: var(--color-text-main);
  transition: all var(--transition-normal);
}

.menu-toggle span::before,
.menu-toggle span::after {
  content: '';
  position: absolute;
}

.menu-toggle span::before {
  top: -6px;
}

.menu-toggle span::after {
  bottom: -6px;
}

.menu-toggle span.active {
  background: transparent;
}

.menu-toggle span.active::before {
  top: 0;
  transform: rotate(45deg);
}

.menu-toggle span.active::after {
  bottom: 0;
  transform: rotate(-45deg);
}

/* Mobile Navigation */
.nav-mobile {
  position: fixed;
  top: 100px; /* Match header height */
  left: 0;
  width: 100%;
  background: var(--color-background);
  border-bottom: 1px solid var(--color-border);
  padding: 0;
  max-height: 0;
  overflow: hidden;
  transition: max-height var(--transition-smooth);
}

.nav-mobile.open {
  max-height: 100vh;
  padding: 1rem 0 2rem;
}

.nav-link-mobile {
  display: block;
  padding: 1rem 2rem;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-muted);
  border-bottom: 1px solid var(--color-border-subtle);
  transition: color var(--transition-fast);
}

.nav-link-mobile:hover {
  color: var(--color-action);
  background: rgba(255, 255, 255, 0.02);
}

/* Desktop Styles */
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
  line-height: normal; /* Added to match nav-link default */
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
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
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
  background: rgba(102, 252, 241, 0.1);
  color: var(--color-action);
}

/* Mobile Section Title */
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
