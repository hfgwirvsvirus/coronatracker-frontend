import Vue from "vue";
import VueRouter from "vue-router";
import Idle from "../views/Idle.vue";
import Success from "../views/Success.vue";
import Checkout from "../views/Checkout.vue";

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
    path: "/success/:uid",
    name: "Success",
    component: Success
  },
  {
    path: "/checkout/:uid",
    name: "Checkout",
    component: Checkout
  }
];

const router = new VueRouter({
  routes
});

export default router;
