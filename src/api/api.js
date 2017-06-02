// api use part
// let apiPath = 'http://139.162.116.116';
//let apiPath = 'http://localhost:3333';
let apiPath = 'http://192.168.31.248:3333';
module.exports = {
    shopData: apiPath + '/product/all', // 商城首页
    recommendData: apiPath + '/product/recommend', // 推荐商品
    goodsDetailData: apiPath + '/product/details?id=', //商品详情
    beforeQuestionData: apiPath + '/report/questions',// message第一个问题
    saveAnswer: apiPath + '/report/save_answer',
    getUserByOpenId: apiPath + '/user/get_user_by_openid',
    generateReportData: apiPath + '/report/generate' // 获取报告
}
