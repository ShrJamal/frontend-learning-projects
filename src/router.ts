import { createRouter, createWebHashHistory } from 'vue-router'

export const routes = [{ name: 'home', path: './projects/0-gallery' }]

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes.map((r) => ({
    path: `/${r.name}`,
    component: () => import(r.path),
  })),
})
