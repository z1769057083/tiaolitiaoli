// api use part
let apiPath = 'http://139.162.116.116';
module.exports = {
    shopData: apiPath + '/product/all', // 商城首页
    recommendData: apiPath + '/product/recommend', // 推荐商品
    goodsDetailData: apiPath + '/product/details?id=', //商品详情
    beforeQuestionData: apiPath + '/report/questions',// message第一个问题
    generateReportData: apiPath + '/report/generate' // 获取报告
}
