<template>
	<div class="m-selection">
	  	<div class="m-selecttit">父母生日</div>
	  	<input type="date" class="m-selectbirthday"  v-model='today'/>
	  	<input type="date" class="m-selectbirthday"  v-model='today'/>
	</div>
</template>
<script type="text/javascript">
export default {
  data(){
  	return {
      active:0,
      today: '2014-01-01'
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
	.m-selection{
		width: 74.6%;
		margin-left: 12.2%;
		.m-selecttit{
			text-align: center;
			font-size: 0.4rem;
			color: #3C3C3C;
			padding: rem(14rem) 0 rem(14rem);
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
			margin-bottom: rem(30rem);
			border: 0;
		}
	}
</style>