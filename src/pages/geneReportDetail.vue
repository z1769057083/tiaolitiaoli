<template>
    <div class='geneReportDetail'>
    	<h3 class="title"><img src="../assets/geneReportH3.png" alt="" />{{disease_name}}简介</h3>
        <dl class="detail-top">
        	<dt></dt>
        	<dd>{{section1}}</dd>
        </dl>
        <dl class="detail-top">
        	<dt class="yellow"></dt>
        	<dd>{{section2}}</dd>
        </dl>
        <h3 class="title title1"><img src="../assets/geneReportTit.png" alt="" />{{disease_name}}检测结果</h3>
        <div class="detail-risk">
        	<div v-if="geneDetailList.riskLevel=='low'" class="detail-mcen">正常</div>
	        <div v-if="geneDetailList.riskLevel=='middle'" class="detail-mcen detail-center">中度风险</div>
	        <div v-if="geneDetailList.riskLevel=='high'" class="detail-mcen detail-high">高度风险</div>
        </div>
        <p class="detail-text">您的基因风险值高于</p>
        <p class="detail-text detail-text1"><span>{{geneDetailList.belowUserPercentage}}%</span>的人</p>
        <div class="geneReportBot">
        	<img class="people" :style="{left: geneDetailList.belowUserPercentage+'%'}" src="../assets/geneReportPeople.png"/>
        </div>       
        <div class="detail-mbot">
        	<p><span></span>正常</p>
        	<p><span class="center"></span>中度风险</p>
        	<p class="height"><span></span>高度风险</p>
        </div>
        <h3 class="title"><img src="../assets/geneReportTit1.png" alt="" />我的易感基因位点解读</h3>
        <div class="detail-bottom">
        	<div class="detail-botTop">
        		<p :class="{'active': toggle === 0}" @click="change_active(0,$event)">位点详情</p>
        		<p :class="{'active': toggle === 1}" @click="change_active(1,$event)">参考文献</p>
        	</div>
        	<div class="detail-botCen" v-if='tabHidden' v-for='item in geneDetailList.details'>
        		<p v-if="item.refer!==''">{{item.refer}}</p>
        	</div>
        	<ul class="detail-botMain" v-if='!tabHidden' >
        		<li class="detail-botLi">
        			<p>位点</p>
        			<p>基因型</p>
        			<p>健康评价</p>
        			<p>基因型占比</p>
        		</li>
	        	<template v-for='items in geneDetailList.details'>
		        	<li>
		        		<p>{{items.snp}}</p>
		        		<p>{{items.gene_type}}</p>
		        		<p v-if="items.risk===1">正常</p>
		        		<p v-if="items.risk!==1">风险增加{{items.risk}}倍</p>
		        		<p>{{items.percentage|floatToPercentage}}%</p>
		        	</li>
	        	</template>
        	</ul>
        </div>
        <div class="tiaoLi">
        <router-link to="/" tag='a'>调理身体</router-link>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    import api from '../api/api'
    import mapper from '../common/diseaseMapper.js'
    export default {
        data() {
            return {
				toggle: 0,
				tabHidden: false,
				geneDetailList:[],
				code:'',
				disease_type:'',
				section1:'',
				section2:'',
				disease_name:''				
            }
        },
        methods: {
        	geneDetailRequest(){
		        var that = this;
		        this.code = this.$route.query.code;
		        this.disease_type = this.$route.query.disease_type;
		        axios.get(api.geneDetailData + this.code+'&disease_type='+this.disease_type)
		          .then(function (res) {
		            if (res.data.errorCode == 0) {
		              res = res.data.returnValue
		              that.geneDetailList = res
		              console.log(that.geneDetailList)
		            }
		          })
		    },
			change_active(index,event) {
		        this.toggle = index
		        if(this.toggle==1){
		        	this.tabHidden = true
		        }else{
		        	this.tabHidden = false
		        }
		    }
        },
        mounted() {
        	this.geneDetailRequest()
        	document.documentElement.scrollTop = 0
    		document.body.scrollTop = 0
            document.title = "基因检测报告"
			this.disease_type = this.$route.query.disease_type;
			console.log(this.section1)
			this.disease_name = mapper[this.disease_type].name
			this.section1 = mapper[this.disease_type].section1
			this.section2 = mapper[this.disease_type].section2			
        }
    }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
    @import "../common/common.scss";
	.geneReportDetail{
		width: 100%;
		position: absolute;
		overflow: hidden;
		.title{
			width: 100%;
			overflow: hidden;
			line-height: rem(42rem);
			font-size: $font14;
			height: rem(42rem);
			border-bottom: 1px solid #c9caca;
			margin-bottom: rem(30rem);
			img{
				width: rem(20rem);
				height: rem(20rem);
				float: left;
				margin: rem(11rem) 1% 0 4%;
				
			}
		}
		.title1{
			border-bottom: 0;
			margin: rem(15rem) 0 rem(20rem);
		}
		.detail-top{
			width: 88%;
			margin-left: 6%;
			overflow: hidden;
			margin-bottom: rem(8rem);
			dt{
				width: rem(6rem);
				height: rem(72rem);
				float: left;
				background: #ffbcbc;
				border-radius: 20%;
			}
			.yellow{
				background: #f9e89f;
			}
			dd{
				width: 90%;
				padding: rem(10rem);
				background: #e6e6e6;
				float: right;
				min-height: rem(52rem);;
				border-radius: rem(10rem);
				line-height: rem(18rem);
				font-size: $font12;
				text-align: justify;
			}
		}
		.detail-risk{
			position: relative;
			width: 28%;
			margin-left: 36%;
			height: rem(35rem);
			border-radius: rem(20rem);			
			margin-bottom: rem(30rem);
		}
		.detail-mcen{
			width: 100%;
			background: #55c740;
			color: #fff;
			height: rem(35rem);
			text-align: center;
			line-height: rem(35rem);
			font-size: $font16;
			border-radius: rem(20rem);			
		}
		.detail-center{			
			background: #f9c72f;
		}
		.detail-high{			
			background: #ec4c22;
		}
		.detail-text{
			width: 40%;
			margin-left: 30%;
			font-size: $font14;
			color: #727171;
			line-height: rem(28rem);
			text-align: center;
			span{
				font-size: rem(36rem);
				color: #f98282;
			}
		}
		.detail-text1{
			font-size: rem(28rem);
		}
		.geneReportBot{
			width: 85%;
			margin-left: 7.5%;
			height: rem(66rem);
			margin-top: rem(30rem);
			background: url(../assets/geneReportBot.png) no-repeat center;
			background-size: 100%;
			position: relative;
			.people{
				width: rem(20rem);
				height: rem(66rem);
				position: absolute;
				top: 0;
			}
		}
		.detail-mbot{
			width: 76%;
			overflow: hidden;
			border-top: 1px solid #c9caca;
			padding-top: rem(18rem);
			margin: rem(30rem) 0 rem(30rem) 12%;
			p{
				float: left;
				line-height: rem(15rem);
				margin-right: 17%;
				font-size: $font12;
				color: #727171;
				span{
					width: rem(15rem);
					height: rem(15rem);
					border-radius: 50%;
					background: #55c740;
					display: inline-block;
					float: left;
					margin-right: rem(6rem);
				}
				.center{
					background: #f9c72f;
				}
			}
			.height{
				margin-right: 0;
				span{
					background: #ec4c22;
				}				
			}
		}
		.detail-bottom{
			width: 85%;
			margin-left: 7.5%;
			overflow: hidden;
			height: rem(380rem);
			.detail-botTop{
				width: 100%;
				border-bottom: 0.05px solid #c9caca;
				font-size: $font12;
				line-height: rem(18rem);
				height: rem(18rem);
				p{
					float: left;
					line-height: rem(18rem);
					margin: 0 17%;
				}
				.active{
					border-bottom: 3px solid #00a0e9;
				}
			}
			.detail-botCen{
				margin-top: rem(20rem);
				overflow: hidden;
				p{
					line-height: rem(18rem);
					font-size: $font12;
					text-align: justify;
					margin-bottom: rem(10rem);
					span{
						color: #00a0e9;
					}
				}
			}
			.detail-botMain{
				width: 100%;
				margin-top: rem(20rem);
				overflow: hidden;
				li{
					border-bottom: 1px solid #c9caca;
					line-height: rem(46rem);
					height: rem(46rem);
					p{
						float: left;
						line-height: rem(46rem);
						text-align: center;
						font-size: $font13;
					}
					p:nth-child(1){
						width: 25%;
					}
					p:nth-child(2){
						width: 15%;
					}
					p:nth-child(3){
						width: 40%;
					}
					p:nth-child(4){
						width: 20%;
					}	
				}
				.detail-botLi{
					height: rem(26rem);
					line-height: rem(26rem);
					p{
						line-height: rem(26rem);
						color: #9fa0a0;
						font-size: $font12;
					}
				}
			}
		}
		.tiaoLi{
			margin-top: rem(20rem);
			width: 28%;
			margin-left: 36%;
			background: #00a0e9;
			height: rem(35rem);
			text-align: center;
			line-height: rem(35rem);
			font-size: $font16;
			border-radius: rem(10rem);
			margin-bottom: rem(40rem);
			a{
				color: #fff;
			}
		}
	}
</style>



