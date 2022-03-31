//router目录下的index.js
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import { R } from '@/api'

const routes = [
  {
    path: "/home",
    name: "Home",
    alias: "/",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/about",
    name: "About",
    alias: "/about",
    component: () => import("../views/About.vue")
  },
  {
    path: "/video",
    name: "video",
    alias: "/video",
    component: () => import("../views/Video.vue")
  },
  {
    path: "/news",
    name: "News",
    alias: "/news",
    component: () => import("../views/News.vue")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
//前置守卫
router.beforeEach((to, from, next) => {
  console.log('路由全局前置守卫', to, from);
  R.clearPending()
  next()
})
//后置守卫
router.afterEach((to, from) => {
  console.log('路由全局后置守卫', to, from);
})

export default router;
