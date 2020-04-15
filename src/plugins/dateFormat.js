import DateCom from './dateCom.vue';

// 我这个插件写的一些东西  在我们的插件 vue-router里面全部都有
// this.$router.push
// <router-link>   <router-view>
export default {
  install(Vue, options) {
    // Vue 构造器  构造函数  对象
    // 按照面向对象的思想来说， 它也叫 静态方法 和 静态属性  --ts
    // 下面的方法和属性 是通过 vue这个构造函数来调用的
    Vue.globalTime = function() {
      let time = new Date();
      return time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate();
    };
    Vue.mytype = '手机';

    // 绑定组件--- 在自己的插件里面  写一些全局组件
    Vue.component('el-input', DateCom);

    // 注册全局的 指令
    Vue.directive('red-test', {
      // insert
      bind(el) {
        el.style.color = 'red';
      }
    });

    // 原型对象   我们这个绑定是  给vue创建的实例对象绑定
    // 这里的方法和属性是通过  this来调用
    Vue.prototype.$alert = function() {
      alert('我是邦德原型对象');
    };
  }
};
