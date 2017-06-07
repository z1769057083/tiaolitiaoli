<template>
  <div class='shop'> 
     <!--主题部分-->
		<div class="s-main">
		  <!--轮播图部分-->
			<div class="swiper-container">
	   		<div class="swiper-wrapper" >
	   			<!--<div class="swiper-slide">
	        	<img class="swiper-img" 
	        		:src="'http://139.162.116.116/image/product/'+sitem.index+'.png'" 
					  	onerror="this.src='http://placeholder.qiniudn.com/800'"/>
	        </div>-->
	        <div class="swiper-slide">
	        	<img class="swiper-img" src="../assets/shopswiper.png"/>
	        </div>
	        <div class="swiper-slide">
	        	<img class="swiper-img" src="../assets/shopswiper.png"/>
	        </div>
	        <div class="swiper-slide">
	        	<img class="swiper-img" src="../assets/shopswiper.png"/>
	        </div>
	    	</div>
		    <!-- 如果需要分页器 -->
		    <div class="swiper-pagination"></div>
			</div>
			<!--文章部分-->
			<div class="s-marticle">
				<div class="s-mrecomment"  >
					<h3 class="s-marttitle">个性化推荐</h3>
					<dl class="s-marticlecon" v-for='soupItem in getSouplist'>
						<dt>
							<h3>{{soupItem.title}}</h3>
							{{soupItem.material}}
						</dt>
						<dd>
							<router-link :to="{ name: '', query: { soupId: soupItem._id }}">
								<img :src="'http://139.162.116.116/image/soup/44/'+soupItem.index+'.jpg'" 
								  		onerror="this.src='http://placeholder.qiniudn.com/800'"/>
							</router-link>
						</dd>
					</dl>
					<!--<dl class="s-marticlecon1">
						<dt>
							<h3>坐月子是女人调养体质的最佳时期，月子注意这些事，一生不落病</h3>
						</dt>
						<dd class="s-martimg">
							<img src="../assets/shoparticle1.png"/>
						</dd>
						<dd class="s-martimg">
							<img src="../assets/shoparticle1.png"/>
						</dd>
						<dd class="s-martimg">
							<img src="../assets/shoparticle1.png"/>
						</dd>
					</dl>-->
				</div>
			</div>
			<!--商品部分-->
	    <div class="s-mgoods">
				<div class="s-mrecomment" v-for="(item, index) in listem">
					<h3 class="s-marttitle">{{item.categoryName}}
						<router-link :to="{ name: 'allgoods', query: { categoryId: item.category }}">
						<a class="s-mrecomall" href="">查看全部</a>
						</router-link></h3>
					<div>
					<dl class="s-mrecomlist" v-for="temp in item.items">
							<router-link :to="{ name: 'goodsdetail', query: { itemid: temp._id }}">
							  <dt class="s-mreconimg">
							  	<img :src="'http://139.162.116.116/image/product/'+temp.index+'.png'" 
							  		onerror="this.src='http://placeholder.qiniudn.com/800'"/>
							  </dt>
								<dd class="s-mreconintro">
									<span>{{temp.name}}</span>
								</dd>
							</router-link>
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
import api from '../api/api';
export default {
  name: 'shop',
  data(){
  	return {
      listem:[],
      recommendlist:[],
      getSouplist:[]
    }
  },
  methods: {
	  requestlist(){
	  	var that = this;
	  	axios.get(api.shopData)
		  .then(function (res) {
		  	if(res.data.errorCode == 0){
		  		res = res.data.returnValue
		  		that.listem = res
		  	}
		  })
		  .catch(function (error) {
		    console.log(error)
		  })
	  },
	  recommend(){
	  	var that = this;
	  	axios.get(api.recommendData)
		  .then(function (res) {
		  	if(res.data.errorCode == 0){
					res = res.data.returnValue
		  		that.recommendlist = res
		  	}
		  })
		  .catch(function (error) {
		    console.log(error)
		  })
	  },
	  getSoup(){
	  	var that = this;
	  	axios.get(api.allSoupData)
		  .then(function (res) {
		  	if(res.data.errorCode == 0){
					res = res.data.returnValue
		  		that.getSouplist = res
		  		console.log(that.getSouplist)
		  	}
		  })
		  .catch(function (error) {
		    console.log(error)
		  })
	  }
  },
  mounted() {
  	this.requestlist()
  	this.recommend()
  	this.getSoup()
  	document.title="在线商城"
  	document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  	var mySwiper = new Swiper('.swiper-container',{
					autoplay: 3000,
					loop: true,
          pagination : '.swiper-pagination'	
			})
  }
}
</script>
<style scoped lang="scss">
	@import "../common/common.scss";
	.shop{
		width: 100%;
		height: 100%;
		background: #f6f6f6;
		/* 轮播图样式 */
	  
	  /*文章部分*/
	  .s-marticle{
	 		width: 100%;
	 		overflow: hidden;
	 		background: #fff;
	 		.s-mrecomment{
		 		width: 92%;
		 		overflow: hidden;
		 		margin-left: 4%;
		 		padding-top: 0.32rem;
		 		.s-marttitle{
			 		font-size: 0.42rem;
			 		line-height: rem(40rem);
			 		color: #000;
			 		font-weight: bold;
			 		margin-bottom: 0.26rem;
			 		background: url(../assets/shoptitleft.png) no-repeat center left;
			 		padding-left: 2%;
			 		border-bottom: rem(1rem) solid #e8e8e8;
			 	}
			 	.s-marticlecon{
			 		width: 100%;
			 		overflow: hidden;
			 		margin-top: rem(15rem);
			 		padding-bottom: rem(15rem);
			 		border-bottom: rem(1rem) solid #e8e8e8;
			 		dt{
			 			width: 66%;
			 			float: left;
			 			margin-right: 2%;
			 			font-size: $font12;
			 			color: #999;
			 			line-height: rem(20rem);
			 			h3{
			 				font-size: $font18;
			 				color: $c3c3c;
			 				font-weight: bold;
			 				line-height: rem(26rem);
							margin-bottom: rem(5rem);
							letter-spacing: rem(1rem);
			 			}
			 		}
			 		dd{
			 			width: 32%;
			 			height: rem(74rem);
			 			float: left;
			 			img{
			 				width: 100%;
			 				height: 100%;
			 			}
			 		}
			 	}
			 	.s-marticlecon1{
			 		width: 100%;
			 		overflow: hidden;
			 		margin-top: rem(15rem);
			 		padding-bottom: rem(15rem);
			 		border-bottom: rem(1rem) solid #e8e8e8;
			 		dt{
			 			width: 100%;
			 			h3{
			 				font-size: $font18;
			 				color: $c3c3c;
			 				font-weight: bold;
			 				line-height: rem(26rem);
							margin-bottom: rem(5rem);
							letter-spacing: rem(1rem);
			 			}
			 		}
			 		.s-martimg{
			 			width: 32%;
			 			height: rem(84rem);
			 			float: left;
			 			margin-right: 2%;
			 			img{
			 				width: 100%;
			 				height: 100%;
			 			}
			 		}
			 		.s-martimg:nth-child(4){
			 			margin-right: 0;
			 		}
			 	}
			}
	 	}
	  /*商品列表*/
	 	.s-mgoods{
	 		width: 100%;
	 		overflow: hidden;
	 		background: #fff;
	 		.s-mrecomment{
		 		width: 92%;
		 		overflow: hidden;
		 		margin-left: 4%;
		 		padding: 0.32rem 0 0.28rem;
		 		border-bottom: rem(1rem) solid #e8e8e8;
		 		h3{
			 		font-size: 0.42rem;
			 		line-height: 0.59rem;
			 		color: #000;
			 		font-weight: bold;
			 		margin-bottom: 0.26rem;
			 		background: url(../assets/shoptitleft.png) no-repeat left;
			 		padding-left: 2%;
			 		.s-mrecomall{
				 		font-size: 0.35rem;
				 		color: #c69b70;
				 		float: right;
				 		font-weight: normal;
				 		background: url(../assets/s-mrecomall.png) no-repeat right;
				 		background-size: 0.16rem 0.32rem; 
				 		padding-right: 3%;
				 	}
			 	} 	
		 	}
		 	.s-mrecomlist{
		 		width: 31.9%;
		 		float: left;
		 		margin-right: 2.1%;
		 		margin-bottom: 0.26rem;
		 		.s-mreconimg{
			 		width: 100%;
			 		height: 2.24rem;
			 		margin-bottom: 0.21rem;
			 		img{
				 		width: 100%;
				 		height: 100%;
				 	}
			 	}
			 	.s-mreconintro{
			 		width: 100%;
			 		overflow: hidden;
			 		span{
				 		font-size: 0.35rem;
				 		color: #000;
				 		line-height: 0.48rem;
				 	}
			 	}
		 	}
		 	.s-mrecomlist:nth-child(3n){
		 		margin-right: 0;
		 	}
	 	} 
	 	.s-mrecombottom{
	 		line-height: 0.45rem;
	 		font-size: 0.32rem;
	 		color: #999;
	 		width: 100%;
	 		overflow: hidden;
	 		text-align: center;
	 		margin: rem(20rem) 0;
	 	}	
	}
</style>