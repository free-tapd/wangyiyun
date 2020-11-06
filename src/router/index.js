import { createRouter, createWebHashHistory } from "vue-router";

import Home from "../views/home";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children:[
      {
        path: "recommend",
        name: "recommend",
        component: () =>
          import(/* webpackChunkName: "reactinfo" */ "../views/home/children/recommend"),
      },
      {
        path: "singers",
        name: "singers",
        component: () =>
          import(/* webpackChunkName: "reactinfo" */ "../views/home/children/singers"),
      },
      {
        path: "rank",
        name: "rank",
        component: () =>
          import(/* webpackChunkName: "reactinfo" */ "../views/home/children/rank"),
      },
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "reactinfo" */ "../views/login"),
  }
  
];
console.log(process.env);
const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
