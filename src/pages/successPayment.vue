<template>
	<div class="wrap">
		<div class='payment'>
			<div class="payment-top">
				<img class="payment-topImg" src="../assets/paymentTop.png" alt="" />
				<p>支付成功</p>
				<span>获得更多产品服务，关注调理调理公众号！</span>
				<div class="payment-btn">
					关注公众号
				</div>
			</div>
			<div class="payment-center" @click='physicalTest'></div>			
			<div class="payment-main">
				<h3>
					<img class="left" src="../assets/paymentLike.png"/>
					为你精选
				</h3>
				<div>
					<dl @click='recommendClick(item,index)' class="s-mrecomlist" v-for='(item,index) in recommendList'>
		                <dt class="s-mreconimg">
		                	<img :src="''+apiPath+'/image/product/thumbnail/'+item.index+'.jpg'"
	                         onerror="this.src='../../static/images/defaultPicture.jpg'"
	                         @click='recommendClick(item,index)'/>
		                </dt>
		                <dd class="s-mreconintro">
		                    <span class='activeShow'>{{item.name}}</span>
		                    <div class="s-mreconintrotip">
		                        <img class="tip" src="../assets/shopTip.png"/>
		                        {{item.geneTags|textHandler}}
		                    </div>
		                </dd>
		            </dl>
				</div>			
			</div>
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
               recommendList:[],
               id:''
            }
        },
        filters: {
            textHandler(text){
                if(text==''){
                    return '平衡';
                }
                else{
                    return text;
                }
            }
        },
        methods: {
            recommendRequest(){
                var that = this;
                if (window.localStorage.getItem(Account_Index) !== null) {
                    let account = JSON.parse(window.localStorage.getItem(Account_Index))
                    if(account.sex==0){
                     	axios.get(api.geneRecommendData)
	                    .then(function (res) {
	                        if (res.data.errorCode == 0) {
	                            res = res.data.returnValue
	                            that.recommendList = res.items
	                            console.log(res)
	                        }
	                    })
                    }else if(account.sex==1){
                    	axios.get(api.geneRecommendData+'?gender=M')
	                    .then(function (res) {
	                        if (res.data.errorCode == 0) {
	                            res = res.data.returnValue
	                            that.recommendList = res.items
	                            console.log(res)
	                        }
	                    })                    	
                    }else if(account.sex==2){
                    	axios.get(api.geneRecommendData+'?gender=F')
	                    .then(function (res) {
	                        if (res.data.errorCode == 0) {
	                            res = res.data.returnValue
	                            that.recommendList = res.items
	                            console.log(res)
	                        }
	                    }) 
                    }
	                
                }
            },
            recommendClick(item,index){
            	this.$router.push({ path: 'goodsdetail', query: { itemid: item._id }})
            },
            physicalTest(){
            	this.$router.push({ path: '/'})
            }
        },
        mounted() {
        	this.recommendRequest()
        	this.apiPath = api.apipath
            document.title = "支付成功"
        }
    }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
    @import "../common/common.scss";
    .wrap{
    	width: 100%;
    	height: 100%;
    	position: absolute;
    	background: #f6f6f6;
    	.payment{
	    	width: 100%;
	    	position: absolute;
	    	background: #f6f6f6;
	    	overflow: hidden;
	    	.payment-top{
	    		width: 100%;
				margin: rem(10rem) 0;
				height: rem(176rem);
				background: #fff;
				text-align: center;
				font-size: $font13;
				.payment-topImg{
					height: rem(40rem);
					width: rem(40rem);
					margin-top: rem(20rem);
				}
				p{
					font-size: $font18;
					color: #3c3c3c;
					margin:rem(10rem) 0 rem(6rem) 0;
				}
				span{
					color: #999;
					line-height: rem(25rem);
				}
				.payment-btn{
					width: 24%;
					height: rem(26rem);
					border: 1px solid #f5a623;
					border-radius: rem(3rem);
					text-align: center;
					line-height: rem(26rem);
					font-size: $font14;
					color: #f5a623;
					margin-top: rem(10rem);
					margin-left: 38%;
				}
			}
			.payment-center{
				width: 96%;
				margin: 0 2%;
				height: rem(80rem);
				background: url(../assets/successBackground.jpg);
				background-size: 100%;
			}
			.payment-main{
				width: 96%;
				margin: 0 2%;
				height: rem(46rem);
				line-height: rem(46rem);
				h3{
					width: 26%;
					font-size: $font16;
					color: #c69b70;
					margin-left: 37%;
					.left{
						width: rem(18rem);
						height: rem(18rem);
						float: left;
						margin: rem(13rem) rem(6rem) 0 0;
					}
				}
				.s-mrecomlist {
			        width: 49%;
			        float: left;
			        margin-right: 2%;
			        padding-bottom: rem(6rem);
			        margin-bottom: 0.26rem;
			        background: #fff;
			        .s-mreconimg {
			            width: 100%;
			            height: rem(100rem);
			            img {
			                width: 100%;
			                height: 100%;
			            }
			        }
			        .s-mreconintro {
			            width: 97%;
			            padding-left:3%;
			            overflow: hidden;
			            padding-top: 0.21rem;
			            span {
			                font-size: 0.35rem;
			                color: #000;
			                line-height: 0.48rem;
			                text-decoration: none;
			                display: none;
			                width: 100%;
			                overflow: hidden;
			                white-space: nowrap;
			                text-overflow: ellipsis;
			                display: inline-block;
			            }
			            .s-mreconintrotip{
			                width: 100%;
			                overflow: hidden;
			                white-space: nowrap;
			                text-overflow: ellipsis;
			                color: #666;
			                padding-top: rem(6rem);
			                line-height: rem(15rem);
			                .tip {
			                    width: rem(12rem);
			                    height: rem(12rem);
			                   	float: left;
			                   	margin-right: rem(4rem);
			                    vertical-align: middle;
			                }
			            }
			            .activeShow {
			                display: block;
			            }
			        }
			    }
			    .s-mrecomlist:nth-child(2n){
			    	margin-right: 0;
			    }
			}
	    }
    }
	
</style>
