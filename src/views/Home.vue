<template>
  <div class="main" :class="this.$store.state.mode === 'work' ? '':'break'">
    <div class="left">
      <NewTodo></NewTodo>
      <div class="todo-now" v-if="todoNow">
        <input
          type="checkbox"
          :id="todoNow.id"
          class="checkbox"
          :checked="todoNow.finish"
          @change="changeStatus(todoNow,$event)"
        />
        <label :for="todoNow.id"></label>
        <span class="content">{{todoNow.title}}</span>
      </div>
      <div class="Time-Counter">{{displayTime}}</div>
      <ul class="todo-list">
        <li class="todo" v-for="todo in otherTodo" :key="todo.id">
          <input
            type="checkbox"
            name
            :id="todo.id"
            class="checkbox"
            :checked="todo.finish"
            @change="changeStatus(todo,$event)"
          />
          <label :for="todo.id"></label>
          <span class="content">{{todo.title}}</span>
          <i class="material-icons doItNow" @click="doItNow(todo)">play_circle_outline</i>
        </li>
        <router-link to="/tools/" class="todo-list-more">more</router-link>
      </ul>
    </div>
    <div class="right">
      <div class="bgc-r"></div>
      <div class="bgc-l"></div>
      <div class="controller">
        <percent-bar
          v-if="this.$store.state.mode === 'work'"
          key="222"
          class="timer"
          :value="calcPercent"
          :options="{radius: 268,circleWidth: 20,pathColors: ['', '#ff4384']}"
        ></percent-bar>
        <percent-bar
          v-else
          key="123"
          class="timer ffff"
          :value="calcPercent"
          :options="{radius: 268,circleWidth: 20,pathColors: ['', '#00a7ff']}"
        ></percent-bar>
        <div class="inner-circle" :class="this.$store.state.timer !== null ? 'playing':''">
          <i
            class="material-icons play-button"
            @click="startCounter"
            :class="this.$store.state.timer !== null ? 'playing':''"
          >{{this.$store.state.timer===null?"play_circle_filled":"pause_circle_filled"}}</i>
          <div
            class="stop-button"
            @click="resetTimer"
            :class="this.$store.state.timer !== null ? 'playing':''"
          ></div>
        </div>
      </div>
    </div>
    <div class="nav">
      <div class="nav-list">
        <router-link to="/tools/" class="nav-button">
          <i class="material-icons">list</i>
        </router-link>
        <router-link to="/tools/analytics" class="nav-button">
          <i class="material-icons">assessment</i>
        </router-link>
        <router-link to="/tools/ringtones" class="nav-button">
          <i class="material-icons">library_music</i>
        </router-link>
        <div class="logo">POMODORO</div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import NewTodo from "../components/NewTodo";
import { mapGetters } from "vuex";

export default {
  components: {
    NewTodo
  },
  data() {
    return {};
  },
  computed: {
    calcPercent() {
      let base = this.$store.state.mode === "work" ? 1500 : 300;
      let percent =
        100 - (this.$store.state.modeTime[this.$store.state.mode] / base) * 100;
      if (percent === 100) {
        this.playAudio();

        this.$store.commit("stopCountDown");
        this.$store.commit("resetModeTime");
        this.$store.commit("changeMode");
        let todoNow = this.$store.getters.todoNow;
        let index = this.$store.state.todolist.indexOf(todoNow);
        this.$store.commit("changeStatus", { index, checked: true });
      }
      return percent;
    },
    percentOption() {
      let colors = this.$store.state.mode === "work" ? "#ff4384" : "#00a7ff";
      return {
        radius: 266,
        circleWidth: 30,
        pathColors: ["", colors]
      };
    },
    ...mapGetters(["displayTime", "todoNow", "otherTodo"])
  },
  methods: {
    changeStatus(todo, event) {
      let index = this.$store.state.todolist.indexOf(todo);
      let checked = event.target.checked;
      this.$store.commit("changeStatus", { index, checked });
    },
    doItNow(todo) {
      this.$store.commit("changeTodoNow", todo);
    },
    startCounter() {
      if (this.$store.state.timer === null) {
        this.$store.commit("startCountDown");
      } else {
        this.$store.commit("stopCountDown");
      }
    },
    resetTimer() {
      this.$store.commit("stopCountDown");
      this.$store.commit("resetModeTime");
    },
    playAudio() {
      let ringValue = this.$store.state.ring[this.$store.state.mode];
      if (ringValue === "none") {
        if (this.audio) this.audio.pause();
        this.audio = null;
      } else {
        if (this.audio) this.audio.pause();
        this.audio = new Audio(
          `${process.env.BASE_URL}Ringtones/${ringValue}.mp3`
        );
        this.audio.play();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.checkbox {
  display: none;
}
label {
  display: inline-block;
  width: 24px;
  height: 24px;
  border: 1px solid rgba(black, 0);
  border-radius: 50%;
  position: relative;
  vertical-align: middle;
  opacity: 1;
}

label::before {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #003164;
  cursor: pointer;
  position: absolute;
  content: "";
  opacity: 1;
  transition: 0.5s;
  vertical-align: middle;
}

label::after {
  transition: opacity 0.5s ease;
  transition-delay: 0.25s;
  cursor: pointer;
  position: absolute;
  content: "";
  opacity: 0;
}

.checkbox:checked + label::before {
  // animation:ani2 .5s ;
  border: 2px solid #003164;
  transform: scale(2, 2);
  opacity: 0;
}

.checkbox:checked + label::after {
  border: 2px solid #5574df;
  border-top: none;
  border-right: none;
  transform: rotate(-45deg);
  width: 12px;
  height: 6px;
  top: 50%;
  margin-top: -6px;
  left: 50%;
  margin-left: -5px;
  opacity: 1;
}

.doItNow {
  color: #003164;
  float: right;
  margin-top: 3px;
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    color: #ff4384;
  }
}

.main {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  .newTodo {
    height: 56px;
    width: 445px;
    background-color: #fff;
    position: relative;
    input {
      // padding: 0px;
      border: none;
      padding-left: 16px;
      padding-right: 40px;
      width: 100%;
      height: 100%;
      font-size: 16px;
      &:focus {
        outline: none;
      }
      &::placeholder {
        color: #ff4384;
        font-size: 16px;
        font-weight: bold;
        font-style: italic;
        letter-spacing: 1px;
      }
    }
    a {
      color: #ff4384;
      position: absolute;
      right: 16px;
      top: 16px;
      width: 24px;
      height: 24px;
      font-size: 24px;
      text-align: center;
      line-height: 24px;
    }
  }
  .left {
    position: relative;
    padding-top: 48px;
    padding-left: 85px;
    display: inline-block;
    width: 43.75%;
    background-color: #ffedf7;
    height: 100%;
    .todo-now {
      position: absolute;
      font-size: 24px;
      color: #003164;
      font-weight: bold;
      top: 50%;
      transform: translateY(-100%) translateY(-103px);
      width: 454px;

      .radio {
        display: inline-block;
        width: 48px;
        height: 48px;
        border: 2px #003164 solid;
        border-radius: 50%;
      }
      .content {
        display: inline-block;
        position: absolute;

        left: 64px;
      }

      .checkbox {
        display: none;
      }
      label {
        display: inline-block;
        width: 48px;
        height: 48px;
        border: 2px solid rgba(black, 0);
        border-radius: 50%;
        position: relative;
        vertical-align: middle;
        opacity: 1;
      }

      label::before {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        border: 2px solid #003164;
        cursor: pointer;
        position: absolute;
        content: "";
        opacity: 1;
        transition: 0.5s;
        vertical-align: middle;
      }

      label::after {
        transition: opacity 0.5s ease;
        transition-delay: 0.25s;
        cursor: pointer;
        position: absolute;
        content: "";
        opacity: 0;
      }

      .checkbox:checked + label::before {
        // animation:ani2 .5s ;
        border: 2px solid #003164;
        transform: scale(2, 2);
        opacity: 0;
      }

      .checkbox:checked + label::after {
        border: 3px solid #5574df;
        border-top: none;
        border-right: none;
        transform: rotate(-45deg);
        width: 24px;
        height: 12px;
        top: 50%;
        margin-top: -12px;
        left: 50%;
        margin-left: -12px;
        opacity: 1;
      }
    }
    .Time-Counter {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 454px;
      height: 206px;
      font-size: 176px;
      color: #ff4384;
      font-weight: bold;
      left: 80px;
    }
    .todo-list {
      position: absolute;
      bottom: 76px;
      list-style: none;
      padding: 0px;
      width: 445px;
      height: 123px;
      .todo {
        width: 100%;
        height: 32px;
        position: relative;
        margin-bottom: 9px;
        border-bottom: 1px solid rgba(#003164, 0.2);
        .radio {
          display: inline-block;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: 2px solid #003164;
        }
        .content {
          display: inline-block;
          position: absolute;
          left: 28px;
          top: 3px;
          height: 24px;
          font-size: 16px;
          color: #003164;
          line-height: 24px;
          font-weight: bold;
        }
      }
      .todo-list-more {
        position: absolute;
        right: 0px;
        font-size: 16px;
        font-weight: bold;
        color: #ff4384;
        text-decoration: none;
        transition: 0.5s;
        &:hover {
          color: #003164;
        }
      }
    }
  }
  .right {
    display: inline-block;
    width: 42.18%;
    background-color: #003164;
    height: 100%;
    position: relative;
    .bgc-r {
      display: inline-block;
      width: 50%;
      background-color: #ffedf7;
      height: 100%;
    }
    .bgc-l {
      display: inline-block;
      width: 50%;
      background-color: #003164;
      height: 100%;
    }
    .controller {
      position: absolute;
      width: 540px;
      height: 540px;
      top: 50%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%);
      border-radius: 50%;
      border: #ff4384 4px solid;
      .timer {
        position: absolute;
        top: -1px;
        left: -1.5px;
      }
      //background-color: #ff4384;
      .inner-circle {
        position: absolute;
        width: 505px;
        height: 505px;
        top: 50%;
        left: 50%;
        transform: translateY(-50%) translateX(-50%);
        background-color: #ff4384;
        border-radius: 50%;
        border: solid #ff4384 4px;
        content: "";
        z-index: 0;
        &.playing {
          background: white;
        }
      }
      i {
        color: white;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateY(-50%) translateX(-50%);
        font-size: 100px;
        z-index: 1;
        transition: 0.3s;
        &:hover {
          cursor: pointer;
        }
        &.playing {
          color: #ff4384;
        }
      }
      .stop-button {
        position: absolute;
        top: 285px;
        right: 193px;
        width: 10px;
        height: 10px;
        background-color: #fff;
        margin: 14px;
        z-index: 1;
        transition: 0.3s;
        &:hover {
          cursor: pointer;
        }
        &.playing {
          background-color: #ff4384;
        }
      }
    }
  }
  .nav {
    position: relative;
    background-color: #003164;
    width: 14.07%;
    height: 100%;
    color: white;
    .nav-list {
      position: absolute;
      width: 36px;
      height: 100%;
      //background-color: #fff;
      right: 85px;
      padding-top: 45px;
      .nav-button {
        color: white;
        i {
          font-size: 36px;
          margin-bottom: 48px;
          transition: 0.5s;
          cursor: pointer;
          &:hover {
            transform: scale(1.4);
          }
        }
      }
      .logo {
        position: absolute;
        bottom: 48px;
        right: 0px;
        //transform: translateY(-48px);
        writing-mode: vertical-lr;
        font-size: 24px;
        font-weight: bold;
        line-height: 36px;
        text-align: center;
        width: 100%;
        letter-spacing: 1px;
      }
    }
  }
  &.break {
    .todo-list {
      .todo-list-more {
        color: #00a7ff;
      }
    }
    .Time-Counter {
      color: #00a7ff;
    }
    .controller {
      border: #00a7ff solid 4px;
      .inner-circle {
        background-color: #00a7ff;
        border: #00a7ff solid 4px;
        .play-button.playing {
          color: #00a7ff;
        }
        .stop-button.playing {
          background-color: #00a7ff;
        }
      }
    }
  }
}
</style>

