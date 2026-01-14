<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

const acceptCookies = () => {
  localStorage.setItem('arissa-cookies-accepted', 'true')
  isVisible.value = false
}

onMounted(() => {
  const accepted = localStorage.getItem('arissa-cookies-accepted')
  if (!accepted) {
    // Show after a short delay for better UX
    setTimeout(() => {
      isVisible.value = true
    }, 1500)
  }
})
</script>

<template>
  <Transition name="slide-up">
    <div v-if="isVisible" class="cookie-consent glass-panel">
      <div class="cookie-content">
        <div class="cookie-icon">
          <i class="fa-solid fa-cookie-bite"></i>
        </div>
        <div class="cookie-text">
          <h3>Privacidad y Cookies</h3>
          <p>
            Utilizamos tecnología propia y de terceros para mejorar tu experiencia y optimizar
            nuestros servicios. Al navegar, aceptas nuestro
            <router-link to="/privacidad" class="legal-link">Aviso de Privacidad</router-link>
            y el uso de cookies.
          </p>
        </div>
        <button class="btn btn-primary" @click="acceptCookies">
          <span>Aceptar y Continuar</span>
        </button>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.cookie-consent {
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 800px;
  padding: 1.5rem 2rem;
  z-index: 9999;
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-action);
  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.5),
    0 0 20px rgba(102, 252, 241, 0.1);
}

.cookie-content {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.cookie-icon {
  font-size: 2.5rem;
  color: var(--color-action);
  filter: drop-shadow(0 0 10px var(--color-action-glow));
}

.cookie-text {
  flex: 1;
}

.cookie-text h3 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: var(--color-text-main);
  letter-spacing: 0.05em;
}

.cookie-text p {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  line-height: 1.5;
  margin: 0;
}

.legal-link {
  color: var(--color-action);
  text-decoration: underline;
  font-weight: 500;
}

.legal-link:hover {
  color: #ffffff;
}

.btn {
  white-space: nowrap;
}

/* Responsive */
@media (max-width: 768px) {
  .cookie-content {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }

  .cookie-consent {
    bottom: 1rem;
    padding: 2rem 1.5rem;
  }
}

/* Animation */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translate(-50%, 100px);
}
</style>
