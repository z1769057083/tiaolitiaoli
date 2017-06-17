<template>
	<div class="article">
		<div class="s-mrecomment">
			<dl class="s-marticlecon" v-for='item in list'>
				<router-link :to="{ name: 'articleListDetail', query: { itemid: item._id }}">
					<dt>
						<h3>{{item.title}}</h3>
						<p v-html='item.content'></p>
					</dt>
					<dd>
						<img :src="''+apiPath+'/image/article/'+item.index+'.jpg'"
							onerror="this.src='http://placeholder.qiniudn.com/800'"/>
					</dd>
				</router-link>	
			</dl>
		</div>	
	</div>
</template>
<script>
import axios from 'axios'
import api from '../api/api'
export default {
  data(){
  	return {
  		apiPath:'',
  		list:[]  		
    }
  },
  methods: {
	requestlist(){
        var that = this;
        axios.get(api.articleList)
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
  mounted() {
	this.apiPath = api.apipath
	this.requestlist()
	document.documentElement.scrollTop = 0
    document.body.scrollTop =0
  }
}
</script>
<style scoped lang="scss" rel="stylesheet/scss">
@import "../common/common.scss";
.article{
	width: 100%;
	/*height: 100%;*/
	position: absolute;
	overflow: hidden;
    .s-mrecomment{
		width: 94%;
    	margin-left: 3%;
		overflow: hidden;
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
	 			float: right;
	 			margin-left: 2%;
	 			font-size: $font12;
	 			color: #999;
	 			line-height: rem(20rem);
	 			height: rem(66rem);
	 			overflow: hidden;	 			
	 			h3{
	 				font-size: $font18;
	 				color: $c3c3c;
	 				font-weight: bold;
	 				line-height: rem(26rem);
					margin-bottom: rem(5rem);
					letter-spacing: rem(1rem);
	 			}
	 			p{
	 				width: 100%;
	 				display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					overflow: hidden;	 				
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
	}
}

</style>