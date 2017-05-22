<template>
<div class="m-select">
	<div class="m-selection">
	  	<div class="m-selectcity">你目前生活的城市</div>
	  	<router-link to='/report'>
	  		<button class="submit">确定</button>
	   </router-link>
	</div>
</div>
</template>
<script type="text/javascript">
export default {
  data(){
  	return {
    }
  }
}
</script>
<style lang="scss">
@import "../common/common.scss";
	/*选择问题内容*/
.m-select{
	width: 100%;
	background: #f8f8f8;
	height: 52%;
	position: relative;
	.m-selection{
		width: 74.6%;
		margin-left: 12.2%;
		.m-selectcity{
			width: 92.8%;
			height: 1.3rem;
			background: url(../assets/msgdate.png) no-repeat center;
			background-size: cover;
			line-height: 1.3rem;
			font-size: 0.37rem;
			padding-left: 7.2%;
			color: #bebaba;
			border-radius: 1.06rem;
			margin-top: rem(20rem);
		}
		.submit{
			width: 30%;
			height: rem(40rem);
			background: #c69b70;
			border: 0;
			color: #fff;
			border-radius: 0.13rem;
			font-size: 0.37rem;
			line-height: rem(40rem);
			position: absolute;
			bottom: rem(60rem);
			left: 35%;
		}
	}
}
</style>