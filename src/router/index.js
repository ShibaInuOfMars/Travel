import Vue from 'vue';
import Router from 'vue-router';

// 主页
import Home from '../views/home/Home.vue';
// 城市页
import City from '../views/city/City.vue';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/city',
      name: 'city',
      component: City
    }
  ]
});
