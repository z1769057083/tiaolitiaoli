<template>
	<div class="m-selectfacon">
	  	<div class="m-selectfigure">
	  		<dl>
	  			<dt>四肢</dt>
	  			<dd><span :class="{'active': active1 === 0}" @click="change_active(0,'1',$event)">手足灵活细长多青筋</span></dd>	
	  			<dd><span :class="{'active': active1 === 1}" @click="change_active(1,'1',$event)">手足小、步伐稳重、走路晃肩、精神矍铄</span></dd>	
	  			<dd><span :class="{'active': active1 === 2}" @click="change_active(2,'1',$event)">手足小而丰腴，下肢多健壮，步履稳健</span></dd>
	  			<dd><span :class="{'active': active1 === 3}" @click="change_active(3,'1',$event)">手足小，手背薄。足跟结实有力，行动轻快</span></dd>
	  			<dd><span :class="{'active': active1 === 4}" @click="change_active(4,'1',$event)">手背厚，手足不安静，行走善摇摆</span></dd>
	  		</dl>
	  	</div>
	</div>
</template>
<script type="text/javascript">
export default {
   data(){
	  	return {
	      active1:''
	    }
	},
	methods:{
	  	change_active(num,sectionId, event) {
		  this.$data['active'+sectionId] = num
	   }
	},
	mounted() {
	   this.change_active()
	}
}
</script>
<style lang="scss">
@import "../common/common.scss";
	/*选择问题内容*/
	.m-selectfacon{
		width: 90%;
		margin-left: 5%;
		.m-selectfigure{
			width: 100%;
			overflow: hidden;
			dl{
				width: 100%;
				position: relative;
				dt{
					position: absolute;
 					top: rem(16rem);
 					left: 0;
 					font-size: $font14;
				}
				dd{
					width: 100%;
					line-height: rem(40rem);
					border-bottom: 1px solid #e3e3e3;
					span{
						display: inline-block;
						height: rem(22rem);
						background: #fff;
						margin-top: rem(10rem);
						border-radius: rem(10rem);
						text-align: left;
						margin-left: 16%;
						padding: rem(2rem) 2%;
						line-height: rem(22rem);	
					}
					.active{
						color: #fff;
						background: #c69b70;
					}
				}
			}
		}
	}
</style>