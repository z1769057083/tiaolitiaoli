<template>
  <div class='confirmOrder'> 
    <!--主题部分-->
    <div class="order-top">
    	<!--新增收货地址开始-->
    	<div class="order-address" v-show='addNewAddressHidden' @click='addAddress'>
				<img class="order-add" src="../assets/confirmaddress.png"/>
				<span>新增收货地址</span>
				<img class="order-right" src="../assets/confirmRight.png"/>
			</div>
			<!--新增收货地址结束-->
    	<!--收货地址开始-->
    	<dl class="order-consignee" v-show='DevelieryAddressHidden' @click='editAddress'>
				<dt><img src="../assets/orderAddress.png"/></dt>
				<dd class="consignee">
					<p>收货人:林林林<span>15612345678</span></p>
					<span>收货地址:上海上海市松江区老城荣乐路12弄300号小熊吉他方舟点</span>
				</dd>
				<dd class="order-right"><img src="../assets/confirmRight.png"/></dd>
			</dl>
			<!--收货地址结束-->
    </div> 
    <div class="order-main">
    	<h3 class="order-mtitle">汉古商城</h3>
    	<div class="order-mdetail">
    		<dl>
    			<dt><img src="../assets/confrimShopImg.png"/></dt>
    			<dd>
    				驱蚊包-套餐价格已包括3件
    				<p>¥69</p>
    			</dd>
    		</dl>
    		<div class="order-mnum">X<span>2</span></div>
    	</div>		
    </div>
    <div class="order-mcontent">
    	<dl>
    		<dt>购买数量</dt>
    		<dd class="order-num">
    			<button class="reduceBtn" @click='reduce'></button>
					<input type="text" value="num" v-model='num'/>
					<button class="addBtn" @click='add'></button>
    		</dd>
    	</dl>
    	<dl>
    		<dt>配送方式</dt>
    		<dd>快递¥12.00</dd>
    	</dl>
    	<!--<dl>
    		<dt class="leave-msg">买家留言:<span>点击给商家留言</span></dt>
    		<dd></dd>
    	</dl>-->
    	<dl class="order-mconpic">
    		<dt></dt>
    		<dd>共2件商品   小计:<span>¥{{totalPrice}}.00</span></dd>
    	</dl>
    </div>
		<div class="order-bottom">
			<router-link to='/cashier'>
				<div class="submitOrder">提交订单</div>
			</router-link>
			<div class="toal">
				合计:<span>¥69</span>
			</div>
		</div>
		<!--新增收货地址-->
		<newDeliveryAddress v-show='Deliveryhidden' @closeDialogEvent='closeDialogHandler' @openDialogEvent='openDialogHandler'></newDeliveryAddress>
		<selectdeliveryaddress  v-show='selecthidden' @selectDelivery='selectDeliveryHandler'></selectdeliveryaddress>
		<editDeliveryAddress v-show='editHidden' @editDelivery='editDeliveryHandler'></editDeliveryAddress>
  </div>
</template>
<script>
import axios from 'axios'
import newDeliveryAddress from '@/components/newDeliveryAddress'
import selectdeliveryaddress from '@/components/selectdeliveryaddress'
import editDeliveryAddress from '@/components/editDeliveryAddress'
export default {
  data(){
  	return {
  		num:1,
  		totalPrice:'',
  		Deliveryhidden: false,
  		addNewAddressHidden: true,
  		DevelieryAddressHidden: false,
  		selecthidden: false,
  		editHidden: false
    }
  },
  components:{
  	newDeliveryAddress,
  	selectdeliveryaddress,
  	editDeliveryAddress
  },
  methods: {
  	reduce(){
  		if(this.num <= 1){
  			this.num = 1
  		}else{
  			this.num--
  		}
  	},
  	add(){
  		if(this.num >= 10){
  			this.num = 10
  		}else{
  			this.num++
  		}
  	},
  	addAddress(){
  		this.Deliveryhidden = true
  	},
  	editAddress(){
  		this.selecthidden = true
  	},
  	closeDialogHandler(){
  		this.Deliveryhidden = false
  	},
  	openDialogHandler(){
  		this.Deliveryhidden = true
  	},
  	selectDeliveryHandler(){
  		this.selecthidden = false
  	},
  	editDeliveryHandler(){
  		this.editHidden = true
  	}
  },
  mounted() {
  	this.totalPrice = 69*this.num
  }
}
</script>
<style scoped lang="scss">
@import "../common/common.scss";
.confirmOrder{
	background: #f6f6f6;
	width: 100%;
	height: 100%;
	position: absolute;
	.order-top{
		width: 100%;
		height: rem(110rem);
		overflow: hidden;
		margin-bottom: rem(10rem);
		background:#fff url(../assets/confirmTop.png) repeat-x  bottom;	
		.order-address{
			width: 94%;
			height: rem(40rem);
			margin-top: rem(32rem);
			margin-left: 3%;
			.order-add{
				width: rem(40rem);
				height: rem(40rem);
				float: left;
			}
			span{
				line-height: rem(40rem);
				margin-left: rem(10rem);
				font-size: $font16;
			}
			.order-right{
				width: rem(5.5rem);
				height: rem(11rem);
				float: right;
				margin-top: rem(14.5rem);
			}
		}
		.order-consignee{
			width: 94%;
			height: rem(40rem);
			margin-top: rem(25rem);
			margin-left: 3%;
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
				width: 86%;
				font-size: $font14;
				p{
					margin-bottom: rem(8rem);
					span{
						float: right;
					}
				}
				span{
					line-height: rem(16rem);
				}
			}
			.order-right{
				width: rem(5.5rem);
				height: rem(11rem);
				float: right;
				margin-top: rem(14.5rem);
				img{
					width: 100%;
					height: 100%;
				}
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
		}
		.order-mdetail{
			width: 94%;
			height: rem(92rem);
			background: #fafafa;
			padding: rem(5rem) 3%;
			dl{
				width: 70%;
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
					float: right;
					line-height: rem(20rem);
					p{
						margin-top: rem(5rem);
						font-size: $font14;
						color: #fe4415;
					}
				}
			}
			.order-mnum{
				float: right;
				line-height: rem(92rem);
				color: #9c9c9c;
				span{
					font-size: $font14;
				}
			}
		}
	}
	.order-mcontent{
		width: 94%;
		background: #fff;
		padding: 0 3%;
		dl{
			width: 100%;
			height: rem(47rem);
			border-bottom: 1px solid #efefef;
			line-height: rem(47rem);
			dt{
				float: left;
				width: 50%;
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
			.order-num{
				width: 30%;
				float: right;
				height: rem(30rem);
				margin-top: rem(8rem);;
				button{
					width: 32%;
					float: left;
					display: block;
					height: rem(30rem);
					border: 0;
				}
				.reduceBtn{
					background: url(../assets/orderReduce.png);
					background-size: cover;
				}
				.addBtn{
					background: url(../assets/shopCaradd.png);
					background-size: cover;
				}
				input{
					float: left;
					width: 36%;
					height: rem(30rem);
					border: 0;
					background: #fff;
					text-align: center;
				    line-height: rem(30rem);
				}
			}
		}
		.order-mconpic{
			border: 0;
			dd{
				letter-spacing: rem(0.4rem);
				span{
					color: #ff3300;
				}
			}
		}
	}	
	.order-bottom{
		width: 100%;
		height: rem(48rem);
		background: #fff;
		position: absolute;
		left: 0;
		bottom: 0;		
		.submitOrder{
			width: 24%;
			float: right;
			height: rem(48rem);
			line-height: rem(48rem);
			color: #fff;
			background: #ff4443;
			text-align: center;
			font-size: $font14;
		}
		.toal{
			float: right;
			font-size: $font14;
			color: $c000;
			line-height: rem(48rem);
			margin-right: rem(10rem);
			span{
				color: #ff3300;
				margin-left: rem(10rem);
			}
		}
	}
}
</style>