<template>
    <div class='order'>
	    <h3 class="order-mtitle">汉古商城</h3>
	    <div  v-for='items in list'>
	    	<router-link :to="{ name: 'orderListDetail', query: { itemid: items._id }}">
	    	<div v-for='item in items.order'>
			    <div class="order-main"> 
			    	<router-link to='orderListDetail'>
			    		<div class="order-mdetail">
				    		<dl>
				    			<dt><img :src="''+apiPath+'/image/product/'+item.img+'/1.jpg'" 
										onerror="this.src='http://placeholder.qiniudn.com/800'"/></dt>
				    			<dd>
				    				{{item.name}}{{items._id}}
					    			<p>¥{{item.price}}.00</p>
				    			</dd>
				    		</dl>
				    		<div class="order-mnum">X<span>{{item.num}}</span></div>
				    	</div>	
			    	</router-link>		    		
			    </div>
			    <div class="order-mcontent">
			    	<dl>
			    		<dd>
			    			共{{item.num}}件商品  
			    			<span>{{items.status|filterFun}}</span>
			    			付款 ：¥{{items.price}}.00</dd>
			    	</dl>
			    	<dl>
			    		<dd class="delect-order">删除订单</dd>
			    	</dl>
			    </div>
		    </div>
		    </router-link>
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
				str1:'实'
            }
        },
        filters: {
            transform(obj){
                if ( obj==1) {
                    return this.str1
                }
                else if(obj==0){
                    return this.str1
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
                            console.log(that.list)
                            
                        }
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
            }
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
				background: #26A2FF;
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
</style>

