<template>
	<div class="m-selection">
	  	<div class="m-selecttit">父母生日</div>
	  	<input type="date" class="m-selectbirthday" name='fatherBrithdy'  v-model='fatherBrithdy' @change='change_date(fatherBrithdy)'/>
	  	<input type="date" class="m-selectbirthday" name='brithday'  v-model='brithday' @change='change_date1(brithday)'/>
	</div>
</template>
<script type="text/javascript">
export default {
  data(){
  	return {
      active:0,
      brithday:'2014-01-01',
      fatherBrithdy:'2014-01-01',
      Obj:{
      	fatherBrithdy:'',
      	motherBrithdy: ''
      }
    }
  },
  methods:{
  	change_date(fatherBrithdy){
   	this.Obj.fatherBrithdy = fatherBrithdy;
   	if (this.Obj.motherBrithdy !== '') {
   		this.$emit('updateUserAnswer', this.Obj);
   	}
   },
  	change_date1(brithday){
   	this.Obj.motherBrithdy = brithday;
   	if (this.Obj.fatherBrithdy !== '') {
   		this.$emit('updateUserAnswer', this.Obj);
   	}
   }
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