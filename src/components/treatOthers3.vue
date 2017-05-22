<template>
<div class="m-select">
	<div class="m-selectfacon">
	  	<div class="m-selectfacial">
	  		<dl>
	  			<dt>嫉恶如仇</dt>
	  			<dd>
	  				<p>是</p>
	  				<p>不是</p>
	  				<p>不确定</p>
	  			</dd>
	  		</dl>
	  		<dl>
	  			<dt>处事灵活</dt>
	  			<dd>
	  				<p>是</p>
	  				<p>不是</p>
	  				<p>不确定</p>
	  			</dd>
	  		</dl>
	  		<dl>
	  			<dt>身材魁梧</dt>
	  			<dd>
	  				<p>是</p>
	  				<p>不是</p>
	  				<p>不确定</p>
	  			</dd>
	  		</dl>
	  		<dl>
	  			<dt>原则性强</dt>
	  			<dd>
	  				<p>是</p>
	  				<p>不是</p>
	  				<p>不确定</p>
	  			</dd>
	  		</dl>
	  		<dl>
	  			<dt>清瘦</dt>
	  			<dd>
	  				<p>是</p>
	  				<p>不是</p>
	  				<p>不确定</p>
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
	.m-selectfacon{
		width: 90%;
		margin-left: 5%;
		.m-selectfacial{
			width: 100%;
			overflow: hidden;
			dl{
				width: 100%;
				height: rem(44rem);
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
			bottom: rem(40rem);
			left: 35%;
		}
	}
}
</style>