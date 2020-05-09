import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Layout from '../components/layout.vue';
import ListTable from '../views/list/list.table.vue';
import ListPreview from '../views/list/list.preview.vue';

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
        // component: ListTable
        component: () => import('../views/list/list.table.vue')
      },
      {
        path: 'preview',
        // component: ListPreview
        component: () => import('../views/list/list.preview.vue')
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'history', // history  history
  routes
});

export default router;
