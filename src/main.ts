import Vue from "vue";
import App from "@/App.vue";
import store from "./store/index";
import router from "./router/index";
import VCA, { createApp, h } from "@vue/composition-api";
import "./style.scss";
import VueRouter from "vue-router";
import "vue-fabric/dist/vue-fabric.min.css";
import { Fabric } from "vue-fabric";

Vue.config.productionTip = false;
Vue.use(Fabric);
Vue.use(VCA);
Vue.use(VueRouter);
const app = createApp({
  router,
  store,
  render: () => h(App),
});

app.mount("#app");
