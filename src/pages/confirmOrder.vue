<template>
  <div class='confirmOrder'> 
    <!--主题部分-->
    <div class="order-top">
    	<div class="order-address">
    		<img class="order-add" src="../assets/confirmaddress.png"/>
    	    <span>新增收货地址</span>
    	    <img class="order-right" src="../assets/confirmRight.png"/>
    	</div>
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
	<div class="order-bottom">
		<div class="submitOrder">提交订单</div>
		<div class="toal">
			合计:<span>¥69</span>
		</div>
	</div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data(){
  	return {
    }
  },
  methods: {
  },
  mounted() {
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
				margin-top: rem(14.5rem) ;
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