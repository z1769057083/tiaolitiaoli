<template>
	<div class="orderHome">
		<ul class="order-top">
			<li :class="{'orderTop':toggle==0}" @click="change_active('0',$event)" class='all-order'>全部</li>
			<li :class="{'orderTop':toggle==1}" @click="change_active('1',$event)">待付款</li>
			<li :class="{'orderTop':toggle==2}" @click="change_active('2',$event)">已付款</li>
			<li :class="{'orderTop':toggle==3}" @click="change_active('3',$event)">已完成</li>
		</ul>
	    <div class='order' v-if='toggle==0'>
		    <div v-for='(items,index) in list'>	    	
		    	<div>
		    		<router-link :to="{ name: 'orderListDetail', query: { itemid: items._id }}">
				    <div class="order-main">
				    	<div class="order-mtop">
				    		<img class="time" src="../assets/orderListTime.png" alt="" />
				    		{{items.createTime|filterTime}}
				    		<span>{{items.status|filterFun}}付款 </span>
				    		<span class="orderListComplate" v-if='items.status==2'></span>
				    	</div>
			    		<div class="order-mdetail">
				    		<dl>
				    			<dt v-for='item in items.order'>
				    				<img 									:src="''+apiPath+'/image/product/'+item.img+'/1.jpg'" 
									onerror="this.src='http://placeholder.qiniudn.com/800'"/>
				    			</dt>		
				    			<dd>
				    				{{items.order.name}}
				    			</dd>
				    		</dl>
				    		<img src="../assets/confirmRight.png" class="order-mnum"/>
				    	</div>				    			    		
				    </div>
					</router-link>    
				    <div class="order-mcontent">
				    	<dl>
				    		<dd>
				    			共{{totalNum}}件商品  
				    			合计&nbsp;¥{{items.price}}.00</dd>
				    	</dl>
				    	<dl  v-if='items.status==0'>			    		
				    		<dd class="pay-order" @click='nowPay(index)'>去支付</dd>
				    	</dl>
				    </div>
			    </div>
		    </div>
		</div>
		<!--<div class="order" v-if='toggle==1'>
			
		</div>-->
		<div class="nullOrder" v-if='toggle==1||toggle==2||toggle==3'>
			<img class="nullOrder-img" src="../assets/orderListNull.png"/>
			<p>您还没有相关订单</p>
		</div>
    </div>
</template>
<script>
    import axios from 'axios'
    import api from '../api/api'
    export default {
        data() {
            return {
				list:[],
				useId:'',
				apiPath:'',
				submitArr:[],
				price:{
	 				price: 0
	 			},
	 			toastHidden:false,
	 			listId:[],
	 			toggle:0,
	 			totalNum:''
            }
        },
        filters: {
            filterFun(obj){
                if ( obj==0) {
                    return '待'
                }
                else if(obj==1){
                    return '实'
                }
            },
            filterTime(time){
            	return time = time.substring(0,10)
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
                axios.get(api.myOrders+that.useId)
                    .then(function (res) { 
                    	console.log(res)
                        if (res.data.errorCode == 0) {                       	
                    		that.list = res.data.returnValue
                            console.log(that.list)
                          //判断是否支付完成
                            if(that.list.length>0){
				            	for (var i = 0, len = that.list.length; i < len; i++) {
				            	that.price.price = that.list[i].price
				            	}
				            }
                        }
                    })
           },
           change_active(index){
           	this.toggle = index
           },
           nowPay(index){
           	if (!window.localStorage) {
			    return false;
			}else {
		        let storage = window.localStorage
	        	this.price.price = this.list[index].price
		        this.submitArr.push(this.list[index].order)
		        this.submitArr.push(this.list[index].address)
		        this.submitArr.push(this.price)
	        	var orderArr= JSON.stringify(this.submitArr)
	        	storage.setItem("orderArr", orderArr)
	        }	        
           	this.$router.push({ path: '/cashier'})
            },
            cancelOrder(items,index){
	           	this.toastHidden = true
				this.readyToDelIndex = index
            },
        },
        mounted() {
        	document.documentElement.scrollTop = 0
    		document.body.scrollTop = 0
        	this.apiPath = api.apipath
        	this.orderList()       	
            document.title = "我的订单"
        }
    }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
@import "../common/common.scss";
.orderHome{
	background: #f6f6f6;
	width: 100%;
	height: 100%;
	position: absolute;
	.order-top{
		width: 100%;
		height: rem(40rem);
		overflow: hidden;
		position: absolute;
		background: #fff;
		top: 0;
		left: 0;				
		li{
			float: left;
			font-size: $font15;
			width: 16%;
			margin: 0 5%;
			text-align: center;
			line-height: rem(40rem);
		}
		.all-order{
			width: 11%;
		}
		.orderTop{
			color: #c69b70;
			line-height: rem(37rem);
			border-bottom: 3px solid #c69b70;
			
		}
	}
	.order{
		width: 100%;
		position: absolute;
		overflow: hidden;
		font-size: $font14;
		top: rem(40rem);
		left: 0;
		.order-mtitle{
			line-height: rem(42rem);
			background: url(../assets/confirmLogo.png) no-repeat left;
			background-size: rem(15rem) rem(14rem);
			padding-left: 5%;
			margin-left: 3%;
			font-size: $font16;
			}
		.order-main{
			width: 100%;
			background: #fff;
			overflow: hidden;
			margin-top: rem(10rem);
			.order-mtop{
				width: 94%;
				margin-left: 3%;
				height: rem(40rem);
				line-height: rem(40rem);
				color: #3C3C3C;
				.time{
					float: left;
					width: rem(14rem);
					height: rem(14rem);
					margin: rem(13rem) rem(10rem) 0 0;
				}
				span{
					float: right;
					color: #c69b70;					
				}
				.orderListComplate{
					width: rem(64rem);
					height: rem(64rem);
					position: absolute;
					background: url(../assets/orderListComplate.png) no-repeat center;
					background-size: cover;
					right: 3%;
					top: rem(26rem);
				}
			}
			.order-mdetail{
				width: 94%;
				height: rem(60rem);
				background: #fafafa;
				padding: rem(10rem) 3%;
				dl{
					float: left;
					color: $c3c3c;
					dt{
						width: rem(60rem);
						height: rem(60rem);
						float: left;
						margin-right: rem(10rem);
						img{
							width: 100%;
							height: 100%;
						}
					}
					dd{
						float: left;
						line-height: rem(60rem);
						margin-left: rem(15rem);
						color: #3c3c3c;
					}
				}
				.order-mnum{
					float: right;
					width: rem(6rem);
					height: rem(12rem);	
					margin-top: rem(24rem);				
				}
			}
		}
		.order-mcontent{
			width: 100%;
			background: #f6f6f6;
			overflow: hidden;
			dl{
				width: 94%;
				padding: 0 3%;
				height: rem(47rem);
				border-bottom: 1px solid #efefef;
				line-height: rem(47rem);
				background: #fff;
				color: $c3c3c;
				dt{
					float: left;
					width: 30%;
				}
				.leave-msg{
					span{
						color: #999;
						padding-left: 3%;
					}
				}
				dd{
					float: right;
				}
				.pay-order{
					width: 20%;
					height: rem(28rem);
					margin-top: rem(9rem);
					color: #fff;
					line-height: rem(28rem);
					text-align: center;
					margin-left: rem(10rem);
					border: 1px solid #c69b70;
					color: #c69b70;
				}
			}		
			.order-mconpic{
				border: 0;
				dd{
					letter-spacing: rem(0.4rem);
					span{
						color: #ff3300;
						.order-mconprice{
							font-size: $font14;
						}
					}
				}
			}
		}
	}
	.nullOrder{
		text-align: center;
		font-size: $font14;
		color: #999;
		.nullOrder-img{
			margin-top: rem(220rem);
			margin-bottom: rem(24rem);
			width: rem(70rem);
			height: rem(95rem);
			
		}
	}	
}		
</style>

