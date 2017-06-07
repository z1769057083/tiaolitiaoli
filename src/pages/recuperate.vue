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
					<span>姓名:{{nickname}}</span>
					<span>年龄:{{age}}</span>
					<span>性别:{{genderText}}</span>
					<span>备注:{{comments}}</span>
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
						<dl class="s-marticlecon" v-for='soupItem in getSouplist'>
							<router-link :to="{ name:'soupDetail', query: { soupId: soupItem._id }}">
								<dt>
									<h3>{{soupItem.title}}</h3>
									{{soupItem.material}}
								</dt>
								<dd>
									<img :src="'http://139.162.116.116/image/soup/44/'+soupItem.index+'.jpg'" 
										  		onerror="this.src='http://placeholder.qiniudn.com/800'"/>
								</dd>
							</router-link>	
						</dl>
					</div>
					<!--商品部分-->
			        <div class="s-mgoods">
						<div class="s-mrecomment" v-for="(item, index) in listem">
							<h3 class="h3">{{item.title}}
								<router-link :to="{ name: 'allgoods', query: { categoryId: item.category }}">
								<a class="s-mrecomall" href="">查看全部</a>
								</router-link></h3>
							<div>
							<dl class="s-mrecomlist" v-for="temp in item.items">
									<router-link :to="{ name: 'goodsdetail', query: { itemid: temp._id }}">
									  <dt class="s-mreconimg">
									  	<img :src="'http://139.162.116.116/image/product/'+temp.index+'.png'" 
									  		onerror="this.src='http://placeholder.qiniudn.com/800'"/>
									  </dt>
										<dd class="s-mreconintro">
											<span>{{temp.name}}</span>
										</dd>
									</router-link>
								</dl>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
   </div>
</template>
<script>
    import axios from 'axios'
    import api from '../api/api'
    import ReportHelper from '../../static/reportHelper';
    import Common from '../../static/common';
    export default {
        data (){
            return{
                nickname:'',
				age:'',
				genderText:'',
				comments:'',
				listem:[],
			    getSouplist:[]
            }
        },
        methods: {
        	requestlist(){
			  	var that = this;
			  	axios.get(api.shopData)
				  .then(function (res) {
				  	if(res.data.errorCode == 0){
				  		res = res.data.returnValue
				  		that.listem = res
				  		console.log(that.listem)
				  	}
				  })
				  .catch(function (error) {
				    console.log(error)
				  })
			},
			getSoup(){
			  	var that = this;
			  	axios.get(api.allSoupData)
				  .then(function (res) {
				  	if(res.data.errorCode == 0){
							res = res.data.returnValue
				  		that.getSouplist = res
				  		console.log(that.getSouplist)
				  	}
				  })
				  .catch(function (error) {
				    console.log(error)
				  })
			  }
        },
        mounted(){
        	document.title ='调理方法'
        	document.documentElement.scrollTop = 0
            document.body.scrollTop = 0
        	this.requestlist()
		  	this.getSoup()
            let user=JSON.parse(localStorage.getItem(Account_Index));
            let xianTianData=JSON.parse(localStorage.getItem(XianTianAnswer_Index));
            let houTianData=JSON.parse(localStorage.getItem(HouTianAnswer_Index));
            this.nickname=user.nickname;
            this.genderText=xianTianData.gender=='F'?'女':'男';
            this.age=new Date().getFullYear()- new Date(xianTianData.birthday).getFullYear();
            if(houTianData&&houTianData.femaleStatus){
                this.comments=houTianData.femaleStatus;
			}
        }
    }
</script>
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
				 			display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 2;
							overflow: hidden;
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
					  /*商品列表*/
			 	.s-mgoods{
			 		width: 100%;
			 		overflow: hidden;
			 		background: #fff;
			 		.s-mrecomment{
				 		width: 100%;
				 		overflow: hidden;
				 		padding: 0.32rem 0 0.28rem;
				 		border-bottom: rem(1rem) solid #e8e8e8;
				 		.h3{
					 		font-size: 0.42rem;
					 		line-height: 0.59rem;
					 		color: #000;
					 		font-weight: bold;
					 		margin-bottom: 0.26rem;
					 		background: url(../assets/shoptitleft.png) no-repeat left;
					 		padding-left: 2%;
					 		.s-mrecomall{
						 		font-size: 0.35rem;
						 		color: #c69b70;
						 		float: right;
						 		font-weight: normal;
						 		background: url(../assets/s-mrecomall.png) no-repeat right;
						 		background-size: 0.16rem 0.32rem; 
						 		padding-right: 3%;
						 	}
					 	} 	
				 	}
				 	.s-mrecomlist{
				 		width: 31.9%;
				 		float: left;
				 		margin-right: 2.1%;
				 		margin-bottom: 0.26rem;
				 		.s-mreconimg{
					 		width: 100%;
					 		height: 2.24rem;
					 		margin-bottom: 0.21rem;
					 		img{
						 		width: 100%;
						 		height: 100%;
						 	}
					 	}
					 	.s-mreconintro{
					 		width: 100%;
					 		overflow: hidden;
					 		span{
						 		font-size: 0.35rem;
						 		color: #000;
						 		line-height: 0.48rem;
						 	}
					 	}
				 	}
				 	.s-mrecomlist:nth-child(3n){
				 		margin-right: 0;
				 	}
			 	} 
		 	}
		}
	}
}

</style>
