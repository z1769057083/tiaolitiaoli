<template>
	<div class="m-character">
	  	<h3>下面哪个人物像你？</h3>
	  	<div class="m-hmain">
	  		<dl :class="{'active': character === 0}" @click="change_active(0,'1','character',$event)">
	  			<dt><img src="../assets/character1.png"/></dt>
	  			<dd>
	  				博学多才、足智多谋<br>
	  				
	  			</dd>
	  		</dl>
	  		<dl :class="{'active': character === 1}" @click="change_active(1,'1','character',$event)">
	  			<dt><img src="../assets/character2.png"/></dt>
	  			<dd>
	  				有魄力、讲义气<br>
	  				请财务、要面子
	  			</dd>
	  		</dl>
	  		<dl :class="{'active': character === 2}" @click="change_active(2,'1','character',$event)">
	  			<dt><img src="../assets/character3.png"/></dt>
	  			<dd>
	  				吃嘛嘛香、不喜动<br>
	  				容易知足、不爱操心
	  			</dd>
	  		</dl>
	  		<dl :class="{'active': character === 3}" @click="change_active(3,'1','character',$event)">
	  			<dt><img src="../assets/character4.png"/></dt>
	  			<dd>
	  				能担大任、善于用人<br>
	  				行为果断、精力充沛
	  			</dd>
	  		</dl>
	  		<dl :class="{'active': character === 4}" @click="change_active(4,'1','character',$event)">
	  			<dt><img src="../assets/character5.png"/></dt>
	  			<dd>
	  				处事灵活<br>
	  				知识面广、有想象力
	  				
	  			</dd>
	  		</dl>
	  		<dl :class="{'active': character === 5}" @click="change_active(5,'1','character',$event)">
	  			<dt><img src="../assets/character6.png"/></dt>
	  			<dd>
	  				重感情、讲义气<br>
	  				慈仁善良、处事稳重
	  			</dd>
	  		</dl>
	  		<dl :class="{'active': character === 6}" @click="change_active(6,'1','character',$event)">
	  			<dt><img src="../assets/character7.png"/></dt>
	  			<dd>
	  				善良温和、与人为善<br>
	  				不轻易妥协、有恒心
	  			</dd>
	  		</dl>
	  		<dl :class="{'active': character === 7}" @click="change_active(7,'1','character',$event)">
	  			<dt><img src="../assets/character8.png"/></dt>
	  			<dd>
	  				喜欢安逸、知足常乐<br>
	  				幽默风趣、憨厚率直
	  			</dd>
	  		</dl>
	  		<dl :class="{'active': character === 8}" @click="change_active(8,'1','character',$event)">
	  			<dt><img src="../assets/character9.png"/></dt>
	  			<dd>
	  				聪明好学、追求自由<br>
	  		                      富正义感、勇于创新
	  			</dd>
	  		</dl>
	  		<dl :class="{'active': character === 9}" @click="change_active(9,'1','character',$event)">
	  			<dt><img src="../assets/character10.png"/></dt>
	  			<dd>
	  				勤劳稳重、任劳任怨<br>
	  				默默奉献、逆来顺受
	  			</dd>
	  		</dl>
	  		<div class="temper-bottom"></div>
	  	</div>
	</div>
</template>
<script type="text/javascript" >

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
<style lang="scss" rel="stylesheet/scss">
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
				height: rem(60rem);
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