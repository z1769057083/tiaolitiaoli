<template>
  <div class="recommend">
  	<div class="recommend-main">
		 <div class="recommend-cont">
		 	<img class="cont-bottom" src="../assets/recommendLine.png" alt="" />		 	
		 </div>
		 <p class="cont-bottit">长按下图识别二维码关注我们<br />期待更多精彩内容</p>
		 <img class="cont-code" src="../assets/recommendCode.png" alt="" />
		 <p class="title">调理</p>
		 <div class="line"></div>
		 <ul class="cont-link">
		 	<router-link to='/'>
		 		<li>检测体质</li>
		 	</router-link>
			<router-link to='/aboutUs'>
		 		<li>关于我们</li>
		 	</router-link>
		 	<router-link to='/aboutUs'>
		 		<li>医生简介</li>
		 	</router-link>
		 </ul>
		 <div class="recommend-cont">
		 	<img class="cont-img" src="../../static/images/hanguLogo.png" alt="" />
		 	<p class="title1">佛山汉古医疗科技有限公司</p>
		 </div>
  	</div>  
  </div>
</template>
<script>
	import axios from 'axios'
	import api from '../api/api';
  export default {

  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
@import "../common/common.scss";
.recommend{
	width: 100%;
	overflow: hidden;
	background: #fff;
	.recommend-main{
		width: 92%;
		margin-left: 4%;
		margin-top: rem(20rem);
		padding-bottom: rem(8rem);
		.recommend-cont{
			margin-top: rem(10rem);
			width: 100%;
			overflow: hidden;
			.cont-bottom{
				width: 100%;
				height: rem(8rem);
				margin-top: rem(20rem);
			}
			.cont-img{
				width: 60%;
				height: rem(110rem);
				margin: rem(30rem) 0;
				margin-left: 20%;
				display: block;
			}
			.title1{
				font-size: $font16;
				text-align: center;
				margin: rem(10rem) 0 rem(20rem);
			}
		}
		.cont-bottit{
			margin-top: rem(20rem);
			color: #c59c70;
			line-height: rem(20rem);
			text-align: center;
			font-size: $font14;
		}
		.cont-code{
			width: 48%;
			height: rem(188rem);
			margin-left: 26%;
			margin-bottom: rem(15rem);
		}
		.title{
			font-size: $font18;
			text-align: center;
			margin-bottom: rem(15rem);
		}
		.line{
			width: 100%;
			height: rem(1rem);
			background: #dedede;
		}
		.cont-link{
			padding-left: 6%;
			margin: rem(20rem) 0;
			li{
				float: left;
				padding: 0 5%;
				color: #333;
				font-size: $font16;

			}
		}
	}
}
</style>
