<template>
    <div class='cashier-main'>
        <div class="cashier-mtop">
            <p>支付金额</p>
            <span>¥{{totalCount}}.00</span>
            <p>汉古商城</p>
        </div>
        <div class="cashier-mcontent">
            <dl  v-if='!codeHidden'>
                <dt><img src="../assets/cashierWechart.png"/></dt>
                <dd>
                    <p>微信支付</p>
                    微信支付使用银行卡累计限制1000元
                </dd>
                <dd class="check"></dd>
            </dl>
            <dl v-if='codeHidden'>
                <dt><img src="../assets/couponPay.png"/></dt>
                <dd class="coupon">
                    <p>使用优惠券</p>
                    {{couponCode}}
                </dd>
                <dd class="check"></dd>
            </dl>
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
                        that.$router.push({ path: '/successPayment',query: { itemid: wechatPayParams.orderId}})
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
            				that.$router.push({path:'/successPayment'})                            
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
            	if(this.codeHidden==false){
            		this.requestCashier()
            	}else if(this.codeHidden==true){            		
            		this.couponCashier()
            	}                
            },
            change_active(index, event) {
                this.toggle = index
            }
        },
        mounted(){
        	document.documentElement.scrollTop = 0
            document.body.scrollTop = 0
            document.title = '收银台'
        	if(window.localStorage.getItem('orderArr')){
        		this.arr = JSON.parse(window.localStorage.getItem('orderArr'));
        		this.arr2 = this.arr[0][0]
                this.totalCount = this.arr[2].price
                if (this.arr2.id === 1&&this.totalCount===0) {
                    this.codeHidden = true
                }else{
                	this.codeHidden = false
                }                             
        	}
           	if(window.localStorage.getItem('receiveCode')){
	      			let receive = JSON.parse(window.localStorage.getItem('receiveCode'));		        					this.couponCode = receive
            }
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
                    border-radius: 50%;
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