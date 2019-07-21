<template>
  <div class="main">
    <div class="left">
      <div class="newTodo">
        <input type="text" name id placeholder="ADD A NEW MISSION…" />
        <a>+</a>
      </div>
      <div class="todo-now">
        <div class="radio"></div>
        <div class="content">the First thing to do today</div>
      </div>
      <div class="Time-Counter">25:00</div>
      <ul class="todo-list">
        <li class="todo" v-for="todo in todolist" :key="todo.id">
          <div class="radio"></div>
          <div class="content">{{todo.name}}</div>
          <!-- <input type="checkbox" name="" id="checkbox">
          <span class="content">{{todo.name}}</span> -->

        </li>
        <router-link to="/tools/" class="todo-list-more">
          more
        </router-link>
      </ul>
    </div>
    <div class="right">
      <div class="bgc-r"></div>
      <div class="bgc-l"></div>
      <div class="button">
        <i class="material-icons">play_circle_filled</i>
        <div class="stop-button"></div>
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

export default {
  data() {
    return {
      todolist: [
        { id: 123, name: "ken" },
        { id: 234, name: "amy" },
        { id: 345, name: "cindy" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
}
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

    .radio {
      display: inline-block;
      width: 48px;
      height: 48px;
      border: 2px #003164 solid;
      border-radius: 50%;
    }
    .content {
      display: inline-block;
      position: relative;
      bottom: 20px;
      left: 16px;
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
        top: 0px;
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
      &:hover{
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
  .button {
    position: absolute;
    width: 540px;
    height: 540px;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    border-radius: 50%;
    border: #ff4384 4px solid;
    //background-color: #ff4384;
    &::before {
      position: absolute;
      width: 505px;
      height: 505px;
      top: 50%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%);
      background-color: #ff4384;
      border-radius: 50%;
      content: "";
    }
    i {
      color: white;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%);
      font-size: 100px;
    }
    .stop-button {
      position: absolute;
      top: 285px;
      right: 193px;
      width: 10px;
      height: 10px;
      background-color: #fff;
      margin: 14px;
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
</style>

