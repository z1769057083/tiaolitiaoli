<template>
	<div>
	<!--文章部分-->
	<div class="s-mrecomment" v-if="hasRecommend" >
		<h3 class="s-marttitle" >个性化推荐</h3>
		<dl class="s-marticlecon" v-for='soupItem in getSouplist' >
			<router-link :to="{ name:'soupDetail', query: { soupId: soupItem._id }}">
				<dt>
					<h3>{{soupItem.title}}</h3>
					{{soupItem.material}}
				</dt>
				<dd>
					<img :src="''+apiPath+'/image/soup/'+soupItem.index+'/1.jpg'"  
						onerror="this.src='http://placeholder.qiniudn.com/800'"/>
				</dd>
			</router-link>	
		</dl>
		<div class="s-marticlecon1">
			<dl>
				<dt>
					<h3 class="s-marcontitle" v-if="hasRecommend">推荐商品</h3>
				</dt>							
				<dd class="s-martimg" v-for='recommendItem in recommendlist'>
					<router-link :to="{ name: 'goodsdetail', query: { itemid: recommendItem._id}}">
						<img :src="''+apiPath+'/image/product/thumbnail/'+recommendItem.index+'.jpg'"
				  		onerror="this.src='http://placeholder.qiniudn.com/800'"/>
				  </router-link>
				  <p class="s-martname">{{recommendItem.name}}</p>
			  		<p class="s-martpic">¥{{recommendItem.price}}.00			  			
			  		</p>
				</dd>	
			</dl>	
		</div>
	</div>
	<!--商品部分-->
	<div class="s-mrecomment1" v-for="(item, index) in listem">
		<h3 class="s-marttitle">{{item.title}}
			<router-link :to="{ name: 'allgoods', query: { categoryId: item.category ,titleName:item.title}}">
			<a class="s-mrecomall" href="">查看全部</a>
			</router-link></h3>
		<div>
		<dl class="s-mrecomlist" v-for="temp in item.items">
				<router-link :to="{ name: 'goodsdetail', query: { itemid: temp._id}}">
				  <dt class="s-mreconimg">
				  	<img :src="''+apiPath+'/image/product/thumbnail/'+temp.index+'.jpg'"
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
</template>
<script>
import axios from 'axios'
import api from '../api/api';
import commodity from '@/components/commodity'
export default {
  data(){
  	return {
      listem:[],
        hasRecommend:true,
      recommendlist:[],
      getSouplist:[],
      soupList:[],
      apiPath:''
    }
  },
  components:{
  	commodity
  },
  methods: {
	  requestlist(){
	  	var that = this;
	  	axios.get(api.shopData)
		  .then(function (res) {
		  	if(res.data.errorCode == 0){
		  		res = res.data.returnValue
		  		that.listem = res
//		  		console.log(that.listem)
		  	}
		  })
		  .catch(function (error) {
		    console.log(error)
		  })
	  },
	  recommend(){
	  	var that = this;
		  if (window.localStorage.getItem(Account_Index) !== null) {
	        let account = JSON.parse(window.localStorage.getItem(Account_Index))
	        axios.get(api.recommendData+account._id)
					  .then(function (res) {
					  	if(res.data.errorCode == 0){
							res = res.data.returnValue
					  		that.recommendlist = res
							that.recommendData=true
//					  		console.log(that.recommendlist)
					  	}
					  })
					  .catch(function (error) {
					    console.log(error)
					  })
	   }	  	
	  },
	  getSoup(){
	  	var that = this;
	  	axios.get(api.allSoupData)
		  .then(function (res) {
		  	if(res.data.errorCode == 0){
				res = res.data.returnValue
		  		that.getSouplist = res
		  		for(var i in that.getSouplist)
		  		that.soupList = that.getSouplist[i].images[0]
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
  	this.apiPath = api.apipath
  },
   watch: {
    
   }
}
</script>
<style scoped lang="scss" rel="stylesheet/scss">
@import "../common/common.scss";
/*文章部分*/
.s-mrecomment{
	width: 100%;
	overflow: hidden;
	padding-top: rem(6rem);
	.s-marttitle{
 		font-size: 0.42rem;
 		line-height: rem(40rem);
 		color: #000;
 		font-weight: bold;
 		margin-bottom: 0.26rem;
 		background: url(../assets/shoptitleft.png) no-repeat center left;
 		padding-left: 2.5%;
 		border-bottom: rem(1rem) solid #e8e8e8;
 	}
 	.s-marticlecon{
 		width: 100%;
 		overflow: hidden;
 		margin-top: rem(15rem);
 		padding-bottom: rem(12rem);
 		border-bottom: rem(1rem) solid #e8e8e8;
 		dt{
 			width: 66%;
 			float: left;
 			margin-right: 2%;
 			font-size: $font12;
 			color: #999;
 			line-height: rem(20rem);
 			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 2;
			overflow: hidden;
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
 			height: rem(64rem);
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
 		margin-top: rem(10rem);
 		padding-bottom: rem(10rem);
 		border-bottom: rem(1rem) solid #e8e8e8;
 		dt{
 			width: 100%;
 			.s-marcontitle{
 				font-size: $font16;
 				color: $c3c3c;
 				font-weight: bold;
 				line-height: rem(26rem);
				margin-bottom: rem(5rem);
				letter-spacing: rem(1rem);
				background: url(../assets/shoptitleft.png) no-repeat center left;
 				padding-left: 2.5%;
 			}
 		}
 		.s-martimg{
 			width: 32%;
 			float: left;
 			margin-right: 2%;
 			img{
 				width: 100%;
 				height: rem(64rem);
 			}
 			.s-martname{
 				font-size: $font12;
 				font-weight: bold;
 				line-height: rem(18rem);
 				margin: rem(3rem) 0;
 			}
 			.s-martpic{
 				color: #ff4443;
 			} 			
 		}
 		.s-martimg:nth-child(4){
 			margin-right: 0;
 		}
 	}
}
/*商品列表*/
.s-mrecomment1{
	width: 100%;
	overflow: hidden;
	padding-top: 0.32rem;
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
 		height: rem(64rem);
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
	 		text-decoration: none;
	 	}
 	}
}
.s-mrecomlist:nth-child(3n){
	margin-right: 0;
}

</style>