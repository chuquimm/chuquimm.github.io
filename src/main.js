import Vue from "vue";
import App from "./App.vue";
import "bootstrap";

import "./assets/css/animate.css";
import "./assets/css/bootstrap.css";
import "./assets/css/style.css";

import "./assets/fonts/icomoon/style.css";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
