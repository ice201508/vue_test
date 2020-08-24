<template>
  <div class="home">
    <vue-particles
      color="#dedede"
      :particleOpacity="0.5"
      :particlesNumber="80"
      shapeType="suare"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
  </div>
</template>

<script>
export default {
  name: 'Home'
};
</script>

<style lang="scss">
.home {
  background: url('~@/assets/sky.jpg');
  background-size: cover;
}
</style>
