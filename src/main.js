import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import VueQuagga from "vue-quaggajs";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
Vue.use(VueQuagga);
