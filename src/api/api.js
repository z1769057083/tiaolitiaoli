//  api use part
//  let apiPath = 'http://192.168.28.153:3333';
    let apiPath = 'http://139.162.116.116';
//  let apiPath = 'http://ikehealth.cn';
//  let apiPath = 'http://localhost:3333';
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
    cashierSendData: apiPath + '/wechat/generate_wechat_order',
    videoListDetail: apiPath + '/product/video_details?id=',
    videoList: apiPath + '/product/video?type=',
    articleList: apiPath + '/product/article?pageIndex=',
    articleListDetail: apiPath + '/product/article_details?id=',
    orderList: apiPath + '/order/my?userId=',
    singleOrderList: apiPath + '/order/single?id=',
    cities: apiPath + '/data/cities.json',
    removeUser: apiPath + '/user/remove?id=',
    getCoupon: apiPath + '/coupon/retrieve',//生成优惠券
    userCoupon: apiPath + '/coupon/get_by_user?userId=',//获取某个用户的优惠券
    bindUser: apiPath + '/item/bind_user',//绑定用户
    payCoupon: apiPath + '/item/gene_purchase',//优惠券支付
    CouponDetail: apiPath + '/coupon/get_by_code?code=',//优惠券详情
    apipath:apiPath //发起请求向后台传订单数据 post
}
