<template>
  	<div class="recommend-main">
		<div class="recommend-cont">
		 	<img class="cont-mainImg" src="../../static/images/hanGuLogo.jpg"/>		 	
		 	<p class='cont-intro'>佛山汉古医疗科技有限公司致力于传统中医数理化，将中医与基因科学、人工智能相结合，努力打通传统医学和现代科学的边界，为大众实现有效便捷的全息健康管理。</p>
		 	<p class='cont-text1'>团队核心成员由国内知名中医李可亲传弟子戚沁园博士、陈长青博士以及知名互联网企业精英组成。</p>		 	
		</div>
		 <footerCode></footerCode>
  	 </div>  
</template>
<script>
	import axios from 'axios'
	import api from '../api/api'
	import footerCode from '@/components/footerCode'
  export default {
  	components: {
      footerCode
    },
	mounted() {
            document.title = "公司介绍"
            document.documentElement.scrollTop = 0
            document.body.scrollTop = 0
        }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
@import "../common/common.scss";	
	.recommend-main{
		width: 100%;
		overflow: hidden;
		padding-bottom: rem(8rem);
		.cont-teamImg{
			height: rem(200rem);
			margin-top: rem(30rem);
		}
		.cont-teamImgTop{
			margin-top:  rem(10rem);
		}
		.recommend-cont{
			width: 92%;
			margin-left: 4%;
			/**/
			padding-top: rem(10rem);
			overflow: hidden;
			.cont-tit{
				width: 68%;
				height: rem(42rem);
				margin-left: 16%;
				margin-bottom: rem(20rem);
				margin-top: rem(30rem);
			}
			.cont-title{
				font-size: $font14;
				text-align: center;			
				.cont-titleLine{
					width: rem(2rem);
					height: rem(11rem);
					vertical-align: middle;
				}
				span{
					padding: 0 rem(5rem);
					font-weight: bold;
					color: #000;
					vertical-align: middle;
				}
			}
			.cont-mainImg{
				width: 100%;
				height: rem(126rem);
				margin: rem(20rem) 0;
			}
			.cont-teamName{
				height: rem(48rem);
				margin-left: 28%;
				margin-top: rem(20rem);
				margin-bottom: rem(10rem);
			}
			.cont-intro{
				margin-bottom: rem(20rem);
				color: #000;
				line-height: rem(24rem);
				text-align: justify;
				font-size: $font14;
			}
			.cont-intro1{
				text-align: center;
				color: #C69B70;
				line-height: rem(27rem);
				font-size: $font14;
			}
			.cont-text{
				color: #666;
				line-height: rem(27rem);
				text-align: justify;
				font-size: $font14;
			}
			.cont-text1{
				color: #000;
				line-height: rem(24rem);
				text-align: justify;
				font-size: $font14;
			}
			.cont-top{
				margin-top: rem(20rem);
				margin-bottom: rem(20rem);
			}
			.cont-bottom{
				width: 100%;
				height: rem(8rem);
				margin-top: rem(20rem);
			}
		}
		.recommend-cont2{
			.cont-end{
				width: 16%;
				margin: rem(20rem) 42% 0;
				height: rem(12rem);
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
	}
</style>
