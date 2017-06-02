<template>
	
</template>
<script type="text/javascript">
export default {
  data(){
  	return {
  		num:1
    }
  },
  methods:{
  	reduce(){
  		if(this.num <= 1){
  			this.num = 1
  		}else{
  			this.num--
  		}
  	},
  	add(){
  		if(this.num >= 10){
  			this.num = 10
  		}else{
  			this.num++
  		}
  	},
  	close(){
  		this.$emit('closePurchase')
  	}
  }
}
</script>
<style lang="scss">
@import "../common/common.scss";
	/*选择问题内容*/
.maskmain{
	width: 100%;
	height: 100%;
	background: rgba(0,0,0,0.6);
	position: absolute;
	bottom: 0;
	left: 0;
	top: 0;
	z-index: 99;
	
}
</style>