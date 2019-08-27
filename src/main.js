import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import svg from "svg-progress-bar";
Vue.use(svg, { componentName: "percent-bar" });
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
