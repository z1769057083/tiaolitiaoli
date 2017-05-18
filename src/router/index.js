import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import message from '@/pages/message'
import report from '@/pages/report'
import shop from '@/pages/shop'
import goodsdetail from '@/pages/goodsdetail'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      component: home,
      name: 'home'
    },
    {
      path: '/message',
      component: message,
      name: 'message'
    },
    {
      path: '/report',
      component: report,
      name: 'report'
    },
    {
      path: '/shop',
      component: shop,
      name: 'shop'
    },
    {
      path: '/goodsdetail',
      component: goodsdetail,
      name: 'goodsdetail'
    }
  ]
})
