<template>
  <div class="tools" :class="this.$store.state.mode === 'work' ? '':'break'">
    <div class="left">
      <div class="tools-nav">
        <router-link to="/tools/" class="active">
          <i class="nav-button material-icons">list</i>
          TO-DO LIST
        </router-link>
        <router-link to="/tools/analytics">
          <i class="nav-button material-icons">assessment</i>
          ANALYTICS
        </router-link>
        <router-link to="/tools/ringtones">
          <i class="nav-button material-icons">library_music</i>
          RINGTONES
        </router-link>
      </div>
      <div class="clock">
        <div class="button">
          <percent-bar
            v-if="this.$store.state.mode === 'work'"
            key="2314"
            class="timer"
            :value="calcPercent"
            :options="{radius: 54,circleWidth: 10,pathColors: ['', '#ff4384']}"
          ></percent-bar>
          <percent-bar
            v-else
            key="12123"
            class="timer"
            :value="calcPercent"
            :options="{radius: 54,circleWidth: 10,pathColors: ['', '#00a7ff']}"
          ></percent-bar>
          <i class="material-icons play-btn" @click="startCounter">{{this.$store.state.timer===null?"play_circle_filled":"pause_circle_filled"}}</i>
        </div>
        <div class="display-time">{{displayTime}}</div>
        <div class="todo-now">{{todoNow.title}}</div>
      </div>
    </div>
    <div class="right">
      <router-link to="/" class="back-btn">
        <i class="material-icons">close</i>
      </router-link>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    startCounter() {
      if (this.$store.state.timer === null) {
        this.$store.commit("startCountDown");
      } else {
        this.$store.commit("stopCountDown");
      }
    },
  },
  computed: {
    calcPercent() {
      let base = this.$store.state.mode === "work" ? 1500 : 300;
      let percent =
        100 - (this.$store.state.modeTime[this.$store.state.mode] / base) * 100;
      if (percent === 100) {
        this.$store.commit("stopCountDown");
        this.$store.commit("resetModeTime");
        this.$store.commit("changeMode");
        let todoNow = this.$store.getters.todoNow;
        let index = this.$store.state.todolist.indexOf(todoNow);
        this.$store.commit("changeStatus", { index, checked: true });
      }
      return percent;
    },
    ...mapGetters(["displayTime", "todoNow", "otherTodo"])
  }
};
</script>

<style lang="scss" scoped>
.tools {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: #003164;
  &.break {
    .router-link-exact-active {
      color: #00a7ff;
    }
    .clock {
      .button {
        &::before {
          border: #00a7ff 2px solid;
        }
      }
      .play-btn {
        color: #00a7ff;
      }

      .display-time {
        color: #00a7ff;
      }
    }
  }
}
.left {
  position: relative;
  width: 43.75%;
  height: 100%;
  .tools-nav {
    position: relative;
    font-size: 36px;
    left: 85px;
    top: 48px;
    font-weight: bold;
  }
  i {
    font-size: 36px;
  }
  a {
    line-height: 36px;
    font-size: 36px;
    height: 36px;
    display: block;
    text-decoration: none;
    margin-bottom: 42px;
    color: rgba(#ffffff, 0.2);
    letter-spacing: 1px;
  }
  .router-link-exact-active {
    color: #ff4384;
  }
  .clock {
    width: 350px;
    height: 350px;
    background-color: #ffedf7;
    border-radius: 50%;
    position: absolute;
    transform: translateY(50%);
    bottom: 0px;
    left: 85px;
    .timer {
      position: absolute;
      height: 110px;
      width: 110px;
      left: 4px;
      top: 4px;
    }
  }
  .button {
    position: absolute;
    width: 116px;
    height: 116px;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    border-radius: 50%;
    background-color: #003164;
    box-sizing: border-box;
    &::before {
      content: " ";
      width: 104px;
      height: 104px;
      position: absolute;
      border: #ff4384 2px solid;
      border-radius: 50%;
      left: 50%;
      top: 50%;
      transform: translateY(-50%) translateX(-50%);
    }
    .play-btn {
      color: #ff4384;
      font-size: 110px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      &::before {
        content: "";
        position: absolute;
        background-color: #fff;
        width: 50%;
        height: 50%;
        left: 50%;
        top: 50%;
        transform: translateY(-50%) translateX(-50%);
        z-index: -1;
      }
      &:hover{
        cursor: pointer;
      }
    }
  }
  .display-time {
    position: absolute;
    left: 50%;
    top: 57px;
    transform: translateX(-50%);
    font-size: 64px;
    color: #ff4384;
    font-weight: bold;
  }
  .todo-now {
    position: absolute;
    left: 50%;
    top: 132px;
    width: 232px;
    text-align: center;
    transform: translateX(-50%);
    font-size: 16px;
    font-weight: bold;
    color: #003164;
  }
}
.right {
  position: relative;
  width: 56.25%;
  height: 100%;
  .back-btn {
    position: absolute;
    right: 85px;
    top: 48px;
    width: 48px;
    height: 48px;
    color: white;
    i {
      font-size: 48px;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
