<template>
  <div class="wrap-box">
			<div class="wrap">
				<h3 class="title">小儿推拿教学—二马</h3>
				<p class="date">
					2017-06-13
					<span>汉古科技</span>					
				</p>
				<p class="wuxing">五行：弱水</p>
				<video width="100%" height="240" controls autobuffer>
				    <source src="../../static/images/tuina.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'></source>
				</video>
				<p class="content">
					二马穴在临床上具有滋阴补肾，顺气散结，清神，利水通淋的功效。
					根据小编个人经验，揉二马穴有滋阴补肾的作用，偏于温补为主，
					性较温和，独穴久揉二马，可大补肾中水火而祛寒，功同八味丸。
				</p>
			</div>	
		</div>
</template>
<script>
import axios from 'axios'
import api from '../api/api'
export default {
  data(){
  	return {
  		apiPath:''
    }
  },
  methods: {
//	requestlist(){
//      var that = this;
//      document.title = this.$route.query.titleName;
//      that.categoryId = this.$route.query.categoryId;
//      axios.get(api.allDoodsData+that.categoryId)
//        .then(function (res) {
//          if (res.data.errorCode == 0) {
//            res = res.data.returnValue
//            that.list = res
//          }
//        })
//        .catch(function (error) {
//          console.log(error)
//        })
//    },
  },
  mounted() {
//	this.apiPath = api.apipath
//	this.requestlist()
	document.documentElement.scrollTop = 0
    document.body.scrollTop =0
  }
}
</script>
<style scoped lang="scss" rel="stylesheet/scss">
	@import "../common/common.scss";
	.wrap-box{
			width: 100%;
			overflow: hidden;
			background: #fff;
			.wrap{
				width: 92%;
				margin: 0 4%;
				.title{
					font-size: $font18;
					font-weight: bold;
					margin: rem(10rem) 0 rem(8rem);
				}
				.date{
					font-size: $font12;
					color: #868686;
					span{
						color: #4e7b9c;
					}
				}
				.wuxing{
					font-size: $font12;
					color: #666;
					margin: rem(8rem) 0 rem(10rem);
				}
				.content{
					margin-top: rem(10rem);
					line-height: rem(24rem);
					color: #000;
					font-size: $font14;
					text-align: justify;
				}
			}
		}
		
		
		
</style>

