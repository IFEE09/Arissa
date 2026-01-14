import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
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
      path: '/casos-de-exito',
      name: 'success-stories',
      component: MaintenancePage,
      props: {
        title: 'Casos de Éxito',
        icon: 'fa-solid fa-trophy',
        message:
          'Estamos documentando nuestros mejores proyectos. Próximamente podrás conocer cómo hemos transformado empresas.',
      },
    },
    {
      path: '/categoria/:category',
      name: 'category',
      component: MaintenancePage,
      props: (route) => ({
        title: `Noticias: ${route.params.category.toUpperCase()}`,
        icon: 'fa-solid fa-newspaper',
        message:
          'Nuestro blog de tecnología está en desarrollo. Pronto publicaremos contenido exclusivo.',
      }),
    },
    {
      path: '/explorar',
      name: 'explore',
      component: MaintenancePage,
      props: {
        title: 'Explorar',
        icon: 'fa-solid fa-compass',
        message: 'Esta sección está en construcción. Vuelve pronto para descubrir más.',
      },
    },
    {
      path: '/articulo/:slug',
      name: 'article',
      component: MaintenancePage,
      props: {
        title: 'Artículo',
        icon: 'fa-solid fa-file-lines',
        message:
          'Este artículo aún no está disponible. Estamos creando contenido de calidad para ti.',
      },
    },
    {
      path: '/about',
      name: 'about',
      component: MaintenancePage,
      props: {
        title: 'Acerca de Nosotros',
        icon: 'fa-solid fa-users',
        message: 'Próximamente conocerás más sobre nuestro equipo y nuestra historia.',
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
})

export default router
