<template>
	<div class="m-select">
		<div class="m-selection">
		  	<div class="m-selecttit">性别</div>
		  	<div class="m-selectbirthday">父亲出生年/月/日</div>
		  	<div class="m-selectbirthday">母亲出生年/月/日</div>
		  	<!--<router-link to='/report'>-->
		  		<button class="submit">确定</button>
		   <!--</router-link>-->
		</div>
	</div>
</template>
<script type="text/javascript">
export default {
  data(){
  	return {
      active:0
    }
  },
  methods:{
  	change_active(num, event) {
      this.active = num;
    }
  },
  mounted() {
   this.change_active(1)
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
	.m-selection{
		width: 74.6%;
		margin-left: 12.2%;
		/*position: relative;*/
		.m-selecttit{
			text-align: center;
			font-size: 0.4rem;
			color: #3C3C3C;
			margin: rem(14rem) 0 rem(10rem);
		}
		.m-selectbirthday{
			width: 92.8%;
			height: 1.3rem;
			background: url(../assets/msgdate.png) no-repeat center;
			background-size: cover;
			line-height: 1.3rem;
			font-size: 0.37rem;
			padding-left: 7.2%;
			color: #bebaba;
			border-radius: 1.06rem;
			margin-top: rem(30rem);
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
/*.mask{
	width: 100%;
	height: 100%;
	background: rgba(0,0,0,0.4);
	position: absolute;
	bottom: 0;
	left: 0;
	top: 0;
	z-index: 99;
}*/
</style>