import { createRouter, createWebHistory } from 'vue-router'
import { projects } from './projects'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: () => import(/* @vite-ignore */ './HomePage.vue') },
    ...projects.map(({ path, mainFile }) => ({
      path,
      component: () => import(/* @vite-ignore */ mainFile),
    })),
  ],
})
