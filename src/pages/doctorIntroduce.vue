<template>
  <div class="doctor">
 	<div class='doctor-main'>
 		<h3 class='about'>关于我们</h3>
 		<p class='about-time'>2017-6-12<span>汉沽科技</span></p>
 		<!--<div class="doctor-mpic">
	 		<img src="../assets/doctorImg.png"/>
		</div>-->
		<p class="about-intro">
			佛山汉古医疗科技有限公司成立于2017年4月，
			我们立足于珠三角地地区，以中药电商平台为依托，
			结合体质辨析、O2O基因检测、线上线下咨询和服
			务为一体的公司。
		</p>
		<p class="about-team">
			团队核心成员由国内知名中医李可亲传弟子戚沁园博士
			、陈长青博士，浙大周泓博士，互联网精英为世界各知
			名企业高管组成，团队具有极强战斗力。
		</p>
		<p class="about-intro">
			公司地址：佛山市南海区桂城南三路11号广东
			珠江开关有限公司（办公楼）一层107室
		</p>
		<p class="about-intro">联系我们：5162610</p>
 		
  		<div class="doctor-mpic">
  		 	<img src="../assets/doctorImg.jpg"/>
  		</div>
  		<h3>戚沁园 博士</h3>
  		<div class="doctor-mintro">
  			<p>汉古中医创始人</p>
  			<p>李可老中医弟子</p>
  			<p>广东汉古中医药创新研究院 首席研究员</p>
  			<p>广州中医药大学中医药数理工程研究院 博士后</p>
  		</div>
  		<p class="doctor-mintro1">
  			一直致力于回归、传承、创新古中医之研究。
  			自１５岁即入新安医学流派门下苦练针灸。
  			从医３０余载，擅于针、药并用治疗妇、儿
  			、内、外、皮等各科疑难症、急危重症，尤
  			擅妇科不孕症。主创汉古中医五行体质评测
  			系统，通过饮食疗法、经络疗法、音乐及色
  			彩疗法等开启全新的古中医养生理念。倡导
  			汉古小儿推拿法，对三岁以下婴幼儿各种急
  			慢性疾病可谓“手到病除”。
  		</p>
  		<div class="doctor-mintro2">
  			<p>２００１年获中医妇科学不孕症专业硕士。</p>
  			<p>２００８年获中医经典临床专业博士。</p>
  			<p>２０１０年拜著名老中医李可先生为师，得其亲传。</p>
  			<p>２０１２年联合创立汉古中医。</p>
  			<p>２０１３年完成广州中医药大学博士后研究。</p>
  		</div>
  		
  		<div class="doctor-mpic">
  		 	<img src="../assets/doctorImg1.jpg"/>
  		</div>
  		<h3>陈长青 博士</h3>
  		<div class="doctor-mintro">
  			<p>汉古中医创始人</p>
  			<p>李可老中医弟子</p>
  			<p>广东汉古中医药创新研究院 院长</p>
  		</div>
  		<p class="doctor-mintro1">
  			一直致力于回归、传承、创新古中医之研究。
  			２０１２年联合创立汉古中医，集医、药、教、
  			研于一体。在古中医理论指导下，全面继承李
  			可老中医经验，汲纳民间独特疗法，采用纯中
  			医手段，治疗内、外、妇、儿、皮、 肿瘤等各
  			科疑难病、急危重症，疗效常常出乎意料。运
  			用钱学森先生倡导的＂从定性到定量的综合集
  			成研讨法＂开展中医临床创新研究。开设＂汉
  			古李可中医学堂＂以传播古中医学思想。
  		</p>
  		<div class="doctor-mintro2">
  			<p>２０００年拜著名老中医李可先生为师，尽得其传。</p>
  			<p>２００３年获中医临床基础医学专业硕士。</p>
  			<p>２００８年获中药新药开发研究专业博士。</p>
  		</div>
 	</div>
  </div>
</template>
<script>
	import axios from 'axios'
	import api from '../api/api';
  export default {
    data(){
    	return{
    		
    	}
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
@import "../common/common.scss";
.doctor{
	width: 100%;
	overflow: hidden;
	.doctor-main{
		width: 92%;
		margin-left: 4%;
		margin-top: rem(20rem);
		.about{
			font-size: $font18;
			text-align: center;
		}
		.about-time{
			font-size: $font14;
			span{
				margin-left: rem(10rem);
			}
		}
		.about-intro{
			line-height: rem(26rem);
			font-size: $font14;
			color: $c3c3c;
			text-align: justify;
		}
		.about-team{
			line-height: rem(26rem);
			font-size: $font14;
			color: $c3c3c;
			text-indent: rem(28rem);
		}
		h3{
			text-align: center;
			font-size: $font16;
			margin-bottom: rem(15rem);			
		}
		.doctor-mintro1{
			line-height: rem(26rem);
			font-size: $font14;
			color: $c3c3c;
			text-indent: rem(26rem);
			span{
				font-size: $font14;
				font-weight: bold;
			}
		}
		.doctor-mpic{
			margin: rem(15rem) 0;
			width: 56%;
			margin-left: 22%;
			overflow: hidden;
			img{
				width: 100%;
				height: 100%;
			}
		}
		.doctor-mintro{
			width: 92%;
			margin: rem(15rem) 4%;
			overflow: hidden;
			p{
				line-height: rem(26rem);
				font-size: $font14;
				color: $c3c3c;
				text-align: center;
			}
		}
		.doctor-mintro2{
			margin-top: 0;
			width: 94%;
			margin: rem(15rem) 3%;
			overflow: hidden;
			p{
				line-height: rem(26rem);
				font-size: $font14;
				color: $c3c3c;
			}
		}
	}
}
</style>
