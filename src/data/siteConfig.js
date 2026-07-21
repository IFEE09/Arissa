/** Contacto y canales — actualiza el WhatsApp real cuando esté listo. */
export const SITE_URL = 'https://ifee09.github.io/Arissa'
export const OG_IMAGE = `${SITE_URL}/og-image-v3.png`

const viteEnv =
  typeof import.meta !== 'undefined' && import.meta.env ? import.meta.env : {}

export const CONTACT = {
  email: 'hola@arissa.mx',
  /** Solo dígitos con código país, sin +. Vacío = CTAs caen a /contacto */
  whatsappNumber: viteEnv.VITE_WHATSAPP_NUMBER || '',
  whatsappDefaultText: 'Hola Arissa, quiero agendar un diagnóstico',
  hours: 'Lunes a Viernes 9:00–18:00 (hora de México)',
  areaServed: 'MX',
  businessName: 'Arissa | Software a Medida',
  category: 'Software Company',
}

export function whatsappUrl(text = CONTACT.whatsappDefaultText) {
  if (!CONTACT.whatsappNumber) return null
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(text)}`
}

/** CTAs secundarios por slug de página SEO */
export const PAGE_CTAS = {
  'sistemas-a-medida': {
    primary: { label: 'Agendar Diagnóstico Técnico', to: '/diagnostico' },
    secondary: { label: 'Ver Proceso', to: '/sistemas-a-medida#proceso' },
  },
  'captacion-digital-clinicas': {
    primary: { label: 'Solicitar Diagnóstico de Captación', to: '/diagnostico' },
    secondary: { label: 'Ver Portafolio', to: '/portafolio' },
  },
  'integracion-procesos': {
    primary: { label: 'Agendar Diagnóstico de Integración', to: '/diagnostico' },
    secondary: { label: 'Contactar por WhatsApp', to: 'whatsapp' },
  },
  diagnostico: {
    primary: { label: 'Agendar Diagnóstico', to: '/contacto' },
    secondary: { label: 'Ver Soluciones', to: '/#servicios' },
  },
  portafolio: {
    primary: { label: 'Agendar Diagnóstico', to: '/diagnostico' },
    secondary: { label: 'Contactar Directo', to: '/contacto' },
  },
  'sobre-arissa': {
    primary: { label: 'Agendar Diagnóstico', to: '/diagnostico' },
    secondary: { label: 'Contactar', to: '/contacto' },
  },
  contacto: {
    primary: { label: 'Agendar Diagnóstico', to: '/diagnostico' },
    secondary: { label: 'Contactar por WhatsApp', to: 'whatsapp' },
  },
}

export const DEFAULT_CTA = {
  primary: { label: 'Agendar Diagnóstico', to: '/diagnostico' },
  secondary: { label: 'Contactar', to: '/contacto' },
}
