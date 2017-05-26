<template>
	<div class="m-selectfacon">
	  	<div class="m-selecttreat">
	  		<dl>
	  			<dt>清瘦</dt>
	  			<dd>
	  				<p :class="{'active': active1 === 0}" @click="change_active(0,'1','afterLean',$event)">是</p>
	  				<p :class="{'active': active1 === 1}" @click="change_active(1,'1','afterLean',$event)">不是</p>
	  				<p :class="{'active': active1 === 2}" @click="change_active(2,'1','afterLean',$event)">不确定</p>
	  			</dd>
	  		</dl>
	  		<dl>
	  			<dt>观察透彻</dt>
	  			<dd>
	  				<p :class="{'active': active2 === 0}" @click="change_active(0,'2','afterObserve',$event)">是</p>
	  				<p :class="{'active': active2 === 1}" @click="change_active(1,'2','afterObserve',$event)">不是</p>
	  				<p :class="{'active': active2 === 2}" @click="change_active(2,'2','afterObserve',$event)">不确定</p>
	  			</dd>
	  		</dl>
	  		<dl>
	  			<dt>为人庄重</dt>
	  			<dd>
	  				<p :class="{'active': active3 === 0}" @click="change_active(0,'3','afterSolemn',$event)">是</p>
	  				<p :class="{'active': active3 === 1}" @click="change_active(1,'3','afterSolemn',$event)">不是</p>
	  				<p :class="{'active': active3 === 2}" @click="change_active(2,'3','afterSolemn',$event)">不确定</p>
	  			</dd>
	  		</dl>
	  		<dl>
	  			<dt>办事爽快</dt>
	  			<dd>
	  				<p :class="{'active': active4 === 0}" @click="change_active(0,'4','afterFrank',$event)">是</p>
	  				<p :class="{'active': active4 === 1}" @click="change_active(1,'4','afterFrank',$event)">不是</p>
	  				<p :class="{'active': active4 === 2}" @click="change_active(2,'4','afterFrank',$event)">不确定</p>
	  			</dd>
	  		</dl>
	  		<dl>
	  			<dt>讲话策略多</dt>
	  			<dd>
	  				<p :class="{'active': active5 === 0}" @click="change_active(0,'5','afterSpeech',$event)">是</p>
	  				<p :class="{'active': active5 === 1}" @click="change_active(1,'5','afterSpeech',$event)">不是</p>
	  				<p :class="{'active': active5 === 2}" @click="change_active(2,'5','afterSpeech',$event)">不确定</p>
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
	      active3:'',
	      active4:'',
	      active5:'',
	      afterTreat:{
	      	afterLean:'',
	      	afterObserve:'',
	      	afterSolemn:'',
	      	afterFrank:'',
	      	afterSpeech:''
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
		.m-selecttreat{
			width: 100%;
			overflow: hidden;
			dl{
				width: 100%;
				height: rem(44rem);
				border-bottom: 1px solid #e3e3e3;
				dt{
					width: 22%;
					float: left;
					line-height: rem(44rem);
				}
				dd{
					width: 78%;
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