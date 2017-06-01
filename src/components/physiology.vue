<template>
<div class="m-selectfacon">
  	<div class="m-physiology">
  		<dl>
  			<dt>你现在处于哪个阶段</dt>
  			<dd>
  				<p :class="{'active': active1 === 0}" @click="change_active(0,'1','physiology',$event)">备孕</p>
  				<p :class="{'active': active1 === 1}" @click="change_active(1,'1','physiology',$event)">已怀孕</p>
  				<p :class="{'active': active1 === 2}" @click="change_active(2,'1','physiology',$event)">坐月子</p>
  				<p :class="{'active': active1 === 3}" @click="change_active(3,'1','physiology',$event)">哺乳期</p>
  				<p :class="{'active': active1 === 4}" @click="change_active(4,'1','physiology',$event)">更年期</p>
  			</dd>
  		</dl>
  	</div>
</div>
</template>
<script type="text/javascript">
export default {
	data(){
	  	return {
	  	  arr: [],
	      active1:'',
	      emtion:{
	      	physiology:''
	      }
	    }
	},
	methods:{
	  	change_active(answerValue,sectionId,sectionKey,event) {
		  this.$data['active'+sectionId] = answerValue
		  this.$data.emtion[sectionKey] = answerValue
		  	this.$emit('updateUserAnswer', this.$data.emtion)
	   }
	}
}
</script>
<style lang="scss">
@import "../common/common.scss";
	/*选择问题内容*/
.m-selectfacon{
	width: 90%;
	margin-left: 5%;
	.m-physiology{
		width: 100%;
		overflow: hidden;
		dl{
			width: 100%;
			height: rem(78rem);
			dt{
				width: 100%;
				line-height: rem(44rem);
			}
			dd{
				width: 100%;
				float: left;
				line-height: rem(44rem);
				p{
					display: block;
					width: 30%;
					float: left;
					height: rem(24rem);
					background: #fff;
					margin: rem(10rem) 0 rem(10rem) 3%;
					border-radius: rem(10rem);
					line-height: rem(24rem);
					text-align: center;
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