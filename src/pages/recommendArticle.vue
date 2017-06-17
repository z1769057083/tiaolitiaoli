<template>
  <div class="recommend">
  	<div class="recommend-main">
  		 <h3>养生不精准，反而害死人？</h3>
  		 <!--<p class="date">
			2017-06-18
			<span>调理调理</span>					
		 </p>-->
		 <p class="main-content main-cont">
		 	汉古中医在接诊病人的过程中，
		 	发现越来越多不当养生导致的疾病。</p>
		 <p class="main-content main-cont">
		 	如水果当主食、单一饮食减肥、健身馆疾病、
		 	不当辟谷、乱服阿胶、固元膏、三七粉以及参茸虫草等补品。</p>
		 <div class="recommend-cont">
		 	<img class="cont-tit" src="../assets/recommendtit1.png" alt="" />
		 	<h3 class="cont-title">固元膏、阿胶膏小心吃出病</h3>
		 	<img class="cont-mainImg" src="../assets/recommendimg1.png"/>
		 	<p class="cont-intro">
		 		阿胶固然有滋阴养血、补益气血、调经安胎、
		 		扩张血管等功效；</p>
		 	<p class='cont-text'>但别忘了，它同时也有许多禁忌</p>
		 	<p class='cont-text'>如脾胃虚弱、腹胀便溏、咳嗽痰多者慎用。</p>
		 	<p class='cont-text'>溃疡出血者须止血后半个月才能服用，流产及产后需恶露排净才能服用，经期不可服用等等</p>
		 	<p class='cont-text cont-top'>
		 		以阿胶为主要原料制成的阿胶膏、固元膏虽然有补血的作用，
		 		但如果不了解中医原理，盲目把药品当零食吃，一定会出问题</p>
		 	<p class='cont-text1'>中医认为“气为血之帅，血为气之母”</p>
		 	<p class='cont-text1'>比了解气血原理，盲目补血就是无稽之谈，搞不好还会吃出病来</p>
		 	<img class="cont-bottom" src="../assets/recommendLine.png" alt="" />
		 </div>
		 <div class="recommend-cont  recommend-cont2">
		 	<img class="cont-tit" src="../assets/recommendtit2.png" alt="" />
		 	<h3 class="cont-title">杂粮也可能危害健康</h3>
		 	<img class="cont-mainImg" src="../assets/recommendimg2.png"/>
		 	<p class="cont-intro">
		 		儿童处于生长发育期，需要补脾、养胃，易消化的食物，
		 		而薏米、小米之类的粗粮，所谓健脾是驱邪而健脾。</p>
		 	<p class='cont-text'>健康小儿清灵之体，应以补益为主，何来病邪？杂粮吃多了反而营养不足。</p>
		 	<p class='cont-text'>
		 		成人有肥人瘦人之分，肥胖痰湿营养过剩之人，
		 		以粗粮代替是为了减少营养摄入，减轻脾脏负担，
		 		达到健脾的作用；而瘦弱气血不足之人，是需要补脾助运化，
		 		化生精微之物以助养身体，吃杂粮反而可能危害健康。</p>
		 	<p class='cont-text'>同样的枸杞，高丽参，玛卡，冬虫夏草、三七等这些保健品都不可乱吃。</p>
		 	<p class='cont-text'>养生因人因时因地而异，切勿滥用和乱用</p>
		 	<p class='cont-text cont-top'>
		 		以阿胶为主要原料制成的阿胶膏、固元膏虽然有补血的作用，
		 		但如果不了解中医原理，盲目把药品当零食吃，一定会出问题</p>
		 	<p class='cont-text1'>
		 		《调理调理》根据中山医科大学、浙江大学多位教授
		 		根据中医理论结合人工智能帮你了解自己的体质，
		 		并结合所生活的地区和季节为你提供养生的精准建议。
				让大家的身体和心理调整到最好的状态！
			</p>
		 	<img src="../assets/recommendEnd.png" class="cont-end"/>
		 	<img class="cont-bottom" src="../assets/recommendLine.png" alt="" />		 	
		 </div>
		 <p class="cont-bottit">长按下图识别二维码关注我们<br />期待更多精彩内容</p>
		 <img class="cont-code" src="../assets/recommendCode.png" alt="" />
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
	.recommend-main{
		width: 92%;
		margin-left: 4%;
		margin-top: rem(20rem);
		padding-bottom: rem(8rem);
		h3{
			text-align: left;
			font-size: $font18;
			font-weight: bold;
			margin-bottom: rem(20rem);			
		}
		.date{
			font-size: $font12;
			color: #868686;
			padding-bottom: rem(20rem);
		}
		.main-cont{
			line-height: rem(27rem);
			text-align: justify;
			font-size: $font14;
			color: #666;
		}
		.main-content{
			padding-bottom: rem(20rem);
		}
		.recommend-cont{
			margin-top: rem(10rem);
			width: 100%;
			overflow: hidden;
			.cont-tit{
				width: 68%;
				height: rem(42rem);
				margin-left: 16%;
				margin-bottom: rem(30rem);
			}
			.cont-title{
				font-size: $font14;
				text-align: center;
				padding-bottom: rem(20rem);
			}
			.cont-mainImg{
				width: 100%;
				height: rem(228rem);
				margin-bottom: rem(20rem);
			}
			.cont-intro{
				margin-bottom: rem(20rem);
				color: #c59c70;
				line-height: rem(27rem);
				text-align: justify;
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
				margin-bottom: rem(20rem);
			}
			.cont-bottom{
				width: 100%;
				height: rem(8rem);
			}
		}
		.recommend-cont2{
			margin-top: rem(30rem);
			.cont-end{
				width: 16%;
				margin: rem(20rem) 42%;
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
}
</style>
