import { createRouter, createWebHashHistory } from "vue-router";

import Home from "../views/home";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},{
		path:"/login",
		name: "login",
		component: () =>
		import(/* webpackChunkName: "reactinfo" */ "../views/login"),
		}
]
console.log(process.env);
const router = createRouter({
	history: createWebHashHistory(process.env.BASE_URL),
	routes,
});
  
  export default router;