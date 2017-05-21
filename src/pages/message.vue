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
      <!--选择问题内容-->
      <mSelect1></mSelect1>
   </div>
</template>
<script>
import mSelect1 from '@/components/mSelect1'
export default {
  name: 'message',
  data(){
  	return {
      title:''
    }
  },
  components: {
    mSelect1
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
	height: rem(320rem);
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
