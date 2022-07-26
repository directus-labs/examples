import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),

    children: [
      { path: '', meta: { requiresAuth: false }, component: () => import('pages/IndexPage.vue') },
      { path: '/profile', meta: { requiresAuth: true }, name: 'ProfilePage', component: () => import('pages/ProfilePage.vue') },
      { path: '/auth', meta: { requiresAuth: false }, name: 'AuthPage', component: () => import('pages/AuthPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
