<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-row>
      <el-button @click="getLoading">默认按钮</el-button>
      <el-button @click="showmsg" type="primary">主要按钮</el-button>
      <el-button @click="getAjax" type="success">get请求</el-button>
      <el-button @click="postAjax" type="info">post请求</el-button>
      <el-button @click="finallyAsync($event, '张三')" type="warning">最终优化请求</el-button>
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
      ss: 'yyy',
      flag: true
    };
  },
  methods: {
    getLoading() {
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      setTimeout(() => {
        loading.close();
      }, 2000);
    },
    showmsg() {
      this.$message({
        showClose: true,
        message: '这是一条消息提示',
        type: 'success'
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
          let err, res1, res;
          // https://github.com/huruji/blog/issues/61
          [err, res] = await _that.to(_that.$http.get('/get'));
          if (err) return console.error(1, err);
          [err, res1] = await _that.to(_that.$http.post('/post'));
          if (err) return console.error(2, err);
          console.log(123, res, res1);
          // if (err) return;
          // res.data.forEach((item) => {
          //   _that.imgs.push(item.carouselImg);
          // });
        }, 1000);
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
    async postAjax() {
      try {
        // 错误捕获的流程， 如果自己在promise后面 手动catch了错误，那么就不会传递到最后面的catch里面去，
        const res1 = await this.$http.get('/get').catch((err) => {
          Promise.reject('get请求失败');
        });
        const res2 = await this.$http
          .post(`/post?lastname=${this.ss}`, {
            params: { id: 123, name: 'zs' },
            firstName: 'Fred'
          })
          .catch((err) => {
            Promise.reject('post请求失败');
          });
        console.log(res1, res2);
        // try...catch的作用，如果手动捕获一个函数的错误，那么这个函数如果保存，不会影响后面程序的执行，只有catch了以后才能保证程序的正常运行
      } catch (err) {
        console.log(1111, err);
      }

      // let res = await this.$http.post('/post11').catch((err) => {
      //   console.error(11, err);
      // });
      // console.log(res);
      // this.imgs = [];
      // res.data.forEach((item) => {
      //   this.imgs.push(item.carouselImg);
      // });
    },

    async finallyAsync(e, param) {
      console.log(1, e, param);
      const [err1, res1] = await this.to(this.$http.get('/get1'));
      const [err2, res2] = await this.to(this.$http.post('/post1'), { msg: 'post请求失败' });
      console.log(err1, err2);
      console.log(res1, res2);
    }
  }
};
</script>
