// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import BackTop from '@/components/common/Back-Top'
import Mint from 'mint-ui';
Vue.use(Mint);
import store from './vuex/store'
Vue.config.productionTip = false
import '../node_modules/swiper/dist/css/swiper.min.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',   
  components: { App }
})
