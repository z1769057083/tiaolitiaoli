<template>
  <div class='shoplist'>
    <!--主题部分-->
    <div class="l-main">
    	<div class="l-mainscroll">
    		<div class="l-mgoodsimg">
	    		<img src="../assets/listgoodsimg.png"/>
	      </div>
			  <div class="l-mgoodsprice">
			    <p class="l-mgoodsintro">{{list.name}}</p>
			    <div class="l-mgoodspri">
			  	  <span>{{list.price}}</span>
			  	  <p>运费：¥12.00</p>
			    </div>
			  </div>
			  <div class="l-maddress">
			  	<img class="l-maddressimgl" src="../assets/listadress.png"/>线下门店
			  	<img class="l-maddressimgr" src="../assets/listadressright.png" alt="" />
			  </div>
			  <div class="l-mgoodstit">
			  	<img src="../assets/listline.png"/><span>商品详情</span><img src="../assets/listline.png"/>
			  </div>
			  <div class="l-mgooddetail">
			  	<img src="../assets/listdetail1.png"/>
			  	<img src="../assets/listdetail2.png"/>
			  	<img src="../assets/listdetail3.png"/>
			  	<img src="../assets/listdetail4.png"/>
			  	<img src="../assets/listdetail5.png"/>
			  	<img src="../assets/listdetail6.png"/>
			  	<img src="../assets/listdetail7.png"/>
			  	<img src="../assets/listdetail8.png"/>
			  </div>
    	</div>
    </div>
    <div class="l-mgoodspay">
	  	<div class="l-mgoodscar">
	  	  <img src="../assets/listgoodspay.png"/>
	  	  <router-link to='/shoppingTolley'>
	  	  	<p>购物车</p>
	  	  </router-link>
	  	</div>
	  	<div class="l-mgoodscar l-mgoodsshop">
	  	  <img src="../assets/listShooping.png"/>
	  	  <router-link to='/shop'>
	  	  	<p>商城</p>
	  	  </router-link>
	  	</div>
	  	<div class="l-mgoodsjoin" @click='addShoppingCar'>加入购物车</div>
	  	<div class="l-mgoodsjoin l-mgoodsbuy" @click='addPurchase'>立即购买</div>
	  </div>
	  <!--组件-->
	  <!--加入购物车-->
<!--	  <shoppingCar v-show='shopHiden' @closeToastEvent='closeToastHandler' @closeShopping='closeShopping'></shoppingCar>-->
	  <div class="maskmain" v-show='shopHiden'>
			<div class="mask-shopCar">
				<div class="shopCar-main">
					<dl>
						<dt><img src="../assets/shopcar.png"/></dt>
						<dd>
						    <p>¥50.00</p>
						    <span>{{list.name}}</span>
						</dd>
					</dl>
					<div class="closeBtn" @click='shopHiden = !shopHiden'></div>				
				</div>
				<div class="shopCar-num">
					<span>购买数量</span>
					<div class="num">
						<button class="reduceBtn" @click='reduce'></button>
						<input type="text" value='num' v-model='num'/>
						<button class="addBtn" @click='add'></button>
					</div>
				</div>
				<div class="confirmBtn" @click='confirm'>确定</div>
			</div>
		</div>
	  <purchase v-show='purchaseHidden' @closePurchase='closePurchase'></purchase>
	  <toast v-show='toastHidden'></toast>
  </div>
</template>
<script>
import axios from 'axios'
import api from '../api/api'
import purchase from '@/components/purchase'
import toast from '@/components/toast'
export default {
  name: 'goodsdetail',
  data(){
  	return {
      list:[],
      shopHiden: false,
      purchaseHidden: false,
      toastHidden: false
    }
  },
  components:{
  	purchase,
  	toast
  },
  methods: {
	  requestlist(){
	  	var that = this;
	  	that.itemid = this.$route.query.itemid;
	  	axios.get(api.goodsDetailData+that.itemid)
		  .then(function (res) {
		  	if(res.data.errorCode == 0){
		  		res = res.data.returnValue
		  		that.list = res
		  	}
		  })
		  .catch(function (error) {
		    console.log(error)
		  })
	  },
  	confirm(){
  		this.toastHidden = true
	  	var that = this
			setTimeout(function()
			{that.toastHidden = false}
			,1000)
  		this.shopHiden = false
  	},
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
	  addShoppingCar() {
	  	this.shopHiden = true
	  },
	  addPurchase() {
	  	this.purchaseHidden = true
	  },
	  closePurchase(){
	  	this.purchaseHidden = false
	  }
  },
  mounted() {
  	this.requestlist()
  	document.title="在线商城"
  	var mySwiper = new Swiper('.swiper-container',{
					autoplay: 3000,
					loop: true,
          pagination : '.swiper-pagination'	
				}) 
		document.documentElement.scrollTop = 0
    document.body.scrollTop =0
  }
}
</script>
<style scoped lang="scss">
  @import "../common/common.scss";
  .shoplist{
	  background: #f6f6f6;
	  .l-main{
	  	  width: 100%;
	  	  height: 93%;
	  	  position: absolute;
	  	  bottom: 7%;
	  		overflow-y: auto;
        -webkit-overflow-scrolling:touch;
	  	.l-mainscroll{
	  		width: 100%;
	  		background: #f6f6f6;
	  		.l-mgoodsimg{
				  width: 100%;
				  height: 9.33rem;
				  img{
					  width: 100%;
					  height: 100%;
				  }
			  }
			  .l-mgoodsprice{
			  	width: 93.6%;
			  	padding: rem(14rem) 3.2% rem(6rem);
			  	background: #fff;
			  	.l-mgoodsintro{
				  	font-size: rem(14rem);
				  	color: $c3c3c;
				  	line-height: rem(20rem);
				  	margin-bottom: rem(2rem);
				  }
				  .l-mgoodspri{
				  	color: #ff3300;
				  	font-size: 0.32rem;
				  	line-height: rem(25rem);
				  	span{
					  	font-size: 0.48rem;
					  }
					  p{
					  	color: #999;
					  	float: right;
					  }
				  }
			  }
			  .l-maddress{
			  	width: 93.6%;
			  	padding: 0.37rem 3.2%;
			  	background: #fff;
			  	color: #3c3c3c;
			  	font-size: 0.37rem;
			  	margin: 0.27rem 0;
			  	.l-maddressimgl{
				  	width: 0.43rem;
				  	height: 0.43rem;
				  	float: left;
				  	vertical-align: middle;
				  	margin-right: 2.7%;
				  }
				  .l-maddressimgr{
				  	width: 0.16rem;
				  	height: 0.32rem;
				  	float: right;
				  	vertical-align: middle;
				  }
			  }
			  .l-mgoodstit{
			  	width: 93.6%;
			  	padding: 0.37rem 3.2%;
			  	background: #fff;
			 	  text-align: center;
			 		vertical-align: middle;
			 		span{
				  	margin: 0 3%;
				  	color: #3C3C3C;
				  	font-size: 0.37rem;
				  }
				  img{
				  	vertical-align: middle;
				  	height: 0.1rem;
				  	width: 6.7%;
				  }
			  }
			  .l-mgooddetail{
			  	width: 100%;
			  	overflow: hidden;
			  	img{
				  	width: 100%;
				  	height: 100%;
				  }
			  }
	  	}
	  }
	  .l-mgoodspay{
	  	width: 100%;
	  	height: 7%;
	  	background: #fff;
	  	position: fixed;
	  	left: 0;
	  	bottom: 0;
	  	right: 0;
	  	display: flex;
	  	.l-mgoodscar{
		  	width: 17.8%;
		  	height: 1.28rem;
		  	text-align: center;
		  	img{
			  	width: 0.56rem;
			  	height: 0.46rem;
			  	margin: 0.19rem 0 0.1rem 0;
			  	font-size: 0.32rem;
			  }
			  p{
			  	color: #3C3C3C;
			  }
		  }
		  .l-mgoodsshop{
		  	border-left: 1px solid #efefef;
		  }
		  .l-mgoodsjoin{
		  	width: 32.2%;
		  	height: 1.28rem;
		  	text-align: center;
		  	line-height: 1.28rem;
		  	color: #fff;
		  	background: #ff8854;
		  	font-size: 0.37rem;
		  }
		  .l-mgoodsbuy{
		  	background: #ff4443;
		  }
	  }
  }
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
				background: #ff8854;
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
