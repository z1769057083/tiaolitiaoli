<template>
  <div class="immunity">
  	<div class="gene-main">
  		<div class="gene-mpic">
  		 	<img src="../assets/immunity.jpg" alt="" />
  		</div>
  		<img class="i-mline" src="../assets/indexline.png"/>
  		<div class="gene-mtit">
  			<img src="../assets/genetest2.png" alt="" />
  			<p class="gene-mcon">免疫系统是机体执行免疫应答及<br />免疫功能的重要系统</p>
  			<img src="../assets/genetest3.png" alt="" />
  		</div>
  		<div class="gene-mgene">
  			<img src="../assets/index.png" alt="" />
  		</div>
  		<p class="content">
  		 	它可以识别和清除外来入侵的病毒，病变的肿瘤细胞、衰老细胞、死亡细胞、并保持免疫系统稳定。我们研发了先进的血液检测方法，在家就可以采集一滴血寄到实验室，通过血液检测机体免疫力，从
  		 	<span>而更有效的知道日常养生和保健。</span>
  		</p>
		<h3>免疫力检测马上上线，敬请期待！</h3>
  		 
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
.immunity{
	width: 100%;
	height: 100%;
	overflow: hidden;
	position: absolute;
	background: url(../assets/indexbg.jpg) no-repeat;
    background-size: 100% 100%;
	.gene-main{
		width: 86%;
		margin-left: 7%;
		margin-top: rem(20rem);
		.gene-mtit{
			width: 100%;	
			overflow: hidden;		
			img{
				width: rem(6rem);
				height: rem(41rem);
				float: left;
			}
			.gene-mcon{
				width: 96%;
				text-align: center;
				font-size: $font18;
				line-height: rem(26rem);
				font-weight: bold;
				margin-bottom: rem(15rem);
				float: left;
				color: $c000;
			}
		}
		.gene-mpic{
			width: 100%;
			height: rem(225rem);
			margin-bottom: rem(25rem);
			img{
				width: 100%;
				height: 100%;
			}
		}
		.i-mline{
			width: 60%;
            margin-left: 20%;
            margin-bottom: rem(20rem);
            height: 0.03rem;
		}
		.gene-mgene{
			width: 12%;
			margin-left: 40%;
			height: rem(22rem);	
			margin-bottom: rem(18rem);		
			img{
				width: 100%;
				height: rem(22rem);
				margin-left: 25%;
			}
		}
		.content{
			width: 100%;
			line-height: rem(26rem);
			text-align: center;
			font-size: $font14;
			color: #c69b70;
			margin-bottom: rem(30rem);
			text-align: justify;
			span{
				width: 100%;
				text-align: center;
				display: inline-block;
			}
		}
		h3{
			text-align: center;
			font-size: $font18;
			line-height: rem(26rem);
			font-weight: bold;
			margin-bottom: rem(15rem);			
		}
	}
}
</style>