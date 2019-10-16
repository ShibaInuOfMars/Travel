import Vue from 'vue';
import Router from 'vue-router';

// 主页
import Home from '../views/home/Home';
// 城市页
import City from '../views/city/City';
// 详情页
import Detail from '../views/detail/Detail';

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
    },
    {
      path: '/detail/:id', // 动态路由
      name: 'detail',
      component: Detail
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});
