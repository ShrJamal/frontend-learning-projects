import { createRouter, createWebHashHistory } from 'vue-router'

export const routes = [
  { name: 'home', path: '/', mainFile: './projects/0-gallery/index.vue' },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes.map(({ path, mainFile }) => ({
    path,
    component: () => import(/* @vite-ignore */ mainFile),
  })),
})
