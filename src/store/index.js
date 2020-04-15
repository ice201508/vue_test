import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import moduleA from './mendian';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 购物车的商品数量
    count: 1,
    total: 100,
    list: [
      { id: 1, name: '张三' },
      { id: 2, name: '李四' },
    ],
  },
  getters: {
    getCount: (state, params) => {
      console.log(state, params);
      return state.count.toFixed(2);
    },
    priceFormat: (state) => {
      return '￥' + state.count;
    },
  },
  mutations: {
    add(state, param) {
      state.count += param.num;
      console.log(state, param);
    },
    remove(state, param) {
      state.count -= param.num;
      console.log(state, param);
    },
  },
  actions: {
    addAsync(context, param) {
      console.log(1, context);
      setTimeout(() => {
        console.log('异步函数调用：add');
        context.commit('add', param);
      }, 1000);
      // axios.get('/shijian').then((res) => {
      //   console.log(res);
      //   context.commit('add', param);
      // });
    },
  },
  modules: {
    a: moduleA,
  },
});
