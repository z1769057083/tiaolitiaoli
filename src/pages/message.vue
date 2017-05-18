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
	      		<div class="m-charcont">我需要知道你的性别和生日{{title}}。</div>
	      	</div>
	      	<div class="m-charcustom">
	      		<div class="m-charperson"><img src="../assets/indexheadportrait.png"/></div>
	      		<div class="m-charcont">人家是女生！</div>
	      	</div>
      	</div>
      </div>
      <!--选择问题内容-->
      <div class="m-select">
      	<div class="m-selecttit">性别</div>
      	<div class="m-selectcon">
      		<div class="m-selectboy" :class="{'active': active == 0}" @click="change_active(0,$event)"><img src="../assets/msgman.png"/>男</div>
      		<div class="m-selectgirl" :class="{'active': active == 1}" @click="change_active(1,$event)"><img src="../assets/msgwoman.png"/>我是女生</div>	
      	</div>
      	<div class="m-selecttit">出生日期</div>
      	<div class="m-selectdate">年/月/日</div>
      	<router-link to='/report'>
      		<button class="submit">确定</button>
        </router-link>
      </div>
   </div>
</template>
<script>
export default {
  name: 'message',
  data(){
  	return {
      active: 0,
      title:''
    }
  },
  methods:{
  	change_active(num, event) {
      this.active = num;
    }
  },
  mounted() {
   this.change_active(1);
   this.title = this.$router.currentRoute.params.title;
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
	height: rem(280rem);
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
/*选择问题内容*/
.m-select{
	width: 74.6%;
	margin-left: 12.2%;
	background: #f8f8f8;
	position: absolute;
	z-index: 99;
	.m-selecttit{
		text-align: center;
		font-size: 0.4rem;
		color: #3C3C3C;
		margin: 0.53rem 0.32rem;
	}
	.m-selectcon{
		width: 100%;
		position: relative;
		height: rem(70rem);
		background: url(../assets/msggrey.png) no-repeat center;
		background-size: cover;
		border-radius: rem(45rem);
		.m-selectboy{
			width: rem(155rem);
			height: rem(70rem);
			border-radius: rem(45rem);
			text-align: center;
			font-size: rem(14rem);
			color: #b0bfbc;
			overflow: hidden;
			position: absolute;
			left: 0;
			top: 0;
			img{
				width: rem(28rem);
				height: rem(28rem);
				display: block;
				margin: rem(12rem) 0 rem(6rem) rem(63.5rem);
			}
		}
		.m-selectgirl{
			width: rem(155rem);
			height: rem(70rem);
			border-radius: rem(45rem);
			text-align: center;
			font-size: rem(14rem);
			color: #b0bfbc;
			position: absolute;
			right: 0;
			top: 0;
			overflow: hidden;
			img{
				width: rem(36rem);
				height: rem(28rem);
				display: block;
				margin: rem(12rem) 0 rem(6rem) rem(59rem);
				
			}
		}
		.active{
			background: #fff;
		}
	}
	.m-selectdate{
		width: 92.8%;
		height: 1.3rem;
		background: url(../assets/msgdate.png) no-repeat center;
		background-size: cover;
		line-height: 1.3rem;
		font-size: 0.37rem;
		padding-left: 7.2%;
		color: #bebaba;
		border-radius: 1.06rem;
	}
	.submit{
		width: 2.72rem;
		height: 1.06rem;
		background: #c69b70;
		border: 0;
		color: #fff;
		border-radius: 0.13rem;
		font-size: 0.37rem;
		text-align: center;
		line-height: 1.06rem;
		margin-top: 0.53rem;
		margin-left: 32%;
	}
}
</style>
