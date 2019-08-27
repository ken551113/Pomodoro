<template>
  <div class="newTodo">
    <input type="text" name id placeholder="ADD A NEW MISSION…" v-model="todo" @keyup.enter="AddTodo"/>
    <a @click="AddTodo" >+</a>
  </div>
</template>

<script>
export default {
  name: "NewTodo",
  data(){
    return{
      todo: ""
    }
  },
  methods:{
    AddTodo(){
      if(!this.todo) return;
      var dateTime = Date.now();
      var timestamp = Math.floor(dateTime / 1000);
      this.$store.commit('AddTodo',{
        title : this.todo,
        id: timestamp,
        finish : false
      })
      this.todo="";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
    cursor: pointer;
  }
}
</style>
