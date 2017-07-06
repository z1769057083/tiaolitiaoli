<template>
    <div class='recuperate'>
        <div class="recuperate-main">
            <div class="recuperate-top">
                <img src="../assets/recuperate1.png"/>
            </div>
            <!--<h2>6-7月调理处方</h2>-->
            <!--<img class="recuperatebg" src="../assets/recuperatebg.png"/>-->
            <div class="recuperate-mcon">
                <div class="mcon-name">
                    <span v-if='nickname' class="mcon-block">姓名：{{nickname}}</span>
                    <span v-if='age' class="mcon-block">年龄：{{age}}</span>
                    <span v-if='genderText' class="mcon-block">性别：{{genderText}}</span>
                    <span v-if='comments' class="mcon-block">备注：{{comments}}</span>
                </div>
                <div class="mcon-symptom">
                    <span>主述症状:</span>{{illness}}
                </div>
                <div class="field-suggestion" v-if="suggestion">
                    {{suggestion}}
                </div>
                <div class="mcon-season">
                    <p class="tit" style="display: none;">R</p>
                    <div>
                        <p class="subtitle">节令体质: {{wuXingLevelText}}</p>
                        <p v-html="reportContent"></p>
                    </div>
                </div>
                <commodity hasRecommend="true" v-if='!nullHidden'></commodity>
            </div>
        </div>
        <myNullReport v-if='nullHidden'></myNullReport>
    </div>
</template>
<script>
    import axios from 'axios'
    import api from '../api/api'
    import ReportHelper from '../../static/reportHelper';
    import Common from '../../static/common';
    import commodity from '@/components/commodity'
    import Toast from '@/packages/toast'
    import myNullReport from '@/components/myNullReport'
    export default {
        data (){
            return {
                suggestion: '',
                nickname: '',
                age: '',
                genderText: '',
                comments: '',
                illness: '',
                wuXingLevelText: '',
                reportContent: '',
                listem: [],
                recommendlist: [],
                getSouplist: [],
                nullHidden: false,
                userId: ''
            }
        },
        components: {
            commodity, myNullReport
        },
        methods: {
            loadWeather(){
                var that = this;
                var account = JSON.parse(localStorage.getItem(global.Account_Index));
                if (account != null && account.houTian && account.houTian.city) {
                    var weatherKey = 'df7f80c391ea4cf788d372d9feb5f09f';
                    axios.get(' https://api.heweather.com/v5/suggestion?city=' + account.houTian.city + '&key=' + weatherKey)
                        .then(function (res) {
                            var today = new Date();
                            var monthText = today.getMonth() + 1;
                            var text ='现在是'+ today.getFullYear() + '年' + monthText + '月' + today.getDate() + '日' + today.getHours() + '点';
                            that.suggestion = text + " " + res.data.HeWeather5[0].suggestion.comf.txt;
                        })
                }
            }
        },
        mounted(){
            document.title = '调理处方'
            document.documentElement.scrollTop = 0
            document.body.scrollTop = 0
            this.loadWeather();
            if (localStorage.getItem(HouTianReport_Index) !== null) {
                let user = JSON.parse(localStorage.getItem(Account_Index));
                let xianTianData = JSON.parse(localStorage.getItem(AllAnswer_Index)).xianTian;
                let houTianData = JSON.parse(localStorage.getItem(AllAnswer_Index)).houTian;
                let dangJiReport = JSON.parse(localStorage.getItem(HouTianReport_Index));
                this.wuXingLevelText = Common.parseWuXingLevelToText(dangJiReport.wuXingDangShiLevel);
                this.reportContent = Common.convertReportsToText(dangJiReport.jieQiReports).split('<br>', 1)[0];
                this.reportContent = Common.convertReportsToObj(dangJiReport.jieQiReports).content;
                if(this.reportContent==''){
                    this.reportContent='五行偏弱，五行圆运动升发、肃降有序，但一生当中整体的阳气和阴精都偏弱，精力有限。';
                }
                this.nickname = user.nickname;
                this.genderText = xianTianData.gender == 'F' ? '女' : '男';
                if (houTianData) {
                    this.illness = houTianData.tags.toString();
                }

                this.age = new Date().getFullYear() - new Date(xianTianData.birthday).getFullYear();
                if (houTianData && houTianData.femaleStatus) {
                    this.comments = houTianData.femaleStatus;
                }
            }
            else {
                Toast({
                    message: '请先完成体质辨析',
                    position: 'top',
                });
            }

            if (window.localStorage.getItem(Account_Index) != null) {
                this.userId = JSON.parse(window.localStorage.getItem(Account_Index))._id
            }
            if (window.localStorage.getItem(global.AllAnswer_Index) == ''
                || typeof(this.userId) === 'undefined' || this.userId == '' || window.localStorage.getItem(global.AllAnswer_Index) == null) {
                this.nullHidden = true
            } else {
                console.log(111)
                this.nullHidden = false
            }
        }
    }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
    @import "../common/common.scss";

    .recuperate {
        width: 100%;
        position: absolute;
        background: url(../assets/indexbg.jpg) repeat-y;
        background-size: contain;
        padding: rem(30rem) 0;
        .recuperate-main {
            width: 86.6%;
            border: 1px solid #c69b70;
            margin-left: 6.7%;
            background: #fff;
            padding-top: rem(34rem);
            font-size: $font13;
            .recuperate-top {
                width: 44%;
                height: rem(34rem);
                position: absolute;
                top: rem(14rem);
                left: 28%;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            h2 {
                font-size: $font20;
                line-height: rem(28rem);
                text-align: center;
            }
            .recuperatebg {
                width: 49%;
                margin: rem(10rem) 25.5% rem(8rem);
            }
            .recuperate-mcon {
                width: 90%;
                margin-left: 5%;
                .mcon-name {
                    border-bottom: 1px dotted #ddb88e;
                    line-height: rem(24rem);
                    font-weight: bold;
                    margin-bottom: rem(12rem);
                    span {
                        margin-right: 4%;
                        display: none;
                    }
                    span:nth-child(1) {
                        margin-right: 12%;
                    }
                    .mcon-block {
                        display: inline-block;
                    }
                }
                .mcon-symptom {
                    width: 100%;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    font-size: $font13;
                    padding-bottom: rem(10rem);
                    border-bottom: 1px solid #f4eade;
                    span {
                        font-weight: bold;
                        margin-right: 2%;
                    }
                }
                .field-suggestion {
                    font-size: $font13;
                    line-height: $font16;
                    padding-bottom: rem(10rem);
                    padding-top: rem(10rem);
                    text-align: justify;
                    border-bottom: 1px solid #f4eade;
                }
                .mcon-season {
                    width: 100%;
                    overflow: hidden;
                    margin-top: rem(10rem);
                    padding-bottom: rem(10rem);
                    border-bottom: 1px solid #f4eade;
                    .tit {
                        font-size: $font20;
                    }
                    div {
                        span {
                            display: block;
                            font-weight: bold;
                            float: left;
                            line-height: rem(18rem);
                        }
                        p {
                            line-height: rem(18rem);
                        }
                        .subtitle{
                            font-weight: bold;
                        }
                    }
                }
                /*文章部分*/
                .s-marticle {
                    width: 100%;
                    overflow: hidden;
                    background: #fff;
                    .s-mrecomment {
                        width: 100%;
                        overflow: hidden;
                        padding-top: rem(5rem);
                        .s-marttitle {
                            font-size: rem(16rem);
                            line-height: rem(40rem);
                            color: #000;
                            font-weight: bold;
                            margin-bottom: 0.26rem;
                            background: url(../assets/shoptitleft.png) no-repeat center left;
                            padding-left: 2%;
                            border-bottom: rem(1rem) solid #f4eade;
                        }
                        .s-marticlecon {
                            width: 100%;
                            overflow: hidden;
                            margin-top: rem(15rem);
                            padding-bottom: rem(15rem);
                            border-bottom: rem(1rem) solid #f4eade;
                            dt {
                                width: 64%;
                                float: left;
                                margin-right: 2%;
                                font-size: $font13;
                                color: #999;
                                line-height: rem(18rem);
                                display: -webkit-box;
                                -webkit-box-orient: vertical;
                                -webkit-line-clamp: 2;
                                overflow: hidden;
                                h3 {
                                    font-size: $font18;
                                    color: $c3c3c;
                                    font-weight: bold;
                                    line-height: rem(22rem);
                                    margin-bottom: rem(5rem);
                                    letter-spacing: rem(1rem);
                                }
                            }
                            dd {
                                width: 32%;
                                height: rem(70rem);
                                float: right;
                                img {
                                    width: 100%;
                                    height: 100%;
                                }
                            }
                        }
                        .s-marticlecon1 {
                            width: 100%;
                            overflow: hidden;
                            margin-top: rem(15rem);
                            padding-bottom: rem(15rem);
                            border-bottom: rem(1rem) solid #f4eade;
                            dt {
                                width: 100%;
                                h3 {
                                    font-size: $font18;
                                    color: $c3c3c;
                                    font-weight: bold;
                                    line-height: rem(26rem);
                                    margin-bottom: rem(5rem);
                                    letter-spacing: rem(1rem);
                                }
                            }
                            .s-martimg {
                                width: 31%;
                                float: left;
                                margin-right: 3%;
                                overflow: hidden;
                                img {
                                    width: 100%;
                                    height: rem(68rem);
                                }
                                .s-martimgTitle {
                                    font-size: $font13;
                                    line-height: rem(16rem);
                                    font-weight: bold;
                                }
                                .s-martimgPic {
                                    color: #ff4443;
                                    line-height: rem(20rem);
                                    span {
                                        font-size: $font13;
                                        color: #999;
                                        text-decoration: line-through;
                                        line-height: rem(20rem);
                                        float: right;
                                    }
                                }
                            }
                            .s-martimg:nth-child(4) {
                                margin-right: 0;
                            }
                        }
                    }
                    /*商品列表*/
                    .s-mgoods {
                        width: 100%;
                        overflow: hidden;
                        background: #fff;
                        .s-mrecomment {
                            width: 100%;
                            overflow: hidden;
                            padding: 0.32rem 0 0.28rem;
                            border-bottom: rem(1rem) solid #e8e8e8;
                            .h3 {
                                font-size: 0.42rem;
                                line-height: 0.59rem;
                                color: #000;
                                font-weight: bold;
                                margin-bottom: 0.26rem;
                                background: url(../assets/shoptitleft.png) no-repeat left;
                                padding-left: 2%;
                                .s-mrecomall {
                                    font-size: 0.35rem;
                                    color: #c69b70;
                                    float: right;
                                    font-weight: normal;
                                    background: url(../assets/s-mrecomall.png) no-repeat right;
                                    background-size: 0.16rem 0.32rem;
                                    padding-right: 3%;
                                }
                            }
                        }
                        .s-mrecomlist {
                            width: 31.9%;
                            float: left;
                            margin-right: 2.1%;
                            margin-bottom: 0.26rem;
                            .s-mreconimg {
                                width: 100%;
                                height: 2.24rem;
                                margin-bottom: 0.21rem;
                                img {
                                    width: 100%;
                                    height: 100%;
                                }
                            }
                            .s-mreconintro {
                                width: 100%;
                                overflow: hidden;
                                span {
                                    font-size: 0.35rem;
                                    color: #000;
                                    line-height: 0.48rem;
                                }
                            }
                        }
                        .s-mrecomlist:nth-child(3n) {
                            margin-right: 0;
                        }
                    }
                }
            }
        }
    }

</style>
