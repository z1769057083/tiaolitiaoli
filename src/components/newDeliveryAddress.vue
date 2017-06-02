<template>
	<div class="maskmain">
		<div class="address-main">	
			<h3 @click="close">新增收货地址</h3>
			<div class="address-mcon">
				<dl>
					<dt>收货人</dt>
					<dd>
						<input type="text" placeholder="收货人姓名" v-model='name'/>
					</dd>
				</dl>
				<dl>
					<dt>联系电话</dt>
					<dd>
						<input type="text" placeholder="手机或固定电话" v-model='phone'/>
					</dd>
				</dl>
				<!--<dl>
					<dt>选择地区</dt>
					<dd>
						<div class="m-selectcity" @click='selectCity'><b>{{ addressProvince }} {{ addressCity }}</b></div>
						<div class="page-picker" v-show='pickerhidden'>
						    <div class="page-picker-wrapper">
						      <mt-picker :slots="addressSlots" @change="onAddressChange" :visible-item-count="5"></mt-picker>
						    </div>
					   </div>
					</dd>
				</dl>-->
				<dl>
					<dt>详细地址</dt>
					<dd>
						<input type="text" placeholder="如街道，楼层，门牌号等" v-model='address'/>
					</dd>
				</dl>
				<dl>
					<dt>邮政编码</dt>
					<dd>
						<input type="text" placeholder="邮政编码(选填)"  v-model='postCode'/>
					</dd>
				</dl>
				<div class="address-btn preserve" @click='reserve'>保存</div>
			</div>
		</div>
		<confirmToast v-show='confirmHidden' @closeDialogEvent='closeDialogHandler' @closeConfirm='closeConfirmEvent'></confirmToast>
	</div>
</template>
<script type="text/javascript">
import confirmToast from '@/components/confirmToast'
  export default {
    components:{
	  confirmToast
	},
    data() {
      return {
      	name:'',
      	phone:'',
      	address:'',
      	postCode:'',
      	confirmHidden: false
      }
    },
    methods: {
    	closeDialogHandler(){
    		  this.$emit('closeDialogEvent')
    	},
      close(){ 	
    	this.confirmHidden = true
      },
      closeConfirmEvent(){
      	this.confirmHidden = false
      },
      reserve(){
      	if (!window.localStorage) {
            return false
            console.log(11111)
        } else {
        	console.log(2222)
            var address = { 'name': this.name, 'phone': this.phone,'address':this.address,'postCode':this.postCode}
            var storage = window.localStorage
            var obj_arr = JSON.stringify(address)
//          storage.setItem(deliver_key, obj_arr)
            console.log( obj_arr)
            
        }
        this.$emit('closeDialogEvent')
        this.$emit('clickEvent')
      }
    },
    mounted() {
    }
  }
</script>
<style lang="scss">
@import "../common/common.scss";
	/*选择问题内容*/
.maskmain{
	width: 100%;
	height: 100%;
	background: rgba(0,0,0,0.6);
	position: absolute;
	bottom: 0;
	left: 0;
	top: 0;
	z-index: 99;
	.address-main{
		height: rem(342rem);
		background:#fff;
		width: 100%;
		position: absolute;
		bottom: 0;
		left: 0;
		h3{
			font-size: $font16;
			text-align: center;
			line-height: rem(52rem);
			border-bottom: 1px solid #efefef;
			background: url(../assets/shopcarClose.png) no-repeat 97% center;
			background-size: rem(19rem);
		}
		.address-mcon{
			width: 94%;
			padding: 0 3%;
			dl{
				border-bottom: 1px solid #efefef;
				height: rem(50rem);
				width: 100%;
				font-size: $font14;
				dt{
					width: 18%;
					float: left;
					line-height: rem(50rem);
				}
				dd{
					width: 78%;
					float: right;
					margin: rem(16rem) 0;
					input{
						width: 100%;
						border: 0;
					}
				}
			}
			.address-btn{
				width: 100%;
				height: rem(40rem);
				text-align: center;
				line-height: rem(40rem);
				font-size: $font16;
				border-radius: rem(5rem) ;
			}
			.preserve{
				background: #50b347;
				color: #fff;
				margin-bottom: rem(10rem);
				margin-top: rem(24rem);
			}
			.remove{
				color: $c3c3c;
				border: 1px solid #999;
			}
		}
		
		
	}	
}
</style>