<template>
    <div class='geneReport'>
         <h3 class="title">六大高发癌症风险检测报告</h3>
         <div class="receive-main">
         	<div class="receive-name">
	         	<p>样本编号:1234567890</p>
	         	<p>姓名:李依依</p>
	         	<p class="last">报告更新时期:2017-08-08</p>
	        </div>
        	<dl class="receive-mtit">
        		<dt>检测项目</dt>
        		<dd>我的患病风险</dd>
        	</dl>
        	<router-link :to="{ name: 'geneReportDetail', query: { code: code ,disease_type:'lung'}}">
        	<dl>
        		<dt>肺癌</dt>
        		<dd>
        			<span></span>
        			<p class="receive-mCen1"></p>
        			<p v-if="list.lungRisk==='low'" class="receive-mCen1 activeDown">低</p>
        			<p class="receive-mCen2"></p>
        			<p v-if="list.lungRisk==='middle'" class="receive-mCen2 activeCen">中</p>
        			<p class="receive-mCen3"></p> 
        			<p v-if="list.lungRisk==='high'" class="receive-mCen3 activeUp">高</p>
        		</dd>
        	</dl>
        	</router-link>
        	<router-link :to="{ name: 'geneReportDetail', query: { code: code ,disease_type:'stomach'}}">
        	<dl>
        		<dt>胃癌</dt>
        		<dd>
        			<span></span>
        			<p class="receive-mCen1"></p>
        			<p v-if="list.stomachRisk==='low'" class="receive-mCen1 activeDown">低</p>
        			<p class="receive-mCen2"></p>
        			<p v-if="list.stomachRisk==='middle'" class="receive-mCen2 activeCen">中</p>
        			<p class="receive-mCen3"></p> 
        			<p v-if="list.stomachRisk==='high'" class="receive-mCen3 activeUp">高</p>        			
        		</dd>
        	</dl>
        	</router-link>
        	<router-link :to="{ name: 'geneReportDetail', query: { code: code ,disease_type:'liver'}}">
        	<dl>
        		<dt>肝癌</dt>
        		<dd>
        			<span></span>
        			<p class="receive-mCen1"></p>
        			<p v-if="list.liverRisk==='low'" class="receive-mCen1 activeDown">低</p>
        			<p class="receive-mCen2"></p>
        			<p v-if="list.liverRisk==='middle'" class="receive-mCen2 activeCen">中</p>
        			<p class="receive-mCen3"></p> 
        			<p v-if="list.liverRisk==='high'" class="receive-mCen3 activeUp">高</p>       			
        		</dd>
        	</dl>
        	</router-link>
        	<router-link :to="{ name: 'geneReportDetail', query: { code: code ,disease_type:'shiguan'}}">
        	<dl>
        		<dt>食管癌</dt>
        		<dd>
        			<span></span>
        			<p class="receive-mCen1"></p>
        			<p v-if="list.shiguanRisk==='low'" class="receive-mCen1 activeDown">低</p>
        			<p class="receive-mCen2"></p>
        			<p v-if="list.shiguanRisk==='middle'" class="receive-mCen2 activeCen">中</p>
        			<p class="receive-mCen3"></p> 
        			<p v-if="list.shiguanRisk==='high'" class="receive-mCen3 activeUp">高</p>       			
        		</dd>
        	</dl>
        	</router-link>
        	<router-link :to="{ name: 'geneReportDetail', query: { code: code ,disease_type:'intestine'}}">
        	<dl>
        		<dt>结直肠癌</dt>
        		<dd>
        			<span></span>
        			<p class="receive-mCen1"></p>
        			<p v-if="list.intestineRisk==='low'" class="receive-mCen1 activeDown">低</p>
        			<p class="receive-mCen2"></p>
        			<p v-if="list.intestineRisk==='middle'" class="receive-mCen2 activeCen">中</p>
        			<p class="receive-mCen3"></p> 
        			<p v-if="list.intestineRisk==='high'" class="receive-mCen3 activeUp">高</p>        			
        		</dd>
        	</dl>
        	</router-link>
        	<router-link :to="{ name: 'geneReportDetail', query: {code:code ,disease_type:'breast'}}">
        	<dl>
        		<dt>乳腺癌</dt>
        		<dd>
        			<span></span>
        			<p class="receive-mCen1"></p>
        			<p v-if="list.breastRisk==='low'" class="receive-mCen1 activeDown">低</p>
        			<p class="receive-mCen2"></p>
        			<p v-if="list.breastRisk==='middle'" class="receive-mCen2 activeCen">中</p>
        			<p class="receive-mCen3"></p> 
        			<p v-if="list.breastRisk==='high'" class="receive-mCen3 activeUp">高</p>       			
        		</dd>
        	</dl>
        	</router-link>
        	<h3 class="receive-ctit">遗传风险不能做的</h3>
        	<p class="receive-text">1、遗传风险不适用于诊断是否患有某项疾病</p>
        	<p class="receive-text">2、遗传风险无法对已患的疾病给出治疗指导</p>
        	<h3 class="receive-ctit">有风险并不一定会得病！</h3>
        	<span class="receive-textBot">疾病是基因和生活习惯及环境的共同作用 </span>
        	<p class="receive-text">比如骨折，外力撞击和意外跌倒等环境因素是骨折的重要诱因，那么能不能说骨折是一种100%由环境因素导致的疾病吗？不能！因为骨质疏松会显著提高骨折的风险，面对同样力度的撞击和跌落,骨质疏松患者发生骨折的概率要大很多，而骨质疏松有着非常强的基因遗传因素的作用。通过在世界各地进行的双生子和谱系研究，骨质疏松的遗传贡献在30%-60%。</p>
        	<p class="receive-text">再比如，如果基因测出肝癌风险高，如果还继续大量饮酒，那患肝癌的风险就会比普通人高很多。</p>
        	<span class="receive-textBot">所以，如果测出风险高，就要通过改善日常的生活饮食习惯，来降低风险。 </span>
        	<h3 class="receive-ctit">真的病了怎么办？</h3>
        	<p class="receive-text">早确诊、早干预、早治疗！早期肿瘤治愈率在90%以上。</p>
        	<p class="receive-text">所以高风险的人，多关注自己的身体变化；</p>
        	<p class="receive-text">也可以利用最新分子诊断技术对早期肿瘤进行检测。</p>
         </div>        	
    </div>
</template>
<script>
    import axios from 'axios'
    import api from '../api/api'
    export default {
        data() {
            return {
				code:'916071702',
				list:[]
            }
        },
        methods: {        	
        	geneReportRequest(){
        		var that = this
        		axios.get(api.geneReportData+this.code)
		            .then(function (res) {                   	
		                if (res.data.errorCode == 0) {
		            			res = res.data.returnValue
				                that.list = res
				                
				                console.log(that.list)			    
			            	}
		            })
        	},
			detailClick(){
				this.$router.push({path: '/geneReportDetail'})
			}
        },
        mounted() {
        	this.geneReportRequest()
        	document.documentElement.scrollTop = 0
    		document.body.scrollTop = 0
            document.title = "基因检测报告"
        }
    }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
    @import "../common/common.scss";
	.geneReport{
		width: 100%;
		position: absolute;
		overflow: hidden;
		.title{
			font-size: $font18;
			margin: rem(30rem) 0 rem(22rem);
			text-align: center;
			color: #11a6ea;
		}
		.receive-main{
			width: 92%;
			overflow: hidden;
			margin-left: 4%;
			padding-bottom: rem(20rem);
			.receive-name{
				width: 100%;
				overflow: hidden;
				border-bottom: 1px solid #c9caca;
				padding-bottom: rem(5rem);
				p{
					font-size: $font12;
					float: left;
					line-height: rem(22rem);
					margin-right: 3%;
				}
				.last{
					margin-right: 0;
				}
			}
			dl{
				width: 100%;
				overflow: hidden;
				height: rem(42rem);
				line-height: rem(42rem);
				border-bottom: 0.05px solid #c9caca;
				font-size: $font13;
				dt{
					float: left;
					color: #898989;
				}
				dd{
					float: right;
					position: relative;
					width: 28%;					
					p{
						display: inline-block;
						width: rem(12rem);
						height: rem(12rem);
						line-height: rem(12rem);
						background: #c9caca;
						border-radius: 50%;
						margin-right: rem(12rem);	
						text-align: center;		
						color: #fff;
						top: rem(14rem);
						position: absolute;	
					}
					.receive-mCen1{						
						left: 0;
					}
					.receive-mCen2{						
						left: rem(36rem);
					}
					.receive-mCen3{						
						left: rem(70rem);
					}
					.activeDown{
						width: rem(18rem);
						line-height: rem(18rem);
						height: rem(18rem);
						margin-right: rem(16rem);	
						background: #55c740;
						top: rem(11rem);	
					}
					.activeCen{
						width: rem(18rem);
						line-height: rem(18rem);
						height: rem(18rem);
						margin-right: rem(16rem);	
						background: #f9cb3d;
						top: rem(11rem);	
					}
					.activeUp{
						width: rem(18rem);
						line-height: rem(18rem);
						height: rem(18rem);
						margin-right: rem(16rem);	
						background: #ec4c22;
						top: rem(11rem);
					}
					span{
						position: absolute;
						width: 80%;
						height: rem(2rem);
						background: #c9caca;
						top: rem(19rem);
						left: 0;
						display: block;
					}
				}
			}
			.receive-mtit{
				border-bottom: 0;
				color: #4c4948;
				font-size: $font14;
				dt{
					color: #4c4948;
				}
			}
			.receive-ctit{
				font-size: $font16;
				line-height: rem(20rem);
				color: #4c4948;
				margin: rem(16rem) 0 rem(8rem);
			}
			.receive-textBot{
				color: #33b3ed;
				font-size: $font13;
				line-height: rem(20rem);
				text-align: justify;
			}
			.receive-text{
				font-size: $font13;
				color: #4c4948;
				line-height: rem(20rem);
				text-align: justify;
				
			}
		}
		
	}
</style>


