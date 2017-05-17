<template>
  <div class='shoplist'>
 	<!--头部信息-->	
	<div class='i-header'>
	  <a href="javascript:window.history.go(-1)">
	    <img class='i-headerback' src="../assets/back.png"/>
	  </a>
      <div class='i-headertit'>商品详情</div>
    </div>	
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
  	width: 93.6s%;
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
</style>
