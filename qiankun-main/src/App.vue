<template>
  <router-view></router-view>
  <h3>APP</h3>
  <button @click="goChildApp(1)">GoChildVueApp</button>
  <button @click="goChildApp(2)">GoChildReactApp</button>
  <div id="vue"></div>
  <div id="react"></div>
</template>

<script>
import { loadMicroApp } from "qiankun";
export default {
  name: "App",
  components: {},
  mounted() {
    // console.log(this.$)
    // 同时加载多个子应用
    loadMicroApp({
      name: "sunset_vue_app", // 应用的名字
      entry: "//localhost:8081", // 默认会加载这个html 解析里面的js 动态的执行 （子应用必须支持跨域）fetch
      container: "#vue", // 容器名（此项目页面中定义的容器id，用于把对应的子应用放到此容器中）
      props: { a: 10086 }, // 传递的值（可选）
    });

    loadMicroApp({
      name: "sunset_react_app",
      entry: "//localhost:8082", // 默认会加载这个html 解析里面的js 动态的执行 （子应用必须支持跨域）fetch
      container: "#react",
    });
  },
  methods: {
    goChildApp(type) {
      switch (type) {
        case 1:
          this.$router.push("/app-vue");
          // window.location.href = '/app-vue';
          break;
        case 2:
          this.$router.push("/app-react");
          // window.location.href = '/app-react';
          break;
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
