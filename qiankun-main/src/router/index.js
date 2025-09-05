const routes = [
	{
		path: "/home",
		name: "home",
		component: () => import(/* webpackChunkName: "home" */ "@/views/Home"),
		children: [
			{
				path: "app-vue",
				name: "homeChild",
				component: () => import("@/views/HomeChild")
			}
		]
	},
	{
		path: "/about",
		name: "about",
		component: () => import(/* webpackChunkName: "about" */ "@/views/About"),
	},
	{
    path: "/:notFound(.*)",
    hidden: true,
    component: () => import("@/views/not-found/NotFound.vue"),
  },
];

export default routes;
