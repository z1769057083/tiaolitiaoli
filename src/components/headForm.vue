<template>
	<div class="m-headForm">
	  	<h3><img src="../assets/indexline.png" alt="" />选择最接近的形象<img class="imgright" src="../assets/indexline.png" alt="" /></h3>
	  	<div class="m-hmain">
	  		<dl :class="{'active': face === 0}" @click="change_active(0,'1','headForm',$event)">
	  			<dt><img src="../assets/mhead1.png"/></dt>
	  			<dd>头小长脸</dd>
	  		</dl>
	  		<dl :class="{'active': face === 1}" @click="change_active(1,'1','headForm',$event)">
	  			<dt><img src="../assets/mhead2.png"/></dt>
	  			<dd>头顶尖面瘦</dd>
	  		</dl>
	  		<dl :class="{'active': face === 2}" @click="change_active(2,'1','headForm',$event)">
	  			<dt><img src="../assets/mhead3.png"/></dt>
	  			<dd>头大面圆</dd>
	  		</dl>
	  		<dl :class="{'active': face === 3}" @click="change_active(3,'1','headForm',$event)">
	  			<dt><img src="../assets/mhead4.png"/></dt>
	  			<dd>头大脸宽</dd>
	  		</dl>
	  		<dl :class="{'active': face === 4}" @click="change_active(4,'1','headForm',$event)">
	  			<dt><img src="../assets/mhead5.png"/></dt>
	  			<dd>头小面有棱角</dd>
	  		</dl>
	  	</div>
	</div>
</template>
<script type="text/javascript">
import Common from '../../static/common'
export default {
   data(){
	  	return {
	    arr: [],
	      face:-1
	    }
	},
	methods:{
	  	change_active(answerValue,sectionId,sectionKey,event) {
		  this.$data.face = answerValue
		  	this.$emit('updateUserAnswer', this.answer)
	   }
	},
    computed: {
        answer(){
            var answer = {};
            answer.face = this.face;
            return answer;
        }
    },
    mounted() {
        Common.loadXianTianUserData(this);
    }
}
</script>
<style lang="scss" rel="stylesheet/scss">
@import "../common/common.scss";
/*选择问题内容*/
.m-headForm{
	width: 96%;
	margin-left: 2%;
	overflow: hidden;
	h3{
		text-align: center;
		margin-top: rem(13rem);
		margin-bottom: rem(10rem);
		font-size: $font14;
		img{
		  	vertical-align: middle;
		  	height: 0.02rem;
		  	margin-right: rem(10rem);
		  	width: 25%;
		}
		.imgright{
			margin-left: rem(10rem);
		}
	}
	.m-hmain{
		width: 100%;
		overflow: hidden;
		dl{
			width: 23%;
			height: rem(80rem);
			padding: rem(10rem) 0;
			border-radius: rem(5rem);
			float: left;
			font-size: $font13;
			margin-right: 2.6%;
			margin-bottom: rem(10rem);
			dt{
				width: 90%;
				height: rem(64rem);
				margin-left: 5%;
				img{
					width: 100%;
					height: 100%;
				}
			}
			dd{
				font-size: $font13;
				margin-top: rem(5rem);
				text-align: center;
			}
		}
		dl:nth-child(4){
			margin-right: 0;
		}
		.active{
			background: #fff;
		}
	}
}	
</style>