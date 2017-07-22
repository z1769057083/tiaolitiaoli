<template>
    <div class='genetic'>
        <div class="genetic-main" v-if='orderList'>
	        <div class="genetic-center" v-for='(list,index) in orderList'>
	        	<p class="genetic-name" @click='viewOrderStepDetail(index)'>
	        		{{list.nickName}}
	        		<span v-if='list.itemQrCode'>{{list.itemQrCode}}</span> 
	        		<span class="right">
	        			{{list.createTime|filterTime}}
	        		</span>
	        	</p>
	        	<ul @click='viewOrderStepDetail(index)'>
	        		<li class="genetic-liLeft">
	        			<img class="liLeftCar" src="../assets/geneticCar.png" alt="" />
	        			<p>当前进度</p>
	        			<span class="liLeftRight">{{list.status}}/5</span>
	        		</li>
	        		<li class="genetic-liCenter">
	        			<p class="liCenterLine"></p>
	        			<span v-if='list.status==1' class="liCenterActive"></span>
	        			<span v-else></span>
	        			<span v-if='list.status==1' class='liCenterbot liCenterDefult'></span>
	        			<span v-else class="liCenterbot liCenterActive" ></span>
	        			
	        		</li>
	        		<li class="genetic-liRight">
	        			<div class="liRightTitle" v-if='list.status==1||list.status==2'>	       				
	        				<p>产品发货</p>
	        				<span>您购买的商品已寄出，请注意查收。</span>
	        			</div>
	        			<div class="liRightTitle" v-if='list.status==1||list.status==2||list.status==3'>	        				
	        				<p>唾液采集</p>
	        				<span>您未进行唾液样本采集，请依照【唾液采集说明】，完成采集，并在2日内寄回指定地址。</span>
	        			</div>
	        			<div class="liRightTitle" v-if='list.status==3||list.status==4'>	        				
	        				<p>回寄收货确认</p>
	        				<span>您的基因样本顺利到达基因检测中心。</span>
	        			</div>
	        			<div class="liRightTitle" v-if='list.status==5||list.status==4'>	        				
	        				<p>样本检测</p>
	        				<span>请耐心等待3~5个工作日，检测结果将以微信形式推送到您的手机端，请注意查看。</span>
	        			</div>
	        			<div v-if='list.status==5' class="liRightTitle">	       				
	        				<p>查看报告</p>
	        				<span>您的检测报告已出，请进入【调理调理】微信公众号，查看您的基因结果。</span>
	        			</div>
	        		</li>
	        	</ul>
	        	<p class="geneticReport viewReport" v-if='list.status==5' @click='viewGeneReport(index)'><span>我的基因报告</span></p>
	        	<p class="geneticReport" v-else><span>我的基因报告</span></p>
	        </div>
	        <div v-if='orderList.length>=1' class="s-mrecombottom">没有更多了</div>
        </div>
        <div class="null-genetic" v-else>
    		<img src="../assets/orderListNull.png"/>
    		<p>您还没有任何检测结果</p>
    		<div class="nullGene-btn">
    			<p @click='bindBarCode'>绑定唾液采集器</p>
    			<p @click='payGeneNow' class="payGene">前去购买</p>
    		</div>
    	</div>       
        <div class="mask" v-if='orderDetailStepHidden'>
        	<div class='mask-main'>
        		<div class="mask-top">
        			进度流程
        		</div>
        		<div class="maskTop-center">
        			<div class="maskTop-cleft">
        				<p class="maskTopLine"></p>
        				<span :class="{'cleftActive':cleftdot,'cleftActiveNow':cleftNow}"></span>
        				<span :class="{'cleftActive':cleftdot1,'cleftActiveNow':cleftNow1}" class="cleft1"></span>
        				<span :class="{'cleftActive':cleftdot2,'cleftActiveNow':cleftNow2}" class="cleft2"></span>
        				<span :class="{'cleftActive':cleftdot3,'cleftActiveNow':cleftNow3}" class="cleft3"></span>
        				<span :class="{'cleftActiveNow':cleftNow4}" class="cleft4"></span>
        			</div>
        			<div class="maskTop-cright">
        				<div>
        					<p :class="{'cRightActivep':cleftNow}">产品发货</p>
        					您购买的商品已寄出，请注意查收。
        				</div>
        				<div class="cRight1">
        					<p :class="{'cRightActivep':cleftNow1}">唾液采集</p>
        					您未进行唾液样本采集，请依照【唾液采集说明】，完成采集，并在2日内寄回指定地址。
        				</div>
        				<div class="cRight2">
        					<p :class="{'cRightActivep':cleftNow2}">回寄收货确认</p>
        					您的基因样本顺利到达基因检测中心。
        				</div>
        				<div class="cRight3">
        					<p :class="{'cRightActivep':cleftNow3}">样本检测</p>
        					请耐心等待3~5个工作日，检测结果将以微信形式推送到您的手机端，请注意查看。
        				</div>
        				<div class="cRight4">
        					<p :class="{'cRightActivep':cleftNow4}">查看报告</p>
        					您的检测报告已出，请进入【调理调理】微信公众号，查看您的基因结果。
        				</div>
        			</div>
        		</div>
        	</div> 
        	<img class="close" @click='closeOrderDetailStep' src="../assets/geneticPhysicalClose.png"/>
        </div>
    </div>
</template>
<script>
    import Toast from '@/packages/toast'
    import axios from 'axios'
    import api from '../api/api'
    export default {
        data() {
            return {
              useId:'',
              orderList:[],
              cleftdot:false,
              cleftNow: false,
              cleftdot1:false,
              cleftNow1: false,
              cleftdot2:false,
              cleftNow2: false,
              cleftdot3:false,
              cleftNow3: false,
              cleftdot4:false,
              cleftNow4: false,
              orderDetailStepHidden: false
            }
        },
        filters: {
            filterTime(time){
            	return time = time.substring(0,10)
            }
        },
        methods: {
        	viewOrderStepDetail(index){
        		this.orderDetailStepHidden = true
        		if(this.orderList[index].status == 1){
                	this.cleftNow = true
                	this.step = 1
                }else if(this.orderList[index].status == 2){
                	this.cleftNow = false
                	this.cleftdot = true
                	this.cleftNow1 = true
                	this.step = 2
                }else if(this.orderList[index].status == 3){
                	this.cleftNow = false
                	this.cleftdot = true
                	this.cleftNow1 = false
                	this.cleftdot1 = true
                	this.cleftNow2 = true
                	this.step = 3
                }else if(this.orderList[index].status == 4){
                	this.cleftNow = false
                	this.cleftdot = true
                	this.cleftNow1 = false
                	this.cleftdot1 = true
                	this.cleftNow2 = false
                	this.cleftdot2 = true
                	this.cleftNow3 = true
                	this.step = 4
            
                }else if(this.orderList[index].status == 5){
                	this.cleftNow = false
                	this.cleftdot = true
                	this.cleftNow1 = false
                	this.cleftdot1 = true
                	this.cleftNow2 = false
                	this.cleftdot2 = true
                	this.cleftNow3 = false
                	this.cleftNow4 = true
                	this.cleftdot3 = true
                	this.step = 5               	
                }
        	},
            geneOrderListStatus(){
		        var that = this;
		        this.type = this.$route.query.type;
		        axios.get(api.myOrders+this.useId+'&type=gene')
		            .then(function (res) {                   	
		                if (res.data.errorCode == 0) {
	            			res = res.data.returnValue
		                	that.orderList = res
			                console.log(that.orderList)
			            }
		            })
	   		},
	   		viewGeneReport(index){
	   			this.$router.push({path:'geneReport',query: { code:this.orderList[index].itemQrCode }})
	   		},
	   		closeOrderDetailStep(){
	   			this.orderDetailStepHidden = false
	   		},
	   		bindBarCode(){
	   			this.$router.push({path:'/bindBarCode'})
	   		},
	   		payGeneNow(){
	   			this.$router.push({path:'/gene'})
	   		}
        },
        mounted() {       	
            document.title = '基因体质'
            if (window.localStorage.getItem(Account_Index)) {
                let account = JSON.parse(window.localStorage.getItem(Account_Index))
                this.useId = account._id      
                console.log(this.useId)
            }
            this.geneOrderListStatus()
        }
    }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
    @import "../common/common.scss";
.genetic{
	width: 100%;
	height: 100%;
	position: absolute;
	background: #F6F6F6;
	.null-genetic{
		width: 100%;
		height: 100%;
		position: absolute;
		text-align: center;
		font-size: $font14;
		color: #999;
		img{
			width: rem(70rem);
			height: rem(94rem);
			margin-top: rem(100rem);
			margin-bottom: rem(24rem);
		}
		.nullGene-btn{
			width: 100%;
			overflow: hidden;
			margin-top: rem(20rem);
			p{
				width: rem(118rem);
				height: rem(36rem);
				float: left;
				border: 1px solid #999;
				text-align: center;
				line-height: rem(36rem);
				color: #3c3c3c;
				font-size: $font14;
				border-radius: rem(3rem);
				margin-left: 14%;
			}
			.payGene{
				width: rem(120rem);
				height: rem(38rem);
				line-height: rem(38rem);
				color: #fff;
				background: #f08300;
				border: 0;
				margin-left: 7%;
			}
		}
		
	}
	.genetic-main{
		width: 100%;
		overflow: hidden;
		position: absolute;
		.genetic-center{
			width: 100%;
			margin-top: rem(10rem);
			background: #fff;
			.genetic-name{
				width: 94%;
				padding: 0 3%;
				height: rem(40rem);
				line-height: rem(40rem);
				border-bottom: 1px solid #efefef;
				font-size: $font14;
				.right{
					float: right;
				}
				
			}
			ul{
				width: 94%;
				overflow: hidden;
				padding: rem(10rem) 3%;
				border-bottom: 1px solid #efefef;
				li{
					float: left;
				}
				.genetic-liLeft{
					width: 16%;
					margin: 0 2%;
					height: rem(92rem);
					text-align: center;
					color: #999;
					.liLeftCar{
						width: rem(30rem);
						height: rem(18rem);
						margin-bottom: rem(10rem);
						margin-top: rem(20rem);
					}
					p{
						margin-bottom: rem(5rem);
					}
					.liLeftRight{
						float: right;
						margin-right: 10%;
						letter-spacing: rem(2rem);
					}
				}
				.genetic-liCenter{
					width: rem(9rem);
					height: rem(92rem);
					position: relative;
					margin-right: 4%;
					.liCenterLine{
						height: rem(92rem);
						width: rem(2rem);
						background: #e7e7e7;
						margin: rem(3.5rem);
					}
					span{
						display: block;
						width: rem(5rem);
						height: rem(5rem);
						background: #fff;
						border: 2px solid #1babe8;
						border-radius: 50%;
						position: absolute;
						top: rem(18rem);
						left: 0;
						right: 0;
					}
					.liCenterDefult{
						width: rem(7rem);
						height: rem(7rem);
						background: #e7e7e7;
						left: rem(1rem);
						border: 0;
					}
					.liCenterbot{
						top: rem(68rem);
					}
					.liCenterActive{
						background: #1babe8;
						width: rem(7rem);
						height: rem(7rem);
						left: 0;
						border: 1px solid #e7e7e7;
					}
					
				}
				.genetic-liRight{
					overflow: hidden;
					height: rem(92rem);
					width: 72%;
					.liRightTitle{
						margin-top: rem(15rem);
						p{
							font-size: $font14;
							margin-bottom: rem(5rem);
						}
						span{
							color: #999;
							width: 100%;
							overflow: hidden;
							font-size: $font12;
							text-overflow:ellipsis;
							white-space:nowrap;
							display: inline-block;
							
						}
					}
					.liRightTitle1{
						margin-top: rem(20rem);
					}
				}
			}
			.geneticReport{
				width: 94%;
				padding: rem(6rem) 3%;
				height: rem(28rem);
				border-bottom: 1px solid #efefef;
				span{
					width: 26%;
					height: rem(26rem);
					border: 1px solid #bebab9;
					text-align: center;
					line-height: rem(26rem);
					display: block;
					border-radius: rem(4rem);
					color: #bcbbb7;
					float: right;
					font-size: $font13;
					
				}
			}
			.viewReport{
				span{
					background: #1babe8;
					border: 0;
					color: #fff;
					height: rem(28rem);
					line-height: rem(28rem);
				}				
			}
		}
		.s-mrecombottom{
	 		line-height: 0.45rem;
	 		font-size: 0.32rem;
	 		color: #999;
	 		width: 100%;
	 		overflow: hidden;
	 		text-align: center;
	 		padding: rem(20rem) 0;
	 		display: block;
	 		background: #f6f6f6;
	 		font-size: $font13;
	 	}
	}
	.mask{
		width: 100%;
		height: 100%;
		position: absolute;
		background: rgba(0,0,0,0.5);
		.mask-main{
			width: 88%;
			margin-left: 6%;
			background: #fff;
			height: rem(410rem);
			border-radius: rem(8rem);
			margin-top: rem(80rem);
			overflow: hidden;
			.mask-top{
				width: 100%;
				height: rem(70rem);
				text-align: center;
				line-height: rem(36rem);
				font-size: $font16;
				background: url(../assets/geneticPhysicalBg.png) no-repeat center;
				background-size: 100%;
			}
			.maskTop-center{
				margin-top: rem(15rem);
				width: 94%;
				margin-left: 3%;
				overflow: hidden;
				.maskTop-cleft{
					width: rem(11rem);
					height: rem(246rem);
					float: left;
					margin-left: 5%;
					position: relative;
					margin-top: rem(5rem);
					.maskTopLine{
						width: rem(2rem);
						height: rem(246rem);
						background: #e7e7e7;
						margin-left: rem(4.5rem);
					}
					span{
						width: rem(7rem);
						height: rem(7rem);
						position: absolute;
						left: rem(2rem);
						display: block;
						top: 0;
						background: #e7e7e7;
						border-radius: 50%;
					}
					.cleft1{
						top: rem(52rem);
					}
					.cleft2{
						top: rem(116rem);
					}
					.cleft3{
						top: rem(172rem);
					}
					.cleft4{
						top: rem(238rem);
					}
					.cleftActiveNow{
						background: #00a0e8;
						border: 2px solid #e7e7e7;
						left: 0;
					}
					.cleftActive{
						background: #fff;
						border: 1.5px solid #00a0e8;
						left: rem(1rem);
					}
				}
				.maskTop-cright{
					float: right;
					width: 87%;
					height: rem(300rem);
					position: relative;
					div{
						width: 100%;
						overflow: hidden;
						position: absolute;
						top: 0;
						left: 0;
						line-height: rem(16rem);
						color: #9c9c9c;
						font-size: $font13;
						p{
							font-size: $font15;	
							line-height: rem(18rem);
							color: #3c3c3c;	
							margin-bottom: rem(3rem);					
						}
						.cRightActivep{
							color: #00a0e8;
						}
					}
					.cRight1{
						top: rem(52rem);
					}
					.cRight2{
						top: rem(116rem);
					}
					.cRight3{
						top: rem(172rem);
					}
					.cRight4{
						top: rem(238rem);
					}
				}
			}
		}
		.close{
			width: rem(40rem);
			height: rem(40rem);
			margin-top: rem(30rem);
			margin-left: 45%;
		}
	}
}
</style>

