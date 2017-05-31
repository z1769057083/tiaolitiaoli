import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import message from '@/pages/message'
import report from '@/pages/report'
import shop from '@/pages/shop'
import goodsdetail from '@/pages/goodsdetail'
import allgoods from '@/pages/allgoods'
import articledetail from '@/pages/articledetail'
import confirmOrder from '@/pages/confirmOrder'
import shoppingTolley from '@/pages/shoppingTolley'
import cashier from '@/pages/cashier'
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
    },
    {
      path: '/allgoods',
      component: allgoods,
      name: 'allgoods'
    },
    {
      path: '/articledetail',
      component: articledetail,
      name: 'articledetail'
    },
    {
      path: '/confirmOrder',
      component: confirmOrder,
      name: 'confirmOrder'
    },
    {
      path: '/shoppingTolley',
      component: shoppingTolley,
      name: 'shoppingTolley'
    },
    {
      path: '/cashier',
      component: cashier,
      name: 'cashier'
    }
  ]
})
