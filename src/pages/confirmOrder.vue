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
					<p>收货人:&nbsp;{{addressArr.name}}<span>{{addressArr.phone}}</span></p>
					<span>收货地址:&nbsp;{{addressArr.selectAdd}}{{addressArr.address}}</span>
				</dd>
				<dd class="order-right"><img src="../assets/confirmRight.png"/></dd>
			</dl>
			<!--收货地址结束-->
    </div> 
    <div class="order-main">
    	<h3 class="order-mtitle">汉古商城</h3>
    	<div class="order-mdetail" v-for='(item,index) in arr'>
    		<dl>
    			<dt v-if='geneProduct'><img :src="imgUrl" 
	    				onerror="this.src='../../static/images/defaultPicture.jpg'"/></dt>
    			<dt v-if='!geneProduct'><img :src="''+apiPath+'/image/product/'+item.img+'/1.jpg'" 
	    				onerror="this.src='../../static/images/defaultPicture.jpg'"/></dt>
    			<dd>
    				{{item.name}}
	    			<p>¥{{item.price}}</p>
    			</dd>
    		</dl>
    		<div class="order-mnum">X<span>{{item.num}}</span></div>
    	</div>		
    </div>
    <div class="order-mcontent">
    	<dl v-if='useCoupon'>
    		<dt>运费</dt>
    		<dd>免邮</dd>
    	</dl>
    	<dl v-if='useCoupon'>
    		<dt>代金券</dt>
    		<dd>
    			<p class="couponName">六大高发癌症代金券</p>
    			<p class="couponReduce">立减&nbsp;&nbsp;¥680.00</p>
    		</dd>
    	</dl>
    	<dl v-if='!useCoupon'>
    		<dt>配送方式</dt>
    		<dd>快递 &nbsp;¥{{fare}}.00</dd>
    	</dl>
    	<dl v-if='!useCoupon'>
    		<dt>备注</dt>
    		<dd>超过300免邮费</dd>
    	</dl>
    	<dl class="order-mconpic">
    		<dt></dt>
    		<dd>共&nbsp;{{totalNum}}&nbsp;件商品   小计:&nbsp;<span>¥<span class="order-mconprice">{{count}}</span>.00</span></dd>
    	</dl>
    </div>
		<div class="order-bottom">
			<div class="submitOrder" @click='submitOrder'>提交订单</div>
			<div class="toal">
				合计:<span>¥&nbsp;{{countPrice}}.00</span>
			</div>
		</div>
		<!--新增收货地址开始-->
		<div class="maskmain" v-if='Deliveryhidden' @closeDialogEvent='closeDialogHandler'>
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
						<dt>选择地址</dt>
						<dd class="selectAddress">
							<selectcity></selectcity>
						</dd>
					</dl>
					<dl>
						<dt>详细地址</dt>
						<dd>
							<input type="text" placeholder="如街道，楼层，门牌号等" v-model='address' name='address'/>
						</dd>
					</dl>
					<div class="address-btn preserve" @click='reserve'>保存</div>
				</div>
			</div>
			<confirmToast v-if='confirmToastHidden' @closeDialogEvent='closeDialogHandler' @closeConfirm='closeConfirmEvent'></confirmToast>
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
			    				<p>收货人:&nbsp;{{addressArr.name}}<span>{{addressArr.phone}}</span></p>
									<span>收货地址:&nbsp;{{addressArr.selectAdd}}{{addressArr.address}}</span>
			    		</dd>
			    		<dd class="order-right" @click='selectEdit'><img src="../assets/selectEdit.png"/></dd>
					</dl>
				</div>
			</div>
		</div>
		<!--选择收货地址结束-->
		<!--修改收货地址开始-->
		<div class="maskmain" v-if='confirmHidden' @closeDialogEvent='closeDialogHandler'>
			<div class="address-main">	
				<h3 @click="close">修改收货地址</h3>
				<div class="address-mcon">
					<dl>
						<dt>收货人</dt>
						<dd>
							<input type="text" name="name" placeholder="收货人姓名" v-model='editAddressArr.name'/>
						</dd>
					</dl>
					<dl>
						<dt>联系电话</dt>
						<dd>
							<input type="text" placeholder="手机或固定电话"  v-model='editAddressArr.phone'/>
						</dd>
					</dl>
					<dl>
						<dt>选择地址</dt>
						<dd class="selectAddress">
							<selectcity></selectcity>
						</dd>
					</dl>
					<dl>
						<dt>详细地址</dt>
						<dd>
							<input type="text" placeholder="如街道，楼层，门牌号等" v-model='editAddressArr.address'/>
						</dd>
					</dl>				
					<div class="address-btn preserve" @click='reserve1'>保存</div>
				</div>
			</div>
			<confirmToast v-if='confirmToastHidden'  @closeDialogEvent='closeDialogHandler'  @closeConfirm='closeConfirmEvent'></confirmToast>
		</div>
		<!--修改收货地址结束-->
  </div>
</template>
<script>
import axios from 'axios'
import api from '../api/api'
import Toast from '@/packages/toast'
import confirmToast from '@/components/confirmToast'
import selectcity from '@/components/selectcity'
export default {
  data(){
  	return {
  		num:1,
  		totalPrice:'',
  		imgUrl:'',
  		Deliveryhidden: false,
  		addNewAddressHidden: true,
  		selecthidden: false,
  		editHidden: false,
  		name:'',
  	  phone:'',
  	  address:'',
  	  confirmHidden: false,
  	  confirmToastHidden: false,
 			count:0,
 			totalNum:0,
 			arr:[],
 			countPrice:0,
 			addressArr:{
 				name:'',
	  	  phone:'',
	  	  selectAdd:'',
	  	  getAdd:[],
	  	  address:'',
 			},
 			editAddressArr:{
 				name:'',
	  	  phone:'',
	  	  selectAdd:'',
	  	  getAdd:[],
	  	  address:'',
 			},
 			selectAddress:[],
 			price:{
 				price:0,
 				totalNum:0
 			},
 			submitArr:{},
 			apiPath:'',
 			fare:12,
 			geneProduct:false,
 			useCoupon:false,
 			couponCode:''
    }
  },
  components:{
  	confirmToast,
  	selectcity
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
	  	this.loadDelieverAddress()
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
	    	//从selectCity里面取城市的值
				if(this.selectAddress.length==0){		  		
		  		this.selectAddress.push(this.$children[0].$el.querySelector('#selProv').value)
			  	this.selectAddress.push(this.$children[0].$el.querySelector('#selCity').value)
			  	if(this.$children[0].$el.querySelector('#selDistrict')){
			  		this.selectAddress.push(this.$children[0].$el.querySelector('#selDistrict').value)	  	  	
			  	}
		  	}else{
		  		this.selectAddress.splice(0,this.selectAddress.length)
		  		this.selectAddress.push(this.$children[0].$el.querySelector('#selProv').value)
			  	this.selectAddress.push(this.$children[0].$el.querySelector('#selCity').value)
			  	if(this.$children[0].$el.querySelector('#selDistrict')){
			  		this.selectAddress.push(this.$children[0].$el.querySelector('#selDistrict').value)	  	  	
			  	}
		  	}
		  	let str = this.selectAddress.toString()
		  	str = str.replace(/,/g,'')
        var address = {
        	name: this.name, 
        	phone: this.phone,
        	selectAdd: str,
        	getAdd:this.selectAddress,
        	address: this.address
        } 
        let rephone = /^1[3,4,5,7,8]\d{9}$/;	         
        	if(address.name!==''&&address.phone!==''){
        		if(rephone.test(address.phone)){
        			if(address.address!==''){
        				this.addNewAddressHidden = false
			        	this.Deliveryhidden = false
			        	var storage = window.localStorage
				        var obj_arr = JSON.stringify(address)  
				        storage.setItem("deliver_key", obj_arr)
        			}else{
        				Toast({
				        message: '必填项不能为空',
				        position:'middle'
				      });
				        return;
        			}       			
        		}else{
		        	Toast({
		            message: '手机号码格式有误',
		            position:'middle'
		          })
		            return;
		        }	         	
	        }else{
	        	Toast({
		        message: '必填项不能为空',
		        position:'middle'
		      });
		        return;
         } 
        var obj_arr = JSON.stringify(address)  
        window.localStorage.setItem("deliver_key", obj_arr)
	    }
	    this.addressArr = address
	    this.editAddressArr = address
	    this.$emit('closeDialogEvent')
	    this.$emit('clickEvent')
	  },
	  //修改收货地址保存数据
	  reserve1(){ 
	  	//从selectCity里面取城市的值		
		  	if(this.selectAddress.length==0){		  		
		  		this.selectAddress.push(this.$children[0].$el.querySelector('#selProv').value)
			  	this.selectAddress.push(this.$children[0].$el.querySelector('#selCity').value)
			  	if(this.$children[0].$el.querySelector('#selDistrict')){
			  		this.selectAddress.push(this.$children[0].$el.querySelector('#selDistrict').value)	  	  	
			  	}
		  	}else{
		  		this.selectAddress.splice(0,this.selectAddress.length)
		  		this.selectAddress.push(this.$children[0].$el.querySelector('#selProv').value)
			  	this.selectAddress.push(this.$children[0].$el.querySelector('#selCity').value)
			  	if(this.$children[0].$el.querySelector('#selDistrict')){
			  		this.selectAddress.push(this.$children[0].$el.querySelector('#selDistrict').value)	  	  	
			  	}
		  	}	  	
		  	let str = this.selectAddress.toString()		  	
		  	str = str.replace(/,/g,'')
	  	var address1 = { 
        	name: this.addressArr.name, 
        	phone: this.addressArr.phone,
        	selectAdd: str,
        	getAdd:this.selectAddress,
        	address: this.addressArr.address
     }	  	
	  	var rephone = /^1[3,4,5,7,8]\d{9}$/;	
	    	if(address1.name!==''&&address1.phone!==''){
	    		if(rephone.test(address1.phone)){
	    			if(address1.address!==''){
	    				this.confirmHidden = false
		        	this.Deliveryhidden = false
		        	var storage = window.localStorage
			        var obj_arr= JSON.stringify(address1) 
			        storage.setItem("deliver_key", obj_arr)
	    			}else{
	    				Toast({
				        message: '必填项不能为空',
				        position:'middle',
				        duration:1000
				      });
				        return;
	    			}        	
	        }else{
			    	Toast({
			        message: '手机号码格式有误',
			        position:'middle',
			        duration:1000
			      });
			        return;
			    }	 
        }else{
        	Toast({
		        message: '必填项不能为空',
		        position:'middle',
		        duration:1000
		      });
		        return;
        }	       
	    var obj_arr = JSON.stringify(address1)  
	    window.localStorage.setItem("deliver_key", obj_arr)
	    this.addressArr.selectAdd = address1.selectAdd
	  },
	  //提交订单
	  submitOrder(){
	  	if(this.addressArr.name!==''){
	  		if (!window.localStorage) {
			    return false;
			  } else {
	        let storage = window.localStorage
	        this.submitArr.order = this.arr;
	        this.submitArr.address = this.addressArr;
	        this.submitArr.price = this.price.price;
	        this.submitArr.totalNum = this.price.totalNum
	        if(this.arr[0].id==1){
	        	this.submitArr.type = 'gene'
	        }
	        console.log(this.submitArr)
	        var orderArr= JSON.stringify(this.submitArr) 
	        console.log(orderArr)
	        storage.setItem("orderArr", orderArr)
			  }
			  this.$router.push({ path: '/cashier'})
	  	}else{
	  		Toast({
            message: '收货地址不能为空',
            position:'top',
            duration:1000
        })
        return;
	  	}
	  },
  	selectEdit(){
  		this.confirmHidden = true
  		this.selecthidden = false
  	}, 	
  	loadDelieverAddress(){
  		 //取地址的localstorage
	      let address_arr = window.localStorage.getItem("deliver_key")
		    let address_obj = JSON.parse(address_arr)
		    if(address_obj!==null){		    	
		    	this.addressArr = address_obj
	      	this.addNewAddressHidden = false
	    }		    
		  this.editAddressArr = this.addressArr
//		  console.log(this.addressArr)
  	},
  	loadOrdersFromBuyNow(){
  		//取直接购买的商品信息         	
        	let obj_arr = window.localStorage.getItem('buyNow_Key')
	        this.arr = JSON.parse(obj_arr)
//	        console.log(this.arr)
	        this.totalNum += this.arr[0].num
					this.count = this.arr[0].num*parseInt(this.arr[0].price)
					if(this.count>=300){
						this.fare = 0
						this.countPrice = this.count
					}else{
						this.fare = 12
						this.countPrice = this.count + 12
					}
					this.price.price = this.countPrice
					this.price.totalNum = this.totalNum
  	},
  	checkIfCodeIsUsed(isUsed){
  		this.useCoupon = !isUsed
	  	if(isUsed==false){
	      this.count = this.arr[0].num * parseInt(this.arr[0].price)-680 
	      this.countPrice = this.arr[0].num * parseInt(this.arr[0].price)-680
	      this.price.price = this.countPrice
	  	}else{
	  		this.count += this.arr[0].num * parseInt(this.arr[0].price)
    		if(this.count>=300){
						this.fare = 0
						this.countPrice = this.count
					}else{
						this.fare = 12
						this.countPrice = this.count + 12						
					}
					this.price.price = this.countPrice
	    }
	  	
			this.price.totalNum = this.totalNum
	  },
  	loadOrderToCheckCouponStatus(hasCoupon){
  		if(hasCoupon){
						this.price.price = 0
          	this.count = 0
          	this.price.totalNum = 1
          	this.useCoupon = true
  		}else{
  			this.count += this.arr[0].num * parseInt(this.arr[0].price)
    		if(this.count>=300){
						this.fare = 0
						this.countPrice = this.count
					}else{
						this.fare = 12
						this.countPrice = this.count + 12
					}
					this.price.price = this.countPrice
					this.price.totalNum = this.totalNum
  		}
  	},
  	loadOrdersFromShopCart(){
  		//取购物车的商品信息
  		let obj_arr = window.localStorage.getItem('shopcart_Key')
	        let obj = JSON.parse(obj_arr)
	        obj.forEach((index)=>{
						if(index.isChecked){
							this.arr.push(index)
						}						
					});
	        if (this.arr.length) {
	          for (var i = 0, len = this.arr.length; i < len; i++) {
	          	  this.totalNum += this.arr[i].num * 1 
								this.count += this.arr[i].num * parseInt(this.arr[i].price)
								if(this.count>=300){
									this.fare = 0
									this.countPrice = this.count
								}else{
									this.fare = 12
									this.countPrice = this.count + 12
								}
								this.price.price = this.countPrice
								this.price.totalNum = this.totalNum
	          }
         }
  	},
  	loadOrdersFromGenePay(){
  		//取直接购买的商品信息         	
        	let obj_arr = window.localStorage.getItem('genePay_Key')
	        this.arr = JSON.parse(obj_arr)
	        console.log(this.arr)
	        this.geneProduct = true
	        this.imgUrl = this.arr[0].img
	        this.totalNum += this.arr[0].num	
					let hasCoupon = window.localStorage.getItem('receiveCode')!==null;
					console.log(hasCoupon)
					this.loadOrderToCheckCouponStatus(hasCoupon);
					
  	},
  	loadOrderForMedial(){
  		var routeId = this.$router.currentRoute.query.routerId
	    if(routeId==0){
	    	this.loadOrdersFromShopCart();
	    }else if(routeId==1){      	
	    	this.loadOrdersFromBuyNow();
	    }      		
  	},
  	loadOrderForGene(){
	    this.loadOrdersFromGenePay();
	    if(window.localStorage.getItem('receiveCode')){
	      	let receive = JSON.parse(window.localStorage.getItem('receiveCode'));		        					this.couponCode = receive
	      	let that = this;
					axios.get(api.couponDetail+this.couponCode)
            .then(function (res) {    
                if (res.data.errorCode == 0) {
									that.couponDetailData = res.data.returnValue
		      				that.checkIfCodeIsUsed(that.couponDetailData.isUsed)
	      	}})  
			}	 
	  }  
  },
  mounted() {
	  this.loadOrderForMedial();
		var routeId = this.$router.currentRoute.query.routerId
    if(routeId==2){
  	  this.loadOrderForGene();
	  }
	  	document.title ='确认订单'
	  	this.apiPath = api.apipath  	
	  	this.loadDelieverAddress();
  }
}
  
</script>
<style scoped lang="scss" rel="stylesheet/scss">
@import "../common/common.scss";
.confirmOrder{
	background: #f6f6f6;
	width: 100%;
	height: 100%;
	position: absolute;
	font-size: $font14;
	.order-top{
		width: 100%;
		height: rem(110rem);
		overflow: hidden;
		margin-bottom: rem(10rem);
		background:#fff url(../assets/confirmTop.png) no-repeat  bottom;	
		background-size: 100% rem(8rem);
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
		padding-bottom: rem(49rem);
		dl{
			width: 94%;
			padding: 0 3%;
			height: rem(47rem);
			border-bottom: 1px solid #efefef;
			line-height: rem(47rem);
			background: #fff;
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
				height: rem(47rem);
				overflow: hidden;
				text-align: right;
				.couponName{
					line-height: rem(24rem);
				}
				.couponReduce{
					color: #ff3300;
					line-height: rem(22rem);
				}
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
	.order-bottom{
		width: 100%;
		height: rem(48rem);
		background: #fff;
		position: fixed;
		left: 0;
		bottom: 0;	
		border-top: 1px solid #f6f6f6;	
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
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
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
					margin-top: rem(14rem);
					input{
						width: 100%;
						border: 0;
					}
				}
				.selectAddress{
					margin-top: rem(10rem);
					overflow: hidden;
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
						margin: rem(10rem) 3% 0 0;
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
					font-size: $font14;
					p{
						margin-bottom: rem(2rem);
						color: $c3c3c;
						span{
							float: right;
						}
					}
					span{
						line-height: rem(18rem);
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