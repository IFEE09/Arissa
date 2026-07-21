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
  background: #0d5c5a;
  color: #fff;
  text-decoration: none;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.85rem;
  letter-spacing: 0.04em;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
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
