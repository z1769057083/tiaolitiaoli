<template>
	<div class="m-selectfacon">
	  	<div class="m-physiology">
	  		<dl>
	  			<dt>请选择你的肤色</dt>
	  			<dd>
	  				<span :class="{'active': skin === 0}" @click="change_active(0,'1','skin',$event)">皮肤白皙</span>
	  				<span :class="{'active': skin === 1}" @click="change_active(1,'1','skin',$event)">皮肤青白</span>
	  				<span :class="{'active': skin === 2}" @click="change_active(2,'1','skin',$event)">皮肤微黑</span>
	  			</dd>
	  			<dd>
	  				<span :class="{'active': skin === 3}" @click="change_active(3,'1','skin',$event)">皮肤发红、发赤或古铜色</span>
	  				<span :class="{'active': skin === 4}" @click="change_active(4,'1','skin',$event)">皮肤偏黄</span>
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
	      skin:-1
	    }
	},
	methods:{
	  	change_active(answerValue,sectionId,sectionKey,event) {
		  this.$data[sectionKey]=answerValue
            if(this.skin!==-1) {
                this.$emit('updateUserAnswer', this.answer)
            }
	    }
	},
    computed: {
        answer(){
            var answer = {};
            answer.skin = this.skin;
            return answer;
        }
    },
    mounted() {
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
		.m-physiology{
			width: 100%;
			overflow: hidden;
			dl{
			width: 100%;
			font-size: $font13;
			dt{
				width: 100%;
				font-size: $font14;
			}
			dd{
				width: 100%;
				margin-bottom: rem(5rem);
					span{
						display: inline-block;
						background: #fff;
						margin-top: rem(12rem);
						border-radius: rem(10rem);
						text-align: left;
						padding: 0 6%;
						line-height: rem(28rem);
						margin-right: 6%;
						/*background: #dec29d;
						color: #fff;*/
						
					}
					.active{
						color: #fff;
						background: #c69b70;
					}
					span:nth-child(3n){
						margin-right: 0;
					}
				}
			}
		}
	}
</style>