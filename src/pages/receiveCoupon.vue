<template>
	<div>
		<div class='receive'>
	        <div class="receive-top">
	        	<div class="price">
	        		¥&nbsp;<span>680</span>
	        	</div>
	        	<div class="p-right">
	        		<p>仅限购买六大高发癌症风险检测套餐</p>
	        		<p class="bot">{{this.couponList.code}}</p>
	        		<span>有效期2017.06.09-2017.12.29</span>
	        		<div class="p-rightBtn">
	        			<img  @click='receiveCode' v-if='btnHidden' src="../assets/receiveBtn1.png" alt="" />
	        			<img @click='nowUse' v-if='!btnHidden' src="../assets/receiveBtn2.png" alt="" />
	        		</div>
	        	</div>
	        </div>
        </div>
        <div class="mask" v-if='maskHidden'>
        	<div class="mask-main">
        		<img class="geneIcon" src="../assets/toastImg.png" alt="" />
        		<p>已成功领取优惠券！</p>
        		<div class="bottom">
        			<div class="botLeft" @click='nowUse'>立即使用</div>
        			<div class="botRight" @click='close'>关闭</div>
        		</div>
        	</div>
        </div>
	</div>   
</template>
<script>
    import axios from 'axios'
    import api from '../api/api'
    export default {
        data() {
            return {
				name:'',
				maskHidden: false,
				btnHidden: true,
				useId:'',
				nickname:'',
				couponList:[],
				isReceive:''
            }
        },
        methods: {
			receiveCode(){
				this.maskHidden = !this.maskHidden
				this.isReceive = this.couponList.code
				if (!window.localStorage) {
	            return false;
		        } else {
		        	window.localStorage.setItem('receiveCode',JSON.stringify(this.isReceive))
		        }
			},
			nowUse(){
				this.$router.push({ path:'/gene'})
				this.maskHidden = !this.maskHidden
			},
			close(){
				this.maskHidden = !this.maskHidden
				this.btnHidden = !this.btnHidden
			},
			getCoupon(){
				if (!window.localStorage) {
	            return false;
		        } else {
		            if (window.localStorage.getItem(Account_Index) !== null) {
		                let account = JSON.parse(window.localStorage.getItem(Account_Index))
		                console.log(account)
		                this.useId = account._id;
		                this.nickname = account.nickname
		            }
		        }
				var that = this;
                axios.get(api.getCoupon+'?userId='+that.useId+'&nickname='+that.nickname)
                    .then(function (res) {
                        if (res.data.errorCode == 0) {
                            res = res.data.returnValue
                            that.couponList = res
                            console.log(res)
                            console.log(that.couponList)
                        }
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
			}
        },
        mounted() {         	
            document.title = "领取优惠券"
            if (!window.localStorage) {
            	return false;
	        } else {
	        	let receive = JSON.parse(window.localStorage.getItem('receiveCode'))
	        	if(receive==null){
	        		this.getCoupon()
	        	}else{
	        		this.couponList.code = receive
	        		this.btnHidden = !this.btnHidden
	        	}
	        }
        }
    }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
 @import "../common/common.scss";
.receive{
	width: 100%;
	height: 100%;
	position: absolute;
	overflow: hidden;
	background: #f6f6f6;
	.receive-top{
		width: 92%;
		height: rem(100rem);
		margin-top: rem(20rem);
		background: url(../assets/receivebg.png) no-repeat center;
		background-size: cover;
		margin-left: 4%;
		.price{
			width: 34%;
			height: rem(100rem);
			line-height: rem(100rem);
			text-align: center;
			font-size: $font16;
			color: #fff;
			float: left;
			span{
				font-size: rem(32rem);
			}
		}
		.p-right{
			width: 61%;
			float: right;
			height: rem(100rem);
			overflow: hidden;
			position: relative;
			p{
				font-size: $font12;
				margin: rem(10rem) 0 rem(6rem);
				color: #000;
			}
			.bot{
				margin: 0 0 rem(6rem) 0;
			}
			span{
				color: #999;
			}
			.p-rightBtn{
				width: rem(65rem);
				height: rem(30rem);
				position: absolute;
				right: rem(16rem);
				bottom: rem(5rem);
				img{
					width: 100%;
					height: 100%;
				}
			}
		}
	}
}
.mask{
	width: 100%;
	height: 100%;
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	background: rgba(0,0,0,.3);
	.mask-main{
		width: 70%;
		height: rem(127rem);
		background: #393939;
		left: 15%;
		top: rem(180rem);
		position: absolute;
		text-align: center;
		border-radius: rem(5rem);
		.geneIcon{
			width: rem(26rem);
			height: rem(18rem);
			margin-top: rem(20rem);
		}
		p{
			color: #fff;
			margin-top: rem(14rem);
			letter-spacing: rem(1rem);
		}
		.bottom{
			width: 100%;
			height: rem(44rem);
			position: absolute;
			bottom: 0;
			left: 0;
			border-top: 1px solid #6a6a6a;
			div{
				width: 50%;
				float: left;
				height: rem(44rem);
				line-height: rem(44rem);
				color: #fff;
				font-size: $font14;
			}
			.botRight{
				width: 49%;
				border-left: 1px solid #6a6a6a;
			}
		}

	}
}
</style>
