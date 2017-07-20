<template>
    <div class='feedback'>
        <div class="feedback-top">
	        <p class="feedback-title">反馈类型</p>
	        <ul class="feedback-btn">
	        	<li :class="{'active':toggle==0}" @click='change_active(0,$event)'>建议</li>
	        	<li :class="{'active':toggle==1}" @click='change_active(1,$event)'>投诉</li>
	        </ul>
	        <textarea maxlength="500" rows="4" @input='descInput' v-model='desc'>
	        </textarea>
	        <div class="feedback-num"><span id="">{{inputNum}}</span>/500</div>
	        	        
        </div>
        <div class="feedback-phone">
        	手机号:&nbsp;&nbsp;15235433927
        </div>
        <div class="feedback-phone feedback-time">
        	客服电话:&nbsp;&nbsp;010-51626150
        	<span>周一~周五&nbsp;&nbsp;早9:00-18:00</span>
        </div>
        <div class="submit-btn">
        	提交
        </div>
    </div>
</template>
<script>
    import Toast from '@/packages/toast'
    import axios from 'axios'
    import api from '../api/api'
    export default {
        data() {
            return {
               inputNum:500,
               desc:'',
               toggle:-1
            }
        },
        methods: {
            descInput(){
            	this.inputNum = 500-this.desc.length
            },
            change_active(index){
            	this.toggle = index
            }
        },
        mounted() {
            document.title = "意见反馈"
        }
    }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
    @import "../common/common.scss";
	.feedback{
		width: 100%;
		height: 100%;
		background: #f6f6f6;
		position: absolute;
		.feedback-top{
			width: 92%;
			background: #fff;
			overflow: hidden;
			padding: rem(20rem) 4%;
			position: relative;
			.feedback-title{
				font-size: $font16;
				color: #3c3c3c;
				margin-bottom: rem(10rem);
			}
			.feedback-btn{
				width: 100%;
				overflow: hidden;
				margin-bottom: rem(10rem);
				li{
					float: left;
					width: rem(88rem);
					height: rem(28rem);
					border: 1px solid #979797;
					font-size: $font13;
					text-align: center;
					line-height: rem(28rem);
					margin-right: rem(10rem);
					border-radius: rem(4rem);
				}
				.active{
					border: 0;
					height: rem(30rem);
					line-height: rem(30rem);
					background: #dec29d;
					color: #fff;
				}	
			}
			textarea{
				width: 94%;
				height: rem(140rem);
				font-size: $font12;
				padding: rem(10rem) 3%;
				line-height: rem(20rem);
				overflow: hidden;
				resize: none;
			}
			.feedback-num{
				position: absolute;
				bottom: rem(30rem);
				right: 5%;
			}
		}
		.feedback-phone{
			width: 92%;
			height: rem(50rem);
			line-height: rem(50rem);
			padding: 0 4%;
			background: #fff;
			font-size: $font14;
			margin-top: rem(10rem);
		}
		.feedback-time{
			color: #999;
			span{
				float: right;
			}
		}
		.submit-btn{
			width: 92%;
			margin-left: 4%;
			background: #c69b70;
			height: rem(40rem);
			color: #fff;
			line-height: rem(40rem);
			text-align: center;
			font-size: $font14;
			border-radius: rem(4rem);
			position: absolute;
			bottom: rem(30rem);
			left: 0;
			right: 0;
			
		}
	}
</style>
