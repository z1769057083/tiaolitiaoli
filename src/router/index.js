import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import message from '@/pages/message'
import report from '@/pages/report'
import shop from '@/pages/shop'
import goodsdetail from '@/pages/goodsdetail'
import allgoods from '@/pages/allgoods'
import confirmOrder from '@/pages/confirmOrder'
import shoppingTolley from '@/pages/shoppingTolley'
import cashier from '@/pages/cashier'
import afterReport from '@/pages/afterReport'
import medicalSuggestion from '@/pages/medicalSuggestion'
import soupDetail from '@/pages/soupDetail'
import geneTest from '@/pages/geneTest'
import videoList from '@/pages/videoList'
import videoListDetail from '@/pages/videoListDetail'
import videoHome from '@/pages/videoHome'
import articleList from '@/pages/articleList'
import backdoor from '@/pages/backdoor'
import articleDetails from '@/pages/articleDetails'
import orderList from '@/pages/orderList'
import orderListDetail from '@/pages/orderListDetail'
import immunityTest from '@/pages/immunityTest'
import recommendArticle from '@/pages/recommendArticle'
import aboutUs from '@/pages/aboutUs'
import doctorIntroduce from '@/pages/doctorIntroduce'
import gene from '@/pages/gene'
import receiveCoupon from '@/pages/receiveCoupon'
import myCoupon from '@/pages/myCoupon'
import bindBarCode from '@/pages/bindBarCode'
import myOrder from '@/pages/myOrder'
import geneReport from '@/pages/geneReport'
import geneReportDetail from '@/pages/geneReportDetail'
import personalCenter from '@/pages/personalCenter'
import successPayment from '@/pages/successPayment'
import geneticPhysical from '@/pages/geneticPhysical'
import Feedback from '@/pages/Feedback'
Vue.use(Router)
export default new Router({
  routes: [
      {
          path: '/',
          component: home,
          name: 'home'
      },
      {
          path: '/geneReportDetail',
          component: geneReportDetail,
          name: 'geneReportDetail'
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
	      path: '/medicalSuggestion',
	      component: medicalSuggestion,
	      name: 'medicalSuggestion'
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
	      meta: { keepAlive: true },
	      name: 'videoHome'
	    },
	    {
	      path: '/articleList',
	      component: articleList,
	      name: 'articleList'
	    },
	    {
	      path: '/articleDetails',
	      component: articleDetails,
	      name: 'articleDetails'
	    },
	    {
	      path: '/orderList',
	      component: orderList,
	      meta: { keepAlive: true },
	      name: 'orderList'
	    },
	    {
	      path: '/orderListDetail',
	      component: orderListDetail,
	      name: 'orderListDetail'
	    },
	    {
	      path: '/immunityTest',
	      component: immunityTest,
	      name: 'immunityTest'
	    },
	    {
	      path: '/recommendArticle',
	      component: recommendArticle,
	      name: 'recommendArticle'
	    },
	    {
	      path: '/aboutUs',
	      component: aboutUs,
	      name: 'aboutUs'
	    },
	    {
	      path: '/doctorIntroduce',
	      component: doctorIntroduce,
	      name: 'doctorIntroduce'
	    }, 
	    {
	      path: '/gene',
	      component: gene,
	      name: 'gene'
	    },
	    {
	      path: '/receiveCoupon',
	      component: receiveCoupon,
	      name: 'receiveCoupon'
	    },
	    {
	      path: '/myCoupon',
	      component: myCoupon,
	      name: 'myCoupon'
	    },
	    {
	      path: '/bindBarCode',
	      component: bindBarCode,
	      name: 'bindBarCode'
	    },
	    {
	      path: '/myOrder',
	      component: myOrder,
	      name: 'myOrder'
	    },
	    {
	      path: '/personalCenter',
	      component: personalCenter,
	      name: 'personalCenter'
	    },
	    {
	      path: '/geneReport',
	      component: geneReport,
	      name: 'geneReport'
	    },
	    {
	      path: '/successPayment',
	      component: successPayment,
	      name: 'successPayment'
	    },
	    {
	      path: '/geneticPhysical',
	      component: geneticPhysical,
	      name: 'geneticPhysical'
	    },
	    {
	      path: '/Feedback',
	      component: Feedback,
	      name: 'Feedback'
	    }
  ]
})
