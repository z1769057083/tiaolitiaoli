<template>
	<div class="m-character">
	  	<h3>下面哪个人物像你？</h3>
	  	<div class="m-hmain">
	  		<dl :class="{'active': character === 0}" @click="change_active(0,'1','character',$event)">
	  			<dt><img src="../assets/messageCharacter1.png"/></dt>
	  			<dd>
	  				善良温和、与人为善<br>
	  				不轻易妥协、有恒心
	  			</dd>
	  		</dl>
	  		<dl :class="{'active': character === 1}" @click="change_active(1,'1','character',$event)">
	  			<dt><img src="../assets/messageCharacter1.png"/></dt>
	  			<dd>
	  				善良温和、与人为善<br>
	  				不轻易妥协、有恒心
	  			</dd>
	  		</dl>
	  		<dl :class="{'active': character === 2}" @click="change_active(2,'1','character',$event)">
	  			<dt><img src="../assets/messageCharacter1.png"/></dt>
	  			<dd>
	  				善良温和、与人为善<br>
	  				不轻易妥协、有恒心
	  			</dd>
	  		</dl>
	  		<dl :class="{'active': character === 3}" @click="change_active(3,'1','character',$event)">
	  			<dt><img src="../assets/messageCharacter1.png"/></dt>
	  			<dd>
	  				善良温和、与人为善<br>
	  				不轻易妥协、有恒心
	  			</dd>
	  		</dl>
	  		<dl :class="{'active': character === 4}" @click="change_active(4,'1','character',$event)">
	  			<dt><img src="../assets/messageCharacter1.png"/></dt>
	  			<dd>
	  				善良温和、与人为善<br>
	  				不轻易妥协、有恒心
	  			</dd>
	  		</dl>
	  		<dl :class="{'active': character === 5}" @click="change_active(5,'1','character',$event)">
	  			<dt><img src="../assets/messageCharacter1.png"/></dt>
	  			<dd>
	  				善良温和、与人为善<br>
	  				不轻易妥协、有恒心
	  			</dd>
	  		</dl>
	  		<dl :class="{'active': character === 6}" @click="change_active(6,'1','character',$event)">
	  			<dt><img src="../assets/messageCharacter1.png"/></dt>
	  			<dd>
	  				善良温和、与人为善<br>
	  				不轻易妥协、有恒心
	  			</dd>
	  		</dl>
	  		<dl :class="{'active': character === 7}" @click="change_active(7,'1','character',$event)">
	  			<dt><img src="../assets/messageCharacter1.png"/></dt>
	  			<dd>
	  				善良温和、与人为善<br>
	  				不轻易妥协、有恒心
	  			</dd>
	  		</dl>
	  		<dl :class="{'active': character === 8}" @click="change_active(8,'1','character',$event)">
	  			<dt><img src="../assets/messageCharacter1.png"/></dt>
	  			<dd>
	  				善良温和、与人为善<br>
	  				不轻易妥协、有恒心
	  			</dd>
	  		</dl>
	  		<dl :class="{'active': character === 9}" @click="change_active(9,'1','character',$event)">
	  			<dt><img src="../assets/messageCharacter1.png"/></dt>
	  			<dd>
	  				善良温和、与人为善<br>
	  				不轻易妥协、有恒心
	  			</dd>
	  		</dl>
	  		<div class="temper-bottom"></div>
	  	</div>
	</div>
</template>
<script type="text/javascript">

    import Common from '../../static/common'
export default {
   data(){
	  	return {
            character:-1
	    }
	},
    computed: {
        answer(){
            var answer = {};
            answer.character = this.character;
            return answer;
        }
    },
	methods:{
	  	change_active(answerValue,sectionId,sectionKey,event) {
		  	this.$data.character= answerValue
		  	this.$emit('updateUserAnswer', this.answer)
	   }
	},
	mounted(){
        Common.loadXianTianUserData(this);
	}
}
</script>
<style lang="scss">
@import "../common/common.scss";
/*选择问题内容*/
.m-character{
	width: 90%;
	margin-left: 5%;
	overflow: hidden;
	height: rem(220rem);
	h3{
		text-align: center;
		margin-top: rem(13rem);
		margin-bottom: rem(15rem);
		font-size: $font14;
	}
	.m-hmain{
		width: 100%;
		height: rem(220rem);
		overflow-y: auto;
        -webkit-overflow-scrolling: touch;
		dl{
			width: 32%;
			height: rem(94rem);
			padding: rem(10rem) 0;
			border-radius: rem(5rem);
			float: left;
			margin-right: 2%;
			margin-bottom: rem(10rem);
			/*background: #fff;*/
			padding: rem(10rem) 0;
			dt{
				width: 100%;
				height: rem(53rem);
				img{
					width: 100%;
					height: 100%;
				}
			}
			dd{
				font-size: $font12;
				margin-top: rem(5rem);
				text-align: center;
				line-height: rem(20rem);
			}
		}
		dl:nth-child(3n){
			margin-right: 0;
		}
		.active{
			background: #fff;
		}
		.temper-bottom{
			width: 100%;
			height: rem(35rem);
			float: left;
		}
	}
}	
</style>