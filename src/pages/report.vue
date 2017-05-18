<template>
	<div class='report'>
      <!--聊天内容-->
      <div class='r-content'>
      	<div class='i-headbot'>
	        <div class='i-headbottext'>您的先天体质打败了34%的人</div>
	      </div>
	      <div class="r-main">
	      	<h3 class='i-maintop'>你的先天体质情况</h3>
	      	<div class="r-mainchart">
	      		<img src="../assets/reportcharts.png"/>
	      	</div>
	      	<div class='i-maincen'>
	        	<div class="r-mattribute">木平、火强、土平、金平、水平</div>
	        	<img class="i-micon" src="../assets/index.png">
        	</div>
        	<div class="r-msuggest">如果您成年后生活的城市、生活习惯等改变较大，强烈建议您再测试一下后天体质！</div>
        	<div class="r-mbotbtn">
        	  <router-link to='/shop'>
        		<div class="r-mbotleft"><img src="../assets/reportleft.png"/></div>
        	  </router-link>
        	  <router-link to='/shop'>	
        		<div class="r-mbotright"><img src="../assets/reportright.png"/></div>	
        	  </router-link>
        	</div>
	      </div>
      </div> 
   </div>
</template>
<script>
export default {
  name: 'report'
}
</script>
<style scoped lang="scss">
@import "../common/common.scss";
.r-content{
  width: 100%;
  height: 100%;
  position: absolute;
  background: url(../assets/indexbg.png) no-repeat;
  background-size: cover;
  .r-main{
	margin-top: 0.48rem;
	.r-mainchart{
		width: 92%;
		height: rem(270rem);
		margin-left: 4%;
		overflow: hidden;
		img{
			width: 100%;
		}
	}
	.i-maincen{
	  width: 56%;
	  margin-left: 22%;
	  margin-bottom: rem(14rem);
	  border-top: 1px solid #e5e5e3;
	  padding-top: rem(15rem);
	  .r-mattribute{
		  width: 100%;
		  text-align: center;
		  font-size: $font14;
		  background: url(../assets/rmattribute.png) no-repeat left;
		  padding-left: 0.27rem;
	  }
	  .i-micon{
		  width: 0.96rem;
		  height: 0.48rem;
		  margin-top: rem(18rem);
		  display: block;
		  margin-left: 40%;
	  }
	}
	.r-msuggest{
		width: 84%;
		margin-left: 8%;
		text-align: center;
		font-size: $font12;
		color: #c69b70;
		line-height: rem(21rem);
		letter-spacing: rem(0.4rem);
	}
	.r-mbotbtn{
		width: 84%;
		margin: rem(30rem) 0 0 8%;
		overflow: hidden;
		.r-mbotleft{
			width: 47.6%;
			height: rem(50rem);
			float: left;
			margin-right: 4.8%;
			img{
				width: 100%;
				height: 100%;
			}
		}
		.r-mbotright{
			width: 47.6%;
			height: rem(50rem);
			float: left;
			img{
				width: 100%;
				height: 100%;
			}
		}
	}
  }
}

</style>
