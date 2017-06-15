<template>
	<div class="m-selectfacon">
	  	<div class="m-selectappend">
	  		<dl>
	  			<dt>最近出现情况:</dt>
	  			<dd>
	  				<p v-for="item in brandlist" :class="{active: tags.indexOf(item) > -1 }" @click="ac(item)">{{item}}</p>
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
  	    tags: [],
  		brandlist: ['经常腹泻','入眠困难','肠胃不好','睡觉易醒','心慌','全身无力','便秘','食欲不振','持续口腔溃疡','痛经','经期紊乱','无']
    }
  },
    computed: {
        answer(){
            var answer = {};
            answer.tags = this.tags;
            return answer;
        }
    },
  methods:{
  	ac(obj) {
            var numb = this.tags.indexOf(obj);
            if (numb > -1) {
                this.tags.splice(numb, 1);
            } else {
                this.tags.push(obj);
            }
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
	.m-selectfacon{
		width: 90%;
		margin-left: 5%;
		.m-selectappend{
			width: 100%;
			overflow: hidden;
			dl{
				width: 100%;
				border-bottom: 1px solid #e3e3e3;
				overflow: hidden;
				padding-bottom: rem(14rem);
				padding-top: rem(14rem);
				font-size: $font12;
				dt{
					width: 100%;
					line-height: rem(20rem);
					font-size: $font13;
				}
				dd{
					width: 100%;
					float: left;
					line-height: rem(44rem);
					p{
						display: block;
						width: 22%;
						float: left;
						height: rem(30rem);
						background: #fff;
						margin-top: rem(12rem);
						border-radius: rem(10rem);
						line-height: rem(30rem);
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
						background: #dec19d;
					}
				}
			}
		}
	}
</style>