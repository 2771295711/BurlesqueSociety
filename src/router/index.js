import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/burlesqueSociety',
    name: 'index',
    component: () => import('../views/burlesqueSociety/index.vue'),
    meta: {
      title: '滑稽社',
      keepAlive: true, // 需要被缓存
    },
    children: [
      {
        path: 'produceInfo',
        name: 'produceInfo',
        component: () => import('@/components/produceInfo/index.vue'),
      },
      {
        path: 'callUs',
        name: 'callUs',
        component: () => import('@/components/callUs/index.vue'),
      },
      {
        path: 'checkMore',
        name: 'checkMore',
        component: () => import('@/components/checkMore/index.vue'),
      },
      {
        path: 'homePage',
        name: 'homepage',
        component: () => import('@/components/homePage/index.vue'),
      },
    ],
  },

  {
    path: '/',
    redirect: '/burlesqueSociety/index',
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
