<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const STORAGE_KEY = 'arissa-welcome-seen'

const show = ref(false)
const leaving = ref(false)
const ready = ref(false)

let timers = []

function clearTimers() {
  timers.forEach(clearTimeout)
  timers = []
}

function finish() {
  show.value = false
  document.documentElement.classList.remove('welcome-lock')
  document.documentElement.classList.add('welcome-revealed')
  sessionStorage.setItem(STORAGE_KEY, '1')
  document.getElementById('welcome-boot')?.remove()
}

onMounted(() => {
  const boot = document.getElementById('welcome-boot')
  const alreadySeen = sessionStorage.getItem(STORAGE_KEY)

  if (alreadySeen) {
    boot?.remove()
    document.documentElement.classList.remove('welcome-lock')
    return
  }

  show.value = true
  document.documentElement.classList.add('welcome-lock')

  // Sync with HTML boot splash, then run the cinematic sequence
  requestAnimationFrame(() => {
    ready.value = true
    boot?.classList.add('welcome-boot--handoff')
  })

  // ~1s total: entra suave → sale → revela la página
  timers.push(
    setTimeout(() => {
      leaving.value = true
    }, 550),
  )
  timers.push(setTimeout(finish, 1000))
})

onUnmounted(() => {
  clearTimers()
  document.documentElement.classList.remove('welcome-lock')
})
</script>

<template>
  <Teleport to="body">
    <div
      v-if="show"
      class="welcome"
      :class="{ 'welcome--ready': ready, 'welcome--leaving': leaving }"
      aria-live="polite"
      aria-label="Bienvenido"
    >
      <div class="welcome__glow" aria-hidden="true" />
      <div class="welcome__content">
        <span class="welcome__mark" aria-hidden="true" />
        <p class="welcome__word">Bienvenido</p>
        <span class="welcome__line" aria-hidden="true" />
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.welcome {
  position: fixed;
  inset: 0;
  z-index: 100000;
  display: grid;
  place-items: center;
  background: #0b0c10;
  overflow: hidden;
  opacity: 1;
  transition: opacity 0.45s cubic-bezier(0.22, 1, 0.36, 1);
}

.welcome--leaving {
  opacity: 0;
  pointer-events: none;
}

.welcome__glow {
  position: absolute;
  width: min(70vw, 520px);
  height: min(70vw, 520px);
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(13, 92, 90, 0.28) 0%,
    rgba(26, 77, 143, 0.12) 42%,
    transparent 70%
  );
  filter: blur(8px);
  opacity: 0;
  transform: scale(0.92);
  transition:
    opacity 0.5s ease,
    transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
}

.welcome--ready .welcome__glow {
  opacity: 1;
  transform: scale(1);
}

.welcome--leaving .welcome__glow {
  opacity: 0;
  transform: scale(1.04);
}

.welcome__content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  text-align: center;
  padding: 2rem;
}

.welcome__mark {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #e8e8e8;
  box-shadow: 0 0 24px rgba(13, 92, 90, 0.55);
  opacity: 0;
  transform: scale(0.5);
  transition:
    opacity 0.35s ease,
    transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
}

.welcome--ready .welcome__mark {
  opacity: 0.9;
  transform: scale(1);
}

.welcome--leaving .welcome__mark {
  opacity: 0;
  transform: scale(0.7);
  transition-duration: 0.3s;
}

.welcome__word {
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 500;
  font-size: clamp(2rem, 6vw, 3.5rem);
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: #e8e8e8;
  opacity: 0;
  transform: translateY(8px);
  filter: blur(4px);
  transition:
    opacity 0.45s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
    filter 0.45s cubic-bezier(0.22, 1, 0.36, 1),
    letter-spacing 0.55s cubic-bezier(0.22, 1, 0.36, 1);
}

.welcome--ready .welcome__word {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
  letter-spacing: 0.18em;
}

.welcome--leaving .welcome__word {
  opacity: 0;
  transform: translateY(-6px);
  filter: blur(3px);
  letter-spacing: 0.26em;
  transition-duration: 0.4s;
}

.welcome__line {
  display: block;
  width: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(232, 232, 232, 0.55), transparent);
  transition: width 0.45s cubic-bezier(0.22, 1, 0.36, 1) 0.08s;
}

.welcome--ready .welcome__line {
  width: min(42vw, 180px);
}

.welcome--leaving .welcome__line {
  width: 0;
  transition-duration: 0.3s;
  transition-delay: 0s;
}
</style>
