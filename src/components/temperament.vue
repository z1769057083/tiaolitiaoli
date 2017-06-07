<template>
	<div class="m-temperament">
	  	<h3>下面哪个人物像你？</h3>
	  	<div class="m-hmain">
	  		<dl :class="{'active': temperament === 0}" @click="change_active(0,'1','temperament',$event)">
	  			<dt><img src="../assets/tempate1.png"/></dt>
	  			<dd>
	  				与人为善、思虑周全<br>
	  				不逐名利、渴望认同
	  			</dd>
	  		</dl>
	  		<dl :class="{'active': temperament === 1}" @click="change_active(1,'1','temperament',$event)">
	  			<dt><img src="../assets/tempate2.png"/></dt>
	  			<dd>
	  				多愁善感、敏感多思<br>
	  				个性独立、清高气傲
	  			</dd>
	  		</dl>
	  		<dl :class="{'active': temperament === 2}" @click="change_active(2,'1','temperament',$event)">
	  			<dt><img src="../assets/tempate3.png"/></dt>
	  			<dd>
	  				聪明活泼、感情丰富<br>
	  				善于交际、无条理
	  			</dd>
	  		</dl>
	  		<dl :class="{'active': temperament === 3}" @click="change_active(3,'1','temperament',$event)">
	  			<dt><img src="../assets/tempate4.png"/></dt>
	  			<dd>
	  				聪明能干、事业心强<br>
	  				情感专一、控制欲强
	  			</dd>
	  		</dl>
	  		<dl :class="{'active': temperament === 4}" @click="change_active(4,'1','temperament',$event)">
	  			<dt><img src="../assets/tempate5.png"/></dt>
	  			<dd>
	  				善良温和、与人为善<br>
	  				不轻易妥协、有恒心
	  			</dd>
	  		</dl>
	  		<dl :class="{'active': temperament === 5}" @click="change_active(5,'1','temperament',$event)">
	  			<dt><img src="../assets/tempate6.png"/></dt>
	  			<dd>
	  				善良温和、与人为善<br>
	  				不轻易妥协、有恒心
	  			</dd>
	  		</dl>
	  		<dl :class="{'active': temperament === 6}" @click="change_active(6,'1','temperament',$event)">
	  			<dt><img src="../assets/tempate7.png"/></dt>
	  			<dd>
	  				善良温和、与人为善<br>
	  				不轻易妥协、有恒心
	  			</dd>
	  		</dl>
	  		<dl :class="{'active': temperament === 7}" @click="change_active(7,'1','temperament',$event)">
	  			<dt><img src="../assets/tempate8.png"/></dt>
	  			<dd>
	  				善良温和、与人为善<br>
	  				不轻易妥协、有恒心
	  			</dd>
	  		</dl>
	  		<dl :class="{'active': temperament === 8}" @click="change_active(8,'1','temperament',$event)">
	  			<dt><img src="../assets/tempate9.png"/></dt>
	  			<dd>
	  				善良温和、与人为善<br>
	  				不轻易妥协、有恒心
	  			</dd>
	  		</dl>
	  		<dl :class="{'active': temperament === 9}" @click="change_active(9,'1','temperament',$event)">
	  			<dt><img src="../assets/tempate10.png"/></dt>
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
            temperament:-1
	    }
	},
    computed: {
        answer(){
            var answer = {};
            answer.temperament = this.temperament;
            return answer;
        }
    },
	methods:{
	  	change_active(answerValue,sectionId,sectionKey,event) {
		  	this.$data.temperament = answerValue
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
.m-temperament{
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
			height: rem(100rem);
			padding: rem(10rem) 0;
			border-radius: rem(5rem);
			float: left;
			margin-right: 2%;
			margin-bottom: rem(10rem);
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