import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css"; //install bootstrap first

Vue.config.productionTip = false;
Vue.use(require("bootstrap-vue/dist/bootstrap-vue.common.min"));

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
