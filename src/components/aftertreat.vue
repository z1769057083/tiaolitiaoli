<template>
	<div class="m-selectfacon">
	  	<div class="m-selectseason">
	  		<dl>
	  			<dt>最近出现情况:</dt>
	  			<dd>
	  				<p v-for="item in brandlist" :class="{active: arr.indexOf(item) > -1 }" @click="ac(item)">{{item}}</p>
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
  		Situation:{
  			afterSituation:''
  		},
  		brandlist: ['经常腹泻','入眠困难','肠胃不好','睡觉易醒','心慌','全身无力','便秘','食欲不振','持续口腔溃疡','痛经','经期紊乱无']
    }
  },
  methods:{
  	ac(obj) {
            var numb = this.arr.indexOf(obj);
            if (numb > -1) {
              this.arr.splice(numb, 1);
            } else {
              this.arr.push(obj);
            }
            this.Situation.afterSituation=this.arr
            console.log(this.Situation.afterSituation);
            this.$emit('updateUserAnswer', this.Situation)
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