<template>
	<div class="m-selectfacon">
	  	<div class="m-selectfacial">
	  		<dl>
	  			<dt>待人处事</dt>
	  			<dd>
	  				<p :class="{'active': section1.treat === 0}" @click="change_active(0,'1','treat',$event)">是</p>
	  				<p :class="{'active': section1.treat === 1}" @click="change_active(1,'1','treat',$event)">不是</p>
	  				<p :class="{'active': section1.treat === 2}" @click="change_active(2,'1','treat',$event)">不确定</p>
	  			</dd>
	  		</dl>
	  		<dl>
	  			<dt>谋定而动</dt>
	  			<dd>
	  				<p :class="{'active': section1.trick === 0}" @click="change_active(0,'2','trick',$event)">是</p>
	  				<p :class="{'active': section1.trick === 1}" @click="change_active(1,'2','trick',$event)">不是</p>
	  				<p :class="{'active': section1.trick === 2}" @click="change_active(2,'2','trick',$event)">不确定</p>
	  			</dd>
	  		</dl>
	  		<dl>
	  			<dt>乐于助人</dt>
	  			<dd>
	  				<p :class="{'active': section1.help === 0}" @click="change_active(0,'3','help',$event)">是</p>
	  				<p :class="{'active': section1.help === 1}" @click="change_active(1,'3','help',$event)">不是</p>
	  				<p :class="{'active': section1.help === 2}" @click="change_active(2,'3','help',$event)">不确定</p>
	  			</dd>
	  		</dl>
	  		<dl>
	  			<dt>洁身自好</dt>
	  			<dd>
	  				<p :class="{'active': section1.clean === 0}" @click="change_active(0,'4','clean',$event)">是</p>
	  				<p :class="{'active': section1.clean === 1}" @click="change_active(1,'4','clean',$event)">不是</p>
	  				<p :class="{'active': section1.clean === 2}" @click="change_active(2,'4','clean',$event)">不确定</p>
	  			</dd>
	  		</dl>
	  		<dl>
	  			<dt>随遇而安</dt>
	  			<dd>
	  				<p :class="{'active': section1.liberty === 0}" @click="change_active(0,'5','liberty',$event)">是</p>
	  				<p :class="{'active': section1.liberty === 1}" @click="change_active(1,'5','liberty',$event)">不是</p>
	  				<p :class="{'active': section1.liberty === 2}" @click="change_active(2,'5','liberty',$event)">不确定</p>
	  			</dd>
	  		</dl>
	  	</div>
	</div>
</template>
<script type="text/javascript">

    import Common from '../../static/common'
export default {
  data(){
	  	return {
	      section1:{
	      	treat:-1,
	      	trick:-1,
	      	help:-1,
	      	clean:-1,
	      	liberty:-1
	      }
	    }
	},
    computed: {
        answer(){
            var answer = {};
            answer.section1 = this.section1;
            return answer;
        }
    },
	methods:{
	  	change_active(answerValue,sectionId,sectionKey,event) {
		    this.$data.section1[sectionKey]=answerValue
		    this.$emit('updateUserAnswer', this.answer)
	    }
	},
    mounted(){
        Common.loadXianTianUserData(this);
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
	  		