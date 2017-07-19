<template>
  <div class="myOrder">
  	<div class="gene-main">
  		<div class="gene-mpic">
  		 	<img src="../assets/couponGene.png" alt="" />
  		</div>
  		<p>样本编码:2334566</p>
  		<div class="gene-mtit">
  			<img src="../assets/genetest2.png" alt="" />
  			<p class="gene-mcon">受到样本后需要<span>3</span>个步骤约<span>15</span><br />个工作日出报告</p>
  			<img src="../assets/genetest3.png" alt="" />
  		</div>
  		<div class="gene-step">
  			<div class="step-left">
  				<div class="l-bline l-bline1"></div>
  				<div class="l-bline l-bline2" :class="{'l-blineActive':addActive2}"></div>
  				<div class="l-bline l-bline3" :class="{'l-blineActive':addActive3}"></div>
  				<div class="l-bline l-bline4" :class="{'l-blineActive':addActive4}"></div>
  				<div class="l-btn l-btnStep1">
  					<img src="../../static/images/myOrder1.png"/>
  				</div> 				
 					<div class="l-btn l-btnStep2">
 						<img v-if='list.status==2||list.status==3||list.status==4||list.status==5' src="../../static/images/myOrder1.png"/>
 					</div> 				
  				<div class="l-btn l-btnStep3">
  					<img v-if='list.status==3||list.status==4||list.status==5' src="../../static/images/myOrder1.png"/>
  				</div> 				
  				<div class="l-btn l-btnStep4">
  					<img v-if='list.status==4||list.status==5' src="../../static/images/myOrder1.png"/>
  				</div>  				
  			</div>
  			<div class="step-right">
  				<div class="r-bigStep">
  					<div class="r-smallStep" :class="{'r-smallAllStep':addActive2}"></div>					
  				</div>
  				<p class="stepActive">您的样本正在路上</p>
  				<div class="r-bigStep">
  					<div v-if='list.status==2||list.status==3||list.status==4||list.status==5' class="r-smallStep" :class="{'r-smallAllStep':addActive3}"></div>					
  				</div>
  				<p :class="{'stepActive':addActive2}">您的样本已到实验室，正在提取DNA</p>
  				<div class="r-bigStep">
  					<div v-if='list.status==3||list.status==4||list.status==5' :class="{'r-smallAllStep':addActive4}" class="r-smallStep"></div>					
  				</div>
  				<p :class="{'stepActive':addActive3}">您的DNA提取已完成，正在上级检测</p>
  				<div class="r-bigStep">
  					<div v-if='list.status==4||list.status==5' :class="{'r-smallAllStep':addActive5}" class="r-smallStep"></div>					
  				</div>
  				<p :class="{'stepActive':addActive4}">检测已完成，正在处理数据，生成报告</p>
  			</div>
  		</div>
  		 
  	</div>  
  </div>
</template>

<script>
	import axios from 'axios'
	import api from '../api/api';
  export default {
    data(){
    	return{
    		list:[],
    		listDate:[],
    		type:'',
    		orderDate1:[],
    		orderDate2:[],
    		addActive2:false,
    		addActive3:false,
    		addActive4:false,
    		addActive5:false
    	}
    },
    methods: {
    	orderList(){
        var that = this;
        if (!window.localStorage) {
            return false;
        } else {
            if (window.localStorage.getItem(Account_Index) !== null) {
                let account = JSON.parse(window.localStorage.getItem(Account_Index))
                that.useId = account._id                
            }
        }
        this.type = this.$route.query.type;
        axios.get(api.orderList+that.useId+'&type='+this.type)
            .then(function (res) {                   	
                if (res.data.errorCode == 0) {
            			res = res.data.returnValue
	                that.list = res[0]
	                console.log(that.list)
	                if(that.list.status == 2){
	                	console.log(2)
	                	that.addActive2 = true
	                }else if(that.list.status == 3){
	                	console.log(3)
	                	that.addActive2 = true
	                	that.addActive3 = true
	                }else if(that.list.status == 4){
	                	console.log(4)
	                	that.addActive4 = true
	                	that.addActive3 = true
	                	that.addActive2 = true
	                	that.addActive5 = false
	                }else if(that.list.status == 5){
	                	that.addActive5 = true
	                	that.addActive3 = true
	                	that.addActive2 = true
	                	that.addActive4 = true
	                }
	            	}
            })
   		}
   	},
   	mounted() {
    	this.apiPath = api.apipath
    	this.orderList()       	
      document.title = "优惠券订单"
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
@import "../common/common.scss";
.myOrder{
	width: 100%;
	height: 100%;
	overflow: hidden;
	position: absolute;
	background: url(../assets/indexbg.jpg) no-repeat;
  background-size: 100% 100%;
	.gene-main{
		width: 86%;
		margin-left: 7%;
		margin-top: rem(30rem);
		.gene-mpic{
			width: rem(92rem);
			height: rem(92rem);
			margin-left: 36%;
			margin-bottom: rem(20rem);
			img{
				width: 100%;
				height: 100%;
			}
		}
		p{
			text-align: center;
			color: $c3c3c;
			line-height: rem(18rem);
			font-size: $font13;
			margin-bottom: rem(20rem);
		}
		.gene-mtit{
			width: 100%;	
			overflow: hidden;		
			img{
				width: rem(6rem);
				height: rem(41rem);
				float: left;
			}
			.gene-mcon{
				width: 96%;
				text-align: center;
				font-size: $font16;
				line-height: rem(24rem);
				margin-bottom: rem(15rem);
				float: left;
				color: #c69b70;
				letter-spacing: rem(2rem);
				span{
					font-size: $font24;
				}
			}
		}
		.gene-step{
			width: 86%;
			overflow: hidden;
			margin-left: 7%;
			height: rem(300rem);
			margin-top: rem(36rem);
			.step-left{
				width: rem(28rem);
				overflow: hidden;
				float: left;
				height: rem(300rem);
				position: relative;
				.l-btn{
					position: absolute;
					width: rem(25rem);
					height: rem(25rem);
					border-radius: 50%;
					background: #f0f0f0;
					left: 0;
					img{
						width: 100%;
						height: 100%;
					}
				}
				.l-btnStep1{					
					top: 0;
				}
				.l-btnStep2{					
					top: rem(72rem);
				}
				.l-btnStep3{					
					top: rem(144rem);
				}
				.l-btnStep4{					
					top: rem(216rem);
				}
				.l-bline{
					width: rem(2rem);
					height: rem(80rem);
					background: #f0f0f0;
					position: absolute;
					left: rem(12.5rem);
				}
				.l-bline1{
					top: rem(-20rem);
					background: #48d29f;
				}
				.l-bline2{
					top: rem(58rem);
				}
				.l-bline3{
					top: rem(128rem);
				}
				.l-bline4{
					top: rem(200rem);
					height: rem(30rem);
				}
				.l-blineActive{
					background: #48d29f;
				}
			}
			.step-right{
				width: 80%;
				float: right;
				height: rem(300rem);
				.r-bigStep{
					width: 100%;
					height: rem(16rem);
					background: #f4f4f4;
					border-radius: rem(10rem);
					overflow: hidden;
					margin: rem(4rem) 0 rem(8rem);
					.r-smallStep{
						border-radius: rem(10rem);
						height: rem(10rem);
						width: 40%;
						background: #dcd7ff;
						margin: rem(3rem) 2%;
					}
					.r-smallAllStep{
						width: 96%;
					}
				}
				p{
					text-align: left;
					font-size: $font12;
					color: #999;
					margin-bottom: rem(30rem);
				}
				.stepActive{
					color: #000;
					font-size: $font13;
				}
			}
		}
		
	}
}
</style>