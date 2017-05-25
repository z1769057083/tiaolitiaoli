<template>
<div class="m-select">
	<div class="m-selection">
	  	<div class="m-selecttit">性别</div>
	  	<div class="m-selectcon">
	  		<div class="m-selectboy" :class="{'active': active == 0}" @click="change_active(0,$event)"><img src="../assets/msgman.png"/>男</div>
	  		<div class="m-selectgirl" :class="{'active': active == 1}" @click="change_active(1,$event)"><img src="../assets/msgwoman.png"/>我是女生</div>	
	  	</div>
	  	<input type="date" class="m-selectdate" value="出生年/月/日" />
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
	position: relative;
	.m-selection{
		width: 74.6%;
		margin-left: 12.2%;
		.m-selecttit{
			text-align: center;
			font-size: 0.4rem;
			color: #3C3C3C;
			margin: rem(14rem) 0 rem(10rem);
		}
		.m-selectcon{
			width: 100%;
			position: relative;
			height: rem(70rem);
			background: url(../assets/msggrey.png) no-repeat center;
			background-size: cover;
			border-radius: rem(45rem);
			margin-bottom: rem(20rem);
			.m-selectboy{
				width: rem(155rem);
				height: rem(70rem);
				border-radius: rem(45rem);
				text-align: center;
				font-size: rem(14rem);
				color: #b0bfbc;
				overflow: hidden;
				position: absolute;
				left: 0;
				top: 0;
				img{
					width: rem(28rem);
					height: rem(28rem);
					display: block;
					margin: rem(12rem) 0 rem(6rem) rem(63.5rem);
				}
			}
			.m-selectgirl{
				width: rem(155rem);
				height: rem(70rem);
				border-radius: rem(45rem);
				text-align: center;
				font-size: rem(14rem);
				color: #b0bfbc;
				position: absolute;
				right: 0;
				top: 0;
				overflow: hidden;
				img{
					width: rem(36rem);
					height: rem(28rem);
					display: block;
					margin: rem(12rem) 0 rem(6rem) rem(59rem);
					
				}
			}
			.active{
				background: #fff;
			}
		}
		.m-selectdate{
			width: 85.6%;
			height: 1.3rem;
			background: url(../assets/msgdate.png) no-repeat center;
			background-size: cover;
			line-height: 1.3rem;
			font-size: 0.37rem;
			padding: 0 7.2%;
			color: #bebaba;
			border-radius: 1.06rem;
			border:0;
		}
	}
}
</style>