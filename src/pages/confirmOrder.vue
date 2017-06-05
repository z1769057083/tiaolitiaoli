<template>
  <div class='confirmOrder'> 
    <!--主题部分-->
    <div class="order-top">
    	<!--新增收货地址开始-->
    	<div class="order-address" v-if='addNewAddressHidden' @click='addAddress'>
				<img class="order-add" src="../assets/confirmaddress.png"/>
				<span>新增收货地址</span>
				<img class="order-right" src="../assets/confirmRight.png"/>
			</div>
			<!--新增收货地址结束-->
    	<!--收货地址开始-->
    	<dl class="order-consignee" v-else='!addNewAddressHidden' @click='editAddress'>
				<dt><img src="../assets/orderAddress.png"/></dt>
				<dd class="consignee">
					<p>收货人:{{addressArr.name}}<span>{{addressArr.phone}}</span></p>
					<span>收货地址:{{addressArr.address}}</span>
				</dd>
				<dd class="order-right"><img src="../assets/confirmRight.png"/></dd>
			</dl>
			<!--收货地址结束-->
    </div> 
    <div class="order-main">
    	<h3 class="order-mtitle">汉古商城</h3>
    	<div class="order-mdetail" v-for='(item,index) in arr'>
    		<dl>
    			<dt><img src="../assets/confrimShopImg.png"/></dt>
    			<dd>
    				{{item.name}}
	    			<p>{{item.price}}</p>
    			</dd>
    		</dl>
    		<div class="order-mnum">X<span>{{item.num}}</span></div>
    	</div>		
    </div>
    <div class="order-mcontent">
    	<dl>
    		<dt>配送方式</dt>
    		<dd>快递¥12.00</dd>
    	</dl>
    	<dl class="order-mconpic">
    		<dt></dt>
    		<dd>共件商品   小计:<span>¥{{count}}.00</span></dd>
    	</dl>
    </div>
		<div class="order-bottom">
			<router-link to='/cashier'>
				<div class="submitOrder" @click='submitOrder'>提交订单</div>
			</router-link>
			<div class="toal">
				合计:<span>¥{{countPrice}}</span>
			</div>
		</div>
		<!--新增收货地址开始-->
		<div class="maskmain" v-show='Deliveryhidden' @closeDialogEvent='closeDialogHandler'>
			<div class="address-main">	
				<h3 @click="close">新增收货地址</h3>
				<div class="address-mcon">
					<dl>
						<dt>收货人</dt>
						<dd>
							<input type="text" placeholder="收货人姓名" v-model='name' name='name'/>
						</dd>
					</dl>
					<dl>
						<dt>联系电话</dt>
						<dd>
							<input type="text" placeholder="手机或固定电话" v-model='phone' name='phone'/>
						</dd>
					</dl>
					<dl>
						<dt>详细地址</dt>
						<dd>
							<input type="text" placeholder="如街道，楼层，门牌号等" v-model='address' name='address'/>
						</dd>
					</dl>
					<dl>
						<dt>邮政编码</dt>
						<dd>
							<input type="text" placeholder="邮政编码(选填)"  v-model='postCode' name='postCode'/>
						</dd>
					</dl>
					<div class="address-btn preserve" @click='reserve'>保存</div>
				</div>
			</div>
			<confirmToast v-show='confirmToastHidden' @closeDialogEvent='closeDialogHandler' @closeConfirm='closeConfirmEvent'></confirmToast>
		</div>
		<!--新增收货地址结束-->
		<!--选择收货地址开始-->
		<div class="maskmain" v-show='selecthidden'>
			<div class="select-main">	
				<h3 @click = 'selecthidden = !selecthidden'>选择收货地址</h3>
				<div class="address-mcon">
					<dl>
						<dt><div class="tolley-check"></div></dt>
			    		<dd class="consignee">
			    				<p>收货人:{{addressArr.name}}<span>{{addressArr.phone}}</span></p>
									<span>收货地址:{{addressArr.address}}</span>
			    		</dd>
			    		<dd class="order-right" @click='selectEdit'><img src="../assets/selectEdit.png"/></dd>
					</dl>
				</div>
			</div>
		</div>
		<!--选择收货地址结束-->
		<!--修改收货地址开始-->
		<div class="maskmain" v-show='confirmHidden' @closeDialogEvent='closeDialogHandler'>
			<div class="address-main">	
				<h3 @click="close">修改收货地址</h3>
				<div class="address-mcon">
					<dl>
						<dt>收货人</dt>
						<dd>
							<input type="text" name="name" placeholder="收货人姓名" v-model='addressArr.name'/>
						</dd>
					</dl>
					<dl>
						<dt>联系电话</dt>
						<dd>
							<input type="text" placeholder="手机或固定电话"  v-model='addressArr.phone'/>
						</dd>
					</dl>
					<dl>
						<dt>详细地址</dt>
						<dd>
							<input type="text" placeholder="如街道，楼层，门牌号等" v-model='addressArr.address'/>
						</dd>
					</dl>
					<dl>
						<dt>邮政编码</dt>
						<dd>
							<input type="text" placeholder="邮政编码(选填)" v-model='addressArr.postCode'/>
						</dd>
					</dl>
					<div class="address-btn preserve" @click='reserve1'>保存</div>
				</div>
			</div>
			<confirmToast v-show='confirmToastHidden'  @closeDialogEvent='closeDialogHandler'  @closeConfirm='closeConfirmEvent'></confirmToast>
		</div>
		<!--修改收货地址结束-->
  </div>
</template>
<script>
import axios from 'axios'
import Toast from '@/packages/toast'
import confirmToast from '@/components/confirmToast'
export default {
  data(){
  	return {
  		num:1,
  		totalPrice:'',
  		Deliveryhidden: false,
  		addNewAddressHidden: true,
  		selecthidden: false,
  		editHidden: false,
  		name:'',
  	  phone:'',
  	  address:'',
  	  postCode:'',
  	  confirmHidden: false,
  	  confirmToastHidden: false,
 			count:'',
 			arr:[],
 			countPrice:'',
 			addressArr:{
 				name:'',
	  	  phone:'',
	  	  address:'',
	  	  postCode:''
 			},
 			submitArr:[]
    }
  },
  components:{
  	confirmToast
  },
  methods: {
  	//点击新增收货地址显示
  	addAddress(){
  		this.Deliveryhidden = true
  	},
  	//修改收货地址
  	editAddress(){
  		this.selecthidden = true
  	},
  	editDeliveryHandler(){
  		this.editHidden = true
  	},
  	//选择收货地址
  	selectDeliveryHandler(){
  		this.confirmHidden = false
  	},		
		//新增地址中的关闭按钮
	  close(){ 	
		this.confirmToastHidden = true
	  },
	  closeConfirmEvent(){
	  	this.confirmToastHidden = false
	  },
	  closeDialogHandler(){
			this.Deliveryhidden = false
			this.confirmHidden = false
			this.selecthidden = false
			this.confirmToastHidden = false
		},
	  //保存 存localstorage，如果localstorage不为空则新增地址变为false 地址变为true 
	  reserve(){
	  	if (!window.localStorage) {
	        return false
	    } else {
        var address = { 
        	name: this.name, 
        	phone: this.phone,
        	address: this.address,
        	postCode: this.postCode
        } 
        var rephone = /^1[3,4,5,7,8]\d{9}$/;
        if(rephone.test(address.phone)){
        	if(address.name!==''&&address.address!==''){
	         	this.addNewAddressHidden = false
	        	this.Deliveryhidden = false
	        	var storage = window.localStorage
		        var obj_arr = JSON.stringify(address)  
		        storage.setItem("deliver_key", obj_arr)
	        }
        }else{
        	Toast({
            message: '手机号码格式有误',
            position:'top',
          });
            return;
        }
        var storage = window.localStorage
        var obj_arr = JSON.stringify(address)  
        storage.setItem("deliver_key", obj_arr)
	    }
	    this.$emit('closeDialogEvent')
	    this.$emit('clickEvent')
	  },
	  //修改收货地址保存数据
	  reserve1(){
	  	console.log(1)
	  	var address1 = { 
        	name: this.addressArr.name, 
        	phone: this.addressArr.phone,
        	address: this.addressArr.address,
        	postCode: this.addressArr.postCode
        } 
	  	var rephone = /^1[3,4,5,7,8]\d{9}$/;
	  	if(rephone.test(this.addressArr.phone)){
	    	if(this.addressArr.name!==''&&this.addressArr.address!==''){
         	this.confirmHidden = false
        	this.Deliveryhidden = false
        	var storage = window.localStorage
	        var obj_arr= JSON.stringify(address1)  
	        storage.setItem("deliver_key", obj_arr)
        }
	    }else{
	    	Toast({
	        message: '手机号码格式有误',
	        position:'top',
	      });
	        return;
	    }
	  },
	  //提交订单
	  submitOrder(){
	  	if(this.addressArr.name!==''){
	  		if (!window.localStorage) {
			    return false;
			  } else {
	        let storage = window.localStorage
	        this.submitArr.push(this.arr)
	        this.submitArr.push(this.addressArr)
	         this.submitArr.push(this.countPrice)
	        var orderArr= JSON.stringify(this.submitArr)  
	        storage.setItem("orderArr", orderArr)
			  }
	  	}
	  	

	  },
  	selectEdit(){
  		this.confirmHidden = true
  		this.selecthidden = false
  	},
  	loadFromLocal(){
  		//read address data from local storage.
  	}
  },
  mounted() {  
  	  this.loadFromLocal();
  	  var routeId = this.$router.currentRoute.query.routerId
			if (!window.localStorage) {
		    return false;
		  } else {
    	//取从购物车传过来的数据的商品信息
        let storage = window.localStorage;
        if(routeId==0){
        	let obj_arr = storage.getItem('shopcart_Key')
	        let obj = JSON.parse(obj_arr)
	        this.arr = obj
	        for (var i = 0, len = this.arr.length; i < len; i++) {
						this.count = this.arr[i].num*parseInt(this.arr[i].price)
						this.countPrice = this.count + 12
	        }
        }else if(routeId==1){      	
        	//取直接购买的商品信息         	
        	let obj_arr = storage.getItem('buyNow_Key')
	        let obj = JSON.parse(obj_arr)
	        this.arr = obj
					this.count = this.arr[0].num*parseInt(this.arr[0].price)
					this.countPrice = this.count + 12
        }
	      //取地址的localstorage
	      let address_arr = storage.getItem("deliver_key")
		    let address_obj = JSON.parse(address_arr)
		    this.addressArr = address_obj
		    console.log(this.addressArr)
		    if(this.addressArr.name!==''){
		    	this.addNewAddressHidden = false
		    }else{
		    	this.addNewAddressHidden = true
		    }
      }
    }
  }
</script>
<style scoped lang="scss">
@import "../common/common.scss";
.confirmOrder{
	background: #f6f6f6;
	width: 100%;
	height: 100%;
	position: absolute;
	.order-top{
		width: 100%;
		height: rem(110rem);
		overflow: hidden;
		margin-bottom: rem(10rem);
		background:#fff url(../assets/confirmTop.png) repeat-x  bottom;	
		.order-address{
			width: 94%;
			height: rem(40rem);
			margin-top: rem(32rem);
			margin-left: 3%;
			.order-add{
				width: rem(40rem);
				height: rem(40rem);
				float: left;
			}
			span{
				line-height: rem(40rem);
				margin-left: rem(10rem);
				font-size: $font16;
			}
			.order-right{
				width: rem(5.5rem);
				height: rem(11rem);
				float: right;
				margin-top: rem(14.5rem);
			}
		}
		.order-consignee{
			width: 94%;
			height: rem(40rem);
			margin-top: rem(25rem);
			margin-left: 3%;
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
					line-height: rem(16rem);
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
		}
		.order-mdetail{
			width: 94%;
			height: rem(92rem);
			background: #fafafa;
			padding: rem(5rem) 3%;
			dl{
				width: 70%;
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
					p{
						margin-top: rem(5rem);
						font-size: $font14;
						color: #fe4415;
					}
				}
			}
			.order-mnum{
				float: right;
				line-height: rem(92rem);
				color: #9c9c9c;
				span{
					font-size: $font14;
				}
			}
		}
	}
	.order-mcontent{
		width: 94%;
		background: #fff;
		padding: 0 3%;
		dl{
			width: 100%;
			height: rem(47rem);
			border-bottom: 1px solid #efefef;
			line-height: rem(47rem);
			dt{
				float: left;
				width: 50%;
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
		}
		.order-mconpic{
			border: 0;
			dd{
				letter-spacing: rem(0.4rem);
				span{
					color: #ff3300;
				}
			}
		}
	}	
	.order-bottom{
		width: 100%;
		height: rem(48rem);
		background: #fff;
		position: absolute;
		left: 0;
		bottom: 0;		
		.submitOrder{
			width: 24%;
			float: right;
			height: rem(48rem);
			line-height: rem(48rem);
			color: #fff;
			background: #ff4443;
			text-align: center;
			font-size: $font14;
		}
		.toal{
			float: right;
			font-size: $font14;
			color: $c000;
			line-height: rem(48rem);
			margin-right: rem(10rem);
			span{
				color: #ff3300;
				margin-left: rem(10rem);
			}
		}
	}
}
.maskmain{
	width: 100%;
	height: 100%;
	background: rgba(0,0,0,0.6);
	position: absolute;
	bottom: 0;
	left: 0;
	top: 0;
	z-index: 99;
	.address-main{
		height: rem(342rem);
		background:#fff;
		width: 100%;
		position: absolute;
		bottom: 0;
		left: 0;
		h3{
			font-size: $font16;
			text-align: center;
			line-height: rem(52rem);
			border-bottom: 1px solid #efefef;
			background: url(../assets/shopcarClose.png) no-repeat 97% center;
			background-size: rem(19rem);
		}
		.address-mcon{
			width: 94%;
			padding: 0 3%;
			dl{
				border-bottom: 1px solid #efefef;
				height: rem(50rem);
				width: 100%;
				font-size: $font14;
				dt{
					width: 18%;
					float: left;
					line-height: rem(50rem);
				}
				dd{
					width: 78%;
					float: right;
					margin: rem(16rem) 0;
					input{
						width: 100%;
						border: 0;
					}
				}
			}
			.address-btn{
				width: 100%;
				height: rem(40rem);
				text-align: center;
				line-height: rem(40rem);
				font-size: $font16;
				border-radius: rem(5rem) ;
			}
			.preserve{
				background: #50b347;
				color: #fff;
				margin-bottom: rem(10rem);
				margin-top: rem(24rem);
			}
			.remove{
				color: $c3c3c;
				border: 1px solid #999;
			}
		}	
	}
	.address-main1{
	  height: rem(394rem);
	}
	.select-main{
		background:#fff;
		width: 100%;
		position: absolute;
		bottom: 0;
		left: 0;
		h3{
			font-size: $font16;
			text-align: center;
			line-height: rem(52rem);
			border-bottom: 1px solid #efefef;
			background: url(../assets/shopcarClose.png) no-repeat 97% center;
			background-size: rem(19rem);
		}
		.address-mcon{
			width: 94%;
			padding: 0 3%;
			dl{
				width: 100%;
				overflow: hidden;
				border-bottom: 1px solid #efefef;
				padding: rem(10rem) 0;
				dt{
					float: left;
					width: rem(19rem);
					height: rem(19rem);
					margin-right: 2%;
					.tolley-check{
						float: left;
						border-radius: 50%;
						margin: rem(15rem) 3% 0 0;
						width: rem(19rem);
						height: rem(19rem);
						background: url(../assets/shopTolley.png) no-repeat center;
						background-size: cover;
						border:0;
					}
					img{
						width: 100%;
						height: 100%;
					}
				}
				.consignee{
					float: left;
					width: 84%;
					line-height: rem((19rem));
					font-size: $font12;
					p{
						margin-bottom: rem(2rem);
						color: $c3c3c;
					}
					span{
						line-height: rem(16rem);
						color: #999;
					}
				}
				.order-right{
					width: rem(15rem);
					height: rem(15rem);
					float: right;
					margin-top: rem(18rem);
					img{
						width: 100%;
						height: 100%;
					}
				}
				.order-return{
					width: rem(5rem);
					height: rem(11rem);
					float: right;
					margin-top: rem(2rem);
					img{
						width: 100%;
						height: 100%;
					}
				}	
			}
			
		}	
	}		
}
</style>