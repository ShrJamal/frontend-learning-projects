import { createRouter, createWebHashHistory } from 'vue-router'
import { projects } from './projects'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: () => import(/* @vite-ignore */ './HomePage.vue') },
    ...projects.map(({ path, mainFile }) => ({
      path,
      component: () => import(/* @vite-ignore */ mainFile),
    })),
  ],
})
