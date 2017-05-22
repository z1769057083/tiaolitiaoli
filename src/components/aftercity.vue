<template>
<div class="m-select">
	<div class="m-selectafter">
	  	<div class="m-selectcity">你目前生活的城市</div>
	  	<div class="m-selectemotion">
	  		<dl>
	  			<dt>饮食口味</dt>
	  			<dd>
	  				<p>酸</p>
	  				<p>甜</p>
	  				<p>苦</p>
	  				<p>辣</p>
	  				<p>咸</p>
	  				<p>淡</p>
	  			</dd>
	  		</dl>
	  		<dl>
	  			<dt>情绪情况</dt>
	  			<dd>
	  				<p>喜</p>
	  				<p>怒</p>
	  				<p>忧虑</p>
	  				<p>悲</p>
	  				<p>惊恐</p>
	  			</dd>
	  		</dl>
	  	</div>
	  	<router-link to='/report'>
	  		<button class="submit">确定</button>
	   </router-link>
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
.m-select{
	width: 100%;
	background: #f8f8f8;
	height: 52%;
	position: relative;
	.m-selectafter{
		width: 90%;
		margin-left: 5%;
		.m-selectcity{
			width: 82%;
			height: 1.3rem;
			background: url(../assets/msgdate.png) no-repeat center;
			background-size: cover;
			line-height: 1.3rem;
			font-size: 0.37rem;
			padding-left: 7.2%;
			color: #bebaba;
			border-radius: 1.06rem;
			margin: rem(20rem) 0 0 6%;
		}
		.m-selectemotion{
			width: 100%;
			overflow: hidden;
			dl{
				width: 100%;
				height: rem(78rem);
				border-bottom: 1px solid #e3e3e3;
				dt{
					width: 19%;
					float: left;
					line-height: rem(44rem);
				}
				dd{
					width: 81%;
					float: left;
					line-height: rem(44rem);
					p{
						display: block;
						width: 30%;
						float: left;
						height: rem(24rem);
						background: #fff;
						margin-top: rem(10rem);
						border-radius: rem(10rem);
						line-height: rem(24rem);
						text-align: center;
						margin-left: 3%;
					}
				}
			}
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
			bottom: rem(60rem);
			left: 35%;
		}
	}
}
</style>