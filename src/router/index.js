import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/homePage',
    name: 'homepage',
    component: () => import('@/components/homePage/index.vue'),
    meta: {
      title: '首页',
      keepAlive: true,
    },
  },
  {
    path: '/produceInfo',
    name: 'produceInfo',
    component: () => import('@/components/produceInfo/index.vue'),
    meta: {
      title: '产品信息',
      keepAlive: true,
    },
  },
  {
    path: '/callUs',
    name: 'callUs',
    component: () => import('@/components/callUs/index.vue'),
    meta: {
      title: '联系我们',
      keepAlive: true,
    },
  },
  {
    path: '/checkMore',
    name: 'checkMore',
    component: () => import('@/components/checkMore/index.vue'),
    meta: {
      title: '查看更多',
      keepAlive: true,
    },
  },
  {
    path: '/burlesqueSociety/index',
    name: 'index',
    component: () => import('../views/burlesqueSociety/index.vue'),
    meta: {
      title: '滑稽社',
      keepAlive: true, // 需要被缓存
    },
  },

  {
    path: '/',
    redirect:"/burlesqueSociety/index"
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
