<template>
	<div class="m-selectfacon">
	  	<div class="m-selectfacial">
	  		<dl>
	  			<dt>为人和顺</dt>
	  			<dd>
	  				<p :class="{'active': section3.gentle === 0}" @click="change_active(0,'1','gentle',$event)">是</p>
	  				<p :class="{'active': section3.gentle === 1}" @click="change_active(1,'1','gentle',$event)">不是</p>
	  				<p :class="{'active': section3.gentle === 2}" @click="change_active(2,'1','gentle',$event)">不确定</p>
	  			</dd>
	  		</dl>
	  	  	<dl>
	  			<dt>嫉恶如仇</dt>
	  			<dd>
	  				<p :class="{'active': section3.evil === 0}" @click="change_active(0,'2','evil',$event)">是</p>
	  				<p :class="{'active': section3.evil === 1}" @click="change_active(1,'2','evil',$event)">不是</p>
	  				<p :class="{'active': section3.evil === 2}" @click="change_active(2,'2','evil',$event)">不确定</p>
	  			</dd>
	  		</dl>	
	  		<dl>
	  			<dt>处事灵活</dt>
	  			<dd>
	  				<p :class="{'active': section3.flexible === 0}" @click="change_active(0,'3','flexible',$event)">是</p>
	  				<p :class="{'active': section3.flexible === 1}" @click="change_active(1,'3','flexible',$event)">不是</p>
	  				<p :class="{'active': section3.flexible === 2}" @click="change_active(2,'3','flexible',$event)">不确定</p>
	  			</dd>
	  		</dl>
	  		<dl>
	  			<dt>身材魁梧</dt>
	  			<dd>
	  				<p :class="{'active': section3.burly === 0}" @click="change_active(0,'4','burly',$event)">是</p>
	  				<p :class="{'active': section3.burly === 1}" @click="change_active(1,'4','burly',$event)">不是</p>
	  				<p :class="{'active': section3.burly === 2}" @click="change_active(2,'4','burly',$event)">不确定</p>
	  			</dd>
	  		</dl>
	  		<dl>
	  			<dt>原则性强</dt>
	  			<dd>
	  				<p :class="{'active': section3.principle === 0}" @click="change_active(0,'5','principle',$event)">是</p>
	  				<p :class="{'active': section3.principle === 1}" @click="change_active(1,'5','principle',$event)">不是</p>
	  				<p :class="{'active': section3.principle === 2}" @click="change_active(2,'5','principle',$event)">不确定</p>
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
            section3:{
	      	gentle:-1,
	      	evil:-1,
	      	flexible:-1,
	      	burly:-1,
	      	principle:-1
	      }
	    }
	},
    computed: {
        answer(){
            var answer = {};
            answer.section3 = this.section3;
            return answer;
        },
        isAllFilled(){
            return this.section3.gentle != -1 && this.section3.evil != -1
                && this.section3.flexible != -1 && this.section3.burly != -1
                && this.section3.principle != -1;
        }
    },
	methods:{
	  	change_active(answerValue,sectionId,sectionKey,event){
            this.$data.section3[sectionKey]=answerValue
            if (this.isAllFilled) {
                this.$emit('updateUserAnswer', this.answer)
            }
	    }
	},
    mounted(){
        Common.loadXianTianUserData(this);
    }
}
</script>
<style lang="scss" rel="stylesheet/scss">
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
				height: rem(50rem);
				border-bottom: 1px solid #e3e3e3;
				font-size: $font13;
				dt{
					width: 19%;
					float: left;
					line-height: rem(48rem);
				}
				dd{
					width: 81%;
					float: left;
					line-height: rem(44rem);
					p{
						display: block;
						width: 28%;
						float: left;
						height: rem(28rem);
						background: #fff;
						margin-top: rem(10rem);
						border-radius: rem(10rem);
						line-height: rem(28rem);
						text-align: center;
						margin-left: 5%;
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