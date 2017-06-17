import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import main from '@/pages/home2'
import message from '@/pages/message'
import report from '@/pages/report'
import shop from '@/pages/shop'
import goodsdetail from '@/pages/goodsdetail'
import allgoods from '@/pages/allgoods'
import confirmOrder from '@/pages/confirmOrder'
import shoppingTolley from '@/pages/shoppingTolley'
import cashier from '@/pages/cashier'
import afterReport from '@/pages/afterReport'
import recuperate from '@/pages/recuperate'
import test from '@/pages/testUpload'
import soupDetail from '@/pages/soupDetail'
import geneTest from '@/pages/geneTest'
import videoList from '@/pages/videoList'
import videoListDetail from '@/pages/videoListDetail'
import videoHome from '@/pages/videoHome'
import articleList from '@/pages/articleList'
import backdoor from '@/pages/backdoor'
import articleListDetail from '@/pages/articleListDetail'
import myNullReport from '@/pages/myNullReport'
import doctorIntroduce from '@/pages/doctorIntroduce'
Vue.use(Router)
export default new Router({
  routes: [
      {
          path: '/',
          component: home,
          name: 'home'
      }, {
          path: '/main',
          component: main,
          name: 'main'
      }, {
      path: '/test',
      component: test,
      name: 'test'
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
    },
      {
          path: '/backdoor',
          component: backdoor,
          name: 'backdoor'
      },
    {
      path: '/afterReport',
      component: afterReport,
      name: 'afterReport'
    },
    {
      path: '/recuperate',
      component: recuperate,
      name: 'recuperate'
    },
    {
      path: '/soupDetail',
      component: soupDetail,
      name: 'soupDetail'
    },
    {
      path: '/geneTest',
      component: geneTest,
      name: 'geneTest'
    },
    {
      path: '/videoList',
      component: videoList,
      name: 'videoList'
    },
    {
      path: '/videoListDetail',
      component: videoListDetail,
      name: 'videoListDetail'
    },
    {
      path: '/videoHome',
      component: videoHome,
      name: 'videoHome'
    },
    {
      path: '/articleList',
      component: articleList,
      name: 'articleList'
    },
    {
      path: '/articleListDetail',
      component: articleListDetail,
      name: 'articleListDetail'
    },
    {
      path: '/myNullReport',
      component: myNullReport,
      name: 'myNullReport'
    },
    {
      path: '/doctorIntroduce',
      component: doctorIntroduce,
      name: 'doctorIntroduce'
    }          
  ]
})
