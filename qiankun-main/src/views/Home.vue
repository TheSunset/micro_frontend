<template>
  <div class="home">
    <h3>Home 组件</h3>
    <div style="border: 1px solid red">
      <h3>Home 组件子路由</h3>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {};
  },
  mounted() {},
  methods: {
    
  }
};
</script>

<style scoped lang="css">
  .home {
    border: 1px solid red;
  }
</style>