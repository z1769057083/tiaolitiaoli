<template>
    <div class='receive'>
    	<div class="receive-wrap">
    		<div class="receive-top">
	    		<img class="top-left" src="../assets/couponGene.png" alt="" />
	    		<img class="top-center"src="../assets/couponFang.png" alt=""/>
	    		<img class="top-right" src="../assets/couponCode.png" alt=""/>
	    	</div>
	    	<div class="receive-main">
	    		<dl>
	    			<dt>样本编码:</dt>
	    			<dd>
	    				<input type="text" />
	    			</dd>
	    		</dl>
	    		<dl>
	    			<dt>受检人:</dt>
	    			<dd>
	    				<input type="text" />
	    			</dd>
	    		</dl>
	    		<dl>
	    			<dt>性别:</dt>
	    			<dd>
	    				<div class="gender">
	    					<div class='main-btn' @click="change_active('M',$event)">
	    						<img v-if='msgBoyImg' src="../assets/couponCheck.png" alt="" />
	    						<img v-if='!msgBoyImg' src="../assets/couponSelect.png" alt=""/>
	    					</div>	    					
		    				<img class="person boy" src="../assets/couponBoy.png" alt="" />
		    				<div class='main-btn' @click="change_active('F',$event)">
	    						<img v-if='msgBoyImg' src="../assets/couponSelect.png" alt=""/>						<img v-if='!msgBoyImg' src="../assets/couponCheck.png" alt="" />
	    					</div>
		    				<img class="person" src="../assets/couponGirl.png" alt="" />
	    				</div>	    				
	    			</dd>
	    		</dl>
	    		<dl>
	    			<dt>出生日期:</dt>
	    			<dd>
	    				<input type="date" min='1900-01-01' :class="{'activeDate': toggle}" class="m-selectdate" name='birthday' v-model='birthday' @change='change_date(birthday)'/>
	    			</dd>
	    		</dl>
				<img class="bind" src="../assets/couponBind.png"/>
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
				birthday: "1990-01-01",
				msgBoyImg: true,
				gender:'',
				toggle:false
            }
        },
        methods: {
			change_active(gender) {
                if (gender == 'F') {
                    this.msgBoyImg = false
                } else {
                    this.msgBoyImg = true
                }
                this.gender = gender;
                console.log(this.gender)
            },
            change_date(birthday){ 
            	let  bir = new Date(birthday)
                let  nowYear = new Date()
                if (bir > nowYear) {
                    Toast({
                        message: '你的生日不可以晚于今天',
                        position: 'top',
                        duration:1500
                    })
                    return;
                }
                this.birthday = birthday;
                this.toggle = true                             
            },
        },
        mounted() {
            document.title = "绑定样本"
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
    	.receive-wrap{
    		width: 86.6%;
    		margin-left: 6.7%;
    		margin-top: rem(50rem);
    		.receive-top{
    			width: 100%;
    			overflow: hidden;
    			margin-bottom: rem(35rem);
    			img{
    				float: left;
    			}
    			.top-left{
    				width: rem(92rem);
    				height: rem(92rem);
    			}
    			.top-center{
    				width: rem(42rem);
    				height: rem(20rem);
    				margin: rem(36rem) 0 0 14%;
    			}
    			.top-right{
    				width: rem(100rem);
    				height: rem(48rem);
    				float: right;
    				margin-top: rem(22rem);
    			}
    		}
    	}
    	.receive-main{
    		width: 100%;
    		overflow: hidden;
    		dl{
    			width: 100%;
    			height: rem(50rem);
    			border-bottom: 1px solid #e7e7e7;
    			dt{
    				font-size: $font13;
    				line-height: rem(18rem);
    				color: $c3c3c;
    				padding-top: rem(22rem);
    				width: 22%;
    				float: left;
    			}
    			dd{
    				width: 78%;
    				float: left;
    				input{
    					width: 55%;
    					border: 0;
    					background: transparent;
    					height: rem(18rem);
    					margin-top: rem(21rem);
    					float: left;
    					font-size: $font13;
    					color:$c3c3c;
    				}
    				.m-selectdate{
    					color: #999;
    				}
    				.activeDate{
    					color: $c3c3c;
    				}
    				.couponSao{
    					width: rem(59rem);
    					height: rem(29rem);
    					float: right;
    					margin-top: rem(15rem);
    				}
    				.gender{
    					float: right;
    					.main-btn{
	    					width: rem(15rem);
	    					margin-right: rem(8rem);
	    					display: inline-block;
	    					img{
	    						width: rem(15rem);
	    						height: rem(15rem);
	    						margin-bottom: rem(10rem);
	    					}
	    				}
	    				.person{
	    					width: rem(30rem);
	    					height: rem(37rem);
	    					margin-top: rem(6rem);
	    				}
	    				.boy{
	    					margin-right: rem(24rem);
	    				}
    				}
    			}
    		}
    		.bind{
    			width: 100%;
    			height: rem(42rem);
    			margin-top: rem(20rem);
    		}
    	}
	}
</style>


