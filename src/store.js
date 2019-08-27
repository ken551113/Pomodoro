import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mode: "work",
    timer: null,
    modeTime: {
      work: 1500,
      break: 300
    },
    audio: null,
    ring: {
      work: "none",
      break: "none"
    },
    todoNowID: 111,
    todolist: [
      { id: 111, title: "the first thing to do today", finish: false },
      { id: 123, title: "the second thing to do today", finish: false },
      { id: 234, title: "the third thing to do today", finish: false },
      { id: 222, title: "the forth thing to do today", finish: false },
      { id: 455, title: "the fix thing to do today", finish: false },
      { id: 3415, title: "the six thing to do today", finish: false }
    ]
  },
  mutations: {
    AddTodo(state, newTodo) {
      state.todolist.push(newTodo);
    },
    changeStatus(state, { index, checked }) {
      state.todolist[index].finish = checked;
    },
    startCountDown(state) {
      state.timer = setInterval(() => state.modeTime[state.mode]--, 1000);
    },
    stopCountDown(state) {
      clearInterval(state.timer);
      state.timer = null;
    },
    changeTodoNow(state, todoNow) {
      state.todoNowID = todoNow.id;
      clearInterval(state.timer);
      state.timer = null;
      state.modeTime.work = 1500;
      state.modeTime.break = 300;
      state.mode = "work";
    },
    resetModeTime(state) {
      state.modeTime.work = 1500;
      state.modeTime.break = 300;
    },
    changeMode(state) {
      let mode = state.mode === "work" ? "break" : "work";
      state.mode = mode;
    },
    changeRing(state, { mode, ring }) {
      state.ring[mode] = ring;
    }
  },
  getters: {
    displayTime(state) {
      let time =
        state.mode === "work" ? state.modeTime.work : state.modeTime.break;
      let min = Math.floor(time / 60);
      let sec = time % 60;
      return `${min < 10 ? 0 : ""}${min}:${sec < 10 ? 0 : ""}${sec}`;
    },
    todoNow(state) {
      let todoNow = state.todolist.filter(todo => todo.id === state.todoNowID);
      return todoNow[0];
    },
    otherTodo(state) {
      let otherTodo = state.todolist.filter(
        todo => todo.id !== state.todoNowID && todo.finish !== true
      );
      otherTodo = otherTodo.slice(0, 4);
      return otherTodo;
    }
  }
});
