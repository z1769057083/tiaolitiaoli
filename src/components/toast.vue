<template>
	<div class="toast">
	  	<div class="toast-main">
	  		<img src="../assets/toastImg.png"/>
	  		<p>已成功添加到购物车</p>
	  	</div>
	</div>
</template>
<script type="text/javascript">
export default {

}
</script>
<style lang="scss" rel="stylesheet/scss">
@import "../common/common.scss";
.toast{
	width: 100%;
	height: 100%;
	position: absolute;
	.toast-main{
		width: 59%;
		height: rem(88rem);
		background: rgba(0,0,0,.5);
		position: absolute;
		border-radius: rem(5rem);
		color: #fff;
		left: 20.5%;
		top: 30%;
		img{
			width: rem(26rem);
			height: rem(18rem);
			margin: rem(20rem) 0 rem(16rem) 43%;
		}
		p{
			text-align: center;
		}
	}
}
</style>