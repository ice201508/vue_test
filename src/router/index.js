import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Layout from '../components/layout.vue';
import ListTable from '../views/list/list.table.vue';
import ListPreview from '../views/list/list.preview.vue';

Vue.use(VueRouter);

const APP_NAME = '武汉黑马';

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
  },
  {
    path: '/404',
    component: () => import('../views/Error404.vue'),
    meta: {
      title: '页面找不到了'
    }
  },
  {
    path: '*',
    redirect: '/404'
  }
];

function getTitle(title) {
  if (title) {
    return title;
  }
  return APP_NAME;
}

const router = new VueRouter({
  mode: 'history', // history  history
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    };
  }
});

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title) {
    document.title = getTitle(to.meta.title);
  } else {
    document.title = getTitle();
  }
  next();
});

// router.beforeEach((to, from, next) => {
//   NProgress.start();
//   next();
// });
// router.afterEach((transition) => {
//   NProgress.done();
// });

export default router;
