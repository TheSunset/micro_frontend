<template>
  <h3>APP</h3>
  <div @click="goChildApp(1)">ChildVueApp</div>
  <div @click="goChildApp(2)">ChildReactApp</div>
  <router-view></router-view>
  <div id="vue"></div>
  <div id="react"></div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  mounted() {
    // console.log(this.$)
  },
  methods: {
    goChildApp(type) {
      switch (type) {
        case 1:
          this.$router.push('/app-vue')
          // window.location.href = '/app-vue';
          break;
        case 2:
          this.$router.push('/app-react')
          // window.location.href = '/app-react';
          break;
      }
    }
  }
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
