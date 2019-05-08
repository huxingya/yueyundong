<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  html,body{
    height: 100%;
    width: 100%;
    background: #eee;
    color: #101010;
    font-size: 16px;
  }
  body,p{
    margin: 0;
    padding: 0;
  }
  img{
    display: block;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
