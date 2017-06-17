<template>
  <div class="soup">
  	<div class="soup-main">
  		 <h3 class="activeShow">{{list.title}}</h3>
  		 <!--<p class="date">
				2017-06-13
				<span>汉古科技</span>					
			 </p>-->
  		 <div class="soup-mpic activeShow">
  		 		<img :src="''+apiPath+'/image/article/'+list.index+'.jpg'"
							onerror="this.src='http://placeholder.qiniudn.com/800'"/>
  		 </div>
  		 <p v-html='list.content'></p>
  	</div>  
  </div>
</template>
<script>
	import axios from 'axios'
	import api from '../api/api';
  export default {
    data(){
    	return{
    		list:{},
    		apiPath:''
    	}
    },
    methods:{
      singleSoupList(){
        var that = this;
        that.sarticleId = this.$route.query.itemid;
        console.log(that.sarticleId)
        axios.get(api.articleListDetail + that.sarticleId)
          .then(function (res) {
            if (res.data.errorCode == 0) {
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
    mounted(){
    	this.singleSoupList()
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
		padding-bottom: rem(15rem);
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
