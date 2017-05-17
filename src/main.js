// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './common/reset.css'
import './common/common.css'
import axios from 'axios'
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(MintUI)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  // el: '#app',
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app')
