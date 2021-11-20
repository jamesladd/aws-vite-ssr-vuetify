import { createMemoryHistory, createRouter as _createRouter, createWebHistory } from 'vue-router'

export { createRouter }

function createRouter() {
  console.log('router.js - createRouter')
  return _createRouter({
    // use appropriate history implementation for server/client
    // import.meta.env.SSR is injected by Vite.
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      }
      if (to.hash) {
        return { el: to.hash, behavior: "smooth" }
      } else {
        window.scrollTo(0, 0)
        setTimeout(() => window.scrollTo(0, 0), 250)
      }
    },
    routes: [
      {
        path: '/',
        component: () => import('../pages/index/index.page.vue')
      },
      {
        path: '/about',
        component: () => import('../pages/about/index.page.vue')
      },
      {
        path: '/:pathMatch(.*)*',
        component: () => import('./_error.page.vue')
      },
    ]
  })
}
