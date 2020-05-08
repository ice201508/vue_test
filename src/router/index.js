import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Layout from '../components/layout.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: 'home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: () => import('../views/calendar.vue')
  },
  {
    path: '/vuex',
    name: 'vuex',
    component: () => import('../views/vuex.vue')
  },
  {
    path: '/yewu',
    name: 'yewu',
    // component: () => import('../components/layout.vue'),
    component: Layout,
    children: [
      {
        path: 'table',
        component: () => import('../views/list/list.table.vue')
      },
      {
        path: 'preview',
        component: () => import('../views/list/list.preview.vue')
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'hash', // history
  routes
});

export default router;
