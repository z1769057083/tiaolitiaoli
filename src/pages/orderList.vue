<template>
	<div>
    <div class='order'>
	    <h3 class="order-mtitle">汉古商城</h3>
	    <div v-for='(items,index) in listDate'>	    	
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
			    	<!--<dl v-if='activeOrder'>			    		
			    		<dd class="delect-order"  @click='cancelOrder(items,index)'>删除订单</dd>
			    	</dl>
			    	<dl  v-if='activeOrder1'>			    		
			    		<dd class="delect-order" @click='cancelOrder(items,index)' @cancelOrderEvent = 'cancelOrderEvent'>取消订单</dd>
			    		<dd class="delect-order order-pay" @click='nowPay(index)'>立即付款</dd>
			    	</dl>-->
			    </div>
		    </div>
	    </div>
	    </div>
	    <!--<div class="shopConfirm-toast" v-show='toastHidden'>
		  	<div class="confirm-main">
		  		<p>确定要删除商品嘛?</p>
		 		<div class="btn" @click='toastHidden = !toastHidden'>取消</div>
		 		<div class="btn rightBtn" @click='confirmDel'>确定</div>
		  	</div>
		</div>-->
    </div>
</template>
<script>
    import axios from 'axios'
    import api from '../api/api'
    export default {
        data() {
            return {
				list:[],
				listDate:[],
				useId:'',
				apiPath:'',
				submitArr:[],
				price:{
	 				price: 0
	 			},
	 			activeOrder:false,
	 			activeOrder1:false,
	 			toastHidden:false,
	 			listId:[]	 	
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
                axios.get(api.orderList+that.useId)
                    .then(function (res) {                   	
                        if (res.data.errorCode == 0) {
                    		res = res.data.returnValue
                            that.list = res
                            //判断是否支付完成
                            if(that.list.length>0){
				            	for (var i = 0, len = that.list.length; i < len; i++) {
				            		if(that.list[i].status==1){				            			
				            			that.listDate.push(that.list[i])
				            			console.log(that.listDate)
				            		}			            			
				            		that.price.price = that.list[i].price													           		
				            	}
				            }
                        }
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
           },
//         nowPay(index){
//         	if (!window.localStorage) {
//			    return false;
//			}else {
//		        let storage = window.localStorage
//	        	this.price.price = this.list[index].price
//		        this.submitArr.push(this.list[index].order)
//		        this.submitArr.push(this.list[index].address)
//		        this.submitArr.push(this.price)
//	        	var orderArr= JSON.stringify(this.submitArr)
//	        	storage.setItem("orderArr", orderArr)
//	        }	        
//         	this.$router.push({ path: '/cashier'})
//          },
//          cancelOrder(items,index){
//	           	this.toastHidden = true
//				this.readyToDelIndex = index
//          },
//         //删除商品
//	   		confirmDel(){
//	   			this.toastHidden = false
//	   			this.list.splice(this.readyToDelIndex,1);
//	   			var orderArr= JSON.stringify(this.list)  
//	        	window.localStorage.setItem("orderArr", orderArr)
//	   		},
//	   		cancelOrderEvent(){
//	   			this.cancelOrder()
//	   		}
        },
        mounted() {
        	this.apiPath = api.apipath
        	this.orderList()       	
            document.title = "我的订单"
        }
    }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
@import "../common/common.scss";
.order{
	background: #fff;
	width: 100%;
	height: 100%;
	position: absolute;
	font-size: $font14;
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
	.shopConfirm-toast{
		width: 100%;
		height: 100%;
		position: fixed;
		background: rgba(0,0,0,.5);
		z-index: 999;
		.confirm-main{
			width: 80%;
			background: #fff;
			height: rem(100rem);
			position: absolute;
			border-radius: rem(5rem);
			left: 10%;
			top: 34%;
			p{
				font-size: $font14;
				margin: rem(20rem) 0 0 rem(20rem);
			}
			.btn{
				width: 49%;
				height: rem(44rem);
				float: left;
				text-align: center;
				line-height: rem(44rem);
				border-top: 1px solid #efefef;
				margin-top: rem(21rem);
				font-size: $font14;
			}
			.rightBtn{
				border-left: 1px solid #efefef;
				color: #c69b70;
			}
		}
	}		
</style>

