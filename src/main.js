// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import MintUI from 'mint-ui'
import '../static/mint-ui.css'
import './common/reset.css'
import './common/common.scss'
import store from './store/'
import Loading from './components/loading'
import axios from 'axios'
import moment from 'moment'
import VueBus from 'vue-bus'
import BScroll from 'better-scroll'
Vue.use(VueBus);
Vue.use(VueRouter)
Vue.use(MintUI)
Vue.use(Loading)
Vue.config.productionTip = false
axios.interceptors.request.use(function(config) { //配置发送请求的信息
    store.dispatch('showLoading');
    return config;
}, function(error) {
    return Promise.reject(error);
});

axios.interceptors.response.use(function(response) { //配置请求回来的信息
    store.dispatch('hideLoading');
    return response;
}, function(error) {
    store.dispatch('hideLoading');
    return Promise.reject(error);
});
/* eslint-disable no-new */
new Vue({
  // el: '#app',
  router,
    store,
  template: '<App/>',
  components: { App }
}).$mount('#app')
