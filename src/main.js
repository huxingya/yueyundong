// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vant from 'vant';
import axios from 'axios'
import 'vant/lib/index.css';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import './assets/js/rem'

import Share from 'vue-social-share'
import 'vue-social-share/dist/client.css';
import md5 from 'js-md5'

import { Lazyload } from 'vant';

// options 为可选参数，无则不传
Vue.use(Lazyload);

Vue.prototype.$axios = axios
Vue.prototype.$md5 = md5

Vue.use(VueAwesomeSwiper)

Vue.use(Vant);

Vue.use(Share)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
