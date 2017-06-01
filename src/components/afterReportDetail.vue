<template>
	<div class="reportDetail">
		<div class="reportDetail-main">
			<div class="top">
				<img src="../assets/afterHou.png"/>
			</div>
			<p>
			你所在的城市6月气温升高，空气中湿度增加，体内汗液无法通畅的发散出来，
	    	人们就会感到胸闷、心悸，精神不振，全身乏力。易出现中暑、腮腺炎、水痘。
	    	<span>根据你的体质和所在地区基本月物侯，我给你制定了一份你的养生调理方案，请点击查看。</span>
	    	每两个月根据气候的变化，我会更新你的养生调理方案，你可以通过公众号到时查看，祝你健康！
			</p>
		</div>
	</div>
</template>
<script type="text/javascript">
export default {
  data(){
  	return {
    }
  }
}
</script>
<style lang="scss">
@import "../common/common.scss";
	/*选择问题内容*/
.reportDetail{
	width: 100%;
	height: 100%;
	background: rgba(0,0,0,0.6);
	position: absolute;
	bottom: 0;
	left: 0;
	top: 0;
	z-index: 99;
	.reportDetail-main{
		width: 74.6%;
		height: rem(340rem);
		background: #fff;
		border-radius: rem(10rem);
		position: absolute;
		top: rem(130rem);
		left: 12.7%; 
		.top{
			position: absolute;
			width: 54%;
			height: rem(54rem);
			top: rem(-16rem);
			left: 23%;
			img{
				width: 100%;
				height: 100%; 
			}
		}
		p{
			margin: rem(48rem) 8% 0;
	  		line-height: rem(22rem);;
	  		padding-bottom: rem(10rem);
	  		font-size: $font14;
	  		color: #505050;
	  		border-bottom: 1px double #f4eade;
	  		span{
	  			display: inline-block;
	  			margin: rem(10rem) 0;
	  		}
		}
	}
}
</style>