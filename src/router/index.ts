import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import {main} from './modules/main'
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "/",
    meta: {
      title: "首页",
      keepAlive: false
    },
    component: () => import("@/layout/index.vue"),
    redirect: "/home",
    children: [
        ...main
    ]
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "登录",
      keepAlive: true
    },
    component: () => import("@/views/Login/index.vue"),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes
});
export default router;