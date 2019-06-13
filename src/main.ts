import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import './reset.css'
import "./font";

Vue.config.productionTip = false;

axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
