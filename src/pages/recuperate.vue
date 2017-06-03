<template>
	<div class='recuperate'>
		<div class="recuperate-main">
			<div class="recuperate-top">
				<img src="../assets/recuperate1.png"/>
			</div>
			<h2>6-7月养生处方</h2>
			<img class="recuperatebg" src="../assets/recuperatebg.png"/>
			<div class="recuperate-mcon">
				<div class="mcon-name">
					<span>姓名:芝麻姑娘</span>
					<span>年龄:25</span>
					<span>性别:女</span>
					<span>备注:备孕</span>
				</div>
				<div class="mcon-symptom">
					<span>主述症状:</span>饭后上中腹痛，或有恶心、抠吐、积食感，病腹疼痛难忍
				</div>
				<div class="mcon-season">
					<p class="tit">R</p>
					<div>
						<span>当季体质:</span>
						<p>
							水平、火强、土平、金平、水平
							根据你的体质和所在地区基本月气候的变化，
							我会更新你的养生调理方案，你可以通过公众号到时查看，
							祝你健康！
						</p>
					</div>
				</div>
				<div class="s-marticle">
				<div class="s-mrecomment">
					<h3 class="s-marttitle">个性化推荐</h3>
					<dl class="s-marticlecon">
						<dt>
							<h3>音乐调理让你轻松？</h3>
							中医里很多看似神秘莫测的变化说法
						</dt>
						<dd><img src="../assets/shoparticle.png"/></dd>
					</dl>
					<dl class="s-marticlecon">
						<dt>
							<h3>《黄帝内经》告诉你如何能百病不侵</h3>
							告诉你如何修炼心法。
						</dt>
						<dd><img src="../assets/shoparticle.png"/></dd>
					</dl>
					<dl class="s-marticlecon1">
						<dt>
							<h3>怎么吃让你更健康？</h3>
						</dt>
						<dd class="s-martimg">
							<img src="../assets/shoparticle1.png"/>
						</dd>
						<dd class="s-martimg">
							<img src="../assets/shoparticle1.png"/>
						</dd>
						<dd class="s-martimg">
							<img src="../assets/shoparticle1.png"/>
						</dd>
					</dl>
						<dl class="s-marticlecon">
						<dt>
							<h3>音乐调理让你轻松？</h3>
							中医里很多看似神秘莫测的变化说法
						</dt>
						<dd>
							<img src="../assets/shoparticle.png"/>
						</dd>
					</dl>
					<dl class="s-marticlecon1">
						<dt>
							<h3>中医调理见效快？</h3>
						</dt>
						<dd class="s-martimg">
							<img src="../assets/shoparticle1.png"/>
							<p class="s-martimgTitle">48小时特惠 引火归元贴</p>
							<p class="s-martimgPic">¥69.00<span>¥128.00</span></p>
						</dd>
						<dd class="s-martimg">
							<img src="../assets/shoparticle1.png"/>
							<p class="s-martimgTitle">48小时特惠 引火归元贴</p>
							<p class="s-martimgPic">¥69.00<span>¥128.00</span></p>
						</dd>
						<dd class="s-martimg">
							<img src="../assets/shoparticle1.png"/>
							<p class="s-martimgTitle">48小时特惠 引火归元贴</p>
							<p class="s-martimgPic">¥69.00<span>¥128.00</span></p>
						</dd>
					</dl>
				</div>
			</div>
			</div>
		</div>
   </div>
</template>
<style scoped lang="scss">
@import "../common/common.scss";
.recuperate{
	width: 100%;
	position: absolute;
	background: url(../assets/indexbg.png) repeat-y;
	background-size: cover;
	padding: rem(30rem) 0;
	.recuperate-main{
		width: 86.6%;
		border: 1px solid #c69b70;
		margin-left: 6.7%;
		background: #fff;
		padding-top: rem(34rem);
		.recuperate-top{
			width: 47%;
			height: rem(34rem);
			position: absolute;
			top: rem(14rem);
			left: 26.5%;
			img{
				width: 100%;
				height: 100%;
			}
		}
		h2{
			font-size: $font24;
			text-align: center;
		}
		.recuperatebg{
			width: 49%;
			margin: rem(10rem) 25.5% rem(8rem);
		}
		.recuperate-mcon{
			width: 90%;
			margin-left: 5%;
			.mcon-name{
				border-bottom: 1px dotted #ddb88e;
				line-height: rem(24rem);
				font-weight: bold;
				margin-bottom: rem(12rem);
				span{
					margin-right: 4%;
				}
				span:nth-child(1){
					margin-right: 12%;
				}
			}
			.mcon-symptom{
				width: 100%;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				font-size: $font12;
				padding-bottom: rem(10rem);
				border-bottom: 1px solid #f4eade;
				span{
					font-weight: bold;
					margin-right: 2%;
				}
			}
			.mcon-season{
				width: 100%;
				overflow: hidden;
				margin-top: rem(10rem);
				padding-bottom: rem(10rem);
				border-bottom: 1px solid #f4eade;
				.tit{
					font-size: $font20;
				}
				div{	
					span{
						display: block;
						font-weight: bold;	
						float: left;
						line-height: rem(16rem);
					}
					p{
						width: 80%;
						float: right;
						line-height: rem(16rem);
					}
				}
			}
			/*文章部分*/
		    .s-marticle{
		 		width: 100%;
		 		overflow: hidden;
		 		background: #fff;
		 		.s-mrecomment{
			 		width: 100%;
			 		overflow: hidden;
			 		padding-top: rem(5rem);
			 		.s-marttitle{
				 		font-size: rem(16rem);
				 		line-height: rem(40rem);
				 		color: #000;
				 		font-weight: bold;
				 		margin-bottom: 0.26rem;
				 		background: url(../assets/shoptitleft.png) no-repeat center left;
				 		padding-left: 2%;
				 		border-bottom: rem(1rem) solid #f4eade;
				 	}
				 	.s-marticlecon{
				 		width: 100%;
				 		overflow: hidden;
				 		margin-top: rem(15rem);
				 		padding-bottom: rem(15rem);
				 		border-bottom: rem(1rem) solid #f4eade;
				 		dt{
				 			width: 64%;
				 			float: left;
				 			margin-right: 2%;
				 			font-size: $font12;
				 			color: #999;
				 			line-height: rem(18rem);
				 			h3{
				 				font-size: $font18;
				 				color: $c3c3c;
				 				font-weight: bold;
				 				line-height: rem(22rem);
								margin-bottom: rem(5rem);
								letter-spacing: rem(1rem);
				 			}
				 		}
				 		dd{
				 			width: 32%;
				 			height: rem(70rem);
				 			float: right;
				 			img{
				 				width: 100%;
				 				height: 100%;
				 			}
				 		}
				 	}
				 	.s-marticlecon1{
				 		width: 100%;
				 		overflow: hidden;
				 		margin-top: rem(15rem);
				 		padding-bottom: rem(15rem);
				 		border-bottom: rem(1rem) solid #f4eade;
				 		dt{
				 			width: 100%;
				 			h3{
				 				font-size: $font18;
				 				color: $c3c3c;
				 				font-weight: bold;
				 				line-height: rem(26rem);
								margin-bottom: rem(5rem);
								letter-spacing: rem(1rem);
				 			}
				 		}
				 		.s-martimg{
				 			width: 31%;
				 			float: left;
				 			margin-right: 3%;
				 			overflow: hidden;
				 			img{
				 				width: 100%;
				 				height: rem(68rem);
				 			}
				 			.s-martimgTitle{
				 				font-size: $font12;
				 				line-height: rem(16rem);
				 				font-weight: bold;
				 			}
				 			.s-martimgPic{
				 				color: #ff4443;
				 				line-height: rem(20rem);
				 				span{
				 					font-size: $font12;
				 					color: #999;
				 					text-decoration: line-through;
				 					line-height: rem(20rem);
				 					float: right;
				 				}
				 			}
				 		}
				 		.s-martimg:nth-child(4){
				 			margin-right: 0;
				 		}
				 	}
				}
		 	}
		}
	}
}

</style>
