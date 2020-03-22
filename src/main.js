import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import VueQuagga from "vue-quaggajs";
import Barcodescanner from "@/components/Barcodescanner.vue";

Vue.config.productionTip = false;

Vue.use(VueQuagga);
Vue.component("Barcodescanner", Barcodescanner);
Vue.use(Barcodescanner);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
