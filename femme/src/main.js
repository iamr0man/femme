import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";

import "./assets/style/reset.css"
import "./assets/style/_type.scss"
import "./assets/style/_variables.scss"

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: h => h(App)
}).$mount("#app");
