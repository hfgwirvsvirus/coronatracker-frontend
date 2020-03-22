import Vue from "vue";
import VueRouter from "vue-router";
import Idle from "../views/Idle.vue";
import Success from "../views/Success.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Idle",
    component: Idle
  },
  {
    path: "/idle",
    name: "Idle",
    component: Idle
  },
  {
    path: "/success",
    name: "Success",
    component: Success
  }
];

const router = new VueRouter({
  routes
});

export default router;
