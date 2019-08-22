import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Tools from "./views/Tools.vue";
import TodoListPanel from "./views/Tools/TodoListPanel.vue";
import AnalyticsPanel from "./views/Tools/AnalyticsPanel.vue";
import RingtonesPanel from "./views/Tools/RingtonesPanel.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/tools",
      name: "tools",
      component: Tools,
      children: [
        { path: "", component: TodoListPanel },
        { path: "analytics", component: AnalyticsPanel },
        { path: "ringtones", component: RingtonesPanel }
      ]
    }
  ]
});
