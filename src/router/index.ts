import VueRouter from "vue-router";

const createRouter = () =>
  new VueRouter({
    routes: [
      {
        path: "/",
        component: () => import("../views/Home.vue"),
      },
    ],
  });

const router = createRouter();
export default router;
