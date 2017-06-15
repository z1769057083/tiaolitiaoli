<template>
	  <div class='shoplist'>
	    <!--主题部分-->
	    <div class="l-main">
	    	<div class="l-mainscroll">
	    		<div class="l-mgoodsimg">
		    		<img :src="''+apiPath+'/image/product/thumb/'+list.index+'.jpg'"
								 onerror="this.src='http://placeholder.qiniudn.com/800'"/>
		      </div>
				  <div class="l-mgoodsprice">
				    <p class="l-mgoodsintro">{{list.name}}</p>
				    <div class="l-mgoodspri">
				  	  <span>¥{{list.price}}.00</span>
				  	  <p>运费：¥12.00</p>
				    </div>
				  </div>
				  <div class="l-maddress">
				  	<img class="l-maddressimgl" src="../assets/listadress.png"/>线下门店：广东省广州市天河区平逸街102号
				  	<img class="l-maddressimgr" src="../assets/listadressright.png" alt="" />
				  </div>
				  <div class="l-mgoodstit">
				  	<img src="../assets/listline.png"/><span>商品详情</span><img src="../assets/listline.png"/>
				  </div>
				  <div class="l-mgooddetail">
				  	<div>
				  		<p class="activeShow" v-if="list.effect">功效：{{list.effect}}</p>
							<p class="activeShow" v-if="list.avoid">禁用：{{list.avoid}}</p>
							<p class="activeShow" v-if="list.description">{{list.description}}</p>
							<p class="activeShow" v-if="list.fit_people">适用人群：{{list.fit_people}}</p>
				  	</div>
				  	<img v-for='imgItem in list.images' 
				  		:src="''+apiPath+'/image/product/'+list.index+'/'+imgItem+'.jpg'" 
							onerror="this.src='http://placeholder.qiniudn.com/800'"/>
				  </div>
	    	</div>
	    </div>
	    <div class="l-mgoodspay">
		  	<div class="l-mgoodscar">
		  		<router-link to='/shoppingTolley'>
			  	  <img src="../assets/listgoodspay.png"/>
			  	  <p>购物车 </p>
			  	  <span v-show = 'shopingCatrDotted' @catrDotted='catrDottedEvent'></span>
		  	  </router-link>
		  	</div>
		  	<div class="l-mgoodscar l-mgoodsshop" @click='isRouterShop'>
		  	  	<img src="../assets/listShooping.png"/>	  	  
		  	  	<p>商城</p>
		  	</div>	
		  	<div class="l-mgoodsjoin" @click='shopHiden = !shopHiden'>加入购物车
		  	</div>
		  	<div class="l-mgoodsjoin l-mgoodsbuy" @click='purchaseHidden = !purchaseHidden'>立即购买</div>
		  </div>
		  <!--组件-->
		  <!--加入购物车-->
		  <div class="maskmain" v-show='shopHiden'>
				<div class="mask-shopCar">
					<div class="shopCar-main">
						<dl>
							<dt><img :src="''+apiPath+'/image/product/'+list.index+'/1.jpg'" 
							onerror="this.src='http://placeholder.qiniudn.com/800'"/></dt>
							<dd>
							    <p>¥{{list.price}}.00</p>
							    <span>{{list.name}}</span>
							</dd>
						</dl>
						<div class="closeBtn" @click='shopHiden = !shopHiden'></div>				
					</div>
					<div class="shopCar-num">
						<span>购买数量</span>
						<div class="num">
							<button class="reduceBtn" @click='reduce'></button>
							<input type="text" value='num' v-model='num'/>
							<button class="addBtn" @click='add'></button>
						</div>
						<span class="stock">（库存{{list.left}}）</span>
					</div>					
					<div class="confirmBtn" @click='confirm'>确定</div>
				</div>
			</div>
			<!--立即购买开始-->
		  <div class="maskmain" v-show='purchaseHidden'>
				<div class="mask-shopCar">
					<div class="shopCar-main">
						<dl>
							<dt><img :src="''+apiPath+'/image/product/'+list.index+'/1.jpg'" 
							         onerror="this.src='http://placeholder.qiniudn.com/800'"/></dt>
							<dd>
							     <p>¥{{list.price}}.00</p>
							    <span>{{list.name}}</span>
							</dd>
						</dl>
						<div class="closeBtn" @click='purchaseHidden = !purchaseHidden'></div>				
					</div>
					<div class="shopCar-num">
						<span>购买数量</span>
						<div class="num">
							<button class="reduceBtn" @click='reduce'></button>
							<input type="text" value="num" v-model='num'/>
							<button class="addBtn" @click='add'></button>
						</div>
						<span class="stock">（库存{{list.left}}）</span>
					</div>
					<div class="confirmBtn1" @click='confirm1'>下一步</div>
				</div>
			</div>
			<!--立即购买结束-->
			<!--已成功加入购物车-->
		  <toast v-show='toastHidden'></toast>
	  </div>
</template>
<script>
  import axios from 'axios'
  import api from '../api/api'
  import toast from '@/components/toast'
  export default {
    data(){
      return {
        list: [],
        num: 1,
        shopHiden: false,
        purchaseHidden: false,
        toastHidden: false,
        arr: [],
        arr2:[],
        nowArr:[],
        emptyArray:[],
        shopingCatrDotted: false,
        apiPath:''
      }
    },
    components: {
      toast
    },
    methods: {
      requestlist(){
        var that = this;
        that.itemid = this.$route.query.itemid;
        axios.get(api.goodsDetailData + that.itemid)
          .then(function (res) {
            if (res.data.errorCode == 0) {
              res = res.data.returnValue
              that.list = res
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      confirm(){
      	this.shopingCatrDotted = true
        this.toastHidden = true
        this.shopHiden = false
        var that = this
        setTimeout(function () {
            that.toastHidden = false
          }
          , 1000)
        if (!window.localStorage) {
          return false;
        } else {
          var storage = window.localStorage;
          var obgood = storage.getItem('shopcart_Key');
          var shop = {
            id: this.list._id,
            img: this.list.index,
            name: this.list.name,
            price: this.list.price,
            left: this.list.left,
            num: this.num,
          }
          if (obgood) {
            this.arr = JSON.parse(obgood);
            for (var i = 0, len = this.arr.length; i < len; i++) {
              this.arr2.push(this.arr[i].id);
            }
            if (this.arr2.indexOf(that.list._id) >= 0) {
              for (var j = 0, lan = this.arr.length; j < lan; j++) {
                if (this.arr[j]) {
                  if (this.arr[j].id === that.list._id) {  
                  	shop.num += this.arr[j].num  
                    this.arr.splice(this.arr.indexOf(this.arr[j]), 1);                    
                  }
                }
              }
              this.arr.push(shop);
            } else {
              this.arr.push(shop);
            }
          } else {
            this.arr.push(shop);
          }
          var obj_arr = JSON.stringify(this.arr)
          storage.setItem('shopcart_Key', obj_arr);
        }
      },
      confirm1(){
        if (!window.localStorage) {
          return false;
        } else {
          var storage = window.localStorage;
          var shop1 = {
            'id': this.list._id,
            'img': this.list.index,
            'name': this.list.name,
            'price': this.list.price,
            'num': this.num,
          }
          this.nowArr.push(shop1);
          var obj_arr1 = JSON.stringify(this.nowArr)
//        console.log(obj_arr1)
          storage.setItem('buyNow_Key', obj_arr1);
        }
        this.$router.push({ path: '/confirmOrder', query: { routerId: 1 }})
      },
      reduce(){
        if (this.num <= 1) {
          this.num = 1
        } else {
          this.num--
        }
      },
      add(){
        if (this.num >= this.list.left) {
          this.num = this.list.left
        } else {
          this.num++
        }
      },
      catrDottedEvent(){
      	this.shopingCatrDotted = false
      },
      //判断是否有后天测试报告
      isRouterShop(){
//TODO: change the logic for route redirect.
      	if(window.localStorage.houTianReport){
      		this.$router.push({ path: '/recuperate'})     			
      	}else{
      		this.$router.push({ path: '/shop'}) 	
      	}  
      	
      }
    },
    mounted() {
      this.requestlist()
      document.title = "在线商城"
      var mySwiper = new Swiper('.swiper-container', {
        autoplay: 3000,
        loop: true,
        pagination: '.swiper-pagination'
      })
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
      //如果加入购物车则购物车的点显示 
      var storage = window.localStorage
      if(JSON.parse(storage.getItem('shopcart_Key'))==''){
      	this.shopingCatrDotted = false
      }else{      	
      	this.shopingCatrDotted = true	
      }
      document.title ='商品详情'
      this.apiPath = api.apipath
      
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  @import "../common/common.scss";
  .shoplist{
	  background: #f6f6f6;
	  .l-main{
	  	  width: 100%;
	  	  height: 93%;
	  	  position: absolute;
	  	  bottom: 7%;
	  		overflow-y: auto;
        -webkit-overflow-scrolling:touch;
	  	.l-mainscroll{
	  		width: 100%;
	  		background: #f6f6f6;
	  		.l-mgoodsimg{
				  width: 100%;
				  height: rem(214rem);
				  img{
					  width: 100%;
					  height: 100%;
				  }
			  }
			  .l-mgoodsprice{
			  	width: 93.6%;
			  	padding: rem(14rem) 3.2% rem(6rem);
			  	background: #fff;
			  	.l-mgoodsintro{
				  	font-size: rem(14rem);
				  	color: $c3c3c;
				  	line-height: rem(20rem);
				  	margin-bottom: rem(2rem);
				  }
				  .l-mgoodspri{
				  	color: #ff3300;
				  	font-size: 0.32rem;
				  	line-height: rem(25rem);
				  	span{
					  	font-size: 0.48rem;
					  }
					  p{
					  	color: #999;
					  	float: right;
					  }
				  }
			  }
			  .l-maddress{
			  	width: 93.6%;
			  	padding: 0.37rem 3.2%;
			  	background: #fff;
			  	color: #3c3c3c;
			  	font-size: 0.37rem;
			  	margin: 0.27rem 0;
			  	.l-maddressimgl{
				  	width: 0.43rem;
				  	height: 0.43rem;
				  	float: left;
				  	vertical-align: middle;
				  	margin-right: 2.7%;
				  }
				  .l-maddressimgr{
				  	width: 0.16rem;
				  	height: 0.32rem;
				  	float: right;
				  	vertical-align: middle;
				  }
			  }
			  .l-mgoodstit{
			  	width: 93.6%;
			  	padding: 0.37rem 3.2%;
			  	background: #fff;
			 	  text-align: center;
			 		vertical-align: middle;
			 		margin-bottom: rem(10rem);
			 		span{
				  	margin: 0 3%;
				  	color: #3C3C3C;
				  	font-size: 0.37rem;
				  }
				  img{
				  	vertical-align: middle;
				  	height: 0.05rem;
				  	width: 15%;
				  }
			  }
			  .l-mgooddetail{
			  	width: 100%;
			  	overflow: hidden;
			  	background: #fff;
			  	.activeShow{
			  		display: block;
			  	}
			  	img{
				  	width: 100%;
				  	height: 100%;
				  }
				  p{
				  	line-height: rem(26rem);
				  	font-size: $font14;
				  	width: 92%;
				  	color: $c3c3c;
				  	margin:rem(10rem) 0 rem(10rem) 4%;
				  	
				  }
			  }
	  	}
	  }
	  .l-mgoodspay{
	  	width: 100%;
	  	background: #fff;
	  	position: fixed;
	  	left: 0;
	  	bottom: 0;
	  	right: 0;
	  	display: flex;
	  	.l-mgoodscar{
		  	width: 17.8%;
		  	height: 1.28rem;
		  	text-align: center;
		  	position: relative;
		  	img{
			  	width: 0.56rem;
			  	height: 0.46rem;
			  	margin: 0.19rem 0 0.1rem 0;
			  	font-size: 0.32rem;
			  }
			  p{
			  	color: #3C3C3C;
		  	}
		  	span{
		  		width: rem(8rem);
		  		height: rem(8rem);
		  		border-radius: 50%;
		  		background: #ff8854;
		  		position: absolute;
		  		top: rem(4rem);
		  		right: rem(18rem);
		  		display: block;
			  }
		  }
		  .l-mgoodsshop{
		  	border-left: 1px solid #efefef;
		  }
		  .l-mgoodsjoin{
		  	width: 32.2%;
		  	height: 1.28rem;
		  	text-align: center;
		  	line-height: 1.28rem;
		  	color: #fff;
		  	background: #ff8854;
		  	font-size: 0.37rem;
		  }
		  .l-mgoodsbuy{
		  	background: #ff4443;
		  }
	  }
  }
  .maskmain{
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.6);
		position: absolute;
		bottom: 0;
		left: 0;
		top: 0;
		z-index: 99;
		.mask-shopCar{
			width: 100%;
			height: rem(235rem);
			background: #fff;
			position: absolute;
			bottom: 0;
			left: 0; 
			.shopCar-main{
				width: 94%;
				height: rem(100rem);
				margin-left: 3%;
				border-bottom: 1px solid #efefef;
				dl{
					float: left;
					position: relative;
					dt{
						width: rem(180rem);
						height: rem(102rem);
						position: absolute;
						left: 0;
						top: rem(-20rem);
						img{
							width: 100%;
							height: 100%;
						}
					}
					dd{
						margin: rem(40rem) 0 0 rem(190rem);
						p{
							font-size: $font14;
							color: #ff3300;
							line-height: rem(28rem);
							font-weight: bold;
						}
						span{
							color: $c000;
						}
					}
				}
				.closeBtn{
					width: rem(19rem);
					height: rem(19rem);
					margin-top: rem(10rem);
					float: right;
					background: url(../assets/shopcarClose.png) no-repeat center;
					background-size: cover;
				}
			}
			.shopCar-num{
				width: 94%;
				height: rem(58rem);
				margin-left: 3%;
				border-bottom: 1px solid #efefef;
				span{	
					line-height: rem(58rem);
				}
				.num{
					float: right;
					width: 30%;
					height: rem(30rem);
					margin-top: rem(14rem);
					margin-left: rem(5rem);
					button{
						width: 30%;
						float: left;
						display: block;
						height: rem(30rem);
						border: 0;
					}
					.reduceBtn{
						background: url(../assets/shopcarReduce.png);
						background-size: cover;
					}
					.addBtn{
						background: url(../assets/shopCaradd.png);
						background-size: cover;
					}
					input{
						float: left;
						width: 34%;
						height: rem(30rem);
						border: 0;
						background: #f5f5f5;
						margin: 0 3%;
						text-align: center;
					    line-height: rem(30rem);
					}
				}
				.stock{
					float: right;
					color: #666;
				}
				
			}
			.confirmBtn{
				width: 100%;
				height: rem(48rem);
				color: #fff;
				background: #ff8854;
				line-height: rem(48rem);
				text-align: center;
				font-size: $font16;
				position: absolute;
				left: 0;
				bottom: 0;
			}
			.confirmBtn1{
				width: 100%;
				height: rem(48rem);
				color: #fff;
				background: #ff4443;
				line-height: rem(48rem);
				text-align: center;
				font-size: $font16;
				position: absolute;
				left: 0;
				bottom: 0;
			}
		}
	}
</style>
