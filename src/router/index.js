import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SeoPageView from '../views/SeoPageView.vue'
import BlogView from '../views/BlogView.vue'
import BlogPostView from '../views/BlogPostView.vue'
import MaintenancePage from '../views/MaintenancePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/sistemas-a-medida',
      name: 'sistemas-a-medida',
      component: SeoPageView,
      props: { slug: 'sistemas-a-medida', schemaType: 'Service' },
    },
    {
      path: '/captacion-digital-clinicas',
      name: 'captacion-digital-clinicas',
      component: SeoPageView,
      props: { slug: 'captacion-digital-clinicas', schemaType: 'Service' },
    },
    {
      path: '/integracion-procesos',
      name: 'integracion-procesos',
      component: SeoPageView,
      props: { slug: 'integracion-procesos', schemaType: 'Service' },
    },
    {
      path: '/diagnostico',
      name: 'diagnostico',
      component: SeoPageView,
      props: { slug: 'diagnostico', schemaType: 'Service' },
    },
    {
      path: '/portafolio',
      name: 'portafolio',
      component: SeoPageView,
      props: { slug: 'portafolio', schemaType: 'CollectionPage' },
    },
    {
      path: '/sobre-arissa',
      name: 'sobre-arissa',
      component: SeoPageView,
      props: { slug: 'sobre-arissa', schemaType: 'AboutPage' },
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: SeoPageView,
      props: { slug: 'contacto', schemaType: 'ContactPage' },
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
    },
    {
      path: '/blog/:slug',
      name: 'blog-post',
      component: BlogPostView,
    },
    // Legacy redirects / aliases
    {
      path: '/casos-de-exito',
      redirect: '/portafolio',
    },
    {
      path: '/about',
      redirect: '/sobre-arissa',
    },
    {
      path: '/privacidad',
      name: 'privacy',
      component: MaintenancePage,
      props: {
        title: 'Privacidad',
        icon: 'fa-solid fa-shield',
        message: 'Estamos actualizando nuestro aviso de privacidad.',
      },
    },
    {
      path: '/terminos',
      name: 'terms',
      component: MaintenancePage,
      props: {
        title: 'Términos',
        icon: 'fa-solid fa-file-contract',
        message: 'Estamos actualizando nuestros términos de servicio.',
      },
    },
    {
      path: '/cookies',
      name: 'cookies',
      component: MaintenancePage,
      props: {
        title: 'Cookies',
        icon: 'fa-solid fa-cookie',
        message: 'Estamos actualizando nuestra política de cookies.',
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: MaintenancePage,
      props: {
        title: 'Página No Encontrada',
        icon: 'fa-solid fa-circle-exclamation',
        message: 'La página que buscas no existe o ha sido movida.',
      },
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0 }
  },
})

export default router
