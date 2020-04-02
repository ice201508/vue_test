<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-row>
      <el-button @click="getLoading">默认按钮</el-button>
      <el-button @click="showmsg" type="primary">主要按钮</el-button>
      <el-button @click="getAjax" type="success">get请求</el-button>
      <el-button @click="postAjax" type="info">post请求</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
    <hr />
    <template v-if="imgs && imgs.length > 0">
      <el-image style="width: 200px" :src="imgs[0]" :preview-src-list="imgs"> </el-image>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: null,
      flag: true,
    };
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
    },
    getAjax() {
      const _that = this;
      if (this.flag) {
        this.imgs = [];
        this.flag = false;
        setTimeout(async () => {
          this.flag = true;
          // const [err, list] = await _that.$http.get('/getss').catch((err) => {
          //   console.log('请求失败： ', err);
          // });
          // const res1 = await _that.$http.get('/get').catch((err) => {
          //   console.log(2, err);
          // });
          // if (!res1) return;
          // console.log(3, res1);
          // res1.data.forEach((item) => {
          //   _that.imgs.push(item.carouselImg);
          // });
          // https://github.com/huruji/blog/issues/61
          const [err, res] = await _that.to(_that.$http.get('/get11'));
          const [err1, res1] = await _that.to(_that.$http.get('/get'));
          console.log(err, res);
          if (err) return;
          res.data.forEach((item) => {
            _that.imgs.push(item.carouselImg);
          });
        }, 200);
      }

      // this.$http.get('/get').then(
      //   (res) => {
      //     this.imgs = [];
      //     console.log(res);
      //     res.data.forEach((item) => {
      //       this.imgs.push(item.carouselImg);
      //     });
      //   },
      //   function(err) {
      //     console.log(err);
      //   }
      // );
    },
    postAjax() {
      this.$http.post('/post').then(
        (res) => {
          this.imgs = [];
          console.log(res);
          res.data.forEach((item) => {
            this.imgs.push(item.carouselImg);
          });
        },
        function(err) {
          console.log(err);
        }
      );
    },
  },
};
</script>
