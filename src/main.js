// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
Vue.config.productionTip = false;
import ElementUI from 'element-ui';
import './assets/theme/element/index.css'
Vue.use(ElementUI,{ size: 'small', zIndex: 3000 });
/* eslint-disable no-new */
import Nevigation from '/components/navigation'

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
