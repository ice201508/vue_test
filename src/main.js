import Vue from 'vue';
import axios from 'axios';
import VueParticles from 'vue-particles';

import App from './App.vue';
import router from './router';
import store from './store';
import '@/plugins/element-plugin';
import './scss/base.scss';

import asyncWrap from './utils/asyncWrap';

Vue.prototype.to = asyncWrap;

Vue.config.productionTip = false;
Vue.use(VueParticles);

axios.defaults.baseURL = '/api';
Vue.prototype.$http = axios;
axios.interceptors.request.use(
  function(config) {
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function(response) {
    return response.data;
  },
  function(error) {
    return Promise.reject(error);
  }
);

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
