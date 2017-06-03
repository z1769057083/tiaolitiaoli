<template>
  <div class='tolley-main'> 
  	<div class="tolley-mtop">
  		<div class="tolley-check" :class="{'active': toggle}" @click='selectCheck'></div>	
   		<div class="order-mtitle">
	    	汉古商城
	    	<span>编辑</span>
	    </div>
  	</div>
  	<div class="tolley-content" v-for='(item,index) in arr'>
  		<div class="tolley-mcon" >
  			<div class="tolley-check" :class="{'active': toggle}"></div>	
	  		<dl>
	    			<dt><img src="../assets/confrimShopImg.png" onerror="this.src='http://placeholder.qiniudn.com/300'"/></dt>
	    			<dd>
	    				{{item.name}}
	    				<p>{{item.price}}</p>
	    			</dd>
	    		</dl>
	    		<div class="order-mnum">X<span>{{item.num}}</span></div>
	    		<div class="delect">删除</div>
	  	</div>
  	</div>
  	<div class="tolley-mbottom">
  		<router-link to='/confirmOrder'>
  			<div class="submitOrder">结算(<span>{{total}}</span>)</div>
  		</router-link>
			<div class="toal">
				合计:<span>¥{{count}}元</span>
				<span class="fare">不含运费</span>
			</div>
			<div class="tolley-select">
				<div class="tolley-check" :class="{'active': toggle}" @click='selectCheck'></div>	
				全选
			</div>
  	</div>
  </div>
</template>
<script>
import axios from 'axios'
 export default {
 	data(){
 		return{
 			toggle: false,
 			toggleLock: false,
 			arr:[],
 			count:'',
 			total:''
 		}
 	},
 	methods:{
 		selectCheck(){
 			if(!this.toggleLock){
 				this.toggle = true
 				this.toggleLock = true
 			}else{
 				this.toggle = false
 				this.toggleLock = false
 			}		
 		}
 	},
 	mounted() {
    if (!window.localStorage) {
        return false;
    } else {
        let storage = window.localStorage;
        let obj_arr = storage.getItem('shopcart_Key')
        let obj = JSON.parse(obj_arr)
        this.arr = obj
        
        console.log(this.arr[0].num)
				this.total = this.arr[0].num 
				this.count = this.arr[0].num*parseInt(this.arr[0].price)
    }
}
 	
 }
</script>
<style scoped lang="scss">
@import "../common/common.scss";
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
		overflow: hidden;
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
			.delect{
				width: rem(60rem);
				height: rem(102rem);
				line-height: rem(102rem);
				background: #ff3b2f;
				color: #fff;
				position: absolute;
				top: 0;
				right: rem(-60rem);
				text-align: center;
				font-size: $font14;
			}
		}
	}
	.tolley-mbottom{
		width: 97%;
		height: rem(48rem);
		background: #fff;
		position: absolute;
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

</style>