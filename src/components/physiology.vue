<template>
<div class="m-selectfacon">
  	<div class="m-physiology">
  		<dl>
  			<dt>你现在处于哪个阶段</dt>
  			<dd>
  				<p :class="{'active': active1 === 0}" @click="change_active(0,'1','physiology',$event)">未婚</p>
  				<p :class="{'active': active1 === 1}" @click="change_active(1,'1','physiology',$event)">未孕</p>
  				<p :class="{'active': active1 === 2}" @click="change_active(2,'1','physiology',$event)">备孕</p>
  				<p :class="{'active': active1 === 3}" @click="change_active(3,'1','physiology',$event)">已怀孕</p>
  				<p :class="{'active': active1 === 4}" @click="change_active(4,'1','physiology',$event)">坐月子</p>
  				<p :class="{'active': active1 === 5}" @click="change_active(5,'1','physiology',$event)">哺乳期</p>
  				<p :class="{'active': active1 === 6}" @click="change_active(6,'1','physiology',$event)">更年期</p>
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
<style lang="scss" rel="stylesheet/scss">
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
			font-size: $font13;
			dt{
				width: 100%;
				line-height: rem(44rem);
			}
			dd{
				width: 100%;
				float: left;
				p{
					display: block;
					width: 28%;
					float: left;
					height: rem(28rem);
					background: #fff;
					margin: rem(10rem) 0 rem(10rem) 5%;
					border-radius: rem(10rem);
					line-height: rem(28rem);
					text-align: center;
				}
				.active{
					color: #fff;
					background: #dec19d;
				}
			}
		}
	}	
}
</style>