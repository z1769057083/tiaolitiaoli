<template>
	<div class="maskmain">
		<div class="mask-con">
			<div class="mask-header">
				<div class="mask-headerbg"></div>
				<div class="mask-portrait">
					<div class="mask-portraitimg">
						<img src="../assets/maskportrait.png"/>
					</div>
				</div>	
				
			</div>
			<p>问题答完了！</p>

			<h3>{{fieldTitle}}</h3>
			<div class="tip">{{fieldDescription}}</div>
				<button class="submit" @click="gotoReport()">查看报告</button>
		</div>
	</div>
</template>
<script type="text/javascript">
export default {
    props:['questionSection'],
    computed: {
        fieldTitle: function () {
            return (this.questionSection == XianTianSectionType ? "点击查看你的先天体质报告" : "点击查看你的后天体质报告");
        },
        fieldDescription: function () {
            return (this.questionSection == XianTianSectionType ?
				"温馨提示:先天体质是你从父母那遗传的以及早期生活习惯养成的体质。"
				: "温馨提示:后天体质是你后天生活，工作养成的体质。");
        },
    },
    methods:{
        gotoReport(){
            if(this.questionSection == XianTianSectionType){
                this.$router.push({ path: '/report', query: { questionSection: XianTianSectionType } })
			}
            else{
                this.$router.push({ path: '/afterReport', query: { questionSection: HouTianSectionType } })
			}
		}
	},
  data(){
  	return {
    }
  }
}
</script>
<style lang="scss">
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
		width: 74.6%;
		height: rem(340rem);
		background: #fff;
		border-radius: rem(10rem);
		position: absolute;
		top: rem(130rem);
		left: 12.7%; 
		text-align: center;
		overflow: hidden;
		.mask-header{
			width: 100%;
			height: rem(138rem);
			position: relative; 
			margin-bottom: rem(24rem);
			.mask-headerbg{
				width: 100%;
				height: rem(94rem);
				background: url(../assets/maskheader.png) no-repeat center;
				background-size: cover;
			}
			.mask-portrait{
				width: rem(90rem);
				height: rem(90rem);
				background: #fff;
				border-radius: 50%;
				position: absolute;
				bottom: 0;
				left: 34%;
				overflow: hidden;
				.mask-portraitimg{
					width: rem(85rem);
					height: rem(85rem);
					background: blue;
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
			line-height: rem(36rem);
		}
		.tip{
			font-size: $font12;
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