<template>
<div class="m-selectfacon">
  	<div class="m-selectemotion">
  		<dl>
  			<dt>饮食口味</dt>
  			<dd>
  				<p :class="{'active': taste === 'sour'}" @click="change_active('sour','1',$event)">酸</p>
  				<p :class="{'active': taste === 'sweet'}" @click="change_active('sweet','1',$event)">甜</p>
  				<p :class="{'active': taste === 'bitter'}" @click="change_active('bitter','1',$event)">苦</p>
  				<p :class="{'active': taste === 'hot'}" @click="change_active('hot','1',$event)">辣</p>
  				<p :class="{'active': taste === 'salt'}" @click="change_active('salt','1',$event)">咸</p>
  				<p :class="{'active': taste === 'normal'}" @click="change_active('normal','1',$event)">淡</p>
  			</dd>
  		</dl>
  		<dl>
  			<dt>情绪情况</dt>
  			<dd>
  				<p v-for="item in emotionList" :class="{active: arr.indexOf(item.key) > -1 }" @click="ac(item.key)">{{item.text}}</p>
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
            taste:'',
            emotion:'',
	      active1:'',

			tasteListSample:['sour','bitter','sweet','hot','salt'],
	      emotionList: [
			  {'key':'happy','text': '喜'},
              {'key':'angry','text': '怒'},
              {'key':'worry','text': '忧虑'},
              {'key':'sad','text': '悲'},
              {'key':'fear','text':'惊恐'}]
	    }
	},
    computed: {
        answer(){
            var answer = {};
            answer.taste = this.taste;
            answer.emotion = this.emotion;
            return answer;
        }
    },
	methods:{
	  	change_active(answerValue,sectionId,sectionKey,event) {
		  this.taste= answerValue;
		  if(this.emotion!==''){
		  	this.$emit('updateUserAnswer', this.answer)
		  }  
	    },
	  	ac(obj) {
            var numb = this.arr.indexOf(obj);
            if (numb > -1) {
              this.arr.splice(numb, 1);
            } else {
              this.arr.push(obj);
            }
            this.emotion=this.arr
            if(this.taste!==''){
			  	this.$emit('updateUserAnswer', this.answer)
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