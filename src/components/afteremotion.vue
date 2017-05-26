<template>
	<div class="m-selectafter">
	  	<div class="m-selectemotion">
	  		<dl>
  			<dt>饮食口味</dt>
  			<dd>
  				<p :class="{'active': active1 === 0}" @click="change_active(0,'1','afterDiettone',$event)">酸</p>
  				<p :class="{'active': active1 === 1}" @click="change_active(1,'1','afterDiettone',$event)">甜</p>
  				<p :class="{'active': active1 === 2}" @click="change_active(2,'1','afterDiettone',$event)">苦</p>
  				<p :class="{'active': active1 === 3}" @click="change_active(3,'1','afterDiettone',$event)">辣</p>
  				<p :class="{'active': active1 === 4}" @click="change_active(4,'1','afterDiettone',$event)">咸</p>
  				<p :class="{'active': active1 === 5}" @click="change_active(5,'1','afterDiettone',$event)">淡</p>
  			</dd>
  		</dl>
  		<dl>
  			<dt>情绪情况</dt>
  			<dd>
  				<p :class="{'active': active2 === 0}" @click="change_active(0,'2','afterEmotion',$event)">喜</p>
  				<p :class="{'active': active2 === 1}" @click="change_active(1,'2','afterEmotion',$event)">怒</p>
  				<p :class="{'active': active2 === 2}" @click="change_active(2,'2','afterEmotion',$event)">忧虑</p>
  				<p :class="{'active': active2 === 3}" @click="change_active(3,'2','afterEmotion',$event)">悲</p>
  				<p :class="{'active': active2 === 4}" @click="change_active(4,'2','afterEmotion',$event)">惊恐</p>
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
	      emtion:{
	      	afterDiettone:'',
	      	afterEmotion:''
	      }
	    }
	},
	methods:{
	  	change_active(answerValue,sectionId,sectionKey,event) {
		  this.$data['active'+sectionId] = answerValue
		  this.$data.emtion[sectionKey] = answerValue
		  this.$emit('genderChange', this.$data.emtion)
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
	.m-selectafter{
		width: 90%;
		margin-left: 5%;
		overflow: hidden;
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
	}
</style>