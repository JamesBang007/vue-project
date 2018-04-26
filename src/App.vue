<template>
  <div id="app">
    <!--<router-view/>-->
    <hello></hello>
  </div>
</template>

<script>
//使用组件三部曲：引入组件、注册组件、使用组件
import Hello from './components/hello'

export default {
  name: 'App',
  components:{
  	Hello:Hello
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
