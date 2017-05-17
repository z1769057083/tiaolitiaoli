<template>
  <div class='shoplist'>
    <!--主题部分-->
    <div class="l-mian">
      <div class="l-mgoodsimg">
    	<img src="../assets/listgoodsimg.png"/>
      </div>
	  <div class="l-mgoodsprice">
	    <p class="l-mgoodsintro">【买二送一】驱蚊包-套餐价格已包括3件</p>
	    <div class="l-mgoodspri">
	  	  ¥<span>50</span>.00
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
	  <div class="l-mgoodspay">
	  	<div class="l-mgoodscar">
	  	  <img src="../assets/listgoodspay.png"/>
	  	  <p>购物车</p>
	  	</div>
	  	<div class="l-mgoodsjoin">加入购物车</div>
	  	<div class="l-mgoodsjoin l-mgoodsbuy">立即购买</div>
	  </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'shoplist'
}
</script>
<style scoped>
  .shoplist{
	width: 100%;
	overflow: hidden;
	background: #f6f6f6;	
  }
  .l-mgoodsimg{
	width: 100%;
	height: 9.33rem;
  }
  .l-mgoodsimg img{
	width: 100%;
	height: 100%;
  }
  .l-mgoodsprice{
  	width: 93.6%;
  	padding: 0.37rem 3.2%;
  	background: #fff;
  }
  .l-mgoodsintro{
  	font-size: 0.37rem;
  	color: #3c3c3c;
  	line-height: 0.53rem;
  	margin-bottom: ;
  }
  .l-mgoodspri{
  	color: #ff3300;
  	font-size: 0.32rem;
  	line-height: 0.67rem;
  }
  .l-mgoodspri span{
  	font-size: 0.48rem;
  }
  .l-mgoodspri p{
  	color: #999;
  	float: right;
  }
  .l-maddress{
  	width: 93.6%;
  	padding: 0.37rem 3.2%;
  	background: #fff;
  	color: #3c3c3c;
  	font-size: 0.37rem;
  	margin: 0.27rem 0;
  }
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
  .l-mgoodstit{
  	width: 93.6%;
  	padding: 0.37rem 3.2%;
  	background: #fff;
 	text-align: center;
 	vertical-align: middle;
  }
  .l-mgoodstit span{
  	margin: 0 3%;
  	color: #3C3C3C;
  	font-size: 0.37rem;
  }
  .l-mgoodstit img{
  	vertical-align: middle;
  	height: 0.1rem;
  	width: 6.7%;
  }
  .l-mgooddetail{
  	width: 100%;
  	overflow: hidden;
  }
  .l-mgooddetail img{
  	width: 100%;
  	height: 100%;
  }
  .l-mgoodspay{
  	width: 100%;
  	height: 1.28rem;
  	background: #fff;
  	position: fixed;
  	left: 0;
  	bottom: 0;
  	display: flex;
  }
  .l-mgoodscar{
  	width: 18.4%;
  	height: 1.28rem;
  	text-align: center;
  }
  .l-mgoodscar img{
  	width: 0.56rem;
  	height: 0.46rem;
  	margin: 0.19rem 0 0.1rem 0;
  	font-size: 0.32rem;
  	color: #3C3C3C;
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
</style>
