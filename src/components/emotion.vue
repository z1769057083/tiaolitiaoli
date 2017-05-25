<template>
<div class="m-select">
	<div class="m-selectfacon">
	  	<div class="m-selectemotion">
	  		<dl>
	  			<dt>饮食口味</dt>
	  			<dd>
	  				<p :class="{'active': active1 === 0}" @click="change_active(0,'1',$event)">酸</p>
	  				<p :class="{'active': active1 === 1}" @click="change_active(1,'1',$event)">甜</p>
	  				<p :class="{'active': active1 === 2}" @click="change_active(2,'1',$event)">苦</p>
	  				<p :class="{'active': active1 === 3}" @click="change_active(3,'1',$event)">辣</p>
	  				<p :class="{'active': active1 === 4}" @click="change_active(4,'1',$event)">咸</p>
	  				<p :class="{'active': active1 === 5}" @click="change_active(5,'1',$event)">淡</p>
	  			</dd>
	  		</dl>
	  		<dl>
	  			<dt>情绪情况</dt>
	  			<dd>
	  				<p :class="{'active': active2 === 0}" @click="change_active(0,'2',$event)">喜</p>
	  				<p :class="{'active': active2 === 1}" @click="change_active(1,'2',$event)">怒</p>
	  				<p :class="{'active': active2 === 2}" @click="change_active(2,'2',$event)">忧虑</p>
	  				<p :class="{'active': active2 === 3}" @click="change_active(3,'2',$event)">悲</p>
	  				<p :class="{'active': active2 === 4}" @click="change_active(4,'2',$event)">惊恐</p>
	  			</dd>
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
		.m-selectemotion{
			width: 100%;
			overflow: hidden;
			dl{
				width: 100%;
				height: rem(78rem);
				border-bottom: 1px solid #e3e3e3;
				dt{
					width: 19%;
					float: left;
					line-height: rem(44rem);
				}
				dd{
					width: 81%;
					float: left;
					line-height: rem(44rem);
					p{
						display: block;
						width: 30%;
						float: left;
						height: rem(24rem);
						background: #fff;
						margin-top: rem(10rem);
						border-radius: rem(10rem);
						line-height: rem(24rem);
						text-align: center;
						margin-left: 3%;
					}
					.active{
						color: #fff;
						background: #c69b70;
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