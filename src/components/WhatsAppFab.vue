<script setup>
import { computed } from 'vue'
import { CONTACT, whatsappUrl } from '@/data/siteConfig'

const href = computed(() => whatsappUrl() || '/contacto')
const isExternal = computed(() => Boolean(whatsappUrl()))
const label = computed(() => (whatsappUrl() ? 'WhatsApp' : 'Contacto'))
const title = computed(() =>
  whatsappUrl() ? CONTACT.whatsappDefaultText : 'Ir a contacto',
)
</script>

<template>
  <a
    class="wa-fab"
    :href="href"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener' : undefined"
    :aria-label="`Contactar por ${label}`"
    :title="title"
  >
    <i class="fa-brands fa-whatsapp" aria-hidden="true"></i>
    <span>{{ label }}</span>
  </a>
</template>

<style scoped>
.wa-fab {
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  z-index: 40;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-radius: 999px;
  background: rgba(13, 92, 90, 0.72);
  backdrop-filter: blur(12px) saturate(1.3);
  -webkit-backdrop-filter: blur(12px) saturate(1.3);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #fff;
  text-decoration: none;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.85rem;
  letter-spacing: 0.04em;
  box-shadow: var(--glass-shadow);
  transition: transform 0.2s ease, background 0.2s ease;
}
.wa-fab:hover {
  transform: translateY(-2px);
  background: #0f6e6b;
}
.wa-fab i {
  font-size: 1.25rem;
}
@media (max-width: 480px) {
  .wa-fab span {
    display: none;
  }
  .wa-fab {
    padding: 0.85rem;
    border-radius: 50%;
  }
}
</style>
