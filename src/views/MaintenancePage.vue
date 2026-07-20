<script setup>
defineProps({
  title: {
    type: String,
    default: 'Página en Mantenimiento',
  },
  icon: {
    type: String,
    default: 'fa-solid fa-gear',
  },
  message: {
    type: String,
    default: 'Estamos trabajando en algo increíble. Vuelve pronto.',
  },
})
</script>

<template>
  <div class="maintenance-page">
    <div class="container">
      <div class="maintenance-content">
        <div class="maintenance-animation">
          <i :class="[icon, 'fa-spin']"></i>
        </div>
        <h1>{{ title }}</h1>
        <p>{{ message }}</p>
        <router-link to="/" class="btn btn-primary">
          <i class="fa-solid fa-arrow-left"></i>
          Volver al Inicio
        </router-link>
      </div>
    </div>

    <!-- Background decorations -->
    <div class="bg-glow"></div>
    <div class="bg-particles"></div>
  </div>
</template>

<style scoped>
.maintenance-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-background);
  position: relative;
  overflow: hidden;
}

.maintenance-content {
  text-align: center;
  position: relative;
  z-index: 2;
  max-width: 600px;
  padding: 2rem;
}

.maintenance-animation {
  font-size: 5rem;
  color: var(--color-action);
  margin-bottom: 2rem;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
}

.maintenance-content h1 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 3rem;
  font-weight: 800;
  color: var(--color-text-main);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
}

.maintenance-content p {
  font-family: 'Manrope', sans-serif;
  font-size: 1.25rem;
  color: var(--color-text-muted);
  margin-bottom: 2.5rem;
  line-height: 1.8;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
}

/* Background Effects */
.bg-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(13, 92, 90, 0.15) 0%, transparent 70%);
  filter: blur(60px);
  z-index: 0;
}

.bg-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image:
    radial-gradient(2px 2px at 20% 30%, rgba(13, 92, 90, 0.35), transparent),
    radial-gradient(2px 2px at 40% 70%, rgba(13, 92, 90, 0.25), transparent),
    radial-gradient(2px 2px at 60% 20%, rgba(13, 92, 90, 0.35), transparent),
    radial-gradient(2px 2px at 80% 50%, rgba(13, 92, 90, 0.25), transparent),
    radial-gradient(2px 2px at 10% 80%, rgba(13, 92, 90, 0.35), transparent),
    radial-gradient(2px 2px at 90% 10%, rgba(13, 92, 90, 0.25), transparent);
  animation: twinkle 4s ease-in-out infinite;
  z-index: 0;
}

@keyframes twinkle {
  0%,
  100% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
}

/* Responsive */
@media (max-width: 640px) {
  .maintenance-content h1 {
    font-size: 2rem;
  }

  .maintenance-animation {
    font-size: 3rem;
  }
}
</style>
