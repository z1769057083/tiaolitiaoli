<template>
	<div class="m-selectfacon">
	  	<div class="m-selectfigure">
	  		<dl>
	  			<dt>四肢</dt>
				<dd><span :class="{'active': limb === 0}" @click="change_active(0)">
					手足小，手背薄。足跟结实有力，行动轻快</span></dd>
	  			<dd><span :class="{'active': limb === 1}" @click="change_active(1)">
					手足灵活细长多青筋</span></dd>

				<dd><span :class="{'active': limb === 2}" @click="change_active(2)">
					手背厚，手足不安静，行走善摇摆</span></dd>
	  			<dd><span :class="{'active': limb === 3}" @click="change_active(3)">
					手足小、步伐稳重、走路晃肩、精神矍铄</span></dd>
	  			<dd><span :class="{'active': limb === 4}" @click="change_active(4)">
					手足小而丰腴，下肢多健壮，步履稳健</span></dd>

	  		</dl>
	  	</div>
	</div>
</template>
<script type="text/javascript">

    import Common from '../../static/common'
export default {
   data(){
	  	return {
	      limb:-1
	    }
	},
	methods:{
	  	change_active(answerValue) {
		  this.$data.limb=answerValue
            if(this.limb!==-1) {
                this.$emit('updateUserAnswer', this.answer)
            }
	    }
	},
	computed: {
        answer(){
            var answer = {};
            answer.limb = this.limb;
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
		.m-selectfigure{
			width: 100%;
			overflow: hidden;
			padding-top: rem(6rem);
			dl{
				width: 100%;
				position: relative;
				font-size: $font13;
				dt{
					position: absolute;
 					top: rem(18rem);
 					left: 0;
 					font-size: $font14;
				}
				dd{
					width: 100%;
					line-height: rem(46rem);
					border-bottom: 1px solid #e3e3e3;
					span{
						display: inline-block;
						height: rem(28rem);
						background: #fff;
						margin-top: rem(6rem);
						border-radius: rem(10rem);
						text-align: left;
						margin-left: 16%;
						padding: rem(2rem) 2%;
						line-height: rem(28rem);	
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