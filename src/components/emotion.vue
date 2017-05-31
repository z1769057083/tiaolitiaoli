<template>
<div class="m-selectfacon">
  	<div class="m-selectemotion">
  		<dl>
  			<dt>饮食口味</dt>
  			<dd>
  				<p :class="{'active': active1 === 0}" @click="change_active(0,'1','diettone',$event)">酸</p>
  				<p :class="{'active': active1 === 1}" @click="change_active(1,'1','diettone',$event)">甜</p>
  				<p :class="{'active': active1 === 2}" @click="change_active(2,'1','diettone',$event)">苦</p>
  				<p :class="{'active': active1 === 3}" @click="change_active(3,'1','diettone',$event)">辣</p>
  				<p :class="{'active': active1 === 4}" @click="change_active(4,'1','diettone',$event)">咸</p>
  				<p :class="{'active': active1 === 5}" @click="change_active(5,'1','diettone',$event)">淡</p>
  			</dd>
  		</dl>
  		<dl>
  			<dt>情绪情况</dt>
  			<dd>
  				<p v-for="item in emotionList" :class="{active: arr.indexOf(item) > -1 }" @click="ac(item)">{{item}}</p>
  			</dd>
  		</dl>
  	</div>
</div>
</template>
<script type="text/javascript">
export default {
	data(){
	  	return {
	  	  arr: [],
	      active1:'',
	      emotionList: ['喜','怒','忧虑','睡觉易醒','悲','惊恐'],
	      emtion:{
	      	diettone:'',
	      	emotion:''
	      }
	    }
	},
	methods:{
	  	change_active(answerValue,sectionId,sectionKey,event) {
		  this.$data['active'+sectionId] = answerValue
		  this.$data.emtion[sectionKey] = answerValue
		  if(this.emtion.emotion!==''){
		  	this.$emit('updateUserAnswer', this.$data.emtion)
		  }  
	    },
	  	ac(obj) {
            var numb = this.arr.indexOf(obj);
            if (numb > -1) {
              this.arr.splice(numb, 1);
            } else {
              this.arr.push(obj);
            }
            this.emtion.emotion=this.arr
            console.log(this.emtion.emotion);
            if(this.emtion.diettone!==''){
			  	this.$emit('updateUserAnswer', this.emtion)
			}  
            
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
}
</style>