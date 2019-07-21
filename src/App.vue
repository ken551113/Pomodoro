<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
//@import "~bootstrap/scss/bootstrap";
html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
* {
  font-family: "Roboto", sans-serif;
  box-sizing: border-box;
}
#app {
  height: 100%;
  min-width: 1280px;
  min-height: 721px;
  overflow: hidden;
}
</style>
