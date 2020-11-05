import { createRouter, createWebHashHistory } from "vue-router";

import Home from "../views/home";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "reactinfo" */ "../views/login"),
  },
  {
    path: "/recommend",
    name: "recommend",
    component: () =>
      import(/* webpackChunkName: "reactinfo" */ "../views/recommend"),
  },
  {
    path: "/singers",
    name: "singers",
    component: () =>
      import(/* webpackChunkName: "reactinfo" */ "../views/singers"),
  },
  {
    path: "/rank",
    name: "rank",
    component: () =>
      import(/* webpackChunkName: "reactinfo" */ "../views/rank"),
  },
];
console.log(process.env);
const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
