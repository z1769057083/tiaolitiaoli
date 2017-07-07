<template>
  	<div class="recommend-main">
		<div class="recommend-cont  recommend-cont2">
		 	<!--<img class="cont-tit" src="../assets/recommendtit2.png" alt="" />-->
		 	<!--<h3 class="cont-title">
		 		<img class="cont-titleLine" src="../assets/aboutUsLine.png" alt="" />
		 		<span>团队介绍</span>
		 		<img class="cont-titleLine" src="../assets/aboutUsLine.png" alt="" />
		 	</h3>-->
		</div> 	
		<img class="cont-teamImg" src="../assets/aboutQin.jpg"/>
		<div class="recommend-cont  recommend-cont2">
		 	<img class="cont-teamName" src="../assets/aboutQinName.png"/>
		 	<p class="cont-intro1">汉古中医创始人</p>
		 	<p class="cont-intro1">李可老中医弟子</p>
		 	<p class="cont-intro1">广东汉古中医药创新研究院 首席研究员</p>
		 	<p class="cont-intro1">广州中医药大学中医药数理工程研究院 博士后</p>
		 	<p class='cont-text cont-top'>一直致力于回归、传承、创新古中医之研究。自１５岁即入新安医学流派门下苦练针灸。从医３０余载，擅于针、药并用治疗妇、儿、内、外、皮等各科疑难症、急危重症，尤擅妇科不孕症。主创汉古中医五行体质评测系统，通过饮食疗法、经络疗法、音乐及色彩疗法等开启全新的古中医养生理念。倡导汉古小儿推拿法，对三岁以下婴幼儿各种急慢性疾病可谓“手到病除”。</p>	
		</div> 	
		<img class="cont-teamImg cont-teamImgTop" src="../assets/aboutChen.jpg"/>
		<div class="recommend-cont  recommend-cont2">
		 	<img class="cont-teamName" src="../assets/aboutChenImg.png"/>
		 	<p class="cont-intro1">汉古中医创始人</p>
		 	<p class="cont-intro1">李可老中医弟子</p>
		 	<p class="cont-intro1">广东汉古中医药创新研究院 院长</p>
		 	<p class='cont-text cont-top'>一直致力于回归、传承、创新古中医之研究。２０１２年联合创立汉古中医，集医、药、教、研于一体。在古中医理论指导下，全面继承李可老中医经验，汲纳民间独特疗法，采用纯中医手段，治疗内、外、妇、儿、皮、 肿瘤等各科疑难病、急危重症，疗效常常出乎意料。运用钱学森先生倡导的＂从定性到定量的综合集成研讨法＂开展中医临床创新研究。开设＂汉古李可中医学堂＂以传播古中医学思想。</p>
		 	<p class='cont-text1'>２０００年拜著名老中医李可先生为师，尽得其传。</p>
		</div> 	
		<!--<img class="cont-teamImg" src="../assets/aboutZhou.jpg"/>
		<div class="recommend-cont  recommend-cont2">
		 	<img class="cont-teamName" src="../assets/aboutZhouName.png"/>
		 	<p class="cont-intro">国家发改委半导体照明“十二五规划”专家、国际半导体照明联盟专家、浙江省重点招标工程评审专家库专家、浙江省采购中心项目评审专家等。</p>
		 	<p class='cont-text cont-top'>主要研究方向为嵌入式视频监测与分析技术，尤其对于基于机器视觉与机器学习的面向领域的异常事件分析与预测有深入的研究。</p>
		 	<img src="../assets/recommendEnd.png" class="cont-end"/>		 		 	
		</div>-->
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
            document.title = "医生简介"
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
				color: #c59c70;
				line-height: rem(27rem);
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
				line-height: rem(27rem);
				text-align: justify;
				font-size: $font14;
				font-weight: bold;
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
