const routes = [
  { path: "/", name: "home", component: () => import(/* webpackChunkName: "home" */ "@/views/Home") },
  { path: "/about", name: "about", component: () => import(/* webpackChunkName: "about" */ "@/views/About") },
  {
    path: "/:notFound(.*)",
    hidden: true,
    component: () => import("@/views/not-found/NotFound.vue"),
  },
];

export default routes;
