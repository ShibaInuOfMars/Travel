import Vue from 'vue';
import App from './App.vue';
import router from './router/index';

// 解决移动端1px边框的问题
import './assets/styles/border.css';

// 配置rem，以便适配不同的手机屏幕
import './assets/common/index.less';

// 使用图标库
import './assets/styles/iconfont.css';

// 解决移动设备上的浏览器默认会在用户点击屏幕大约延迟300毫秒后才会触发点击事件
import FastClick from 'fastclick';

FastClick.attach(document.body);

// 全局配置vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper';
// require styles
import 'swiper/dist/css/swiper.css';
Vue.use(VueAwesomeSwiper);

// vuex
import store from './store/index';


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
