<template>
  <div class="doctor">
 	<div class='doctor-main'>
 		<div class="doctor-mpic">
	 		<img src="http://ikehealth.cn/image/main.png"/>
		</div>
		<p class="about-team">
			佛山汉古医疗科技有限公司是汉古中医尝试将传统中医数理化并将中医与基因科学、人工智能结合；打通传统医学和现代科学的边界，为大众的健康管理探索出一条行之有效、简单便捷的方法。
		</p>
		<p class="about-team">
			团队核心成员由国内知名中医李可亲传弟子戚沁园博士、陈长青博士领衔的医生团队以及浙江大学周泓教授带领的人工智能团队、知名互联网企业精英构成。
		</p>
		<p class="about-intro">
			公司地址：佛山市南海区桂城南三路11号一层107室
		</p>
		<!--<p class="about-intro">联系我们：5162610</p>-->
 		<h3 class='about'>团队介绍</h3>
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
  			一直致力于回归、传承、创新古中医之研究。自１５岁即入新安医学流派门下苦练针灸。从医３０余载，擅于针、药并用治疗妇、儿、内、外、皮等各科疑难症、急危重症，尤擅妇科不孕症。主创汉古中医五行体质评测系统，通过饮食疗法、经络疗法、音乐及色彩疗法等开启全新的古中医养生理念。倡导汉古小儿推拿法，对三岁以下婴幼儿各种急慢性疾病可谓“手到病除”。
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
  			一直致力于回归、传承、创新古中医之研究。２０１２年联合创立汉古中医，集医、药、教、研于一体。在古中医理论指导下，全面继承李可老中医经验，汲纳民间独特疗法，采用纯中医手段，治疗内、外、妇、儿、皮、 肿瘤等各科疑难病、急危重症，疗效常常出乎意料。运用钱学森先生倡导的＂从定性到定量的综合集成研讨法＂开展中医临床创新研究。开设＂汉古李可中医学堂＂以传播古中医学思想。
  		</p>
  		<div class="doctor-mintro2">
  			<p>２０００年拜著名老中医李可先生为师，尽得其传。</p>
  			<p>２００３年获中医临床基础医学专业硕士。</p>
  			<p>２００８年获中药新药开发研究专业博士。</p>
  		</div>
  		<div class="doctor-mpic">
  		 	<img src="../assets/doctorImg2.jpg"/>
  		</div>
  		<h3>周泓 教授<br />
			</h3>
  		<div class="doctor-mintro">
  			<p>浙江大学 生仪系 教授</p>
  		</div>
  		<p class="doctor-mintro1">
  			国家发改委半导体照明“十二五规划”专家、国际半导体照明联盟专家、浙江省重点招标工程评审专家库专家、浙江省采购中心项目评审专家等。
  		</p>
  		<p class="doctor-mintro1">
  			主要研究方向为嵌入式视频监测与分析技术，尤其对于基于机器视觉与机器学习的面向领域的异常事件分析与预测有深入的研究。
  		</p>
  		<p class="doctor-mintro1">
  			近年来，承担了2项国家863计划课题、2项国家支撑课题、2项国家创新基金、1项省级重点科技项目，并承担了50多项企业合作项目。相关研究成果发表了50多篇科技论文，发表著作1本，授权了9项国家发明专利，获得了2项省部级奖励，对于科技成果的产业化转化有着很好的基础。
  		</p>
  		<div class="doctor-mintro2">
  			<p>1991年入浙江大学检测技术及仪器专业读本科</p>
  			<p>2000年浙江大学仪器科学与技术专业博士毕业，一直留校任教。</p>
  			<p>现担任浙江大学生物医学工程与仪器科学学院仪器科学与工程学系主任。</p>
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
    },
    mounted(){
        document.title='关于我们'
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
		.about{
			font-size: $font18;
			text-align: center;
			margin-top: rem(20rem);
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
			text-align: justify;
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
			text-align: justify;
			span{
				font-size: $font14;
				font-weight: bold;
			}
		}
		.doctor-mpic{
			margin: rem(25rem) 0;
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
				font-weight: bold;
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
