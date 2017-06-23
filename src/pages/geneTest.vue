<template>
  <div class="immunity">
  	<div class="gene-main">
  		<div class="gene-mpic">
  		 	<img src="../assets/genTest1.png" alt="" />
  		</div>
  		<img class="i-mline" src="../assets/indexline.png"/>
  		<div class="gene-mtit">
  			<img src="../assets/genetest2.png" alt="" />
  			<p class="gene-mcon">疾病是基因和后天生活饮食习惯<br/>等外界因素共同作用的结果！</p>
  			<img src="../assets/genetest3.png" alt="" />
  		</div>
  		<div class="gene-mgene">
  			<img src="../assets/index.png" alt="" />
  		</div>
  		<p class="content">
  		 	通过基因检测了解自己的疾病易感性，<br />
  		 	让你了解自己的先天特点，<br />从而更好的管理自己的生活、饮食以及防御疾病的发生，活的更好，活的更久。
  		</p>
		<h3>基因检测马上上线，敬请期待！</h3>
  		 
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
			text-indent: rem(14rem);
			/*text-align: justify;*/
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