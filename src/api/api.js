// api use part
      let apiPath = 'http://139.162.116.116';
//let apiPath = 'http://localhost:3333';
// let apiPath = 'http://192.168.31.248:3333';
module.exports = {
    shopData: apiPath + '/product/all', // 商城首页
    recommendData: apiPath + '/product/recommend?id=', // 推荐商品
    goodsDetailData: apiPath + '/product/details?id=', //商品详情
    beforeQuestionData: apiPath + '/report/questions',// message第一个问题
    saveAnswer: apiPath + '/report/save_answer',
    getUserByOpenId: apiPath + '/user/get_user_by_openid',
    generateReportData: apiPath + '/report/generate', // 获取报告
    allDoodsData: apiPath + '/product/category?category=', // 查看全部商品
    allSoupData: apiPath + '/product/get_soup', //获取汤品
    singleSoupData: apiPath + '/product/get_single_soup?id=' ,//获取汤品详情
    generateTestAccount: apiPath + '/wechat/test_save_userInfo',
    getUserCount: apiPath + '/user/count',
    getReport: apiPath + '/report/get_report',
    hotGoods: apiPath + '/product/hot',
    cashierSendData: apiPath + '/order/create' //发起请求向后台传订单数据 post    
}
