<template>
	<div class="wrap">
	    <div class='recuperate'>
	        <div class="recuperate-main" v-if='!nullHidden'>
	            <!--<div class="recuperate-top">
	                <img src="../assets/recuperate1.png"/>
	            </div>-->
	            <div class="recuperate-mcon">
	                <div class="mcon-name">
	                    <span v-if='nickname' class="mcon-block"><b>姓名：</b>{{nickname}}</span>
	                    <span v-if='genderText' class="mcon-block"><b>性别：</b>{{genderText}}</span>
	                    <span v-if='age' class="mcon-block"><b>年龄：</b>{{age}}</span>                  
	                </div>
	                <div class="mcon-symptom" v-if='illness'>
	                    <span>主述症状:</span>
	                    <p>{{illness}}</p>
	                </div>
	                <!--<div class="field-suggestion" v-if="suggestion">
	                    {{suggestion}}
	                </div>-->
	                <div class="mcon-season">
	                	<dl v-if="suggestion">
	                		<dt><img src="../assets/medicalImg2.png"/></dt>
	                        <dd>
	                        	<p class="subtitle" >天气舒适度</p>
	                        	<p>{{suggestion}}</p>
	                        </dd>
	                    </dl>
	                    <dl>
	                    	<dt><img src="../assets/medicalImg1.png"/></dt>
	                        <dd>
	                        	<p class="subtitle">节令体质: {{wuXingLevelText}}</p>
	                        	<p v-html="reportContent"></p>
	                        </dd>
	                    </dl>	                    
	                </div>
	                <p class="bottomLine"></p>
	     			<!--商品推荐-->
			        <div class="s-mrecomment">
			            <dl class="s-marticlecon" v-for='(item,index) in recommendlist' @click='recomClick(item,index)'>
			                <dt>
			                <h3>{{item.name}}</h3>
			                <span class="itemPrice">¥{{item.price}}.00</span>
			                <div class="s-mreconintrotip">
			                    <img class="tip" src="../assets/shopTip.png"/>
			                    {{item.recommendText|textHandler}}
			                </div>
			                </dt>
			                <dd>
			                    <img :src="''+apiPath+'/image/product/thumbnail/'+item.index+'.jpg'"
			                         onerror="this.src='../../static/images/defaultPicture.jpg'"
			                         @click='recomClick(item,index)'/>
			                </dd>
			            </dl>
			        </div>
	           </div>
	        </div>
	        <div class="product-section">
	            <router-link to='/shop'>
	                <div class="shop-button">商城</div>
	            </router-link>
	        </div>
	        <myNullReport v-if='nullHidden'></myNullReport>
	    </div>
    </div>
</template>
<script>
    import axios from 'axios'
    import api from '../api/api'
    import ReportHelper from '../../static/reportHelper';
    import Common from '../../static/common';
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
                userId: '',
            }
        },
        components: {
            myNullReport
        },
        filters: {            
            textHandler(text){
                if (text == '') {
                    return '平衡';
                }
                else {
                    return text;
                }
            }
        },
        methods: {
            loadWeather(){
                let that = this;
                let account = JSON.parse(localStorage.getItem(global.Account_Index));
                if (account != null && account.houTian && account.houTian.city) {
                    let weatherKey = 'df7f80c391ea4cf788d372d9feb5f09f';
                    axios.get(' https://api.heweather.com/v5/suggestion?city=' + account.houTian.city + '&key=' + weatherKey)
                        .then(function (res) {
                            let today = new Date();
                            let monthText = today.getMonth() + 1;
                            let text ='现在是'+ today.getFullYear() + '年' + monthText + '月' + today.getDate() + '日' + today.getHours() + '点';
                            that.suggestion = text + " " + res.data.HeWeather5[0].suggestion.comf.txt;
                        })
                }
            },
            recomClick(recommendItem,index){
            	this.$router.push({ name: 'goodsdetail', query: { itemid: recommendItem._id}})
            },
            recommend(){
                var that = this;
                if (window.localStorage.getItem(Account_Index) !== null) {
                    let account = JSON.parse(window.localStorage.getItem(Account_Index))
                    axios.get(api.recommendData + account._id)
                        .then(function (res) {
                            if (res.data.errorCode == 0) {
                                res = res.data.returnValue
                                that.recommendlist = res
                                that.recommendData = true
                            }
                        })
                        .catch(function (error) {
                            console.log(error)
                        })
                }
            },
        },
        mounted(){
            document.title = '调理处方'
            document.documentElement.scrollTop = 0
            document.body.scrollTop = 0
            this.loadWeather();
            this.apiPath = api.apipath
            this.recommend()            
            if (localStorage.getItem(HouTianReport_Index) !== null) {
                let user = JSON.parse(localStorage.getItem(Account_Index));
                let xianTianData = JSON.parse(localStorage.getItem(AllAnswer_Index)).xianTian;
                let houTianData = JSON.parse(localStorage.getItem(AllAnswer_Index)).houTian;
                let dangJiReport = JSON.parse(localStorage.getItem(HouTianReport_Index));
                this.wuXingLevelText = Common.parseWuXingLevelToText(dangJiReport.wuXingDangShiLevel);
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
            }
            if (window.localStorage.getItem(Account_Index) != null) {
                this.userId = JSON.parse(window.localStorage.getItem(Account_Index))._id
            }
            if (window.localStorage.getItem(global.AllAnswer_Index) == ''
                || typeof(this.userId) === 'undefined' || this.userId == '' || window.localStorage.getItem(global.AllAnswer_Index) == null) {
                this.nullHidden = true
            } else {
                this.nullHidden = false
            }
        },
        watch: {
            recommendlist: {
                handler(val, oldVal) {
                    document.documentElement.scrollTop = 0
                    document.body.scrollTop = 0
                },
                dceep: true
            },
        }
    }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
    @import "../common/common.scss";
    .wrap{
    	width: 100%;
        height: 100%;
        position: absolute;
        background: url(../assets/indexbg.jpg) repeat-y;
        background-size: contain;
    }
    .recuperate {
        width: 100%;
        position: absolute;
        background: url(../assets/indexbg.jpg) repeat-y;
        background-size: contain;
        .recuperate-main {
            width: 86.6%;
            margin-top: rem(30rem);
            border: 1px solid #c69b70;
            margin-left: 6.7%;
            background: #fff;
            padding-top: rem(15rem);
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
                    span {
                        display: none;
                    }
                    span:nth-child(2) {
                        margin-left: 14%;
                    }
                    span:nth-child(3){
                    	float: right;
                    }
                    .mcon-block {
                        display: inline-block;
                        color: #666;
                        b{
                        	color: #000;
                        }
                    }
                }
                .mcon-symptom {
                    width: 100%;
                    font-size: $font12;
                    overflow: hidden;
                    padding: rem(5rem) 0;
                    border-bottom: 1px solid #f4eade;
                    span {
                        font-weight: bold;
                        margin-right: 2%;
                        color: #000;
                        display: inline-block;
                        float: left;
                        width: 20%;
                        line-height: rem(20rem);
                    }
                    p{	
                    	width: 78%;
                    	overflow:hidden; 
						text-overflow:ellipsis;
						display:-webkit-box; 
						-webkit-box-orient:vertical;
						-webkit-line-clamp:2; 
						color: #666;
                    	line-height: rem(20rem);
                    	float: right;
                    }
                }
                .field-suggestion {
                	width: 100%;
                    font-size: $font13;
                    line-height: $font16;
                    padding-bottom: rem(10rem);
                    padding-top: rem(10rem);
                    text-align: justify;
                    border-bottom: 1px solid #f4eade;
                }
                .mcon-season {
                    width: 92%;
                    border: 1px dashed #c6c6c6;
                    border-radius: rem(28rem);
                    overflow: hidden;
                    margin-top: rem(16rem);
                    padding:0  4% rem(20rem);
                    dl {
                    	width: 100%;
                    	overflow: hidden;
                    	margin-top: rem(20rem);
                    	dt{
                    		width: rem(26rem);
                    		height: rem(26rem);
                    		float: left;
                    		img{
                    			width: 100%;
                    			height: 100%;
                    		}
                    	}
                    	dd{
                    		float: right;
                    		width: 86%;
                    		span {
	                            display: block;
	                            font-weight: bold;
	                            float: left;
	                            line-height: rem(18rem);
	                        }
	                        p {
	                            line-height: rem(18rem);
	                            color: #666;
	                        }
	                        .subtitle{
	                        	font-weight: bold;
	                            color: #c69b70;
	                            line-height: rem(22rem);
	                        }
                    	}                        
                    }
                }
                .bottomLine{
                	width: 100%;
                	margin-top: rem(16rem);
                	border-bottom: 1px solid #f4eade;
                }
                /*文章部分*/
                .s-mrecomment {
			        width: 100%;
			        overflow: hidden;
			        padding-top: rem(6rem);
			        .s-marttitle {
			            font-size: 0.42rem;
			            line-height: rem(40rem);
			            color: #000;
			            font-weight: bold;
			            margin-bottom: 0.26rem;
			            background: url(../assets/shoptitleft.png) no-repeat center left;
			            padding-left: 2.5%;
			            border-bottom: rem(1rem) solid #e8e8e8;
			        }
			        .s-marticlecon {
			            width: 100%;
			            overflow: hidden;
			            margin-top: rem(9rem);
			            padding-bottom: rem(12rem);
			            border-bottom: rem(1rem) solid #e8e8e8;
			            dt {
			                width: 66%;
			                float: left;
			                margin-right: 2%;
			                font-size: $font12;
			                color: #999;
			                line-height: rem(21rem);
			                display: -webkit-box;
			                -webkit-box-orient: vertical;
			                -webkit-line-clamp: 2;
			                overflow: hidden;
			                h3 {
			                    font-size: $font16;
			                    color: $c3c3c;
			                    font-weight: bold;
			                    line-height: rem(22rem);
			                    margin-bottom: rem(5rem);
			                    letter-spacing: rem(1rem);
			                }
			                .tip {
			                    width: rem(12rem);
			                    height: rem(12rem);
			                    float: left;
			                    margin-right: rem(4rem);
			                    vertical-align: middle;
			                    margin-top: rem(3.2rem);			                    
			                }
			                span {
			                    vertical-align: middle;
			                }
			                .itemPrice {
			                    color: #ff4444;
			                }
			
			            }
			            dd {
			                width: 32%;
			                height: rem(64rem);
			                float: left;
			                img {
			                    width: 100%;
			                    height: 100%;
			                }
			            }
			        }
			    }
            }
            
        }
        .product-section {
	        width: 100%;			        			        
	        padding-top: rem(20rem);
	        padding-bottom: rem(20rem);
	        text-align: center;			
	        .shop-button {
	            width: rem(150rem);
	            height: rem(50rem);
	            line-height: rem(50rem);
	            font-size: rem(16rem);
	            color: white;
	            left: 0;
	            display: inline-block;
	            text-align: center;
	            background: url(../../static/images/blankButton.jpg);
	            background-size: contain;
	        }
	    }
    }

</style>
