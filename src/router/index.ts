import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/products',
      name: 'Home',
      component: HomeView,
      alias: '/'
    },
    {
      path: '/products/:id',
      name: 'SingleProduct',
      component: () => import('../views/SingleProductView.vue')
    },
    {
      path: '/category',
      name: 'ProductCategory',
      component: () => import('../views/CategoryView.vue')
    },
    {
      path: '/category/:good',
      name: 'Good',
      component: () => import('../views/SingleCategory.vue')
    }
  ]
})

export default router
