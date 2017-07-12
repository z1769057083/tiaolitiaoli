<template>
  <div class="recommend">
  	<div class="recommend-main">
		 <div class="recommend-cont" v-if="hasQrCodeImage==true">
		 	<img class="cont-bottom" src="../assets/recommendLine.png" alt="" />		 	
		 </div>
		 <p class="cont-bottit" v-if="hasQrCodeImage==true">长按下图识别二维码关注我们<br />期待更多精彩内容</p>
		 <img class="cont-code" src="../assets/recommendCode.png" alt=""  v-if="hasQrCodeImage==true"/>
		 <p class="title" v-if="hasQrCodeImage==true">调理调理</p>
		 <div class="line"></div>
		 <ul class="cont-link">
		 	<router-link to='/'>
		 		<li>体质检测 </li>
		 	</router-link>
			<router-link to='/aboutUs'>
		 		<li>公司介绍</li>
		 	</router-link>
		 	<router-link to='/doctorIntroduce'>
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
      props:['hasQrCodeImage'],

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
				width: 10%;
				height: rem(25rem);
				margin: rem(30rem) 0 rem(10rem);
				margin-left: 45%;
				display: block;
			}
			.title1{
				font-size: $font12;
				text-align: center;
				margin: rem(5rem) 0 rem(10rem);
				color: #999;
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
			font-size: $font14;
			text-align: center;
			margin-bottom: rem(15rem);
		}
		.line{
			width: 100%;
			height: rem(1rem);
			background: #dedede;
		}
		.cont-link{
			padding-left: 16%;
			margin: rem(20rem) 0;
			li{
				float: left;
				padding: 0 5%;
				color: #333;
				font-size: $font12;

			}
		}
	}
}
</style>
