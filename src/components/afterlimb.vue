<template>
<div class="m-select">
	<div class="m-selectfacon">
	  	<div class="m-selectfalimb">
	  		<dl>
	  			<dt>肤色</dt>
	  			<dd>
	  				<span :class="{'active': active1 === 0}" @click="change_active(0,'1',$event)">皮肤白皙</span>
	  				<span :class="{'active': active1 === 1}" @click="change_active(1,'1',$event)">皮肤青白</span>
	  				<span :class="{'active': active1 === 2}" @click="change_active(2,'1',$event)">皮肤微黑</span>
	  			</dd>
	  			<dd>
	  				<span :class="{'active': active1 === 3}" @click="change_active(3,'1',$event)">皮肤发红、发赤或古铜色</span>
	  				<span :class="{'active': active1 === 4}" @click="change_active(4,'1',$event)">皮肤偏黄</span>
	  			</dd>
	  		</dl>
	  		<dl>
	  			<dt>身材</dt>
	  			<dd><span :class="{'active': active2 === 0}" @click="change_active(0,'2',$event)">身材四肢长、身材挺拔、肩背宽大</span></dd>
	  			<dd><span :class="{'active': active2 === 1}" @click="change_active(1,'2',$event)">脊背宽广而肌肉丰满，身材上尖下阔</span></dd>
	  			<dd><span :class="{'active': active2 === 2}" @click="change_active(2,'2',$event)">肩背丰满，腹部容易发胖，身材上下匀称</span></dd>
	  		</dl>
	  	</div>
	  	<router-link to='/report'>
	  		<button class="submit">确定</button>
	   </router-link>
	</div>
</div>
</template>
<script type="text/javascript">
export default {
    data(){
	  	return {
	      active1:'',
	      active2:''
	    }
	},
	methods:{
	  	change_active(num,sectionId, event) {
		  this.$data['active'+sectionId] = num
	   }
	},
	mounted() {
	   this.change_active()
	}
}
</script>
<style lang="scss">
@import "../common/common.scss";
	/*选择问题内容*/
.m-select{
	width: 100%;
	background: #f8f8f8;
	height: 52%;
	position: relative;
	.m-selectfacon{
		width: 90%;
		margin-left: 5%;
		.m-selectfalimb{
			width: 100%;
			overflow: hidden;
			dl{
				width: 100%;
				position: relative;
				dt{
					position: absolute;
 					top: rem(14rem);
 					left: 0;
 					font-size: $font14;
				}
				dd{
					width: 100%;
					line-height: rem(40rem);
					border-bottom: 1px solid #e3e3e3;
					margin-left: 16%;
					span{
						display: inline-block;
						height: rem(22rem);
						background: #fff;
						margin-top: rem(10rem);
						border-radius: rem(10rem);
						text-align: left;
						padding: rem(2rem) 2%;
						line-height: rem(22rem);
						margin-right: 6%;
						/*background: #dec29d;
						color: #fff;*/
						
					}
					.active{
						color: #fff;
						background: #c69b70;
					}
					span:nth-child(3n){
						margin-right: 0;
					}
				}
			}
		}
		.submit{
			width: 30%;
			height: rem(40rem);
			background: #c69b70;
			border: 0;
			color: #fff;
			border-radius: 0.13rem;
			font-size: 0.37rem;
			line-height: rem(40rem);
			position: absolute;
			bottom: rem(40rem);
			left: 35%;
		}
	}
}
</style>