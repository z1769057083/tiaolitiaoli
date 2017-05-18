<template>
  <div class='shop'> 
     <!--主题部分-->
		<div class="s-main">
		  <!--轮播图部分-->
			<div class="swiper-container">
			    <div class="swiper-wrapper">
			        <div class="swiper-slide"><img src="../assets/shopswiper.png"/></div>
			        <div class="swiper-slide"><img src="../assets/shopswiper.png"/></div>
			        <div class="swiper-slide"><img src="../assets/shopswiper.png"/></div>
			    </div>
			    <!-- 如果需要分页器 -->
			    <div class="swiper-pagination"></div>
			</div>
			<!--商品部分-->
			<div class="s-mgoods">
				<div class="s-mrecomment">
					<h3>推荐商品</h3>
					<div>
						<dl class="s-mrecomlist"  v-for="(item, index) in listem">
							<router-link to='/goodsdetail'>
							  <dt class="s-mreconimg"><img :src="item.img" onerror="this.src='http://placeholder.qiniudn.com/800'" alt="" /></dt>
							</router-link>
							<dd class="s-mreconintro">
								<span>{{item.name}}</span>
								<p>¥128.00</p>
							</dd>
						</dl>
					</div>
				</div>
			</div>
	    <div class="s-mgoods">
				<div class="s-mrecomment">
					<h3>五行贴<a class="s-mrecomall" href="">查看全部</a></h3>
					<div>
						<dl class="s-mrecomlist">
							<dt class="s-mreconimg"><img src="../assets/shopgoods.png" alt="" /></dt>
							<dd class="s-mreconintro">
								<span>引火归元贴</span>
								<p>¥128.00</p>
							</dd>
						</dl>
						<dl class="s-mrecomlist">
							<dt class="s-mreconimg"><img src="../assets/shopgoods.png" alt="" /></dt>
							<dd class="s-mreconintro">
								<span>引火归元贴</span>
								<p>¥128.00</p>
							</dd>
						</dl>
						<dl class="s-mrecomlist s-mreconlist1">
							<dt class="s-mreconimg"><img src="../assets/shopgoods.png" alt="" /></dt>
							<dd class="s-mreconintro">
								<span>引火归元贴</span>
								<p>¥128.00</p>
							</dd>
						</dl>
					</div>
				</div>
			</div>  
			<div class="s-mgoods">
				<div class="s-mrecomment">
					<h3>五行贴<a class="s-mrecomall" href="">查看全部</a></h3>
					<div>
						<dl class="s-mrecomlist">
							<dt class="s-mreconimg"><img src="../assets/shopgoods.png" alt="" /></dt>
							<dd class="s-mreconintro">
								<span>引火归元贴</span>
								<p>¥128.00</p>
							</dd>
						</dl>
						<dl class="s-mrecomlist">
							<dt class="s-mreconimg"><img src="../assets/shopgoods.png" alt="" /></dt>
							<dd class="s-mreconintro">
								<span>引火归元贴</span>
								<p>¥128.00</p>
							</dd>
						</dl>
						<dl class="s-mrecomlist s-mreconlist1">
							<dt class="s-mreconimg"><img src="../assets/shopgoods.png" alt="" /></dt>
							<dd class="s-mreconintro">
								<span>引火归元贴</span>
								<p>¥128.00</p>
							</dd>
						</dl>
					</div>
				</div>
			</div>    
		</div>	 
  <div class="s-mrecombottom">我是有底线的</div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'shop',
  data(){
  	return {
      listem:[],
      list:[]
    }
  },
  methods: {
	  requestlist(){
	  	var that = this;
	  	axios.get('./static/list.json')
		  .then(function (res) {
		  	that.listem = res.data;
		  	console.log(that.listem)
		  })
		  .catch(function (error) {
		    console.log(error)
		  })
	  }
  },
  mounted() {
  	this.requestlist();
  }
}
</script>
<style scoped lang="scss">
	@import "../common/common.scss";
	.shop{
		width: 100%;
		overflow: hidden;
		background: #f6f6f6;
	}
	/*轮播图*/
  .swiper-container {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 4.27rem;
    overflow: hidden;
  }
  .swiper-slide{
  	float: left;
  }
  .swiper-slide img{
  	width: 100%;
  	height: 100%;
  }
  /*商品列表*/
 	.s-mgoods{
 		width: 100%;
 		overflow: hidden;
 		background: #fff;
 		margin-bottom: 0.26rem;
 	}
 	.s-mrecomment{
 		width: 92%;
 		overflow: hidden;
 		margin-left: 4%;
 		padding-top: 0.32rem;
 	}
 	.s-mrecomment h3{
 		font-size: 0.42rem;
 		line-height: 0.59rem;
 		color: #000;
 		font-weight: bold;
 		margin-bottom: 0.26rem;
 		background: url(../assets/shoptitleft.png) no-repeat left;
 		padding-left: 2%;
 	} 	
 	.s-mrecomlist{
 		width: 31.9%;
 		height: 3.46rem;
 		float: left;
 		margin-right: 2.1%;
 		margin-bottom: 0.26rem;
 	}
 	.s-mreconlist1{
 		margin-right: 0;
 	}
 	.s-mreconimg{
 		width: 100%;
 		height: 2.24rem;
 		margin-bottom: 0.21rem;
 	}
 	.s-mreconimg img{
 		width: 100%;
 		height: 100%;
 	}
 	.s-mreconintro{
 		width: 100%;
 		overflow: hidden;
 	}
 	.s-mreconintro span{
 		font-size: 0.35rem;
 		color: #000;
 		line-height: 0.48rem;
 	}
 	.s-mreconintro p{
 		font-size: 0.24rem;
 		color: #ff4444;
 		line-height: 0.35rem;
 		margin-top: 0.05rem;
 	}
 	.s-mrecomall{
 		font-size: 0.35rem;
 		color: #c69b70;
 		float: right;
 		font-weight: normal;
 		background: url(../assets/s-mrecomall.png) no-repeat right;
 		background-size: 0.16rem 0.32rem; 
 		padding-right: 3%;
 	}
 	.s-mrecombottom{
 		line-height: 0.45rem;
 		font-size: 0.32rem;
 		color: #999;
 		width: 100%;
 		overflow: hidden;
 		text-align: center;
 		margin: 0.53rem 0;
 	}
</style>