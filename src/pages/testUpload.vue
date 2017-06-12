<template>
    <div class='shop'>
        <a @click="beginUsePic();">
            <div class="r-mbotleft"><img src="../assets/reportleft.png"/></div>
        </a>
    </div>
</template>
<script>
    import axios from 'axios'
    import api from '../api/api'
    import wx from 'weixin-js-sdk'
    export default {
        name: 'shop',
        data(){
            return {}
        },
        methods: {
            beginUsePic(){
                wx.chooseImage({
                    count: 1, // 默认9
                    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                    success: function (res) {
                        var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
                    }
                })
            }
        },
        mounted() {
            wx.error(function (res) {
                console.log(res);
//                console.log(res);
                // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
            });
            var domain=location.href.split('#')[0];//Note http://localhost:3333/
            axios.get(domain+'wechat/get_signature?url='+domain)
                .then(function (res) {
                    var data=res.data;
                    console.log(data);
                    wx.config({
                        debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                        appId: data.appId, // 必填，公众号的唯一标识
                        timestamp: data.timestamp, // 必填，生成签名的时间戳
                        nonceStr: data.nonceStr, // 必填，生成签名的随机串
                        signature: data.signature,// 必填，签名，见附录1
                        jsApiList: ['chooseImage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                    });
                })
        }
    }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
    @import "../common/common.scss";
</style>