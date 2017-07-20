<template>
    <div class='orderDetail'>
    	<div class="orderDetail-main">
			<div class="order-success" v-if='orderList.status==0'>等待付款</div>
			<div class="order-paySuccess" v-if='orderList.status==1'>已付款，等待发货</div>
			<dl class="order-consignee">
				<dt><img src="../assets/orderDetailAddress.png"/></dt>
				<dd class="consignee">
					<p>收货人:&nbsp;{{addressObj.name}}<span>{{addressObj.phone}}</span></p>
					<span>收货地址:&nbsp;{{addressObj.address}}</span>
				</dd>
				<!--<dd class="order-right"><img src="../assets/confirmRight.png"/></dd>-->
			</dl>
		    <div class="order-main"> 
		    	<h3 class="order-mtitle">汉古商城</h3>	    	
		    	<div class="order-mdetail" v-for='orderItem in orderList.order'>
		    		<dl>
		    			<dt><img :src="''+apiPath+'/image/product/'+orderItem.img+'/1.jpg'" 
								onerror="this.src='http://placeholder.qiniudn.com/800'"/></dt>
		    			<dd>
		    				{{orderItem.name}}
			    			<p>¥{{orderItem.price}}.00</p>
		    			</dd>
		    		</dl>
		    		<div class="order-mnum">X<span>{{orderItem.num}}</span></div>
		    	</div>	    	
		    </div>
		    <div class="order-mcontent">
		    	<dl>
		    		<dt>配送费用</dt>
		    		<dd>快递 &nbsp;¥{{fare}}.00</dd>
		    	</dl>
		    	<dl>
		    		<dt>订单编号：{{orderList._id}}</dt>
		    	</dl>
		    	<dl>
		    		<dt>下单时间：{{orderList.createTime|filterFun}}</dt>
		    	</dl>
		    	<dl v-if='orderList.status==0'>
		    		<dd class="delect-order" @click='nowPay'></dd>
		    	</dl>
		    	<dl class="order-mconpic" v-if='orderList.status==0'>
		    		<dd class="pay-order" @click='nowPay'>去支付</dd>
		    	</dl>
		    </div>
		</div>    
    </div>
</template>
<script>
import axios from 'axios'
import moment from 'moment'
import api from '../api/api'
export default {
  data(){
  	return {
  		apiPath:'',
  		orderList:[],
  		addressObj:{},
  		submitArr:[],
  		price:{
			price: 0
		},
		fare:12
    }
  },
  filters: {
    filterFun(obj){
        if ( obj) {
            return moment(obj).format('YYYY-MM-DD HH:mm:ss');
    	}
    }
  },
  methods: {
	requestlist(){
        var that = this;
        that.orderId = this.$route.query.itemid;
        console.log(that.orderId)
        axios.get(api.singleOrderList+that.orderId)
          .then(function (res) {
            if (res.data.errorCode == 0) {
              	that.orderList = res.data.returnValue
			  	that.addressObj = that.orderList.address
	    		if(that.orderList.price>=300){
	    			that.fare = 0
	    		}else{
	    			that.fare = 12
	    		}
            }
          })
          .catch(function (error) {
            console.log(error)
          })
       },
       cancelOrder(){
           	this.toastHidden = true
       },
       nowPay(){
       	if (!window.localStorage) {
		    return false;
		}else {
	        let storage = window.localStorage
        	this.price.price = this.orderList.price
	        this.submitArr.push(this.orderList.order)
	        this.submitArr.push(this.orderList.address)
	        this.submitArr.push(this.price)
        	var orderArr= JSON.stringify(this.submitArr)
        	storage.setItem("orderArr", orderArr)
        }	        
       	this.$router.push({ path: '/cashier'})
       },
  },
  mounted() {
	this.apiPath = api.apipath
	this.requestlist()
	document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    document.title='订单详情'
  }
}
</script>
<style scoped lang="scss" rel="stylesheet/scss">
@import "../common/common.scss";
.orderDetail{
	background: #f6f6f6;
	width: 100%;
	height: 100%;
	position: absolute;
	font-size: $font14;
	.orderDetail-main{
		background: #f6f6f6;
		width: 100%;
		overflow: hidden;
		position: absolute;
		font-size: $font14;			
		.order-success{
			width: 94%;
			overflow: hidden;
			padding: rem(5rem) 3%;
			line-height: rem(30rem);
			border-bottom: 1px solid #efefef;
			background: #fff;
		}
		.order-paySuccess{
			width: 94%;
			overflow: hidden;
			height: rem(62rem);
			line-height: rem(62rem);
			color: #c69b70;
			font-size: $font16;
			font-weight: bold;
			border-bottom: 2px solid #ddc9b1;
			background: #fff url(../assets/orderDetailDdeliver.png) no-repeat 97% center;
			background-size: rem(60rem) rem(30rem);
			padding: rem(5rem) 3%;
		}
		.order-consignee{
			width: 94%;
			padding: rem(15rem)  3% rem(10rem);
			margin: rem(10rem) 0;
			border-bottom: 1px solid #efefef;
			overflow: hidden;
			background: #fff;
			dt{
				float: left;
				width: rem(15rem);
				height: rem(19rem);
				margin-right: 2%;
				img{
					width: 100%;
					height: 100%;
				}
			}
			.consignee{
				float: left;
				width: 92%;
				font-size: $font14;
				p{
					margin-bottom: rem(8rem);
					span{
						float: right;
					}
				}
				span{
					line-height: rem(18rem);
				}
			}
		}			
		.order-main{
			width: 100%;
			background: #fff;
			overflow: hidden;
			.order-mtitle{
				line-height: rem(42rem);
				background: url(../assets/confirmLogo.png) no-repeat left;
				background-size: rem(15rem) rem(14rem);
				padding-left: 5%;
				margin-left: 3%;
				font-size: $font16;
			}
			.order-mdetail{
				width: 94%;
				height: rem(92rem);
				background: #fafafa;
				padding: rem(5rem) 3%;
				margin-bottom: rem(5rem);
				dl{
					float: left;
					dt{
						width: rem(92rem);
						height: rem(92rem);
						float: left;
						img{
							width: 100%;
							height: 100%;
						}
					}
					dd{
						float: left;
						line-height: rem(20rem);
						margin-left: rem(10rem);
						color: $c3c3c;
						p{
							margin-top: rem(5rem);
							font-size: $font14;
							color: #fe4415;
						}
					}
				}
				.order-mnum{
					float: right;
					line-height: rem(70rem);
					color: #9c9c9c;
					span{
						font-size: $font14;
					}
				}
			}
		}
		.order-mcontent{
			width: 100%;
			background: #f6f6f6;
			overflow: hidden;
			/*padding-bottom: rem(10rem);*/
			dl{
				width: 94%;
				padding: 0 3%;
				height: rem(47rem);
				border-bottom: 1px solid #efefef;
				line-height: rem(47rem);
				background: #fff;
				dt{
					float: left;
					/*width: 30%;*/
				}
				.leave-msg{
					span{
						color: #999;
						padding-left: 3%;
					}
				}
				dd{
					float: right;
				}
				.pay-order{
					width: 20%;
					height: rem(28rem);
					margin-top: rem(9rem);
					color: #fff;
					line-height: rem(28rem);
					text-align: center;
					margin-left: rem(10rem);
					border: 1px solid #c69b70;
					color: #c69b70;
				}
			}
			.order-mconpic{
				border: 0;
				dd{
					letter-spacing: rem(0.4rem);
					span{
						color: #ff3300;
						.order-mconprice{
							font-size: $font14;
						}
					}
				}
			}
		}
	}	
}	
</style>


