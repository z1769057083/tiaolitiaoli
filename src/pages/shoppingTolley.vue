<template>
	<div>
	<div class="no-goods" v-if='!arr.length'>
		<div>
			暂无商品
		</div>
	</div>
    <div class='tolley-main' v-else> 
	  	<div class="tolley-mtop">
	  		<div class="tolley-check" :class="{active: isSelectAll}" @click='allSelect'></div>	
	   		<div class="order-mtitle">
		    	汉古商城
		    	<span></span>
		    </div>
	  	</div>
	  	<div class="tolley-content" v-for='(item,index) in arr'>
	  		<div class="tolley-mcon">
	  			<div class="tolley-check" :class="{active:item.isChecked}" @click='selectGood(index)'></div>	
		  		<dl>
	    			<dt><img 
	    				:src="'http://139.162.116.116/image/product/'+item.img+'/1.jpg'" 
	    				onerror="this.src='http://placeholder.qiniudn.com/300'"/></dt>
	    			<dd>
	    				{{item.name}}
	    				<p>{{item.price}}</p>
	    			</dd>
	    		</dl>
	    		<div class="order-mnum">X<span>{{item.num}}</span></div>
	    		<div class="delect" @click='delGoods(item,index)'><img src="../assets/tolleyDelect.png"/></div>
		  	</div>
	  	</div>
	  	<div class="tolley-mbottom">
			<div class="submitOrder" @click='settlement'>结算(<span>{{total}}</span>)</div>
				<div class="toal">
					合计:<span>¥{{totalPrice | Currency}}元</span>
					<span class="fare"></span>
				</div>
				<div class="tolley-select">
					<div class="tolley-check" :class="{active: isSelectAll}" @click='allSelect'></div>	
					全选
				</div>
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
import Toast from '@/packages/toast'
 export default {
 	data(){
 		return{
 			toggleLock: false,
 			arr:[],
 			total:'',
 			toastHidden:false,
 			readyToDelIndex:-1,
 			orderArr:[]
 		}
 	},
 	methods:{
   		allSelect(){
   			if(!this.toggleLock){
   				this.isSelectAll = true
   				this.toggleLock = true
   				this.arr.forEach((item)=>{
					item.isChecked = true					
				})	
   			}else{
   				this.isSelectAll = false
   				this.toggleLock = false
   				this.arr.forEach((item)=>{
					item.isChecked = false			
				})	
   			}		
   		},
 		selectGood(index){	
 			this.arr[index].isChecked = !this.arr[index].isChecked;
 			this.$set(this.arr, index, this.arr[index])
			this.$forceUpdate()
 		},
// 		判断是否全部选中
 		isCheckAll(){
 			var flag = true;
			this.orderArr.forEach((item)=>{
				if(!item.isChecked){
					flag = false;
				}
			});
			if(!flag){
				this.isSelectAll = false;
			} else {
				this.isSelectAll = true;
			}
 		},
 		settlement(){
   			if(this.isSelectAny){
   				window.localStorage.setItem('shopcart_Key',JSON.stringify(this.arr))
				this.$router.push({ path: '/confirmOrder', query: { routerId: 0 }})	
			}else{					
				Toast({
                    message: '请选择商品之后在结算',
                    position:'top',
                });
			}
 		},
 		delGoods(item,index){
			this.toastHidden = true
			this.readyToDelIndex = index
		},
 		//删除商品
   		confirmDel(){
   			this.toastHidden = false
   			this.arr.splice(this.readyToDelIndex,1);
        	window.localStorage.setItem('shopcart_Key',JSON.stringify(this.arr))		
        	if(window.localStorage.getItem('shopcart_Key')!==this.arr){
        		this.isSelectAll = false
        		this.isCheckAll()        		
        	}else{
        		this.isCheckAll()
        	}
   		}
 	},
	computed:{
		isSelectAll: function () {
 			let flag=true;
 			this.arr.forEach((item)=>{
				if(!item.isChecked){
					flag = false;
				}
			});
			return flag;
 	    },
 	    isSelectAny: function () {
 			let flag=false;
 			this.arr.forEach((item)=>{
				if(item.isChecked){
					flag = true;
				}
			});
			return flag;
 	    },
        //总价
		totalPrice:function(){
			var total = 0;
			this.arr.forEach(function(good){
//				if(good.isChecked){
//					total += good.productPrice * good.productQuentity;
//				}
			});
			return total;
		}
	},
	filters:{
		Currency:function(val){
			return val;
		}
	},
 	mounted() {
	    if (!window.localStorage) {
	        return false;
	    } else {
	        let storage = window.localStorage;
	        let obj_arr = storage.getItem('shopcart_Key')
	        this.arr = JSON.parse(obj_arr)
	    }
	    this.arr.forEach((item)=>{
			item.isChecked = true
		})
	}
 	
 }
</script>
<style scoped lang="scss">
@import "../common/common.scss";
.no-goods{
  	 background: #f6f6f6;
  	 width: 100%;
  	 height: 100%;
  	 position: absolute;
  	 z-index: 999;
 	div{
 		text-align: center;
  	    line-height: 100%;	
  	    margin-top: 40%;
 	}
  }
.tolley-main{
	width: 100%;
	height: 100%;
	background: #f6f6f6;
	position: absolute;
  .tolley-check{
		float: left;
		width: rem(18rem);
		height: rem(18rem);
		border-radius: 50%;
		border: 1px solid #999;
		margin: rem(15rem) 3% 0 0;
	}
	.active{
		width: rem(20rem);
		height: rem(20rem);
		background: url(../assets/shopTolley.png) no-repeat center;
		background-size: cover;
		border:0;
	}
	.tolley-mtop{
		width: 94%;
		padding:0 3%;
		height: rem(46rem);
		background: #fff;
		.order-mtitle{
			width: 86%;
			line-height: rem(46rem);
			background: url(../assets/confirmLogo.png) no-repeat left;
			background-size: rem(15rem) rem(14rem);
			padding-left: 5%;
			float: left;
			span{
				float: right;
			}
		}
	}
	.tolley-content{
		width: 100%;
		overflow: hidden;
		background: #fff;
		.tolley-mcon{
			width: 94%;
			height: rem(92rem);
			background: #fafafa;
			padding: rem(5rem) 3%;
			margin-bottom: rem(10rem);
			position: relative;
			transition: transform .3s;
			.tolley-check{
				margin: rem(37rem) 3% 0 0;
			}
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
				line-height: rem(46rem);
				color: #9c9c9c;
				span{
					font-size: $font14;
				}
			}
			.delect{
				width: rem(15rem);
				height: rem(19rem);
				position: absolute;
				bottom: rem(10rem);
				right: rem(10rem);
				text-align: center;
				font-size: $font14;
				img{
					width: 100%;
					height: 100%;
				}
			}
		}
	}
	.tolley-mbottom{
		width: 97%;
		height: rem(48rem);
		background: #fff;
		position: fixed;
		left: 0;
		bottom: 0;
		padding-left: 3%;		
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
			.fare{
				color: #9e9e9e;
				font-size: $font12;
			}
		}
		.tolley-select{
			line-height: rem(48rem);
			font-size: $font14;
		}
	}
}
.shopConfirm-toast{
		width: 100%;
		height: 100%;
		position: absolute;
		background: rgba(0,0,0,.5);
		z-index: 999;
		.confirm-main{
			width: 80%;
			background: #fff;
			height: rem(100rem);
			position: absolute;
			border-radius: rem(5rem);
			left: 10%;
			top: 42%;
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