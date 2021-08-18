import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router';

export default function () {
  const routerHistory = import.meta.env.SSR === false ? createWebHistory() : createMemoryHistory();

  return createRouter({
    history: routerHistory,
    routes: [
      {
        path: '/',
        name: 'index',
        component: () => import('@/pages/index.vue')
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('@/pages/user.vue')
      },
      {
        path: '/market',
        name: 'market',
        component: () => import('@/pages/market.vue')
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('@/pages/about.vue')
      }
    ]
  });
}
