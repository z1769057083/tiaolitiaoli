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
	    				<input type="text" name='code' disabled="true" v-model='code'/>
	    			</dd>
	    			<dd class="saoCode" @click='saoCode'>扫一扫</dd>
	    		</dl>
	    		<dl>
	    			<dt>受检人:</dt>
	    			<dd>
	    				<input type="text" name='name' v-model='name'/>
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
	    			<div class="page-datetime">		
					    <div class="page-datetime-wrapper">
					      <span v-if='dateHidden' class="selectDate"></span>
					      <span v-if='!dateHidden'>{{birthday|fifTimeFun}}</span>
					      <button @click="open('picker1')" ></button>					      
					    </div>
					    <datetime-picker
					      ref="picker1"
					      type="date"
					      v-model="birthday"
					      year-format="{value} 年"
					      month-format="{value} 月"
					      date-format="{value} 日"
					      @confirm="handleChange">
					    </datetime-picker>					    
			        </div>     
	    			</dd>
	    		</dl>
	    		<dl>
	    			<dt>联系方式:</dt>
	    			<dd>
	    				<input type="text" name='phone' v-model='phone'/>
	    			</dd>
	    		</dl>
	    		<div class="address">
	    			<span>绑定样本后请回寄至以下地址</span>
	    			<p class="address-detail">北京市海淀区北三环西路48号科技会展中心2号楼16B (汉古医疗科技中心收)</p>
	    			<p>联系电话：010-51626150</p>
	    		</div>
				<img class="bind" @click='bindData' src="../assets/couponBind.png"/>
	    	</div>
    	</div>
    </div>
</template>
<script>
    import axios from 'axios'
    import api from '../api/api'
    import Toast from '@/packages/toast'
    import wx from 'weixin-js-sdk'
    import moment from 'moment'
    import DatetimePicker from '@/packages/datetime-picker'
    import noBounce from '../../static/inobounce'
    export default {
        data() {
            return {
				birthday: '1990-01-01',
				msgBoyImg: true,
				toggle:false,
				gender:'M',
				codeResult:'',
				code:'',
				name:'',
				phone:'',
				bindDateList:[],
				params:{},
				result:'',
				validCode:false,
				dateHidden:true
				
            }
        },
        components:{
         	DatetimePicker
        },
         filters:{
        	fifTimeFun(time){
        		return time = moment(time).format('YYYY-MM-DD')
        	} 
        },
        methods: {
			change_active(gender) {
                if (gender == 'F') {
                    this.msgBoyImg = false
                } else {
                    this.msgBoyImg = true
                }
                this.gender = gender
            },
            saoCode(){
            	var that = this;
            	wx.scanQRCode({
				    needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
				    scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
				    success: function (res) {
//				    	that.code = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
				    	 //扫码后获取结果参数赋值给Input
	                    var url = res.resultStr;
	                    //商品条形码，取","后面的
	                    if(url.indexOf(",")>=0){
	                        var tempArray = url.split(',');
	                        var tempNum = tempArray[1];
	                        that.codeResult = tempNum	                      
	                    }else{
	                    	that.codeResult = url		                    	
	                    }
	                      that.isValidCouponRequest()
					}
				});
            },
            bindUserData(){
                let that = this
                axios.defaults.headers['Content-Type'] = 'application/json';
                let rephone = /^1[3,4,5,7,8]\d{9}$/;
                if (this.code!==''&&this.name!==''&&this.phone!=='') {
                	if(this.dateHidden){
                		Toast({
					        message: '生日不能为空',
					        position:'center',
					        duration:1000
					      });
					        return;
                	}
                	if(rephone.test(this.phone)){
                		this.params ={
					    	code:this.code,
					    	name:this.name,
				    		gender:this.gender,
				    		birthday:this.birthday,
				    		telephone:this.phone
		    			}
                	}else{
                		Toast({
					        message: '手机号码格式错误',
					        position:'center',
					        duration:1000
					      });
					        return;
                	}
		        		
			    } else {
			    	Toast({
			        message: '必填项不能为空',
			        position:'center',
			        duration:1000
			      });
			        return;
            	}
            	let user=localStorage.getItem(global.Account_Index);
                if(user){
                    let userJson=JSON.parse(user);
                    this.params.userId=userJson._id;
				}

			    axios.post(api.bindUser, this.params)
                    .then(function (res) {
                    	console.log(res)
                        if (res.data.errorCode == 0) {
                            that.bindDateList = res.config
                            Toast({
		                        message: '样本绑定成功',
		                        position: 'center',
		                        duration: 1500
		                    })
                            that.$router.push({path:'/geneticPhysical',query: {type:'gene' }})
                        }
                    })
            },
            bindData(){
            	if(this.validCode){
            		this.bindUserData()
            	}else{
            		Toast({
				        message: '无效的条形码',
				        position:'center',
				        duration: 3000
				      });
            	}
			},
			isValidCouponRequest(){
				let that = this
				if(this.codeResult!==''){
					axios.get(api.isValidCoupon+this.codeResult)
                    .then(function (res) {
                    	that.validCode = res.data.returnValue=='true'
                    	if(!that.validCode){
                    		Toast({
						        message: '无效的条形码',
						        position:'center',
						        duration: 3000
						      });
                    	}else{
                    		that.code = that.codeResult;
                    	}
                    })
				}				
			},
			open(picker) {				
		        this.$refs[picker].open();
		        this.dateHidden = false
		    },		
		    handleChange(value){
		    },
		    isAndroid(){
                let u = navigator.userAgent
                if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {//安卓手机
                } else{//苹果手机
                    noBounce.enable()
                }
            },
        },
        beforeDestroy(){
            noBounce.disable();
        },
        mounted() {
        	this.isAndroid()
            document.title = "绑定样本";          
        }
    }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
    @import "../common/common.scss";
	.receive{
		width: 100%;
		height: 100%;
		position: absolute;
		background: url(../assets/indexbg.jpg) no-repeat;
    	background-size: 100% 100%;
    	.receive-wrap{
    		width: 86.6%;
    		margin-left: 6.7%;
    		margin-top: rem(20rem);
    		position: absolute;
    		background: url(../assets/indexbg.jpg) no-repeat;
    		background-size: 100% 100%;
    		.receive-top{
    			width: 100%;
    			overflow: hidden;
    			margin-bottom: rem(30rem);
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
    			position: relative;
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
    				overflow: hidden;
    				input{
    					width: 78%;
    					border: 0;
    					background: transparent;
    					height: rem(18rem);
    					margin-top: rem(21rem);
    					float: left;
    					font-size: $font13;
    					color:#000;
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
    				.page-datetime{
    					width: 100%;
    					height: 100%;
    					font-family: Arial;
    					.page-datetime-wrapper{
    						width: 100%;
    						height: 100%;
    						button{
    							width: 100%;
    							height: 100%;
    							background: transparent;
    							border: 0;
    							position: absolute;
    						}
    						span{
    							position: absolute;
    							top: rem(25rem);
    							font-size: $font13;
    							letter-spacing: rem(1rem);
    						}
    						/*.selectDate{
    							color: #999;
    							font-size: $font12;
    						}*/
    					}
    				}
    			}
    			.saoCode{
    				position: absolute;
    				width: rem(60rem);
    				height: rem(28rem);
    				background: #999;
    				color: #fff;
    				right: 0;
    				border-radius: rem(4rem);
    				text-align: center;
    				font-size: $font13;
    				margin-top: rem(11rem);
    				line-height: rem(28rem);
    			}
    		}
    		.address{
    			width: 99%;
    			height: rem(74rem);
    			background: #fff;
    			margin-top: rem(20rem);    			
    			border: 1px dashed #cecece;
    			padding: rem(12rem) 0;
    			text-align: center;
    			span{
    				font-size: $font14;
    				color: $c3c3c;
    				font-weight: bold;
    			}
    			p{
    				padding: 0 rem(24rem);
    				line-height: rem(18rem);
    				font-size: $font13;
    				text-align: left;
    			}
    			.address-detail{
    				margin-top: rem(8rem);
    			}
    		}
    		.bind{
    			width: 100%;
    			height: rem(42rem);
    			margin-top: rem(20rem);
    			margin-bottom: rem(20rem);
    		}
    	}
	}
</style>


