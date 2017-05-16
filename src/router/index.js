import Vue from 'vue'
import Router from 'vue-router'
import inventoryManage from '@/pages/supplier/inventoryManage'
import oederManage from '@/pages/distributor/oederManage'
import shelAudit from '@/pages/platform/shelAudit'
import addGoods from '@/pages/supplier/addGoods'
import commodyDetail from '@/pages/supplier/commodyDetail'
import message from '@/pages/message'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/message',
      component: message,
      name: 'message'
    },
    {
      path: '/supplier/inventoryManage',
      component: inventoryManage,
      name: 'inventoryManage'
    },
    {
      path: '/distributor/oederManage',
      component: oederManage,
      name: 'oederManage'
    },
    {
      path: '/platform/shelAudit',
      component: shelAudit,
      name: 'shelAudit'
    },
    {
      path: '/supplier/addGoods',
      component: addGoods,
      name: 'addGoods'
    },
    {
      path: '/supplier/commodyDetail',
      component: commodyDetail,
      name: 'commodyDetail'
    }
  ]
})
