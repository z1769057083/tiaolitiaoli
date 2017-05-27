<template>
<div class="m-selectfacon">
  	<div class="m-selectseason">
  		<dl>
  			<dt>你的劳逸情况:</dt>
  			<dd>
  				<p :class="{'active': active1 === 0}" @click="change_active(0,'1','workRest',$event)">久视</p>
  				<p :class="{'active': active1 === 1}" @click="change_active(1,'1','workRest',$event)">久坐</p>
  				<p :class="{'active': active1 === 2}" @click="change_active(2,'1','workRest',$event)">久立</p>
  				<p :class="{'active': active1 === 3}" @click="change_active(3,'1','workRest',$event)">久卧</p>
  				<p :class="{'active': active1 === 4}" @click="change_active(4,'1','workRest',$event)">久行</p>
  			</dd>
  		</dl>
  		<dl>
  			<dt>一年中哪个季节让你最不舒服？</dt>
  			<dd>
  				<p :class="{'active': active2 === 0}" @click="change_active(0,'2','season',$event)">春</p>
  				<p :class="{'active': active2 === 1}" @click="change_active(1,'2','season',$event)">夏</p>
  				<p :class="{'active': active2 === 2}" @click="change_active(2,'2','season',$event)">秋</p>
  				<p :class="{'active': active2 === 3}" @click="change_active(3,'2','season',$event)">冬</p>
  			</dd>
  		</dl>
  	</div>	  	
</div>
</template>
<script type="text/javascript">
export default {
    data(){
	  	return {
	      active1:'',
	      active2:'',
	      season:{
	      	workRest:'',
	      	season:''
	      }
	    }
	},
	methods:{
	  	change_active(answerValue,sectionId,sectionKey,event) {
		  this.$data['active'+sectionId] = answerValue
		  this.$data.season[sectionKey]=answerValue
		  this.$emit('updateUserAnswer', this.$data.season)
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
		.m-selectseason{
			width: 100%;
			overflow: hidden;
			dl{
				width: 100%;
				/*height: rem(78rem);*/
				border-bottom: 1px solid #e3e3e3;
				overflow: hidden;
				padding-bottom: rem(14rem);
				dt{
					width: 100%;
					line-height: rem(36rem);
				}
				dd{
					width: 100%;
					float: left;
					line-height: rem(44rem);
					p{
						display: block;
						width: 22%;
						float: left;
						height: rem(24rem);
						background: #fff;
						margin-top: rem(10rem);
						border-radius: rem(10rem);
						line-height: rem(24rem);
						text-align: center;
						margin-right: 4%;
					}
					.active{
						color: #fff;
						background: #c69b70;
					}
					p:nth-child(4){
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