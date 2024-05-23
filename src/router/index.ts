import { createRouter, createWebHistory } from "vue-router";
import Details from "../components/Details.vue";
import Insert from "../components/Insert.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/accueil.vue"),
    },
    {
      path: "/details/:id",
      name: "details",
      component: Details,
      props: true,
    },
    {
      path: "/insert",
      name: "insert",
      component: Insert,
      props: true,
    },
  ],
});

export default router;
