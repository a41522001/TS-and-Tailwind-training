import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import Home from "../views/Home.vue";
import Edit from "../views/Edit.vue";
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/edit/:id",
    name: "edit",
    component: Edit,
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
