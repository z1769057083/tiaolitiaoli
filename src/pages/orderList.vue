<template>
	<div class="orderHome">
		<ul class="order-top">
			<li :class="{'orderTop':toggle==0}" @click="change_active('0',$event)" class='all-order'>全部</li>
			<li :class="{'orderTop':toggle==1}" @click="change_active('1',$event)">待付款</li>
			<li :class="{'orderTop':toggle==2}" @click="change_active('2',$event)">已付款</li>
			<li :class="{'orderTop':toggle==3}" @click="change_active('3',$event)">已完成</li>
		</ul>
	    <div class='order'>
		    <div v-for='(items,index) in list'>	    	
		    	<div v-for='item in items.order'>
		    		<router-link :to="{ name: 'orderListDetail', query: { itemid: items._id }}">
				    <div class="order-main">
			    		<div class="order-mdetail">
				    		<dl>
				    			<dt><img :src="''+apiPath+'/image/product/'+item.img+'/1.jpg'" 
										onerror="this.src='http://placeholder.qiniudn.com/800'"/></dt>
				    			<dd>
				    				{{item.name}}
					    			<p>¥{{item.price}}.00</p>
				    			</dd>
				    		</dl>
				    		<div class="order-mnum">X<span>{{item.num}}</span></div>
				    	</div>				    			    		
				    </div>
					</router-link>    
				    <div class="order-mcontent">
				    	<dl>
				    		<dd>
				    			共{{item.num}}件商品  
				    			{{items.status|filterFun}}付款 ：¥{{items.price}}.00</dd>
				    	</dl>
				    	<dl  v-if='items.status==0'>			    		
				    		<dd class="delect-order order-pay" @click='nowPay(index)'>去支付</dd>
				    	</dl>
				    </div>
			    </div>
		    </div>
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
	 			toggle:0
            }
        },
        filters: {
            filterFun(obj){
                if ( obj==1) {
                    return '实'
                }
                else if(obj==0){
                    return '待'
                }
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
//				            		console.log(that.list[i].status==0)
//				            		if(that.list[i].status==0){				           										that.activeOrder = true
//				            		}else{
//				            			that.activeOrder = false
//				            		}
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
	background: #fff;
	width: 100%;
	height: 100%;
	position: absolute;
	.order-top{
		width: 100%;
		height: rem(40rem);
		overflow: hidden;
		position: absolute;
		top: 0;
		left: 0;				
		li{
			float: left;
			font-size: $font16;
			width: 26%;
			text-align: center;
			line-height: rem(40rem);
		}
		.all-order{
			width: 21%;
		}
		.orderTop{
			color: #0082E6;
		}
	}
	.order{
		background: #fff;
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
			.order-mdetail{
				width: 94%;
				height: rem(92rem);
				background: #fafafa;
				padding: rem(5rem) 3%;
				dl{
					float: left;
					color: $c3c3c;
					dt{
						width: rem(92rem);
						height: rem(92rem);
						float: left;
						img{
							width: 100%;
							height: 100%;
						}
					}
					dd{
						float: left;
						line-height: rem(20rem);
						margin-left: rem(10rem);
						p{
							margin-top: rem(5rem);
							font-size: $font14;
							color: #fe4415;
						}
					}
				}
				.order-mnum{
					float: right;
					line-height: rem(70rem);
					color: #9c9c9c;
					span{
						font-size: $font14;
					}
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
				.delect-order{
					width: 20%;
					height: rem(30rem);
					background: #ff8854;
					margin-top: rem(9rem);
					color: #fff;
					line-height: rem(30rem);
					text-align: center;
					margin-left: rem(10rem);
				}
				.order-pay{
					background: #fe4415;
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
}		
</style>

