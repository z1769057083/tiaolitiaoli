<template>
	<div class='report'>
      <!--聊天内容-->
      <div class='r-content'>
      	<div class='i-headbot'>
	        <div class='i-headbottext'>您的先天体质打败了34%的人</div>
	      </div>
	      <div class="r-main">
	      	<h3 class='i-maintop'>你的先天体质</h3>
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
<style scoped>
.r-content{
	width: 100%;
  background: url(../assets/indexbg.png) no-repeat;
  background-size: cover;;
}
.r-main{
  margin-top: 0.48rem;

}
.r-mainchart{
	width: 92%;
	margin-left: 4%;
	overflow: hidden;
}
.r-mainchart img{
	width: 100%;
}
.i-maincen{
  width: 56%;
  margin-left: 22%;
  margin-bottom: 0.48rem;
  border-top: 1px solid #e5e5e3;
  padding-top: 0.4rem;
}
.r-mattribute{
  width: 100%;
  text-align: center;
  font-size: 0.37rem;
  background: url(../assets/rmattribute.png) no-repeat left;
  padding-left: 0.27rem;
}
.i-micon{
  width: 0.96rem;
  height: 0.48rem;
  margin-top: 0.4rem;
  display: block;
  margin-left: 40%;
}
.r-msuggest{
	width: 84%;
	margin-left: 8%;
	text-align: center;
	font-size: 0.32rem;
	color: #c69b70;
	line-height: 0.53rem;
	letter-spacing: 0.01rem;
}
.r-mbotbtn{
	width: 84%;
	margin: 0.8rem 0 0 8%;
}
.r-mbotleft{
	width: 4rem;
	height: 1.33rem;
	float: left;
	margin-right: 0.4rem;
}
.r-mbotleft{
	width: 4rem;
	height: 1.33rem;
	float: left;
}
.r-mbotleft img{
	width: 4rem;
	height: 1.33rem;
}
.r-mbotright img{
	width: 4rem;
	height: 1.33rem;
}
</style>
