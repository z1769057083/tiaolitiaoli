<template>
  <div class='allgoods'> 
     <!--主题部分-->
	<div class="a-main">
		<dl>
			<dt><img src="../assets/allgoodsimg.png"/></dt>
			<dd>
				<span>引火归元帖</span>
				<p>¥128.00</p>
			</dd>
		</dl>
		<dl>
			<dt><img src="../assets/allgoodsimg.png"/></dt>
			<dd>
				<span>引火归元帖</span>
				<p>¥128.00</p>
			</dd>
		</dl>
		<dl>
			<dt><img src="../assets/allgoodsimg.png"/></dt>
			<dd>
				<span>引火归元帖</span>
				<p>¥128.00</p>
			</dd>
		</dl>
		<dl>
			<dt><img src="../assets/allgoodsimg.png"/></dt>
			<dd>
				<span>引火归元帖</span>
				<p>¥128.00</p>
			</dd>
		</dl>
		<dl>
			<dt><img src="../assets/allgoodsimg.png"/></dt>
			<dd>
				<span>引火归元帖</span>
				<p>¥128.00</p>
			</dd>
		</dl>
		<dl>
			<dt><img src="../assets/allgoodsimg.png"/></dt>
			<dd>
				<span>引火归元帖</span>
				<p>¥128.00</p>
			</dd>
		</dl>
		<dl>
			<dt><img src="../assets/allgoodsimg.png"/></dt>
			<dd>
				<span>引火归元帖</span>
				<p>¥128.00</p>
			</dd>
		</dl>
	</div>
	<div class="s-mrecombottom">我是有底线的</div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'allgoods',
  data(){
  	return {
    }
  },
  methods: {
  },
  mounted() {
  	document.documentElement.scrollTop = 0
    document.body.scrollTop =0
  }
}
</script>
<style scoped lang="scss">
	@import "../common/common.scss";
.allgoods{
	width: 100%;
	height: 100%;
	background: #f6f6f6;
	overflow: hidden;
	.a-main{
		width: 95%;
		overflow: hidden;
		margin-left: 2.5%;
		margin-top: rem(15rem);
		dl{
			width: 48.5%;
			float: left;
			margin: 0 3% rem(10rem) 0;
			background: #fff;
			dt{
				width: 100%;
				height: rem(173rem);
				img{
					width: 100%;
					height: 100%;
				}
			}
			dd{
				width: 92%;
				margin-left: 4%;
				span{
					font-size: $font14;
					line-height: rem(26rem);
				}
				p{
					padding: rem(5rem) 0;
					color: #ff4443;
					font-size: $font12;
				}
			}
		}
		dl:nth-child(2n){
			margin-right: 0;
		}
	}
	.s-mrecombottom{
	 		line-height: 0.45rem;
	 		font-size: 0.32rem;
	 		color: #999;
	 		width: 100%;
	 		overflow: hidden;
	 		text-align: center;
	 		margin: rem(20rem) 0;
	 	}	
}
</style>