<template>
  <div class="wrap">
    <div class="header">
      <myheader></myheader>
    </div>
    <div class="container">
      <div class="sidebar">侧边栏</div>
      <div class="main">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import myheader from '@/components/myheader.vue';

export default {
  name: 'Header',
  components: {
    myheader,
  },
};
</script>

<style lang="scss">
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.header {
  flex: 0 0 50px;
  line-height: 50px;
  color: #fff;
  background-color: #2b4b6b;
}
.container {
  flex: 1 1 auto;
  // background-color: #ccc;
  display: flex;
  flex-direction: row;
}
.sidebar {
  flex: 0 0 200px;
  color: #000;
  background-color: rgb(149, 235, 208);
}
.main {
  flex: 1 1 auto;
  margin-left: 15px;
  color: #000;
  // background-color: rgb(84, 121, 233);
}
</style>
