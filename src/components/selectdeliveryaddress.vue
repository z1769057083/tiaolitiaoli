<template>
	<div class="maskmain">
		<div class="select-main">	
			<h3 @click = 'close'>选择收货地址</h3>
			<div class="address-mcon">
				<dl>
					<dt @click='close1'><div class="tolley-check" :class="{'active': toggle}"></div></dt>
		    		<dd class="consignee">
		    			<p>收货人:林林林  15612345678</p>
		    			<span>收货地址:上海上海市松江区老城荣乐路12弄300号小熊吉他方舟点</span>
		    		</dd>
		    		<dd class="order-right" @click='editAddress'><img src="../assets/selectEdit.png"/></dd>
				</dl>
				<dl @click='addNewAddress'>
					<dt><img src="../assets/selectAddress.png"/></dt>
		    		<dd class="consignee">新增地址</dd>
		    		<dd class="order-return"><img src="../assets/confirmRight.png"/></dd>
				</dl>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
export default {
  data(){
  	return {
  		toggle: true,
 		toggleLock: false
    }
  },
  methods:{
  	close(){
  		this.$emit('selectDelivery')
  	},
  	close1(){
  		this.$emit('selectDelivery')
  	},
  	editAddress(){
  		this.$emit('editDelivery')  
//		this.$emit('selectDelivery')
  	},
  	addNewAddress(){
  		this.$emit('closeDialogEvent')  	
  	}
  }
}
</script>
<style lang="scss">
@import "../common/common.scss";
	/*选择问题内容*/
.maskmain{
	width: 100%;
	height: 100%;
	background: rgba(0,0,0,0.6);
	position: absolute;
	bottom: 0;
	left: 0;
	top: 0;
	z-index: 99;
	.select-main{
		background:#fff;
		width: 100%;
		position: absolute;
		bottom: 0;
		left: 0;
		h3{
			font-size: $font16;
			text-align: center;
			line-height: rem(52rem);
			border-bottom: 1px solid #efefef;
			background: url(../assets/shopcarClose.png) no-repeat 97% center;
			background-size: rem(19rem);
		}
		.address-mcon{
			width: 94%;
			padding: 0 3%;
			dl{
				width: 100%;
				overflow: hidden;
				border-bottom: 1px solid #efefef;
				padding: rem(10rem) 0;
				dt{
					float: left;
					width: rem(19rem);
					height: rem(19rem);
					margin-right: 2%;
					.tolley-check{
						float: left;
						width: rem(17rem);
						height: rem(17rem);
						border-radius: 50%;
						border: 1px solid #999;
						margin: rem(15rem) 3% 0 0;
					}
					.active{
						width: rem(19rem);
						height: rem(19rem);
						background: url(../assets/shopTolley.png) no-repeat center;
						background-size: cover;
						border:0;
					}
					img{
						width: 100%;
						height: 100%;
					}
				}
				.consignee{
					float: left;
					width: 84%;
					line-height: rem((19rem));
					font-size: $font12;
					p{
						margin-bottom: rem(2rem);
						color: $c3c3c;
					}
					span{
						line-height: rem(16rem);
						color: #999;
					}
				}
				.order-right{
					width: rem(15rem);
					height: rem(15rem);
					float: right;
					margin-top: rem(18rem);
					img{
						width: 100%;
						height: 100%;
					}
				}
				.order-return{
					width: rem(5rem);
					height: rem(11rem);
					float: right;
					margin-top: rem(2rem);
					img{
						width: 100%;
						height: 100%;
					}
				}	
			}
			
		}
		
		
	}	
}
</style>