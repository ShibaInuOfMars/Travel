import Vue from 'vue';
import App from './App.vue';
import router from './router/index';

// 解决移动端1px边框的问题
import './assets/styles/border.css';

// 配置rem，以便适配不同的手机屏幕
import './assets/common/index.less';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
