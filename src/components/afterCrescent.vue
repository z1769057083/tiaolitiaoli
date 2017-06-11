<template>
    <div class="m-afterCrescent">
        <h3>上传月牙白图片</h3>
        <div class="m-crescent">
            <div class="m-picture" @click='beginUsePic'>
                <img :src="fingerImage"/>
            </div>
            <div class="re-choose-button" v-show="isChosen" @click="choosePic">
                <div class="re-choose-text">重新选择</div>
                <div class="m-remove">
                    <img src="../assets/mafterRemove.png"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    import axios from 'axios'
    import api from '../api/api'
    import wx from 'weixin-js-sdk'
    export default {
        data(){
            return {
                isChosen: false,
                fingerImage: '/static/images/mafterCrescent.png'
            }
        },
        mounted() {
            var domain = location.href.split('#')[0];//Note http://localhost:3333/
            axios.get(domain + 'wechat/get_signature?url=' + domain)
                .then(function (res) {
                    var data = res.data;
                    console.log(data);
                    wx.config({
                        debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                        appId: data.appId, // 必填，公众号的唯一标识
                        timestamp: data.timestamp, // 必填，生成签名的时间戳
                        nonceStr: data.nonceStr, // 必填，生成签名的随机串
                        signature: data.signature,// 必填，签名，见附录1
                        jsApiList: ['chooseImage',
                            'previewImage',
                            'uploadImage',
                            'downloadImage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                    });
                })
        },
        methods: {
            choosePic(){
                var that = this;
                wx.chooseImage({
                    count: 1, // 默认9
//                    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                    sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
                    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                    success: function (res) {
                        that.fingerImage = res.localIds[0];
                        //js判断是否ios或Android
                        var u = navigator.userAgent;
                        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
                        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
                        if(isiOS){
                            wx.getLocalImgData({
                                localId: res.localIds[0], // 图片的localID
                                success: function (res) {
                                    var localData = res.localData; // localData是图片的base64数据，可以用img标签显示
                                    that.fingerImage=localData;
                                }
                            });
                        }
                        that.isChosen = true;
                        that.uploadPic(res.localIds[0].toString());
                    }
                })
            },
            beginUsePic(){
                if (!this.isChosen) {
                    this.choosePic();
                }
                else{
                    this.showPicDetails();
                }
            },
            showPicDetails(){
                if (this.isChosen) {
                    var localIds = [this.fingerImage];
                    wx.previewImage({
                        current: this.fingerImage, // 当前显示图片的http链接
                        urls: localIds // 需要预览的图片http链接列表
                    });
                }
            },
            uploadPic(localId){
                wx.uploadImage({
                    localId: localId, // 需要上传的图片的本地ID，由chooseImage接口获得
                    isShowProgressTips: 1, // 默认为1，显示进度提示
                    success: function (res) {
                        var serverId = res.serverId; // 返回图片的服务器端ID
                    }
                });
            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    @import "../common/common.scss";
    /*选择问题内容*/
    .m-afterCrescent {
        width: 90%;
        margin-left: 5%;
        overflow: hidden;
        h3 {
            text-align: center;
            margin-top: rem(13rem);
            margin-bottom: rem(48rem);
            font-size: $font14;
        }
        .m-crescent {
            width: 26%;
            height: rem(132rem);
            margin-left: 36%;
            overflow: hidden;
            .m-picture {
                width: 100%;
                height: rem(88rem);
                margin-bottom: rem(15rem);
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .re-choose-text {
                float: left;
                height: rem(29rem);
                line-height: rem(29rem);;
            }
            .m-remove {
                float: left;
                width: 23%;
                height: rem(29rem);
                margin-left: 10%;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
</style>