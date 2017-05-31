<template>
	<div class="m-selectfacon">
	  	<div class="m-selectfacial">
	  		<dl>
	  			<dt>待人处事</dt>
	  			<dd>
	  				<p :class="{'active': active1 === 0}" @click="change_active(0,'1','treat',$event)">是</p>
	  				<p :class="{'active': active1 === 1}" @click="change_active(1,'1','treat',$event)">不是</p>
	  				<p :class="{'active': active1 === 2}" @click="change_active(2,'1','treat',$event)">不确定</p>
	  			</dd>
	  		</dl>
	  		<dl>
	  			<dt>谋定而动</dt>
	  			<dd>
	  				<p :class="{'active': active2 === 0}" @click="change_active(0,'2','trick',$event)">是</p>
	  				<p :class="{'active': active2 === 1}" @click="change_active(1,'2','trick',$event)">不是</p>
	  				<p :class="{'active': active2 === 2}" @click="change_active(2,'2','trick',$event)">不确定</p>
	  			</dd>
	  		</dl>
	  		<dl>
	  			<dt>乐于助人</dt>
	  			<dd>
	  				<p :class="{'active': active3 === 0}" @click="change_active(0,'3','help',$event)">是</p>
	  				<p :class="{'active': active3 === 1}" @click="change_active(1,'3','help',$event)">不是</p>
	  				<p :class="{'active': active3 === 2}" @click="change_active(2,'3','help',$event)">不确定</p>
	  			</dd>
	  		</dl>
	  		<dl>
	  			<dt>洁身自好</dt>
	  			<dd>
	  				<p :class="{'active': active4 === 0}" @click="change_active(0,'4','clean',$event)">是</p>
	  				<p :class="{'active': active4 === 1}" @click="change_active(1,'4','clean',$event)">不是</p>
	  				<p :class="{'active': active4 === 2}" @click="change_active(2,'4','clean',$event)">不确定</p>
	  			</dd>
	  		</dl>
	  		<dl>
	  			<dt>随遇而安</dt>
	  			<dd>
	  				<p :class="{'active': active5 === 0}" @click="change_active(0,'5','liberty',$event)">是</p>
	  				<p :class="{'active': active5 === 1}" @click="change_active(1,'5','liberty',$event)">不是</p>
	  				<p :class="{'active': active5 === 2}" @click="change_active(2,'5','liberty',$event)">不确定</p>
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
	      treat:{
	      	treat:'',
	      	trick:'',
	      	help:'',
	      	clean:'',
	      	liberty:''
	      }
	    }
	},
	methods:{
	  	change_active(answerValue,sectionId,sectionKey,event) {
		  this.$data['active'+sectionId] = answerValue
		  this.$data.treat[sectionKey]=answerValue
		  this.$emit('updateUserAnswer', this.$data.treat)
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
	  		