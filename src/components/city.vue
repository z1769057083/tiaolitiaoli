<template>
	<div class="m-selection1">
	  	<div class="m-selectcity">你目前生活的城市</div>
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
.m-selection1{
	width: 74.6%;
	margin-left: 12.2%;
	overflow: hidden;
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
}

</style>