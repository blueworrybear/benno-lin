<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
@import (css) url('https://fonts.googleapis.com/css?family=Open+Sans:300i,400,400i,600,600i&display=swap');
@import "./assets/styles/reset.less";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

body {
  margin: 0 !important;
  height: 100%;
}
</style>
