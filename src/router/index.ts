import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/index',
      name: 'index',
      component: () => import('../views/Index.vue')
    },
    {
      path: '/',
      name: 'Login',
      component: () => import('../views/Login.vue')
    },{
      path: '/login',
      redirect: '/'
    }
    ]
  })

  export default router