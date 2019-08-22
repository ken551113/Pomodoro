import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todolist: []
  },
  mutations: {
    AddTodo(state, newTodo) {
      state.todolist.push(newTodo);
      console.log("add");
    }
  },
  actions: {}
});
