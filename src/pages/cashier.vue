=<template>
  <div class='cashier-main'> 
	<div class="cashier-mtop">
		<p>支付金额</p>
		<span>¥{{totalCount}}.00</span>	
		<div class="cashier-goods">商品名称:{{this.arr2.name}}</div>
	</div>
	<div class="cashier-mcontent">
		<dl @click="change_active(0,$event)">
			<dt><img src="../assets/cashierCard.png"/></dt>
			<dd>
				<p>使用银行卡支付</p>
				请使用银联卡支付，无需开通网银
			</dd>
			<dd class="check" :class="{'active': toggle === 0}"></dd>
		</dl>
		<dl @click="change_active(1,$event)">
			<dt><img src="../assets/cashierWechart.png"/></dt>
			<dd>
				<p>微信支付</p>
				微信支付使用银行卡累计限制1000元
			</dd>
			<dd class="check" :class="{'active': toggle === 1}"></dd>
		</dl>	
	</div>
	<div class="cashier-pay">立即支付</div>
  </div>
</template>
<script>
import axios from 'axios'
import api from '../api/api'
export default {
  data(){
  	return {
			toggle: 0,
			arr:[],
			arr2:[],
			accountArr:[],
			totalCount:0
    }
  },
  methods: {
  	requestCashier(){
			let that = this
			axios.defaults.headers['Content-Type'] = 'application/json';
			if(!window.localStorage){
	    	return false
	    }else{
	    	let storage = window.localStorage
	    	let obj_arr = storage.getItem('orderArr')
	    	let obj = JSON.parse(obj_arr)
	   		this.arr = obj
	   		console.log(this.arr)
	   		if (window.localStorage.getItem(Account_Index) !== null) {
            let account = JSON.parse(window.localStorage.getItem(Account_Index))
            this.accountArr = account
        }
	    }
			let params = {
				order:this.arr[0],
				address:this.arr[1],
				price:this.arr[2].price,
				userId:this.accountArr._id,
				nickName:this.accountArr.nickname
			}
	    axios.post(api.cashierSendData,params)
		    .then(function (res) {
		      if (res.data.errorCode == 0) {
      				console.log(res.data.returnValue)
		      }
		    })
		    .catch(function (error) {
		        console.log(error)
		    })
	  	},
			change_active(index,event) {
        this.toggle = index
      }
  },
  mounted(){
  	this.requestCashier()
    if(!window.localStorage){
    	return false
    }else{
    	let storage = window.localStorage
    	let obj_arr = storage.getItem('orderArr')
	    let obj = JSON.parse(obj_arr)
	    this.arr = obj
	    this.arr2 = this.arr[0][0]
			this.totalCount = this.arr[2].price
    }
    document.documentElement.scrollTop = 0
    document.body.scrollTop =0
    document.title ='收银台'
  }
}
</script>
<style scoped lang="scss" rel="stylesheet/scss">
@import "../common/common.scss";
.cashier-main{
	width: 100%;
	height: 100%;
	position: absolute;
	background: #f6f6f6;
	.cashier-mtop{
		width: 100%;
		height: rem(155rem);
		background: $cfff;
		margin-top: rem(10rem);
		text-align: center;
		color: $c3c3c;
		p{
			font-size: $font14;
			padding-top: rem(32rem);	
			margin-bottom: rem(10rem);
		}
		span{
			font-size: $font26;
			line-height: rem(30rem);
		}
		.cashier-goods{
			width: 35%;
			margin-left: 34%;
			margin-top: rem(30rem);
			font-size: $font14;
			color: #999;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}
	.cashier-mcontent{
		width: 100%;
		background: #fff;
		margin-top: rem(10rem);
		overflow: hidden;
		dl{
			width: 94%;
			margin-left: 3%;
			height: rem(37rem);
			padding: rem(22rem) 0 rem(15rem);
			border-bottom: 1px solid #efefef;
			position: relative;
			dt{
				float: left;
				width: rem(34rem);
				height: rem(34rem);
				margin-right: 3%;
				img{
					width: 100%;
					height: 100%;
				}
			}
			dd{
				float: left;
				color: #999;
				p{
					color: $c3c3c;
					font-size: $font14;
					margin-bottom: rem(8rem);
				}
			}
			.check{
				position: absolute;
				right: 0;
				top:rem(30rem);
				width: rem(18rem);
				height: rem(18rem);
				border-radius: 50%;
				border: 1px solid #999;	
			}
			.active{
				width: rem(20rem);
				height: rem(20rem);
				background: url(../assets/cashierCheck.png) no-repeat center;
				background-size: cover;
				border:0;
			}
		}
		dl:nth-child(2){
			border: 0;
		}
	}
	.cashier-pay{
		width: 94%;
		height: rem(40rem);
		background: #50b347;
		color: #fff;
		text-align: center;
		line-height: rem(40rem);
		font-size: $font16;
		margin-left: 3%;
		margin-top: rem(20rem);
		border-radius: rem(5rem);
	}
}
</style>