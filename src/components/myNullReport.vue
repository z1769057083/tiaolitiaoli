<template>
    <div class='home'>
		<div class="maskmain">
			<div class="mask-con">
				<div class="mask-header">
					<div class="mask-headerbg"></div>
					<div class="mask-portrait">
						<div class="mask-portraitimg">
							<img :src="myselfAvatar"/>
						</div>
					</div>						
				</div>
				<p>{{myName}}</p>
				<h3>快去测一测你的体质！</h3>
				<div class="tip">完成测试后，您将了解您的体质详情，并获得相应的个性化的解决方法</div>
				<router-link to='/'>
					<button class="submit">体质检测</button>
				</router-link>	
			</div>
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
                myselfAvatar:'../../static/images/defaultAvatar.png',
                myName:''
            }
        },
        methods: {     
        },
        mounted() {
            if (!window.localStorage) {
            return false;
	        } else {
	            if (window.localStorage.getItem(Account_Index) !== null) {
	                let account = JSON.parse(window.localStorage.getItem(Account_Index))
	                this.myselfAvatar = account.headimgurl;
	                this.myName = account.nickname
	            }
	        }
        }
    }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
@import "../common/common.scss";
.home{
	background: url(../assets/indexbg.jpg) repeat-y;
    background-size: cover;
    width: 100%;
	height: 100%;
	position: absolute;
}
.maskmain{
	width: 100%;
	height: 100%;
	background: rgba(0,0,0,0.6);
	position: fixed;
	bottom: 0;
	left: 0;
	top: 0;
	z-index: 99;
	.mask-con{
		width: 74.6%;
		height: rem(340rem);
		background: #fff;
		border-radius: rem(10rem);
		position: absolute;
		top: rem(90rem);
		left: 12.7%; 
		text-align: center;
		overflow: hidden;
		.mask-header{
			width: 100%;
			height: rem(138rem);
			position: relative; 
			margin-bottom: rem(10rem);
			.mask-headerbg{
				width: 100%;
				height: rem(94rem);
				background: url(../assets/maskheader1.png) no-repeat center;
				background-size: cover;
			}
			.mask-portrait{
				width: rem(94rem);
				height: rem(94rem);
				background: #fff;
				border-radius: 50%;
				position: absolute;
				bottom: 0;
				left: 34%;
				overflow: hidden;
				.mask-portraitimg{					
					width: rem(88rem);
					height: rem(88rem);
					border-radius: 50%;
					margin: rem(2.6rem);
					overflow: hidden;
					img{
						width: 100%;
						height: 100%;
					}
				}
			}
		}
		p{
			font-size: $font18;
			line-height: rem(34rem);
		}
		h3{
			font-size: $font18;
			color: #c79b6e;
			line-height: rem(40rem);
		}
		.tip{
			font-size: $font14;
			color: #959bab;
			line-height: rem(24rem);
			padding: 0 3%;
		}
		.submit{
			width: 30%;
			height: rem(40rem);
			background: #c69b70;
			border: 0;
			color: #fff;
			border-radius: 0.13rem;
			font-size: 0.37rem;
			line-height: rem(40rem);
			position: absolute;
			bottom: rem(20rem);
			left: 35%;
		}
	}
}
</style>

