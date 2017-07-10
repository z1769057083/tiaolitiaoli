<template>
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
			<p>问题答完了</p>
			<h3>点击查看你的体质报告</h3>
			<div class="tip">体质情况是根据父母遗传以及平时<br />生活工作习惯得出结论</div>
				<button class="submit" @click="gotoReport"></button>
		</div>
	</div>
</template>
<script type="text/javascript">
export default {
	data(){
	  	return {
	  		myselfAvatar:'../../static/images/indexheadportrait.png'
	    }
	},
    props:['questionSection'],
    methods:{
        gotoReport(){            
            this.$router.push({ path: '/afterReport' })
		}
	},
	 mounted() {
        if (!window.localStorage) {
            return false;
        } else {
            if (window.localStorage.getItem(Account_Index) !== null) {
                let account = JSON.parse(window.localStorage.getItem(Account_Index))
                this.myselfAvatar = account.headimgurl;
            }

        }
    }
}
</script>
<style lang="scss" rel="stylesheet/scss">
@import "../common/common.scss";
	/*选择问题内容*/
.maskmain{
	width: 100%;
	height: 100%;
	background: rgba(0,0,0,0.6);
	position: absolute;
	bottom: 0;
	left: 0;
	top: 0;
	z-index: 99;
	.mask-con{
		width: 74.4%;
		height: rem(340rem);
		background: #fff;
		border-radius: rem(10rem);
		position: absolute;
		top: rem(120rem);
		left: 12.8%; 
		text-align: center;
		overflow: hidden;
		.mask-header{
			width: 100%;
			height: rem(138rem);
			position: relative; 
			margin-bottom: rem(16rem);
			.mask-headerbg{
				width: 100%;
				height: rem(94rem);
				background: url(../assets/maskheader.png) no-repeat center;
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
			font-size: $font14;
			line-height: rem(28rem);
		}
		h3{
			font-size: $font18;
			color: #c79b6e;
			line-height: rem(40rem);
		}
		.tip{
			font-size: $font12;
			color: #959bab;
			line-height: rem(20rem);
			padding: 0 3%;
		}
		.submit{
			width: 35%;
			height: rem(40rem);
			background: #c69b70;
			border: 0;
			color: #fff;
			overflow: hidden;
			border-radius: rem(5rem);
			font-size: 0.37rem;
			position: absolute;
			bottom: rem(18rem);
			left: 32.5%;
			background: url(../assets/maskSubmit.png) no-repeat center;
			background-size: cover;
		}
	}
}
</style>