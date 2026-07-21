<script setup>
import { computed, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { getLeadMagnet } from '@/data/leadMagnets'
import { useSeo } from '@/composables/useSeo'
import { SITE_URL, OG_IMAGE } from '@/data/siteConfig'

const route = useRoute()
const magnet = computed(() => getLeadMagnet(route.params.slug))

const email = ref('')
const name = ref('')
const unlocked = ref(false)
const error = ref('')

useSeo(() => {
  if (!magnet.value) return null
  return {
    title: `${magnet.value.shortTitle} | Arissa`,
    description: magnet.value.description,
    path: `/recursos/${magnet.value.slug}`,
    image: OG_IMAGE,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'DigitalDocument',
      name: magnet.value.title,
      description: magnet.value.description,
      url: `${SITE_URL}/recursos/${magnet.value.slug}`,
      publisher: { '@type': 'Organization', name: 'Arissa', url: SITE_URL },
    },
  }
})

function downloadUrl() {
  const base = import.meta.env.BASE_URL || '/'
  return `${base}${magnet.value.file}`
}

function unlock(e) {
  e.preventDefault()
  error.value = ''
  const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())
  if (!ok) {
    error.value = 'Ingresa un correo válido.'
    return
  }
  const lead = {
    email: email.value.trim(),
    name: name.value.trim(),
    resource: magnet.value.slug,
    at: new Date().toISOString(),
  }
  try {
    const prev = JSON.parse(localStorage.getItem('arissa_leads') || '[]')
    prev.push(lead)
    localStorage.setItem('arissa_leads', JSON.stringify(prev))
  } catch {
    /* ignore */
  }
  unlocked.value = true
}

function openFile() {
  window.open(downloadUrl(), '_blank', 'noopener')
}
</script>

<template>
  <article v-if="magnet" class="magnet">
    <header class="hero">
      <div class="container">
        <RouterLink to="/recursos" class="back">← Recursos</RouterLink>
        <p class="format">{{ magnet.format }}</p>
        <h1>{{ magnet.title }}</h1>
        <p class="lead">{{ magnet.description }}</p>
      </div>
    </header>

    <div class="container body">
      <ul class="bullets">
        <li v-for="b in magnet.bullets" :key="b">{{ b }}</li>
      </ul>

      <section v-if="!unlocked" class="gate">
        <h2>Descarga gratis</h2>
        <p>Déjanos tu correo. Te abrimos el recurso al instante (HTML listo para imprimir a PDF).</p>
        <form @submit="unlock">
          <label>
            Nombre
            <input v-model="name" type="text" autocomplete="name" placeholder="Tu nombre" />
          </label>
          <label>
            Correo *
            <input
              v-model="email"
              type="email"
              required
              autocomplete="email"
              placeholder="tu@empresa.com"
            />
          </label>
          <p v-if="error" class="error">{{ error }}</p>
          <button type="submit" class="btn btn-primary">Desbloquear descarga</button>
        </form>
        <p class="fine">
          Al continuar aceptas que Arissa te contacte con material útil. Sin spam diario.
        </p>
      </section>

      <section v-else class="unlocked">
        <h2>Listo — tu recurso está disponible</h2>
        <p>Ábrelo en el navegador y usa “Imprimir → Guardar como PDF” si lo quieres en PDF.</p>
        <div class="actions">
          <button type="button" class="btn btn-primary" @click="openFile">Abrir recurso</button>
          <RouterLink to="/diagnostico" class="btn btn-outline">Agendar Diagnóstico</RouterLink>
        </div>
        <p v-if="magnet.relatedPost" class="related">
          También te puede servir:
          <RouterLink :to="`/blog/${magnet.relatedPost}`">leer el artículo relacionado</RouterLink>
        </p>
      </section>
    </div>
  </article>
  <div v-else class="container" style="padding: 4rem 0">
    <h1>Recurso no encontrado</h1>
    <RouterLink to="/recursos">Volver a recursos</RouterLink>
  </div>
</template>

<style scoped>
.hero {
  padding: 3.5rem 0 2rem;
  border-bottom: 1px solid var(--color-border-subtle);
}
.back {
  display: inline-block;
  margin-bottom: 1rem;
  color: var(--color-action);
  text-decoration: none;
  font-size: 0.9rem;
}
.format {
  font-size: 0.75rem;
  color: var(--color-action);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
.hero h1 {
  font-size: clamp(1.5rem, 3.5vw, 2.2rem);
  max-width: 22ch;
  text-transform: none;
  margin: 0.75rem 0;
}
.lead {
  max-width: 62ch;
  color: var(--color-text-muted);
}
.body {
  padding: 2.5rem 0 5rem;
  max-width: 640px;
}
.bullets {
  margin: 0 0 2rem 1.1rem;
  color: var(--color-text-muted);
}
.gate,
.unlocked {
  padding: 1.75rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: rgba(13, 92, 90, 0.08);
}
.gate h2,
.unlocked h2 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}
.gate p,
.unlocked p {
  color: var(--color-text-muted);
  margin-bottom: 1rem;
}
form {
  display: grid;
  gap: 0.85rem;
}
label {
  display: grid;
  gap: 0.35rem;
  font-size: 0.85rem;
  color: var(--color-text-main);
}
input {
  padding: 0.85rem 1rem;
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border);
  background: rgba(255, 255, 255, 0.03);
  color: var(--color-text-main);
}
.error {
  color: #f07178;
  font-size: 0.85rem;
}
.fine {
  margin-top: 1rem;
  font-size: 0.8rem;
  opacity: 0.8;
}
.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}
.related {
  margin-top: 1.25rem;
}
.related a {
  color: var(--color-action);
}
</style>
