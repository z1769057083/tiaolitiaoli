<template>
    <div id="app">
        <loading v-show="loading"></loading>
        <router-view></router-view>
    </div>
</template>
<script>
    import '../static/flexible.js'
    import wx from 'weixin-js-sdk'
    import Common from '../static/common'
    import '../static/swiper-3.4.2.min.js'
    import axios from 'axios'
    import api from '@/api/api'
    import Highcharts from 'highcharts';
    import Hig from 'highcharts/highcharts-more' ;

    import { mapGetters, mapActions } from 'vuex';
    Hig(Highcharts)
    global.Highcharts = Highcharts
    export default {
        name: 'app',
        computed: mapGetters(['loading']),
        methods: {
            loadQuestions(){
                axios.get(api.beforeQuestionData)
                    .then(function (res) {
                        if (res.data.errorCode == 0) {
                            res = res.data.returnValue;
                            let storage = window.localStorage;
                            storage.setItem(All_Question_Index, JSON.stringify(res))
                        }
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
            },
            onWeChatShare(){
                if (global.isWechatShareInit) {
                    return;
                }
                console.log('APP')
                global.shareTitle = '调一调';
                global.link = 'http://ikehealth.cn/wechat/';
                global.shareDesc = '测一测体质，调一调身心';
                wx.ready(function () {
                    wx.onMenuShareTimeline({
                        title: global.shareTitle, // 分享标题
                        link: global.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                        imgUrl: 'http://ikehealth.cn/image/logo.png', // 分享图标
                        success: function () {
                            // 用户确认分享后执行的回调函数
                        },
                        cancel: function () {
                            // 用户取消分享后执行的回调函数
                        }
                    });
                    wx.onMenuShareAppMessage({
                        title: global.shareTitle, // 分享标题
                        desc: global.shareDesc, // 分享描述
                        link: global.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                        imgUrl: 'http://ikehealth.cn/image/logo.png', // 分享图标
                        type: '', // 分享类型,music、video或link，不填默认为link
                        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                        success: function () {
                            // 用户确认分享后执行的回调函数
                        },
                        cancel: function () {
                            // 用户取消分享后执行的回调函数
                        }
                    });
                })
            },
            configWeChatSDK(){
//                var domain = location.href.split('#')[0];//Note http://localhost:3333/
                var domain=api.apipath;
                axios.get(domain + '/wechat/get_signature?url=' + domain)
                    .then(function (res) {
                        var data = res.data;
                        localStorage.setItem(global.WechatSignature_Index, JSON.stringify(data))
                        wx.config({
//                        debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来
                            appId: data.appId, // 必填，公众号的唯一标识
                            timestamp: data.timestamp, // 必填，生成签名的时间戳
                            nonceStr: data.nonceStr, // 必填，生成签名的随机串
                            signature: data.signature,// 必填，签名，见附录1
                            jsApiList: ['chooseImage', 'previewImage',
                                'uploadImage', 'onMenuShareTimeline', 'onMenuShareAppMessage',
                                'downloadImage','chooseWXPay'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                        });
                    })
            },
            loadCities(){
                if (localStorage.getItem(Cities_Index) == null) {
                    axios.get(api.cities)
                        .then(function (res) {
                                let cities = res.data;
                                localStorage.setItem(Cities_Index, JSON.stringify(cities))
                        })
                }
            },

            loadUserInfo(){
                let openid = this.$route.query.openid;
                let test = this.$route.query.test;
                if (typeof (openid) == 'undefined' || openid == '') {
                    //Note:generate test account.
                    //remove it as when no need to test.
                    if (localStorage.getItem(Account_Index) == null && global.IsDebug
                        ||test=='true') {
                        axios.get(api.generateTestAccount)
                            .then(function (res) {
                                if (res.data.errorCode == 0) {
                                    let user = res.data.returnValue;
                                    if (user.xianTian) {
                                        global.User.gender = user.xianTian.gender;
                                        global.User.age = Common.getUserAge(user.xianTian.birthday);
                                    }
                                    localStorage.setItem(Account_Index, JSON.stringify(user))
                                }
                            })
                    }
                }
                else {
                    axios.get(api.getUserByOpenId + "?openid=" + openid)
                        .then(function (res) {
                            if (res.data.errorCode == 0) {
                                let user = res.data.returnValue;
                                if (user.xianTian) {
                                    global.User.gender = user.xianTian.gender;
                                    global.User.age = Common.getUserAge(user.xianTian.birthday);
                                }
                                localStorage.setItem(Account_Index, JSON.stringify(user))
                            }
                        })
                }
            },
            //NOTE:sample code to prevent browser scroll.
            //Useless code ,using iNoBound instead.
            disableBrowserScroll(){
                document.querySelector('body').addEventListener('touchmove', function (e) {
                    if (document.querySelector('.m-select').contains(e.target)) {
                        e.preventDefault();
                    }
                });
            }
        },
        mounted() {
            this.loadQuestions()
            this.loadUserInfo()
            this.configWeChatSDK()
            this.onWeChatShare()
            this.loadCities()
            let debugMode = IsDebug ? " 本地调试模式" : ' 发布模式';
            console.log('当前版本:' + Version + debugMode);
        }
    }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
</style>
