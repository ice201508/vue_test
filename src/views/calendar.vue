<template>
  <div class="home">
    <h3>我们下面的组件就是我们 自己定义的日历组件</h3>
    <calendar v-if="!large" :search-time="'2020-5-19'"></calendar>
  </div>
</template>

<script>
import Calendar from '@/components/calendar_com.vue';

export default {
  name: 'Home',
  data() {
    return {
      // large 是异步请求过来的数据，使用v-if 有值了以后再渲染子组件
      large: null,
    };
  },
  components: {
    Calendar,
  },
};
</script>

<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  border: 2px solid red;
}
</style>
