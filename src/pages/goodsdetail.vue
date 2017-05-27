<template>
  <div class='shoplist'>
    <!--主题部分-->
    <div class="l-main">
    	<div class="l-mainscroll" v-for='item in list'>
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
	  	  <p>购物车</p>
	  	</div>
	  	<div class="l-mgoodsjoin">加入购物车</div>
	  	<div class="l-mgoodsjoin l-mgoodsbuy">立即购买</div>
	  </div>
	  <!--组件-->
	  <!--加入购物车-->
	  <!--<shoppingCar></shoppingCar>-->
	  <purchase></purchase>
  </div>
</template>
<script>
import axios from 'axios'
import api from '../api/api'
import shoppingCar from '@/components/shoppingCar'
import purchase from '@/components/purchase'
export default {
  name: 'goodsdetail',
  data(){
  	return {
      list:[]
    }
  },
  components:{
  	shoppingCar,
  	purchase
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
		  		console.log(that.list)
		  	}
		  })
		  .catch(function (error) {
		    console.log(error)
		  })
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
		  	width: 18.4%;
		  	height: 1.28rem;
		  	text-align: center;
		  	img{
			  	width: 0.56rem;
			  	height: 0.46rem;
			  	margin: 0.19rem 0 0.1rem 0;
			  	font-size: 0.32rem;
			  	color: #3C3C3C;
			  }
		  }
		  .l-mgoodsjoin{
		  	width: 41.3%;
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
</style>
