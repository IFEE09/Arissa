<script setup>
import { RouterLink } from 'vue-router'

const footerLinks = {
  soluciones: [
    { name: 'Captación Digital para Clínicas', path: '/captacion-digital-clinicas' },
    { name: 'Sistemas a Medida', path: '/sistemas-a-medida' },
    { name: 'Integración de Procesos', path: '/integracion-procesos' },
  ],
  empresa: [
    { name: 'Sobre Arissa', path: '/sobre-arissa' },
    { name: 'Portafolio', path: '/portafolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Recursos', path: '/recursos' },
    { name: 'Diagnóstico', path: '/diagnostico' },
    { name: 'Contacto', path: '/contacto' },
  ],
  legal: [
    { name: 'Privacidad', path: '/privacidad' },
    { name: 'Términos', path: '/terminos' },
    { name: 'Cookies', path: '/cookies' },
  ],
}

const socialLinks = [
  { name: 'Facebook', icon: 'facebook', url: 'https://facebook.com' },
  { name: 'Instagram', icon: 'instagram', url: 'https://instagram.com' },
]
</script>

<template>
  <footer class="footer">
    <div class="container">
      <!-- CTA Section -->
      <div class="newsletter-section">
        <div class="newsletter-content">
          <h3>¿Tu operación tiene fricción?</h3>
          <p>Agenda un diagnóstico. En 1–2 semanas tendrás un plan de implementación priorizado.</p>
        </div>
        <RouterLink to="/diagnostico" class="btn btn-primary">Agendar Diagnóstico</RouterLink>
      </div>

      <!-- Footer Links -->
      <div class="footer-grid">
        <!-- Brand -->
        <div class="footer-brand">
          <RouterLink to="/" class="logo">
            <span class="logo-text">ARISSA</span>
          </RouterLink>
          <p class="brand-tagline">
            Diseñamos y construimos sistemas digitales a la medida para clínicas y empresas
            que necesitan captar mejor, operar con menos fricción y conectar sus herramientas.
          </p>
          <div class="social-links">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              target="_blank"
              class="social-link"
              :aria-label="social.name"
            >
              <svg
                v-if="social.icon === 'facebook'"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                />
              </svg>
              <svg
                v-if="social.icon === 'instagram'"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                />
              </svg>
            </a>
          </div>
        </div>

        <!-- Soluciones -->
        <div class="footer-column">
          <h4>Soluciones</h4>
          <ul>
            <li v-for="link in footerLinks.soluciones" :key="link.name">
              <RouterLink :to="link.path">{{ link.name }}</RouterLink>
            </li>
          </ul>
        </div>

        <!-- Company -->
        <div class="footer-column">
          <h4>Empresa</h4>
          <ul>
            <li v-for="link in footerLinks.empresa" :key="link.path">
              <RouterLink :to="link.path">{{ link.name }}</RouterLink>
            </li>
          </ul>
        </div>

        <!-- Legal -->
        <div class="footer-column">
          <h4>Legal</h4>
          <ul>
            <li v-for="link in footerLinks.legal" :key="link.path">
              <RouterLink :to="link.path">{{ link.name }}</RouterLink>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="footer-bottom">
        <p>© 2026 Arissa. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--color-surface);
  color: var(--color-text-main);
  padding: 3rem 0 2rem; /* Mobile optimized */
  margin-top: auto;
  border-top: 1px solid var(--color-border);
}

@media (min-width: 1024px) {
  .footer {
    padding: 5rem 0 2rem;
  }
}

/* Newsletter Section */
.newsletter-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 3rem;
  background: rgba(11, 12, 16, 0.5);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-lg);
  margin-bottom: 5rem;
  position: relative;
  overflow: hidden;
}

/* Tech decorative accent for newsletter */
.newsletter-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: var(--color-brand);
}

.newsletter-content h3 {
  color: var(--color-text-main);
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.75rem;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  margin-bottom: 0.75rem;
}

.newsletter-content p {
  color: var(--color-text-muted);
  font-size: 1rem;
}

.newsletter-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.newsletter-input {
  flex: 1;
  padding: 1rem 1.5rem;
  font-family: 'Manrope', sans-serif;
  font-size: 0.95rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  color: var(--color-text-main);
  outline: none;
  transition: all var(--transition-smooth);
}

.newsletter-input::placeholder {
  color: var(--color-text-muted);
  opacity: 0.5;
}

.newsletter-input:focus {
  border-color: var(--color-action);
  background: rgba(13, 92, 90, 0.08);
  box-shadow: 0 0 15px rgba(13, 92, 90, 0.15);
}

/* Footer Grid */
.footer-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  padding-bottom: 4rem;
  border-bottom: 1px solid var(--color-border-subtle);
}

/* Brand */
.footer-brand .logo {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  text-decoration: none;
}

.footer-brand .logo-text {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 2rem;
  font-weight: 800; /* Extra Bold */
  letter-spacing: 0.1em; /* Wide Tracking */
  color: var(--color-text-main);
}

.brand-tagline {
  color: var(--color-text-muted);
  font-size: 0.9rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  max-width: 320px;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: transparent;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  color: var(--color-text-muted);
  transition: all var(--transition-smooth);
}

.social-link:hover {
  background: rgba(13, 92, 90, 0.15);
  border-color: var(--color-action);
  color: var(--color-action);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

/* Footer Columns */
.footer-column h4 {
  color: var(--color-text-main);
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
}

/* Decorative line under headers */
.footer-column h4::after {
  content: '';
  display: block;
  width: 100%;
  height: 1px;
  background: var(--color-brand);
  margin-top: 0.5rem;
  opacity: 0.5;
}

.footer-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-column li {
  margin-bottom: 0.875rem;
}

.footer-column a {
  color: var(--color-text-muted);
  font-size: 0.95rem;
  transition: all var(--transition-smooth);
  position: relative;
  padding-left: 0;
}

.footer-column a:hover {
  color: var(--color-action);
  padding-left: 0.5rem; /* Slide effect */
}

/* Bottom Bar */
.footer-bottom {
  padding-top: 2rem;
  text-align: center;
}

.footer-bottom p {
  color: var(--color-text-muted);
  font-size: 0.8rem;
  opacity: 0.7;
}

/* Responsive */
@media (min-width: 640px) {
  .newsletter-section {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .newsletter-form {
    flex-direction: row;
    min-width: 380px;
  }
}

@media (min-width: 768px) {
  .footer-grid {
    grid-template-columns: 2fr 1fr 1fr 1fr;
  }
}
</style>
