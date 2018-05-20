<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <hr>
    <nav>
      <li><router-link to="/notice">使用ele-notice组件</router-link></li>
      <li><router-link to="/home">根据vue-router 路由发生跳转</router-link></li>
      <li><router-link to="/getmethod">使用 get request 方法</router-link></li>
      <li><router-link to="/postmethod">使用 post request 方法</router-link></li>
      <li><router-link to="/delmethod">使用 del request 方法</router-link></li>
      <li><router-link to="/loadpostcss">使用 less 文件</router-link></li>
      <li><router-link to="/vuexex">Vuex状态管理</router-link></li>
    </nav>
    <hr>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Want something new?',
      articles: null
    }
  },

  mounted: function(){
    console.log('init app');
  }
}
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
nav {
  min-height: 50px;
  width: 100%;
}
nav:before { content:''; clear:both; width:100%; height: 0px; }
nav:after { content:''; clear:both; width:100%; height: 0px; }
nav li {
    float:left;
}
</style>
