<template>
    <div class='home'>
        <div class='i-content'>
            <div class='i-main'>
                <h3 class='i-maintop'>个人中心</h3>
                <img class="avatar" :src="myselfAvatar"/>
                <p class="name">{{myName}}</p>
                <ul>
                	<li @click='videoHome'>视频文章</li>
                	<li @click='payGene'>购买基因产品</li>
                	<li @click='geneReport'>基因报告</li>
                	<li @click='myCoupon'>我的优惠券</li>
                	<li @click='receiveCoupon'>领取优惠券</li>
                	<li @click='bindCoupon'>绑定优惠券</li>
                	<li @click="myOrder">优惠券订单</li>
                	<li @click='orderList'>我的订单</li>                	
                	<li @click="removeLocalStorage">删除当前账号</li>                	
                	<li @click="removeUser">清除缓存</li>
                </ul>
                <div class='i-maintext i-maintip i-maintip1'> 版本号：{{version}}</div>
            </div>
        </div>
    </div>
</template>
<script>
    import Toast from '@/packages/toast'
    import axios from 'axios'
    import api from '../api/api'
    import Common from '../../static/common'
    export default {
        data() {
            return {
                version: global.Version,
                myName:'',
                myselfAvatar:''                
            }
        },
        methods: {
            removeLocalStorage(){
                localStorage.clear();
                alert('已经清除');
            },
            removeUser(){
               var account =JSON.parse(localStorage.getItem(global.Account_Index));
                axios.get(api.removeUser + account._id)
                    .then(function (res) {
                        var text='UserId:'+account._id+'NickName+'+account.nickname+'已经删除';
                        localStorage.clear();
                        alert(text);
                    })
            },
            payGene(){
            	this.$router.push({path:'/gene'})
            },
            myCoupon(){
            	this.$router.push({path:'/myCoupon'})
            },
            receiveCoupon(){
            	this.$router.push({path:'/receiveCoupon'})
            },
            bindCoupon(){
            	this.$router.push({path:'/bindBarCode'})
            },
            orderList(){
            	this.$router.push({path:'/orderList'})
            },
            myOrder(){
            	this.$router.push({path:'/myOrder'})
            },
            geneReport(){
            	this.$router.push({path:'/geneReport'})
            },
            videoHome(){
            	this.$router.push({path:'/videoHome'})
            }
        },
        mounted() {
			if (!window.localStorage) {
            return false;
	        } else {
	            if (window.localStorage.getItem(Account_Index)) {
	                let account = JSON.parse(window.localStorage.getItem(Account_Index))
	                this.myselfAvatar = account.headimgurl;
	                this.myName = account.nickname
	            }
	        }
        }
    }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
    @import "../common/common.scss";
	.home{
		width: 100%;
		height: 100%;
		position: absolute;
		background: url(../assets/indexbg.jpg) no-repeat;
        background-size: 100% 100%;        
	}
    .i-content {
        position: absolute;
        width: 100%;
        overflow: hidden;
        padding-bottom: rem(20rem);
        background: url(../assets/indexbg.jpg) no-repeat;
        background-size: 100% 100%;
        .i-main {
            margin-top: rem(18rem);
            .avatar{
            	width: rem(88rem);
				height: rem(88rem);
				border-radius: 50%;
				margin: rem(2.6rem);
				overflow: hidden;
				margin-left: 38%;
            }
            .name{
            	text-align: center;
            	margin: rem(20rem) 0;
            }
			ul{
				width: 92%;
				overflow: hidden;
				margin-left: 4%;
				font-size: $font14;
				li{
					width: 92%;
					padding: rem(10rem) 4%;
					border-radius: rem(10rem);
					margin-bottom: rem(10rem);
					background:#fff url(../assets/confirmRight.png) no-repeat 96%;
					background-size: rem(8rem) rem(12rem);
				}
			}
            .i-maintext {
                width: 83.8%;
                margin-left: 8.6%;
                letter-spacing: rem(0.4rem);
                font-size: $font12;
                line-height: rem(22rem);
                color: #000;
                text-align: center;
            }

            .i-maincen {
                width: 53%;
                margin-left: 23.5%;
                margin-top: rem(2rem);

                .i-mline {
                    width: 100%;
                    height: 0.03rem;
                }

                .i-micon {
                    width: 0.96rem;
                    height: 0.48rem;
                    margin-top: rem(18rem);
                    display: block;
                    margin-left: 40%;
                }

            }
            .i-maindocter {
                width: 82%;
                height: rem(86rem);
                box-shadow: 0 rem(1rem) rem(2rem) #e2e1df;
                border-radius: 0.16rem;
                margin-left: 13.3%;
                position: relative;
                background: #fff;
                margin-top: rem(18rem);

                span {
                    margin-left: 16%;
                    line-height: rem(86rem);
                    font-size: rem(14rem);
                }

                .i-maintest {
                    width: 23.2%;
                    height: 0.75rem;
                    line-height: 0.75rem;
                    color: #ce8654;
                    border-radius: 0.11rem;
                    text-align: center;
                    position: absolute;
                    right: 3.9%;
                    top: 0.8rem;

                    img {
                        width: 1.92rem;
                        height: 0.75rem;
                    }

                }
                .i-mainportrait {
                    width: rem(75rem);
                    height: rem(75rem);
                    border-radius: 50%;
                    position: absolute;
                    left: rem(-37.5rem);
                    top: rem(5rem);

                    img {
                        width: rem(75rem);
                        height: rem(75rem);
                    }

                }

            }
            .i-maindocter1 {
                margin-bottom: 0.48rem;
            }

            .i-maintip {
                color: #C69B70;
                margin-top: rem(30rem);
            }

        }
    }
</style>

