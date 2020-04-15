<template>
  <div class="h-goods">
    <p>商品价格： {{ this.$store.getters.priceFormat }}</p>
    <p>商品详情: {{ this.$store.state.count }}</p>
    <p>getters类似于计算属性： {{ this.$store.getters.getCount }}</p>
    <button @click="updateCount">修改</button>
    <button @click="updateAsync">异步修改</button>
    <p>商品总数：{{ this.$store.getters.addrFormat }}</p>
  </div>
</template>

<script>
export default {
  methods: {
    updateCount() {
      this.$store.commit('add', {
        num: 10,
      });
    },
    updateAsync() {
      // this.$store.dispatch('addAsync');
      this.$store.dispatch({
        type: 'addAsync',
        num: 20,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.h-goods {
  width: 200px;
  height: 300px;
  margin: 15px;
  color: floralwhite;
  background-color: darkcyan;
}
</style>
