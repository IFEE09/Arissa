<script setup>
import { computed } from 'vue'

const props = defineProps({
  count: {
    type: Number,
    default: 1500,
  },
  mini: {
    type: Boolean,
    default: false,
  },
})

// Palette
const cmykColors = [
  '#66FCF1',
  '#66FCF1',
  '#66FCF1', // 3x Cyan Electric
  '#09347A', // 1x Sarissa Blue
  '#E6E6E6', // 1x Titanium White
]

// Generate particles
const particles = computed(() => {
  return Array.from({ length: props.count }, (_, index) => {
    // Si es mini, partículas más pequeñas y rápidas
    const baseSize = props.mini ? 0.5 : 2
    const sizeVar = props.mini ? 1.5 : 6

    // Velocidad: Si es mini, movimiento lento y suave (8-12s)
    const minDuration = props.mini ? 8 : 8.4375
    const durationVar = props.mini ? 4 : 11.25

    const size = Math.random() * sizeVar + baseSize
    const x = Math.random() * 100
    const y = Math.random() * 100
    const delay = props.mini ? 0 : Math.random() * 20 // Sincronizadas en mini
    const duration = Math.random() * durationVar + minDuration
    const color = cmykColors[index % cmykColors.length]

    // Ajustar shadow para mini (menos glow para no saturar)
    const boxShadow = color === '#66FCF1' ? `0 0 ${props.mini ? '2px' : '8px'} ${color}` : 'none'

    return {
      id: index,
      style: {
        width: `${size}px`,
        height: `${size}px`,
        left: `${x}%`,
        top: `${y}%`,
        backgroundColor: color,
        boxShadow: boxShadow,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      },
    }
  })
})
</script>

<template>
  <div class="particle-cloud" :class="{ 'is-mini': mini }">
    <div class="particle-core"></div>
    <div
      v-for="particle in particles"
      :key="particle.id"
      class="particle"
      :style="particle.style"
    ></div>
  </div>
</template>

<style scoped>
.particle-cloud {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 1;
  /* GPU Optimization */
  contain: strict;
  will-change: contents;
  /* Circular mask */
  mask-image: radial-gradient(circle at center, black 20%, transparent 70%);
  -webkit-mask-image: radial-gradient(circle at center, black 20%, transparent 70%);
}

.particle-core {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0); /* GPU */
  width: 60%;
  height: 60%;
  background: radial-gradient(
    circle,
    rgba(102, 252, 241, 0.2) 0%,
    rgba(9, 52, 122, 0.1) 50%,
    transparent 70%
  );
  filter: blur(40px);
  z-index: -1;
  will-change: transform;
}

.particle {
  position: absolute;
  border-radius: 50%;
  opacity: 0.8;
  animation: float infinite ease-in-out;
  will-change: transform;
  backface-visibility: hidden;
}

/* Mini version adjustments */
.is-mini .particle-core {
  filter: blur(10px);
  background: radial-gradient(
    circle,
    rgba(102, 252, 241, 0.4) 0%,
    /* More intense for small size */ transparent 70%
  );
}

@keyframes float {
  0%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  25% {
    transform: translate3d(15px, -20px, 0);
  }
  50% {
    transform: translate3d(-10px, -40px, 0);
  }
  75% {
    transform: translate3d(20px, -30px, 0);
  }
}
</style>
