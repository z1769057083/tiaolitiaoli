<template>
	<div class="maskmain">
		<div class="mask-shopCar">
			<div class="shopCar-main">
				<dl>
					<dt><img src="../assets/shopcar.png"/></dt>
					<dd>
					    <p>¥50.00</p>
					    <span>引火归元帖</span>
					</dd>
				</dl>
				<div class="closeBtn"></div>				
			</div>
			<div class="shopCar-num">
				<span>购买数量</span>
				<div class="num">
					<button class="reduceBtn"></button>
					<input type="text" value="1"/>
					<button class="addBtn"></button>
				</div>
			</div>
			<router-link to='/confirmOrder'>
			<div class="confirmBtn">下一步</div>
			</router-link>
		</div>
	</div>
</template>
<script type="text/javascript">
export default {
  data(){
  	return {
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
	.mask-shopCar{
		width: 100%;
		height: rem(235rem);
		background: #fff;
		position: absolute;
		bottom: 0;
		left: 0; 
		.shopCar-main{
			width: 94%;
			height: rem(112rem);
			margin-left: 3%;
			border-bottom: 1px solid #efefef;
			dl{
				float: left;
				position: relative;
				width: 56.8%;
				height: rem(100rem);
				dt{
					width: rem(116rem);
					height: rem(116rem);
					position: absolute;
					left: 0;
					top: rem(-20rem);
					img{
						width: 100%;
						height: 100%;
					}
				}
				dd{
					margin: rem(50rem) 0 0 rem(130rem);
					p{
						font-size: $font14;
						color: #ff3300;
						line-height: rem(28rem);
						font-weight: bold;
					}
					span{
						color: $c000;
					}
				}
			}
			.closeBtn{
				width: rem(19rem);
				height: rem(19rem);
				margin-top: rem(10rem);
				float: right;
				background: url(../assets/shopcarClose.png) no-repeat center;
				background-size: cover;
			}
		}
		.shopCar-num{
			width: 94%;
			height: rem(58rem);
			margin-left: 3%;
			border-bottom: 1px solid #efefef;
			span{	
				line-height: rem(58rem);
			}
			.num{
				float: right;
				width: 30%;
				height: rem(30rem);
				margin-top: rem(14rem);;
				button{
					width: 30%;
					float: left;
					display: block;
					height: rem(30rem);
					border: 0;
				}
				.reduceBtn{
					background: url(../assets/shopcarReduce.png);
					background-size: cover;
				}
				.addBtn{
					background: url(../assets/shopCaradd.png);
					background-size: cover;
				}
				input{
					float: left;
					width: 34%;
					height: rem(30rem);
					border: 0;
					background: #f5f5f5;
					margin: 0 3%;
					text-align: center;
				    line-height: rem(30rem);
				}
			}
			
		}
		.confirmBtn{
			width: 100%;
			height: rem(48rem);
			color: #fff;
			background: #ff4443;
			line-height: rem(48rem);
			text-align: center;
			font-size: $font16;
			position: absolute;
			left: 0;
			bottom: 0;
		}
	}
}
</style>