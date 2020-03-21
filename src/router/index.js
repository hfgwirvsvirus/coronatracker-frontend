import Vue from "vue";
import VueRouter from "vue-router";
import Idle from "../views/Idle.vue";
import Scan from "../views/Scan.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Idle",
    component: Idle
  },
  {
    path: "/scan",
    name: "Scan",
    component: Scan
  }
];

const router = new VueRouter({
  routes
});

export default router;
