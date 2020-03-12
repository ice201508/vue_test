<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-row>
      <el-button @click="getLoading">默认按钮</el-button>
      <el-button @click="showmsg" type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    getLoading() {
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)',
      });
      setTimeout(() => {
        loading.close();
      }, 2000);
    },
    showmsg() {
      this.$message({
        showClose: true,
        message: '这是一条消息提示',
        type: 'success',
      });
      // this.$message({
      //   showClose: true,
      //   message: '这是一条消息提示',
      //   type: 'warning',
      // });
      // this.$message({
      //   showClose: true,
      //   message: '这是一条消息提示',
      //   type: 'error',
      // });
    },
  },
};
</script>
