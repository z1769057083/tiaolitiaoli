<template>
<div class="m-selectfacon">
  	<div class="m-selectemotion">
  		<dl>
  			<dt>饮食口味</dt>
  			<dd>
  				<p v-for="items in tasteListSample" :class="{active: taste.indexOf(items.key) > -1 }" @click="ac1(items.key)">{{items.text}}</p>
  			</dd>
  		</dl>
  		<dl>
  			<dt>情绪情况</dt>
  			<dd>
  				<p v-for="item in emotionList" :class="{active: emotion.indexOf(item.key) > -1 }" @click="ac(item.key)">{{item.text}}</p>
  			</dd>
  		</dl>
  	</div>
</div>
</template>
<script type="text/javascript">
    import Common from '../../static/common'
export default {
	data(){
	  	return {
	  	    emotion: [],
            taste: [],
			tasteListSample:[
			  {'key':'sour','text': '酸'},
              {'key':'sweet','text': '甜'},
              {'key':'bitter','text': '苦'},
              {'key':'hot','text': '辣'},
              {'key':'salt','text': '咸'},
              {'key':'normal','text':'淡'}],
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
	mounted(){
        Common.loadXianTianUserData(this);
	},
	methods:{
	  	ac(obj) {
            var numb = this.emotion.indexOf(obj);
            if (numb > -1) {
              this.emotion.splice(numb, 1);
            } else {
              this.emotion.push(obj);
            }
            if(this.taste!==[]){
			  	this.$emit('updateUserAnswer', this.answer)
			}

        },
        ac1(obj) {
            var numb1 = this.taste.indexOf(obj);
            if (numb1 > -1) {
              this.taste.splice(numb1, 1);
            } else {
              this.taste.push(obj);
            }
            if(this.emotion!==[]){
			  	this.$emit('updateUserAnswer', this.answer)
			}
        }
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