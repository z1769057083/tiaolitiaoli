<template>
    <div class='geneReportDetail'>
    	<h3 class="title"><img src="../assets/geneReportH3.png" alt="" />肝癌简介</h3>
        <dl class="detail-top">
        	<dt></dt>
        	<dd>肝细胞癌是临床上常见的恶性肿瘤之一，其恶性度高、病情进展快、致死率高。肝癌已经成为严重威胁我国人民健康和生命的一大杀手，其危险性不容小视。</dd>
        </dl>
        <dl class="detail-top">
        	<dt class="yellow"></dt>
        	<dd>全球每年约有60万人死于肝癌，其中约55%发生在中国。我国肝癌高发年龄为35-45岁，且有发病率上升、年龄趋小的态势。</dd>
        </dl>
        <h3 class="title title1"><img src="../assets/geneReportTit.png" alt="" />肝癌检测结果</h3>
        <div class="detail-mcen">正常</div>
        <p class="detail-text">您的基因风险值高于</p>
        <p class="detail-text detail-text1"><span>68%</span>的人</p>
        <img class="geneReportBot" src="../assets/geneReportBot.png"/>
        <div class="detail-mbot">
        	<p><span></span>正常</p>
        	<p><span class="center"></span>中度风险</p>
        	<p class="height"><span></span>高度风险</p>
        </div>
        <p class="detail-text2">中国平均患病率  25%</p>
        <h3 class="title"><img src="../assets/geneReportTit1.png" alt="" />我的易感基因位点解读</h3>
        <div class="detail-bottom">
        	<div class="detail-botTop">
        		<p :class="{'active': toggle === 0}" @click="change_active(0,$event)">位点详情</p>
        		<p :class="{'active': toggle === 1}" @click="change_active(1,$event)">参考文献</p>
        	</div>
        	<div class="detail-botCen" v-if='tabHidden'>
        		<p><span>[1] Siegel R L, Miller K D,</span> Jemal A. Cancer statistics, 2016 [J][1] Siegel R L, Miller K D, Jemal A. Cancer statistics, 2016 [J]</p>
        		<p><span>[1] Siegel R L, Miller K D,</span> Jemal A. Cancer statistics, 2016 [J][1] Siegel R L, Miller K D, Jemal A. Cancer statistics, 2016 [J]</p>
        		<p><span>[1] Siegel R L, Miller K D,</span> Jemal A. Cancer statistics, 2016 [J][1] Siegel R L, Miller K D, Jemal A. Cancer statistics, 2016 [J]</p>
        		<p><span>[1] Siegel R L, Miller K D,</span> Jemal A. Cancer statistics, 2016 [J][1] Siegel R L, Miller K D, Jemal A. Cancer statistics, 2016 [J]</p>
        	</div>
        	<ul class="detail-botMain" v-if='!tabHidden'>
        		<li class="detail-botLi"><p>位点</p><p>基因型</p><p>健康评价</p><p>基因型占比</p></li>
        		<li><p>rs123456789</p><p>AG</p><p>风险增加1.39倍</p><p>42.7%</p></li>
        		<li><p>rs123456789</p><p>AG</p><p>风险增加1.39倍</p><p>42.7%</p></li>
        		<li><p>rs123456789</p><p>AG</p><p>风险增加1.39倍</p><p>42.7%</p></li>
        		<li><p>rs123456789</p><p>AG</p><p>风险增加1.39倍</p><p>42.7%</p></li>
        		<li><p>rs123456789</p><p>AG</p><p>风险增加1.39倍</p><p>42.7%</p></li>
        		<li><p>rs123456789</p><p>AG</p><p>风险增加1.39倍</p><p>42.7%</p></li>
        		
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
    export default {
        data() {
            return {
				toggle: 0,
				tabHidden: false
            }
        },
        methods: {
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
            document.title = "基因检测报告"
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
				height: rem(52rem);
				border-radius: rem(10rem);
				line-height: rem(18rem);
				font-size: $font12;
				text-align: justify;
			}
		}
		.detail-mcen{
			width: 28%;
			margin-left: 36%;
			background: #55c740;
			color: #fff;
			height: rem(35rem);
			text-align: center;
			line-height: rem(35rem);
			font-size: $font16;
			border-radius: rem(20rem);
			margin-bottom: rem(30rem);
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
		}
		.detail-mbot{
			width: 76%;
			margin-left: 12%;
			overflow: hidden;
			border-top: 1px solid #c9caca;
			padding-top: rem(18rem);
			margin-top: rem(30rem);
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
		.detail-text2{
			text-align: center;
			font-size: $font16;
			color: #4c4948;
			margin: rem(30rem) 0 rem(20rem);
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



