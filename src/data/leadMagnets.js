export const leadMagnets = [
  {
    slug: 'guia-precios-software-a-medida-2026',
    title: 'Guía: Cuánto cuesta un software a la medida en México 2026',
    shortTitle: 'Guía de precios 2026',
    description:
      'Rangos realistas, qué influye el costo, errores al cotizar y cómo armar un presupuesto por fases sin sorpresas.',
    keyword: 'cuánto cuesta software a medida',
    format: 'PDF (HTML imprimible)',
    file: 'recursos/guia-precios-software-a-medida-2026.html',
    relatedPost: 'cuanto-cuesta-software-a-medida-mexico-2026',
    bullets: [
      'Rangos orientativos por tipo de proyecto',
      'Variables que suben o bajan el precio',
      'Checklist para pedir cotizaciones comparables',
      'Cuándo conviene diagnóstico vs cotizar a ciegas',
    ],
  },
  {
    slug: 'checklist-automatizacion-procesos',
    title: 'Checklist: 20 procesos que puedes automatizar hoy',
    shortTitle: 'Checklist de automatización',
    description:
      'Lista práctica para PyMEs mexicanas: captura, seguimiento, reportes, inventario y handoffs entre áreas.',
    keyword: 'automatización de procesos',
    format: 'PDF (HTML imprimible)',
    file: 'recursos/checklist-automatizacion-procesos.html',
    relatedPost: 'automatizacion-procesos-pymes-mexicanas',
    bullets: [
      '20 procesos priorizables por impacto',
      'Señales de que ya estás listo para automatizar',
      'Qué no automatizar todavía',
      'Orden sugerido de implementación',
    ],
  },
  {
    slug: 'plantilla-diagnostico-captacion-clinicas',
    title: 'Plantilla: Diagnóstico de captación digital para clínicas',
    shortTitle: 'Plantilla diagnóstico clínicas',
    description:
      'Plantilla para mapear landing, respuesta, CRM, agenda y métricas antes de invertir en ads o software.',
    keyword: 'captación digital clínicas',
    format: 'PDF + estructura Notion-ready',
    file: 'recursos/plantilla-diagnostico-captacion-clinicas.html',
    relatedPost: 'sistema-captacion-pacientes-clinicas',
    bullets: [
      'Mapa del embudo paciente',
      'Preguntas de discovery por área',
      'Métricas mínimas a medir',
      'Priorización de fase 1',
    ],
  },
]

export function getLeadMagnet(slug) {
  return leadMagnets.find((m) => m.slug === slug) || null
}
