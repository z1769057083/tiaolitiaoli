<template>
	<div class="m-selectfacon">
	  	<div class="m-selectseason">
	  		<dl>
	  			<dt>最近出现情况:</dt>
	  			<dd>
	  				<p :class="{'active': active}" @click="active = !active" >经常腹泻</p>
	  				<p :class="{'active': active1}" @click="active1 = !active1">入眠困难</p>
	  				<p :class="{'active': active2}" @click="active2 = !active2">肠胃不好</p>
	  				<p :class="{'active': active3}" @click="active3 = !active3">睡觉易醒</p>
	  				<p :class="{'active': active4}" @click="active4 = !active4">心慌</p>
	  				<p :class="{'active': active5}" @click="active5 = !active5">全身无力</p>
	  				<p :class="{'active': active6}" @click="active6 = !active6">便秘</p>
	  				<p :class="{'active': active7}" @click="active7 = !active7">食欲不振</p>
	  				<p class="m-selectulcer" 
	  					:class="{'active': active8}" @click="active8 = !active8">持续口腔溃疡</p>
	  				<p :class="{'active': active9}" @click="active9 = !active9">痛经</p>
	  				<p :class="{'active': active10}" @click="active10 = !active10">经期紊乱</p>
	  				<p :class="{'active': active11}" @click="active11 = !active11">无</p>
	  			</dd>
	  		</dl>
	  	</div>
	</div>
</template>
<script type="text/javascript">
export default {
  data(){
  	return {
  		active:false,
  		active1:false,
  		active2:false,
  		active3:false,
  		active4:false,
  		active5:false,
  		active6:false,
  		active7:false,
  		active8:false,
  		active9:false,
  		active10:false,
  		active11:false
    }
  },
  methods:{
  }
}
</script>
<style lang="scss">
@import "../common/common.scss";
	/*选择问题内容*/
	.m-selectfacon{
		width: 90%;
		margin-left: 5%;
		.m-selectseason{
			width: 100%;
			overflow: hidden;
			dl{
				width: 100%;
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
					p:nth-child(4n){
						margin-right: 0;
					}
					.m-selectulcer{
						width: 40%;
						
					}
					.active{
						color: #fff;
						background: #c69b70;
					}
				}
			}
		}
	}
</style>