<template>
  <div class="h-carts">
    <p>商品数量: {{ count }}---{{ list }}</p>
    <div>{{ getCount }},,, {{ priceFormat }}</div>
    <div>
      <button @click="add({ num: 100, e: $event })">辅助函数</button>
    </div>
    <p>另一个模块的内容： {{ this.$store.state.a.addr }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  methods: {
    ...mapMutations(['add', 'remove']),
  },
  computed: {
    ...mapState({
      count: (state) => state.count,
      // count: 'count',
      list: 'list',
    }),
    ...mapGetters(['getCount', 'priceFormat']),
  },
};
</script>

<style lang="scss" scoped>
.h-carts {
  width: 200px;
  height: 300px;
  margin: 15px;
  color: floralwhite;
  background-color: darkcyan;
}
</style>
