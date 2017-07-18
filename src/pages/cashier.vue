<template>
    <div class='cashier-main'>
        <div class="cashier-mtop">
            <p>支付金额</p>
            <span>¥{{totalCount}}.00</span>
            <!--<div class="cashier-goods">商品名称:{{this.arr2.name}}</div>-->
            <!--<div class="cashier-goods"></div>-->
            <p>汉古商城</p>
        </div>
        <div class="cashier-mcontent">
            <!--<dl @click="change_active(0,$event)">-->
                <!--<dt><img src="../assets/cashierCard.png"/></dt>-->
                <!--<dd>-->
                    <!--<p>使用银行卡支付</p>-->
                    <!--请使用银联卡支付，无需开通网银-->
                <!--</dd>-->
                <!--<dd class="check" :class="{'active': toggle === 0}"></dd>-->
            <!--</dl>-->
            <dl @click="change_active(1,$event)">
                <dt><img src="../assets/cashierWechart.png"/></dt>
                <dd>
                    <p>微信支付</p>
                    微信支付使用银行卡累计限制1000元
                </dd>
                <dd class="check" :class="{'active': toggle === 1}"></dd>
            </dl>
            <!--<dl @click="change_active(2,$event)" v-if='codeHidden'>
                <dt><img src="../assets/couponPay.png"/></dt>
                <dd class="coupon">
                    <p>使用优惠券</p>
                    {{couponCode}}
                </dd>
                <dd class="check" :class="{'active': toggle === 2}"></dd>
            </dl>-->
        </div>
        <div class="cashier-pay" @click="nowPay">立即支付</div>
    </div>
</template>
<script>
    import axios from 'axios'
    import api from '../api/api'
    import wx from 'weixin-js-sdk'
    import Toast from '@/packages/toast'
    export default {
        data(){
            return {
                toggle: 1,
                arr: [],
                arr2: [],
                accountArr: [],
                totalCount: 0,
                codeHidden: false,
                couponCode:'',
                couponDetailData:{}
            }
        },
        methods: {
            startUsingWechatPay(wechatPayParams){
                var that=this;
                wx.chooseWXPay({
                    timestamp: wechatPayParams.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
                    nonceStr: wechatPayParams.nonceStr, // 支付签名随机串，不长于 32 位
                    package: wechatPayParams.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
                    signType: wechatPayParams.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
                    paySign: wechatPayParams.paySign, // 支付签名
                    success: function (res) {
                        that.$router.push({ path: '/orderListDetail',query: { itemid: wechatPayParams.orderId,type:'medical' }})
                    }
                });
            },
            requestCashier(){
                let that = this
                axios.defaults.headers['Content-Type'] = 'application/json';
                if (!window.localStorage) {
                    return false
                } else {
                    let storage = window.localStorage
                    let obj_arr = storage.getItem('orderArr')
                    let obj = JSON.parse(obj_arr)
                    this.arr = obj
                    if (window.localStorage.getItem(Account_Index) !== null) {
                        let account = JSON.parse(window.localStorage.getItem(Account_Index))
                        this.accountArr = account
                    }
                }
                let params = {
                    order: this.arr[0],
                    address: this.arr[1],
                    price: this.arr[2].price,
                    userId: this.accountArr._id,
                    openid: this.accountArr.openid,
                    nickName: this.accountArr.nickname
                }
                let test = this.$route.query.test_pay;
                if (test && test == 'true') {
                    params = {
                        order: {},
                        address: 'test',
                        price: 0.01,
                        userId: this.accountArr._id,
                        openid: this.accountArr.openid,
                        nickName: this.accountArr.nickname
                    }
                }
                axios.post(api.cashierSendData, params)
                    .then(function (res) {
                        if (res.data.errorCode == 0) {                      	
                            that.startUsingWechatPay(res.data.returnValue)
                        }
                    })                
            },
            couponCashier(){
            	let that = this
                axios.defaults.headers['Content-Type'] = 'application/json';
                if (!window.localStorage) {
                    return false
                } else {
                    let storage = window.localStorage
                    let obj_arr = storage.getItem('orderArr')
                    let obj = JSON.parse(obj_arr)
                    this.arr = obj
                    if (window.localStorage.getItem(Account_Index) !== null) {
                        let account = JSON.parse(window.localStorage.getItem(Account_Index))
                        this.accountArr = account
                    }
                }
                let params = {
                    order: this.arr[0],
                    address: this.arr[1],
                    price: this.arr[2].price,
                    userId: this.accountArr._id,
                    openid: this.accountArr.openid,
                    nickName: this.accountArr.nickname,
                    couponCode:this.couponCode
                }
                let test = this.$route.query.test_pay;
                if (test && test == 'true') {
                    params = {
                        order: {},
                        address: 'test',
                        price: 0.01,
                        userId: this.accountArr._id,
                        openid: this.accountArr.openid,
                        nickName: this.accountArr.nickname,
                        couponCode:this.couponCode
                    }
                }
                axios.post(api.payCoupon, params)
                    .then(function (res) {
                    	console.log(res)
                        if (res.data.errorCode == 0) {
                        	
            				that.$router.push({path:'/myOrder',query: {type:'gene' }})                            
                        }else{
                        	Toast({
		                        message: '支付失败',
		                        position: 'top',
		                        duration: 1500
		                    });
                        }
                    })                 
            },
            nowPay(){            	
            	if(this.toggle==1){
            		this.requestCashier()
            	}else if(this.toggle==2){            		
            		this.couponCashier()
            	}
                
            },
            change_active(index, event) {
                this.toggle = index
            }
        },
        mounted(){
            if (!window.localStorage) {
                return false
            } else {
                let storage = window.localStorage
                let obj_arr = storage.getItem('orderArr')
                let obj = JSON.parse(obj_arr)
                this.arr = obj
                this.arr2 = this.arr[0][0]
//              if (this.arr2.id === 1) {
//                  this.codeHidden = true
//                  this.toggle = 2
//              }
                this.totalCount = this.arr[2].price
//              if(window.localStorage.getItem('receiveCode')){
//              	let receive = JSON.parse(window.localStorage.getItem('receiveCode'));		        					this.couponCode = receive
////              	this.isUseCoupon()
//              }else{
//              	this.toggle = 1
//              	this.codeHidden = false
//              }                
           }            
            document.documentElement.scrollTop = 0
            document.body.scrollTop = 0
            document.title = '收银台'
        }
    }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
    @import "../common/common.scss";

    .cashier-main {
        width: 100%;
        height: 100%;
        position: absolute;
        background: #f6f6f6;
        .cashier-mtop {
            width: 100%;
            height: rem(155rem);
            background: $cfff;
            margin-top: rem(10rem);
            text-align: center;
            color: $c3c3c;
            p {
                font-size: $font14;
                padding-top: rem(32rem);
                margin-bottom: rem(10rem);
            }
            span {
                font-size: $font26;
                line-height: rem(30rem);
            }
            .cashier-goods {
                width: 35%;
                margin-left: 34%;
                margin-top: rem(30rem);
                font-size: $font14;
                color: #999;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
        .cashier-mcontent {
            width: 100%;
            background: #fff;
            margin-top: rem(10rem);
            overflow: hidden;
            dl {
                width: 94%;
                margin-left: 3%;
                height: rem(37rem);
                padding: rem(22rem) 0 rem(15rem);
                border-bottom: 1px solid #efefef;
                position: relative;
                dt {
                    float: left;
                    width: rem(34rem);
                    height: rem(34rem);
                    margin-right: 3%;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
                dd {
                    float: left;
                    color: #999;
                    p {
                        color: $c3c3c;
                        font-size: $font14;
                        margin-bottom: rem(8rem);
                    }
                }
                .coupon{
                	color: #777;
                }
                .check {
                    position: absolute;
                    right: 0;
                    top: rem(30rem);
                    width: rem(18rem);
                    height: rem(18rem);
                    border-radius: 50%;
                    border: 1px solid #999;
                }
                .active {
                    width: rem(20rem);
                    height: rem(20rem);
                    background: url(../assets/cashierCheck.png) no-repeat center;
                    background-size: cover;
                    border: 0;
                }
                .disableActive {
                    width: rem(20rem);
                    height: rem(20rem);
                    background: url(../assets/cashierCheck.png) no-repeat center;
                    background-size: cover;
                    border: 0;
                }
            }
        }
        .cashier-pay {
            width: 94%;
            height: rem(40rem);
            background: #50b347;
            color: #fff;
            text-align: center;
            line-height: rem(40rem);
            font-size: $font16;
            margin-left: 3%;
            margin-top: rem(20rem);
            border-radius: rem(5rem);
        }
    }
</style>