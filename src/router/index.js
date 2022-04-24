import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChuckName: "PageHome" */ '@/views/PageHome.vue')
  },
  {
    path: '/thread/:threadId',
    name: 'ThreadShow',
    component: () => import(/* webpackChuckName: "PageThreadShow" */ '@/views/PageThreadShow.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
