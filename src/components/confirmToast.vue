<template>	
	<div class="confirm-toast">
	  	<div class="confirm-main">
	  		<p>确定要放弃此次编辑嘛?</p>
	 		<div class="btn" @click="cancel">取消</div>
	 		<div class="btn rightBtn" @click="comfirm">确定</div>
	  	</div>
	</div>
</template>
<script type="text/javascript">
export default {
  methods:{
  	cancel(){
  		this.$emit('closeConfirm')
  	},
  	comfirm(){
  		this.$emit('closeConfirm')
		this.$emit('closeDialogEvent')
  	}
  }
}
</script>
<style lang="scss">
@import "../common/common.scss";
.confirm-toast{
	width: 100%;
	height: 100%;
	position: absolute;
	background: rgba(0,0,0,.5);
	.confirm-main{
		width: 80%;
		background: #fff;
		height: rem(100rem);
		position: absolute;
		border-radius: rem(5rem);
		left: 10%;
		top: 42%;
		p{
			font-size: $font14;
			margin: rem(20rem) 0 0 rem(20rem);
		}
		.btn{
			width: 49%;
			height: rem(44rem);
			float: left;
			text-align: center;
			line-height: rem(44rem);
			border-top: 1px solid #efefef;
			margin-top: rem(21rem);
			font-size: $font14;
		}
		.rightBtn{
			border-left: 1px solid #efefef;
			color: #c69b70;
		}
	}
}
</style>