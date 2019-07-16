import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/home/home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./components/login/login'),
    },
    {
      path: '/design',
      name: 'design',
      component: () => import('./components/design/design'),
    },
    {
      path: '/recents',
      name: 'recents',
      component: () => import('./components/recents/recents'),
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('./components/cart/cart'),
    },
    { path: '*', redirect: '/' },
  ],
});
