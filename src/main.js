import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import VueQuagga from "vue-quaggajs";
import { store } from "@/store/store.js";
import Barcodescanner from "@/components/Barcodescanner.vue";
import "@/assets/css/tailwind.css";
import "@/assets/css/main.scss";

Vue.config.productionTip = false;
Vue.use(VueQuagga);
Vue.component("Barcodescanner", Barcodescanner);
Vue.use(Barcodescanner);

let vm = new Vue({
  router,
  store,
  render: h => h(App),
  mounted: function() {
    this.$nextTick(function() {
      // Code that will run only after the
      // entire view has been rendered
      setInterval(checkUserlist, 10000);
    });
  }
}).$mount("#app");

function checkUserlist() {
  let userlist = vm.$store.getters.getUserlist;
  userlist.forEach(user => {
    let pastTime = Date.now() - user.timestamp;
    let minutes = (pastTime / (1000 * 60)).toFixed(0);
    if (minutes > 60) {
      this.$store.dispatch("removeUser", {
        id: user.id,
        timestamp: Date.now()
      });
    }
  });
}
