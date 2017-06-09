<template>
  <div class="gene">
  	<div class="gene-main">
  		<div class="gene-mpic">
  		 	<img src="../assets/geneTest1.png" alt="" />
  		</div>
  		<div class="gene-mtit">
  			<img src="../assets/genetest2.png" alt="" />
  			<p class="gene-mcon">疾病是基因和后天生活饮食习惯<br>等外界因素共同作用的结果！</p>
  			<img src="../assets/genetest3.png" alt="" />
  		</div>
  		<div class="gene-mgene">
  			<img src="../assets/geneTest4.png" alt="" />
  		</div>
  		<p>
  		 	通过基因检测了解自己的疾病易感性，<br>
  		 	让你了解自己的先天特点，<br>
  		 	从而更好的管理自己的生活、饮食、以预防疾病的发生，<br>
  		 	活的更好，活的更久。<br>
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
<style scoped lang="scss">
@import "../common/common.scss";
.gene{
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
			width: rem(250rem);
			height: rem(250rem);
			margin:rem(20rem) 0 rem(20rem) 11%;
			img{
				width: 100%;
				height: 100%;
			}
		}
		.gene-mgene{
			width: 100%;
			height: rem(22rem);	
			margin-bottom: rem(10rem);		
			img{
				width: 50%;
				height: rem(22rem);
				margin-left: 25%;
			}
		}
		p{
			width: 100%;
			line-height: rem(24rem);
			text-align: center;
			font-size: $font12;
			color: #c69b70;
			margin-bottom: rem(30rem);
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