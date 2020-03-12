<template>
  <div class="h-wrap">
    <ul class="clearfix">
      <li>
        <router-link to="/home">首页</router-link>
      </li>
      <li>
        <router-link to="/about">我的</router-link>
      </li>
      <li>
        <router-link to="/calendar">日历</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.h-wrap {
  ul {
    li {
      float: left;
      margin: 0 10px;
      a {
        color: #fff;
        text-decoration: none;
        &.router-link-active {
          color: rgb(230, 29, 129);
        }
      }
    }
  }
}
</style>
