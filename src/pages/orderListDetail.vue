<template>
	<div>
    <div class='orderDetail'>	
    	<div class="order-dmain">
    		<div class="order-success" v-show='!activeOrder'>等待付款</div>
    		<div class="order-success" v-show='activeOrder'>已付款，等待发货</div>
    		<div class='order-transfer' v-show='activeOrder'>
    			<p><span>承运物流：</span>申通快递</p>
    			<p><span>物流编号：</span>123456789</p>
    		</div>
    		<dl class="order-consignee">
				<dt><img src="../assets/orderAddress.png"/></dt>
				<dd class="consignee">
					<p>收货人:&nbsp;{{addressObj.name}}<span>{{addressObj.phone}}</span></p>
					<span>收货地址:&nbsp;{{addressObj.address}}</span>
				</dd>
				<dd class="order-right"><img src="../assets/confirmRight.png"/></dd>
			</dl>
    	</div>
	    <div class="order-main"> 
	    	<h3 class="order-mtitle">汉古商城</h3>	    	
	    	<div class="order-mdetail" v-for='orderItem in orderList.order'>
	    		<dl>
	    			<dt><img :src="''+apiPath+'/image/product/'+orderItem.img+'/1.jpg'" 
							onerror="this.src='http://placeholder.qiniudn.com/800'"/></dt>
	    			<dd>
	    				{{orderItem.name}}
		    			<p>¥{{orderItem.price}}.00</p>
	    			</dd>
	    		</dl>
	    		<div class="order-mnum">X<span>{{orderItem.num}}</span></div>
	    	</div>	    	
	    </div>
	    <div class="order-mcontent">
	    	<dl>
	    		<dt>订单编号：123456789045678</dt>
	    	</dl>
	    	<dl>
	    		<dt>下单时间：2017-06-06 12:34:56</dt>
	    	</dl>
	    	<dl v-show='activeOrder'>
	    		<dd class="delect-order"  @click='cancelOrder'>删除订单</dd>
	    	</dl>
	    	<dl v-show='!activeOrder'>
	    		<dd class="delect-order" @click='cancelOrder'>取消订单</dd>
	    	</dl>
	    </div>
    </div>
	<div class="shopConfirm-toast" v-show='toastHidden'>
	  	<div class="confirm-main">
	  		<p>确定要删除商品嘛?</p>
	 		<div class="btn" @click='toastHidden = !toastHidden'>取消</div>
	 		<div class="btn rightBtn" @click='confirmDel'>确定</div>
	  	</div>
	</div>
    </div>
</template>
<script>
import axios from 'axios'
import api from '../api/api'
export default {
  data(){
  	return {
  		apiPath:'',
  		orderList:[],
  		addressObj:{},
  		activeOrder:false,
  		toastHidden:false
    }
  },
  methods: {
	requestlist(){
        var that = this;
        that.orderId = this.$route.query.itemid;
        console.log(that.orderId)
        axios.get(api.singleOrderList+that.orderId)
          .then(function (res) {
            if (res.data.errorCode == 0) {
              res = res.data.returnValue
              that.orderList = res
              console.log(that.orderList)
			  that.addressObj = that.orderList.address
			  if(that.orderList.length>0){
            	for(var i in that.orderList){				          				            		
            		//判断是否支付完成
            		if(that.orderList[i].status==0){
            			that.activeOrder = false
            		}else if(that.orderList[i].status==1){
            			that.activeOrder = true
            		}
            	}
              }
            }
          })
          .catch(function (error) {
            console.log(error)
          })
       },
       cancelOrder(){
           	this.toastHidden = true
       },
       //删除商品
   		confirmDel(){
   			this.toastHidden = false
   			this.$emit('cancelOrderEvent')
   			this.$router.push({ path: '/orderList'})   			
   		},
   		
  },
  mounted() {
	this.apiPath = api.apipath
	this.requestlist()
	document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    document.title='订单详情'
  }
}
</script>
<style scoped lang="scss" rel="stylesheet/scss">
@import "../common/common.scss";
.orderDetail{
	background: #fff;
	width: 100%;
	height: 100%;
	overflow: hidden;
	position: absolute;
	font-size: $font14;
	.order-dmain{
		width: 94%;
		overflow: hidden;
		/*background: #fafafa;*/
		padding: rem(5rem) 3%;
		.order-success{
			line-height: rem(30rem);
			border-bottom: 1px solid #efefef;
			padding: rem(5rem) 0;
		}
		.order-transfer{
			width: 100%;
			border-bottom: 1px solid #efefef;
			overflow: hidden;
			padding-bottom: rem(5rem);
			p{
				line-height: rem(30rem);
			}
		}
		.order-consignee{
			width: 100%;
			/*height: rem(40rem);*/
			margin-top: rem(15rem);
			padding-bottom: rem(10rem);
			border-bottom: 1px solid #efefef;
			overflow: hidden;
			dt{
				float: left;
				width: rem(15rem);
				height: rem(19rem);
				margin-right: 2%;
				img{
					width: 100%;
					height: 100%;
				}
			}
			.consignee{
				float: left;
				width: 86%;
				font-size: $font14;
				p{
					margin-bottom: rem(8rem);
					span{
						float: right;
					}
				}
				span{
					line-height: rem(18rem);
				}
			}
			.order-right{
				width: rem(5.5rem);
				height: rem(11rem);
				float: right;
				margin-top: rem(14.5rem);
				img{
					width: 100%;
					height: 100%;
				}
			}
		}			
	}
	.order-main{
		width: 100%;
		background: #fff;
		overflow: hidden;
		.order-mtitle{
			line-height: rem(42rem);
			background: url(../assets/confirmLogo.png) no-repeat left;
			background-size: rem(15rem) rem(14rem);
			padding-left: 5%;
			margin-left: 3%;
			font-size: $font16;
		}
		.order-mdetail{
			width: 94%;
			height: rem(92rem);
			background: #fafafa;
			padding: rem(5rem) 3%;
			margin-bottom: rem(5rem);
			dl{
				float: left;
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
					color: $c3c3c;
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
		/*padding-bottom: rem(10rem);*/
		dl{
			width: 94%;
			padding: 0 3%;
			height: rem(47rem);
			border-bottom: 1px solid #efefef;
			line-height: rem(47rem);
			background: #fff;
			dt{
				float: left;
				/*width: 30%;*/
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
				background: #fe4415;
				margin-top: rem(9rem);
				color: #fff;
				line-height: rem(30rem);
				text-align: center;
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


