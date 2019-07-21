import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Tools from "./views/Tools.vue";
import TodoList from "./views/Tools/TodoList.vue";
import Analytics from "./views/Tools/Analytics.vue";
import Ringtones from "./views/Tools/Ringtones.vue";

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
        { path: "", component: TodoList },
        { path: "analytics", component: Analytics },
        { path: "ringtones", component: Ringtones }
      ]
    }
  ]
});
