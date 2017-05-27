<template>
	<div class="m-selectfacon">
	  	<div class="m-selectfacial">
	  		<dl>
	  			<dt>洁身自好</dt>
	  			<dd>
	  				<p :class="{'active': active1 === 0}" @click="change_active(0,'1','afterClean',$event)">是</p>
	  				<p :class="{'active': active1 === 1}" @click="change_active(1,'1','afterClean',$event)">不是</p>
	  				<p :class="{'active': active1 === 2}" @click="change_active(2,'1','afterClean',$event)">不确定</p>
	  			</dd>
	  		</dl>
	  		<dl>
	  			<dt>随遇而安</dt>
	  			<dd>
	  				<p :class="{'active': active2 === 0}" @click="change_active(0,'2','afterReconcile',$event)">是</p>
	  				<p :class="{'active': active2 === 1}" @click="change_active(1,'2','afterReconcile',$event)">不是</p>
	  				<p :class="{'active': active2 === 2}" @click="change_active(2,'2','afterReconcile',$event)">不确定</p>
	  			</dd>
	  		</dl>
	  	</div>
	</div>
</template>
<script type="text/javascript">
export default {
  	data(){
	  	return {
	      active1:'',
	      active2:'',
	      afterTreat:{
	      	afterClean:'',
	      	afterReconcile:''
	      }
	    }
	},
	methods:{
	  	change_active(answerValue,sectionId,sectionKey,event) {
		  this.$data['active'+sectionId] = answerValue
		  this.$data.afterTreat[sectionKey]=answerValue
		  this.$emit('genderChange', this.$data.afterTreat)
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
		.m-selectfacial{
			width: 100%;
			overflow: hidden;
			dl{
				width: 100%;
				height: rem(44rem);
				border-bottom: 1px solid #e3e3e3;
				dt{
					width: 19%;
					float: left;
					line-height: rem(44rem);
				}
				dd{
					width: 81%;
					float: left;
					line-height: rem(44rem);
					p{
						display: block;
						width: 30%;
						float: left;
						height: rem(24rem);
						background: #fff;
						margin-top: rem(10rem);
						border-radius: rem(10rem);
						line-height: rem(24rem);
						text-align: center;
						margin-left: 3%;
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