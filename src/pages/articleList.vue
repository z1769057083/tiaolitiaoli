<template>
	<div class="article">
		<div class="s-mrecomment">
			<!--<h3 class="s-marttitle">个性化推荐</h3>-->
			<dl class="s-marticlecon">
				<router-link to='articleListDetail'>
					<dt>
						<h3>芒种节气食疗方</h3>
						我国地域辽阔，同一节气的气候特征也有差异。
						在此时不但要搞好雨期的田间管理更要注意增强体质，
						避免季节性疾病和传染病的发生，如中暑、腮腺炎、水痘等。
					</dt>
					<dd>
						<img src="../assets/maskheader.png"/>
					</dd>
				</router-link>	
			</dl>
			<dl class="s-marticlecon">
				<router-link to='articleListDetail'>
					<dt>
						<h3>芒种节气食疗方</h3>
						我国地域辽阔，同一节气的气候特征也有差异。
						在此时不但要搞好雨期的田间管理更要注意增强体质，
						避免季节性疾病和传染病的发生，如中暑、腮腺炎、水痘等。
					</dt>
					<dd>
						<img src="../assets/maskheader.png"/>
					</dd>
				</router-link>	
			</dl>
			<dl class="s-marticlecon">
				<router-link to='articleListDetail'>
					<dt>
						<h3>芒种节气食疗方</h3>
						我国地域辽阔，同一节气的气候特征也有差异。
						在此时不但要搞好雨期的田间管理
					</dt>
					<dd>
						<img src="../assets/maskheader.png"/>
					</dd>
				</router-link>	
			</dl>
		</div>	
	</div>
</template>
<style scoped lang="scss" rel="stylesheet/scss">
@import "../common/common.scss";
.article{
	width: 100%;
	height: 100%;
	position: absolute;
	overflow: hidden;
    .s-mrecomment{
		width: 94%;
    	margin-left: 3%;
		overflow: hidden;
		.s-marttitle{
	 		font-size: 0.42rem;
	 		line-height: rem(40rem);
	 		color: #000;
	 		font-weight: bold;
	 		margin-bottom: 0.26rem;
	 		background: url(../assets/shoptitleft.png) no-repeat center left;
	 		padding-left: 2.5%;
	 		border-bottom: rem(1rem) solid #e8e8e8;
	 	}
	 	.s-marticlecon{
	 		width: 100%;
	 		overflow: hidden;
	 		margin-top: rem(15rem);
	 		padding-bottom: rem(12rem);
	 		border-bottom: rem(1rem) solid #e8e8e8;
	 		dt{
	 			width: 66%;
	 			float: right;
	 			margin-left: 2%;
	 			font-size: $font12;
	 			color: #999;
	 			line-height: rem(20rem);
	 			display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				overflow: hidden;
	 			h3{
	 				font-size: $font18;
	 				color: $c3c3c;
	 				font-weight: bold;
	 				line-height: rem(26rem);
					margin-bottom: rem(5rem);
					letter-spacing: rem(1rem);
	 			}
	 		}
	 		dd{
	 			width: 32%;
	 			height: rem(64rem);
	 			float: left;
	 			img{
	 				width: 100%;
	 				height: 100%;
	 			}
	 		}
	 	}
	}
}

</style>