<template>
  <div class='video-list'> 
     <!--主题部分-->
	<div class="a-main">
		<h3 class="s-marttitle">小儿推拿
			<router-link to='videoList'>
			<span class="s-mrecomall" href="">查看全部</span>
			</router-link>
		</h3>
		<div>
		<dl>
			<router-link to='/videoListDetail'>
				<dt>
					<!--<img src="../assets/video.jpg" alt="" />-->
				</dt>			
				<dd>
					<span>小儿推拿教学—二马</span>
					<p>二马穴在临床上具有滋阴补肾，顺气散结，清神，利水通淋的功效。</p>
				</dd>
			</router-link>	
		</dl>
		<dl>
			<!--<router-link :to="{ name: 'goodsdetail', query: { itemid: item._id }}">-->
				<dt>
					<!--<img src="../assets/video.jpg" alt="" />-->
				</dt>
			<!--</router-link>-->
				<dd>
					<span>小儿推拿教学—二马</span>
					<p>二马穴在临床上具有滋阴补肾，顺气散结，清神，利水通淋的功效。</p>
				</dd>
		</dl>
		<dl>
			<!--<router-link :to="{ name: 'goodsdetail', query: { itemid: item._id }}">-->
				<dt>
					<!--<img src="../assets/video.jpg" alt="" />-->
				</dt>
			<!--</router-link>-->
				<dd>
					<span>小儿推拿教学—二马</span>
					<p>二马穴在临床上具有滋阴补肾，顺气散结，清神，利水通淋的功效。</p>
				</dd>
		</dl>
		<dl>
			<!--<router-link :to="{ name: 'goodsdetail', query: { itemid: item._id }}">-->
				<dt>
					<!--<img src="../assets/video.jpg" alt="" />-->
				</dt>
			<!--</router-link>-->
				<dd>
					<span>小儿推拿教学—二马</span>
					<p>二马穴在临床上具有滋阴补肾，顺气散结，清神，利水通淋的功效。</p>
				</dd>
		</dl>
		</div>
	</div>
	<div class="a-main">
		<h3 class="s-marttitle">六字诀
			<router-link to='videoList'>
			<span class="s-mrecomall" href="">查看全部</span>
			</router-link>
		</h3>
		<div>
		<dl>
			<router-link to='/videoListDetail'>
				<dt>
					<!--<img src="../assets/video.jpg" alt="" />-->
				</dt>
			</router-link>
				<dd>
					<span>小儿推拿教学—二马</span>
					<p>二马穴在临床上具有滋阴补肾，顺气散结，清神，利水通淋的功效。</p>
				</dd>
		</dl>
		<dl>
			<!--<router-link :to="{ name: 'goodsdetail', query: { itemid: item._id }}">-->
				<dt>
					<!--<img src="../assets/video.jpg" alt="" />-->
				</dt>
			<!--</router-link>-->
				<dd>
					<span>小儿推拿教学—二马</span>
					<p>二马穴在临床上具有滋阴补肾，顺气散结，清神，利水通淋的功效。</p>
				</dd>
		</dl>
		<dl>
			<!--<router-link :to="{ name: 'goodsdetail', query: { itemid: item._id }}">-->
				<dt>
					<!--<img src="../assets/video.jpg" alt="" />-->
				</dt>
			<!--</router-link>-->
				<dd>
					<span>小儿推拿教学—二马</span>
					<p>二马穴在临床上具有滋阴补肾，顺气散结，清神，利水通淋的功效。</p>
				</dd>
		</dl>
		<dl>
			<!--<router-link :to="{ name: 'goodsdetail', query: { itemid: item._id }}">-->
				<dt>
					<!--<img src="../assets/video.jpg" alt="" />-->
				</dt>
			<!--</router-link>-->
				<dd>
					<span>小儿推拿教学—二马</span>
					<p>二马穴在临床上具有滋阴补肾，顺气散结，清神，利水通淋的功效。</p>
				</dd>
		</dl>
		</div>
	</div>
	<div class="s-mrecombottom">我是有底线的</div>
	<!--<div class="s-mrecombottom1">更多视频，敬请期待！</div>-->
  </div>
</template>
<script>
import axios from 'axios'
import api from '../api/api'
export default {
  data(){
  	return {
  		apiPath:''
    }
  },
  methods: {
//	requestlist(){
//      var that = this;
//      document.title = this.$route.query.titleName;
//      that.categoryId = this.$route.query.categoryId;
//      axios.get(api.allDoodsData+that.categoryId)
//        .then(function (res) {
//          if (res.data.errorCode == 0) {
//            res = res.data.returnValue
//            that.list = res
//          }
//        })
//        .catch(function (error) {
//          console.log(error)
//        })
//    },
  },
  mounted() {
//	this.apiPath = api.apipath
//	this.requestlist()
	document.documentElement.scrollTop = 0
    document.body.scrollTop =0
  }
}
</script>
<style scoped lang="scss" rel="stylesheet/scss">
	@import "../common/common.scss";
.video-list{
	width: 100%;
	height: 100%;
	background: #f6f6f6;
	overflow: auto;
	position: absolute;
	-webkit-overflow-scrolling: touch;
	.a-main{
		overflow: hidden;
		margin-top: rem(12rem);
		h3{
	 		font-size: 0.42rem;
	 		line-height: 0.59rem;
	 		width: 98%;
	 		margin-left:1%;
	 		color: #000;
	 		font-weight: bold;
	 		margin-bottom: 0.26rem;
	 		/*background: url(../assets/shoptitleft.png) no-repeat left;*/
	 		/*padding-left: 3%;*/
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
		dl{
			width: 49%;
			float: left;
			margin-right: 2%;
			background: #fff;
			margin-bottom: rem(7rem);
			padding-bottom: rem(5rem);
			dt{
				width: 100%;
				height: rem(98rem);
				img{
					width: 100%;
					height: 100%;
				}
			}
			dd{
				width: 92%;
				margin-left: 4%;
				span{
					width: 100%;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
					font-size: $font14;
					line-height: rem(26rem);
					color: $c3c3c;
				}
				p{
					padding: rem(2rem) 0;
					width: 100%;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
					color: #8a8a8a;
					font-size: $font12;
				}
			}
		}
		dl:nth-child(2n){
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
	 		display: block;
	 	}	
	 	.s-mrecombottom1{
	 		line-height: 0.45rem;
	 		font-size: 0.32rem;
	 		color: #999;
	 		width: 100%;
	 		overflow: hidden;
	 		text-align: center;
	 		margin: rem(20rem) 0;
	 		display: block;
	 		position: absolute;
	 		bottom: 0;
	 		left: 0;
	 	}
}
</style>
