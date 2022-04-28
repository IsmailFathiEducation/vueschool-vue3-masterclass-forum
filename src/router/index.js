import { createRouter, createWebHistory } from 'vue-router'
import sourceData from '@/data.json'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunckName: "PageHome" */ '@/views/Home.vue')
  },
  {
    path: '/category/:categoryId',
    name: 'CategoryShow',
    component: () => import(/* webpackChunckName: "PageCategoy" */ '@/views/CategoryShow.vue'),
    props: true
  },
  {
    path: '/forum/:forumId',
    name: 'ForumShow',
    component: () => import(/* webpackChunckName: "PageForum" */ '@/views/ForumShow.vue'),
    props: true,
    beforeEnter: (to, from, next) => {
      const forumExists = sourceData.forums.find(f => f.id === to.params.forumId)
      if (forumExists) {
        next()
      } else {
        next({
          name: 'NotFound',
          params: { pathMatch: to.path.substring(1).split('/') },
          query: to.query,
          hash: to.hash
        })
      }
    }
  },
  {
    path: '/thread/:threadId',
    name: 'ThreadShow',
    component: () => import(/* webpackChunckName: "PageThreadShow" */ '@/views/ThreadShow.vue'),
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
    component: () => import(/* webpackChunckName: "NotFound" */ '@/views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
