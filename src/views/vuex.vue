<template>
  <div class="h-vuex">
    <goods />
    <carts />
  </div>
</template>

<script>
import Goods from '@/components/Goods.vue';
import Carts from '@/components/Carts.vue';

export default {
  data() {
    return {};
  },
  components: {
    goods: Goods,
    carts: Carts,
  },
};
</script>

<style lang="scss" scoped>
.h-vuex {
  display: flex;
}
</style>
