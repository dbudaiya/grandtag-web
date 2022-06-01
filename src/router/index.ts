//router目录下的index.js
import { createRouter, createWebHistory, RouteRecordRaw, } from 'vue-router';
import { routes_info } from '~/mock/routes.ts'


// const routes: RouteRecordRaw[] = []
// routes_info.forEach((i, k) => {
//   if (k == 0) {

//   }
//   router.push({
//     path: "/home",
//     name: "Home",
//     alias: "/",
//     component: () => import("../views/Home.vue")
//   })

//   console.log(k)
// });
const routes = [
  {
    path: "/home",
    name: "首页",
    alias: "/",
    component: () => import("../views/home/index.vue")
  },
  {
    path: "/witness",
    name: "客户见证",
    component: () => import("../views/witness/index.vue")
  },
  {
    path: "/special",
    name: "8项专长",
    component: () => import("../views/special/index.vue")
  },
  {
    path: "/vision",
    name: "职业愿景",
    component: () => import("../views/vision/index.vue")
  },
  {
    path: "/lecture",
    name: "讲座",
    component: () => import("../views/lecture/index.vue")
  },
  {
    path: "/reward",
    name: "$300奖励",
    component: () => import("../views/reward/index.vue")
  },
  {
    path: "/reward-detail/:id",
    name: "奖励详情",
    component: () => import("../views/reward/reward-detail.vue")
  },
  {
    path: "/contact",
    name: "联系我们&问答",
    component: () => import("../views/contact/index.vue")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
//前置守卫
router.beforeEach((to, from, next) => {
  console.log('路由全局前置守卫', to, from);
  next()
})
//后置守卫
router.afterEach((to, from) => {
  console.log('路由全局后置守卫', to, from);
})

export default router;
