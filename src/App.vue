<template>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <header-menu></header-menu>
    <!-- <index-left-window></index-left-window> -->
    <router-view></router-view>
</template>

<script>
    // import HelloWorld from './components/HelloWorld.vue'
    import HeaderMenu from './components/header-menu.vue'
    // import IndexLeftWindow from './components/index-left-window.vue'

    export default {
        name: 'App',
        components: {
            "header-menu": HeaderMenu,
            // "index-left-window": IndexLeftWindow,
        }
    }
</script>

<style>
    /* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
    #app {
        display: flex;
        flex-direction: column;
    }

    html,
    body {
        margin: 0;
        padding: 0;
    }

    view {
        display: flex;
        margin: 0;
        padding: 0;
    }

    text {
        display: flex;
        font-weight: lighter;
        font-family: "Microsoft YaHei";
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /* text-align: center; */
        color: #2c3e50;
    }
    
    /* router-link标签去掉下划线 */
    .router-link-active {
        text-decoration: none;
    }
</style>
