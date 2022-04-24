import { createRouter, createWebHistory } from 'vue-router'
import sourceData from '@/data.json'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChuckName: "PageHome" */ '@/views/Home.vue')
  },
  {
    path: '/thread/:threadId',
    name: 'ThreadShow',
    component: () => import(/* webpackChuckName: "PageThreadShow" */ '@/views/ThreadShow.vue'),
    props: true,
    beforeEnter: (to, from, next) => {
      const threadExists = sourceData.threads.find(t => t.id === to.params.threadId)
      if (threadExists) {
        next()
      } else {
        next({
          name: 'NotFound',
          params: { pathMatch: to.path.substring(1).split('/') },
          query: to.query,
          hash: to.hash,
        })
      }
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import(/* webpackChuckName: "NotFound" */ '@/views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
