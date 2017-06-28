<template>
	<div>
		<div class='receive'>
	        <h3>{{name}}欢迎关注调理调理</h3>
	        <p>领取优惠券</p>
	        <div class="code" style="font-size: 30px;">
	         	ssssssdsfdggg  
	        </div>
	        <div class="receive-code" @click='receiveCode' v-if='btnHidden'>立即领取</div>
	        <div class="receive-code" @click='nowUse' v-if='!btnHidden'>立即使用</div>       
    	</div>
    	<div class="mask" v-if='maskHidden'>
         	<div class="mask-main">
         		<img class="geneIcon" src="../../static/images/geneIcon.png" alt="" />
         		<p class="title">恭喜您，领取成功</p>
         		<span>感谢您的参与，祝您购物愉快</span>
         		<div class="btn">
         			<p class="left" @click='nowUse'>立即使用</p>
         			<p class="right" @click='close'>关闭</p>
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
				name:'',
				maskHidden: false,
				btnHidden: true
            }
        },
        methods: {
			receiveCode(){
				this.maskHidden = !this.maskHidden
				this.btnHidden = !this.btnHidden
			},
			nowUse(){
				this.$router.push({ path:'/gene'})
				this.maskHidden = !this.maskHidden
			},
			close(){
				this.maskHidden = !this.maskHidden
			}
        },
        mounted() {
            document.title = "调理调理"
            if (!window.localStorage) {
            return false;
	        } else {
	            if (window.localStorage.getItem(Account_Index) !== null) {
	                let account = JSON.parse(window.localStorage.getItem(Account_Index))
	                this.name = account.nickname
	            }
	        }
            
        }
    }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
 @import "../common/common.scss";
.receive{
	width: 100%;
	height: 100%;
	position: absolute;
	overflow: hidden;
	background: url(../assets/indexbg.jpg) no-repeat;
    background-size: 100% 100%;
	h3{
		font-size: $font18;
		margin: rem(50rem) 0 rem(50rem) 5%;
	}
	p{
		font-size: $font14;
		text-align: center;
	}
	.code{
		width: 80%;
		height: rem(50rem);
		margin-left: 10%;
		border: 1px solid #0190FE;
		margin-top: rem(60rem);
	}
	.receive-code{
		width: 30%;
		height: rem(40rem);
		margin-left: 35%;
		margin-top: rem(60rem);
		font-size: $font18;
		color: #fff;
		background: #DEA726;
		text-align: center;
		line-height: rem(40rem);
	}
}
.mask{
	width: 100%;
	height: 100%;
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	background: rgba(0,0,0,.1);
	.mask-main{
		width: 75%;
		height: rem(200rem);
		background: #fff;
		left: 12.5%;
		top: rem(180rem);
		position: absolute;
		border: 1px solid #dfdfdf;
		text-align: center;
		border-radius: rem(5rem);
		.geneIcon{
			width: rem(40rem);
			height: rem(40rem);
			margin-top: rem(15rem);
		}
		.title{
			font-size: $font18;
			text-align: center;
			margin-top: rem(20rem);
			margin-bottom: rem(10rem);
		}
		span{
			color: #9f9f9f;
		}
		.btn{
			width: 80%;
			overflow: hidden;
			margin-left: 10%;
			margin-top: rem(25rem);
			p{
				width: 46%;
				height: rem(35rem);
				display: block;
				float: left;
				background: #00A0E9;
				line-height: rem(35rem);
				font-size: $font14;
				border-radius: rem(4rem);
				color:#fff;
				border: 1px solid #b74d4f;		
				background: #dc3d37; 		
			}
			.right{
				float: right;
				color: #000;
				background: #f5f5f5;
				border: 1px solid #ddd;
			}
		}
	}
}
</style>
