<template>
	<div>
		<div class="no-coupon" v-if='couponHidden'>
			<div>
				您还没有领取优惠券
			</div>
		</div>
		<div class='receive' v-if='!couponHidden'>
	        <div class="receive-top">
	        	<div class="price">
	        		¥&nbsp;<span>680</span>
	        	</div>
	        	<div class="p-right">
	        		<p>仅限购买六大高发癌症风险检测套餐</p>
	        		<p class="bot">{{receive}}</p>
	        		<span>有效期2017.06.09-2017.12.29</span>
	        		<div class="p-rightBtn">
	        			<img @click='nowUse' src="../assets/receiveBtn2.png" alt="" />
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
				receive:'',
				couponHidden: true
            }
        },
        methods: {
        	nowUse(){
				this.$router.push({ path:'/gene'})
			}
        },
        mounted() {
            document.title = "我的优惠券"
            if (!window.localStorage) {
            	return false;
	        } else {
	        	this.receive = JSON.parse(window.localStorage.getItem('receiveCode'))	        	
	        	if(this.receive){
	        		this.couponHidden = false
	        	}
	        }
        }
    }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
 @import "../common/common.scss";
 .no-coupon{
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
.receive{
	width: 100%;
	height: 100%;
	position: absolute;
	overflow: hidden;
	background: #f6f6f6;
	.receive-top{
		width: 92%;
		height: rem(100rem);
		margin-top: rem(20rem);
		background: url(../assets/receivebg.png) no-repeat center;
		background-size: cover;
		margin-left: 4%;
		.price{
			width: 34%;
			height: rem(100rem);
			line-height: rem(100rem);
			text-align: center;
			font-size: $font16;
			color: #fff;
			float: left;
			span{
				font-size: rem(32rem);
			}
		}
		.p-right{
			width: 61%;
			float: right;
			height: rem(100rem);
			overflow: hidden;
			position: relative;
			p{
				font-size: $font12;
				margin: rem(10rem) 0 rem(6rem);
				color: #000;
			}
			.bot{
				margin: 0 0 rem(6rem) 0;
			}
			span{
				color: #999;
			}
			.p-rightBtn{
				width: rem(65rem);
				height: rem(30rem);
				position: absolute;
				right: rem(16rem);
				bottom: rem(5rem);
				img{
					width: 100%;
					height: 100%;
				}
			}
		}
	}
}
</style>
