<template>
	<div class="m-selectfacon">
	  	<div class="m-selectfalimb">
	  		<dl>
	  			<dt>肤色</dt>
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
	  		<dl>
	  			<dt>身材</dt>
	  			<dd><span :class="{'active': body === 0}" @click="change_active(0,'2','body',$event)">身材四肢长、身材挺拔、肩背宽大</span></dd>
	  			<dd><span :class="{'active': body === 1}" @click="change_active(1,'2','body',$event)">脊背宽广而肌肉丰满，身材上尖下阔</span></dd>
	  			<dd><span :class="{'active': body === 2}" @click="change_active(2,'2','body',$event)">肩背丰满，腹部容易发胖，身材上下匀称</span></dd>
	  		</dl>
	  	</div>
	</div>
</template>
<script type="text/javascript">


    import Common from '../../static/common'
export default {
    data(){
	  	return {
	      skin:-1,
	      body:-1
	    }
	},
	methods:{
	  	change_active(answerValue,sectionId,sectionKey,event) {
		  this.$data[sectionKey]=answerValue
            if(this.skin!==-1&&this.body!==-1) {
                this.$emit('updateUserAnswer', this.answer)
            }
	    }
	},
    computed: {
        answer(){
            var answer = {};
            answer.skin = this.skin;
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
			dl{
				width: 100%;
				position: relative;
				dt{
					position: absolute;
 					top: rem(14rem);
 					left: 0;
 					font-size: $font14;
				}
				dd{
					width: 100%;
					line-height: rem(40rem);
					border-bottom: 1px solid #e3e3e3;
					margin-left: 16%;
					span{
						display: inline-block;
						height: rem(22rem);
						background: #fff;
						margin-top: rem(10rem);
						border-radius: rem(10rem);
						text-align: left;
						padding: rem(2rem) 2%;
						line-height: rem(22rem);
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