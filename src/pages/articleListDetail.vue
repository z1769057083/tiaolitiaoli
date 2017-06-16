<template>
  <div class="soup">
  	<div class="soup-main">
  		 <h3 class="activeShow">芒种节气食疗方</h3>
  		 <p class="date">
			2017-06-13
			<span>汉古科技</span>					
		 </p>
  		 <div class="soup-mpic activeShow">
  		 		<img src="../assets/maskheader.png"/>
  		 </div>
  		 <p>
  		 	我国地域辽阔，同一节气的气候特征也有差异。
  		 	在此时不但要搞好雨期的田间管理，更要注意增强体质，
  		 	避免季节性疾病和传染病的发生，如中暑、腮腺炎、水痘等。
  		 </p>
  		 <p>
  		 	我国地域辽阔，同一节气的气候特征也有差异。
  		 	我国中部的长江中、下游地区，芒种过后即进入连绵阴雨的梅雨季节，
  		 	空气十分潮湿，天气异常湿热。在此时不但要搞好雨期的田间管理，
  		 	更要注意增强体质，避免季节性疾病和传染病的发生，
  		 	如中暑、腮腺炎、水痘等。以下介绍三款芒种节气的食疗方。
  		 </p>
  		 <p><span>西红柿炒鸡蛋</span></p>
  		 <p>
  		 	西红柿300克，鸡蛋3个，精盐、味精、白糖适量。
  		 	将西红柿洗净切片，鸡蛋打入碗内搅匀。油锅烧热，
  		 	先将鸡蛋炒熟，盛入碗内；炒锅洗净，烧热放油，白糖入锅(糖尿病人不放白糖)，
  		 	把西红柿倒入锅内翻炒2分钟后，将鸡蛋、盐入锅同炒3分钟，
  		 	放少许味精出锅即可 。可生津止渴、养心安神。
  		 </p>
  		 <p><span>香菇冬瓜球</span></p>
  		 <p>
  		 	西红柿300克，鸡蛋3个，精盐、味精、白糖适量。
  		 	将西红柿洗净切片，鸡蛋打入碗内搅匀。油锅烧热，
  		 	先将鸡蛋炒熟，盛入碗内；炒锅洗净，烧热放油，白糖入锅(糖尿病人不放白糖)，
  		 	把西红柿倒入锅内翻炒2分钟后，将鸡蛋、盐入锅同炒3分钟，
  		 	放少许味精出锅即可 。可生津止渴、养心安神。
  		 </p>
  		 <p><span>五味枸杞饮</span></p>
  		 <p>
  		 	西红柿300克，鸡蛋3个，精盐、味精、白糖适量。
  		 	将西红柿洗净切片，鸡蛋打入碗内搅匀。油锅烧热，
  		 	先将鸡蛋炒熟，盛入碗内；炒锅洗净，烧热放油，白糖入锅(糖尿病人不放白糖)，
  		 	把西红柿倒入锅内翻炒2分钟后，将鸡蛋、盐入锅同炒3分钟，
  		 	放少许味精出锅即可 。可生津止渴、养心安神。
  		 </p>
  		 <!--<p class="activeShow" v-if="list.material">{{list.material}}</p>
  		 <p class="activeShow" v-if="list.step1"><span>主要步骤：</span></p>
  		 <p class="activeShow" v-if="list.step1">{{list.step1}}</p>
  		 <p class="activeShow" v-if="list.step2">{{list.step2}}</p>
  		 <p class="activeShow" v-if="list.step3">{{list.step3}}</p>
  		 <p class="activeShow" v-if="list.step4">{{list.step4}}</p>
  		 <p class="activeShow" v-if="list.step5">{{list.step5}}</p>-->
  		 <!--<div class="soup-img activeShow" v-if="list.images" >
  		 		<img class='soupImg' v-for='imgItem in list.images' 
  		 			:src="''+apiPath+'/image/soup/'+list.index+'/'+imgItem+'.jpg'" 
						onerror="this.src='http://placeholder.qiniudn.com/800'">
						<!--<img class="soupImg" src="../assets/2.jpg"/>
						<img class="soupImg" src="../assets/2.jpg"/>
						<img class="soupImg" src="../assets/2.jpg"/>
  		 </div> -->
  	</div>  
  </div>
</template>
<script>
	import axios from 'axios'
	import api from '../api/api';
  export default {
    data(){
    	return{
//  		list:[],
    		apiPath:''
    	}
    },
    methods:{
//    singleSoupList(){
//      var that = this;
//      that.soupId = this.$route.query.soupId;
//      console.log(that.soupId)
//      axios.get(api.singleSoupData + that.soupId)
//        .then(function (res) {
//          if (res.data.errorCode == 0) {
//            res = res.data.returnValue
//             that.list = res
//             console.log(that.list)
//          }
//        })
//        .catch(function (error) {
//          console.log(error)
//        })
//    }
    },
    mounted(){
//  	this.singleSoupList()
    	document.title="文章详情"
    	this.apiPath = api.apipath
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
@import "../common/common.scss";
.soup{
	width: 100%;
	overflow: hidden;
	.soup-main{
		width: 92%;
		margin-left: 4%;
		margin-top: rem(20rem);
		.activeShow{
			display: block;
		}
		h3{
			text-align: center;
			font-size: $font16;
			font-weight: bold;
			margin-bottom: rem(10rem);			
		}
		.date{
			font-size: $font12;
			color: #868686;
			span{
				color: #4e7b9c;
			}
		}
		p{
			line-height: rem(26rem);
			text-align: justify;
			font-size: $font13;
			color: $c3c3c;
			span{
				font-size: $font12;
				font-weight: bold;
			}
		}
		.soup-mpic{
			margin: rem(10rem) 0;
			width: 100%;
			height: rem(200rem);
			img{
				width: 100%;
				height: 100%;
			}
		}
		.soupImg{
			width: 100%;
			height: 100%;
		}
		.soup-img{
			margin-top: rem(10rem);
			width: 100%;
			overflow: hidden;
		}
	}
}
</style>
