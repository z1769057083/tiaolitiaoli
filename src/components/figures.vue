<template>
	<div class="m-selectfacon">
	  	<div class="m-selectfalimb">
	  		<dl>
	  			<dt>身材</dt>
				<!--Note:必须按照 0金1木2水3火4土 来匹配。-->
				<dd><span :class="{'active': body === 0}" @click="change_active(0)">
					肩背瘦小，腹小</span></dd>
				<dd><span :class="{'active': body === 1}" @click="change_active(1)">
					身材四肢长、身材挺拔、肩背宽大</span></dd>
				<dd><span :class="{'active': body === 3}" @click="change_active(3)">
					脊背宽广而肌肉丰满，身材上尖下阔</span></dd>
				<dd><span :class="{'active': body === 4}" @click="change_active(4)">
					肩背丰满，腹部容易发胖，身材上下匀称</span></dd>

		  			<dd><span :class="{'active': body === 2}" @click="change_active(2)">
					两肩小，腹部易肥胖，脊背长，骶长，塌臀</span></dd>
	  		</dl>
	  	</div>
	</div>
</template>
<script type="text/javascript">
import Common from '../../static/common'
export default {
    data(){
	  	return {
	      body:-1
	    }
	},
	methods:{
	  	change_active(answerValue) {
		  this.$data.body=answerValue
            if(this.body!==-1) {
                this.$emit('updateUserAnswer', this.answer)
            }
	    }
	},
    computed: {
        answer(){
            var answer = {};
            answer.body = this.body;
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
		.m-selectfalimb{
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
					margin-left: 16%;
					span{
						display: inline-block;
						height: rem(28rem);
						background: #fff;
						margin-top: rem(6rem);
						border-radius: rem(10rem);
						text-align: left;
						padding: rem(2rem) 2%;
						line-height: rem(28rem);
						margin-right: 6%;					
					}
					.active{
						color: #fff;
						background: #dec19d;
					}
					span:nth-child(3n){
						margin-right: 0;
					}
				}
			}
		}
	}
</style>
