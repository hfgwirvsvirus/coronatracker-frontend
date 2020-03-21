import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import VueQrcodeReader from "vue-qrcode-reader";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
Vue.use(VueQrcodeReader);
