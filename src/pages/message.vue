<template>
	<div class='message'>
      <!--聊天内容-->
      <div class='m-char'>
      	<div class="m-charscroll">
      		<div class="m-chardocter">
	      		<div class="m-charperson"><img src="../assets/indexheadportrait.png"/></div>
	      		<div class="m-charcont">您好！欢迎使用体质辨析，了解自己的体质可以更有针对性的养生和调理！</div>
	      	</div>
	      	<div class="m-chardocter">
	      		<div class="m-charperson"><img src="../assets/indexheadportrait.png"/></div>
	      		<div class="m-charcont">我需要知道你的性别和生日{{title}}。</div>
	      	</div>
	      	<div class="m-charcustom">
	      		<div class="m-charperson"><img src="../assets/indexheadportrait.png"/></div>
	      		<div class="m-charcont">人家是女生！</div>
	      	</div>
	      	<div class="m-chardocter">
	      		<div class="m-charperson"><img src="../assets/indexheadportrait.png"/></div>
	      		<div class="m-charcont">您好！欢迎使用体质辨析，了解自己的体质可以更有针对性的养生和调理！</div>
	      	</div>
	      	<div class="m-chardocter">
	      		<div class="m-charperson"><img src="../assets/indexheadportrait.png"/></div>
	      		<div class="m-charcont">我需要知道你的性别和生日</div>
	      	</div>
	      	<div class="m-charcustom">
	      		<div class="m-charperson"><img src="../assets/indexheadportrait.png"/></div>
	      		<div class="m-charcont">人家是女生！</div>
	      	</div>
	      	<div class="m-chardocter">
	      		<div class="m-charperson"><img src="../assets/indexheadportrait.png"/></div>
	      		<div class="m-charcont">您好！欢迎使用体质辨析，了解自己的体质可以更有针对性的养生和调理！</div>
	      	</div>
	      	<div class="m-chardocter">
	      		<div class="m-charperson"><img src="../assets/indexheadportrait.png"/></div>
	      		<div class="m-charcont">我需要知道你的性别和生日</div>
	      	</div>
	      	<div class="m-charcustom">
	      		<div class="m-charperson"><img src="../assets/indexheadportrait.png"/></div>
	      		<div class="m-charcont">人家是女生！</div>
	      	</div>
	      	<div class="m-chardocter">
	      		<div class="m-charperson"><img src="../assets/indexheadportrait.png"/></div>
	      		<div class="m-charcont">您好！欢迎使用体质辨析，了解自己的体质可以更有针对性的养生和调理！</div>
	      	</div>
	      	<div class="m-chardocter">
	      		<div class="m-charperson"><img src="../assets/indexheadportrait.png"/></div>
	      		<div class="m-charcont">我需要知道你的性别和生日</div>
	      	</div>
	      	<div class="m-charcustom">
	      		<div class="m-charperson"><img src="../assets/indexheadportrait.png"/></div>
	      		<div class="m-charcont">人家是女生！</div>
	      	</div>
      	</div>
      </div>
      <!--先天体质报告问题-->
      <!--<gender></gender>-->
      <!--<city></city>-->
      <!--<facialFeatures></facialFeatures>-->
      <!--<emotion></emotion>-->
      <!--<season></season>-->
      <!--<treatOthers1></treatOthers1>-->
      <!--<treatOthers2></treatOthers2>-->
      <!--<treatOthers3></treatOthers3>-->
      <!--<treatOthers4></treatOthers4>-->
      <!--<parentsBirthday></parentsBirthday>-->
      <!--<maskconfirm></maskconfirm>-->
      <!--后天体质报告问题-->
      <!--<aftercity></aftercity>-->
      <!--<afterseason></afterseason>-->
      <afterlimb></afterlimb>
      <!--<afterfigure></afterfigure>-->
      <!--<aftertreat1></aftertreat1>-->
      <!--<aftertreat2></aftertreat2>-->
      <!--<aftertreat3></aftertreat3>-->
      <!--<aftertreat4></aftertreat4>-->
      <!--<aftertreat5></aftertreat5>-->
      <!--<aftertreat6></aftertreat6>-->
   </div>
</template>
<script>
import gender from '@/components/gender'
import city from '@/components/city'
import facialFeatures from '@/components/facialFeatures'
import emotion from '@/components/emotion'
import season from '@/components/season'
import treatOthers1 from '@/components/treatOthers1'
import treatOthers2 from '@/components/treatOthers2'
import treatOthers3 from '@/components/treatOthers3'
import treatOthers4 from '@/components/treatOthers4'
import parentsBirthday from '@/components/parentsBirthday'
import maskconfirm from '@/components/maskconfirm'
import aftercity from '@/components/aftercity'
import afterseason from '@/components/afterseason'
import afterlimb from '@/components/afterlimb'
import afterfigure from '@/components/afterfigure'
import aftertreat1 from '@/components/aftertreat1'
import aftertreat2 from '@/components/aftertreat2'
import aftertreat3 from '@/components/aftertreat3'
import aftertreat4 from '@/components/aftertreat4'
import aftertreat5 from '@/components/aftertreat5'
import aftertreat6 from '@/components/aftertreat6'
export default {
  name: 'message',
  data(){
  	return {
      title:''
    }
  },
  components: {
  	gender,
    city,
    facialFeatures,
    emotion,
    season,
    treatOthers1,
    treatOthers2,
    treatOthers3,
    treatOthers4,
    parentsBirthday,
    maskconfirm,
    aftercity,
    afterseason,
    afterlimb,
    afterfigure,
    aftertreat1,
    aftertreat2,
    aftertreat3,
    aftertreat4,
    aftertreat5,
    aftertreat6 
  },
  methods:{
  },
  mounted() {
   this.title = this.$router.currentRoute.params.title;
   document.title = this.$router.currentRoute.params.title;
   console.log(this.title)
  }
}
</script>
<style lang="scss">
@import "../common/common.scss";
.message{
	background: #f8f8f8;
	width: 100%;
	height: 100%;
	position: absolute;
	overflow: hidden;
}
/*聊天内容*/
.m-char{
	width: 100%;
	height: 48%;
	background: #f2f2f2;
	padding-top: rem(20rem);
	border-bottom: rem(4rem) solid #dab589;
	overflow-y: auto;
	.m-charscroll{
		width: 100%;
		.m-chardocter{
			width: 78%;
			margin-left: 7%;
			overflow: hidden;
			display: flex;
			margin-bottom: rem(14rem);
			.m-charperson{
				width: 1.07rem;
				height: 1.07rem;
				margin-right: rem(12rem);
				img{
					width: 1.07rem;
					height: 1.07rem;
				}
			}
			.m-charcont{
				color: #3c3c3c;
				background: #fff;
				line-height: 0.56rem;
				font-size: 0.37rem;
				padding: 0.21rem 0.32rem;
				border-radius: 0.15rem;
				letter-spacing: 0.01rem;
			}
		}
		.m-charcustom{
			width: 78%;
			margin-right: 7%;
			overflow: hidden;
			margin-bottom: rem(14rem);
			float: right;
			.m-charperson{
				width: 1.07rem;
				height: 1.07rem;
				float: right;
				margin-left: rem(12rem);
				img{
					width: 1.07rem;
					height: 1.07rem;
				}
			}
			.m-charcont{
				color: #3c3c3c;
				background: #fff;
				line-height: 0.56rem;
				font-size: 0.37rem;
				padding: 0.21rem 0.32rem;
				border-radius: 0.15rem;
				letter-spacing: 0.01rem;
				float: right;
			}
		}
	}
}
</style>
