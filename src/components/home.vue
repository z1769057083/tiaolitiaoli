<template>
	<div class='home'>
    <div class='i-content'>
      <div class='i-headbot'>
        <div class='i-headbottext'>你是第12580位测试者</div>
      </div>
      <div class='i-main'>
        <h3 class='i-maintop'>体质检测</h3>
        <div class='i-maintext'>本测试由林博士、胡大夫两位教授多年潜心研究和临床观察，利用《皇帝内经》等传统中医理论结合人工智能技术创立的体质辨析研究模型；完成测试后，您将了解到您的体质详情，并获得相应的个性化的解决方法。</div>
        <div class='i-maintext'>本次测试大约需要10分钟的时间填写。</div>
        <div class='i-maincen'>
        	<img class="i-mline" src="../assets/indexline.png"/>
        	<img class="i-micon" src="../assets/index.png">
        </div>
        <div class='i-maindocter i-maindocter1'>
          <span>林博士</span>
          <div class="i-maintest" @click="tab('林博士')">
            <img src="../assets/indextest.png">
          </div>
          <div class='i-mainportrait'><img src="../assets/indexheadportrait.png"></div>
        </div>
        <div class='i-maindocter'>
          <span>胡大夫</span>
            <div class='i-maintest' @click="tab('胡大夫')"><img src="../assets/indextest.png"></div>
          <div class='i-mainportrait'><img src="../assets/indexheadportrait1.png"></div>
        </div>
        <div class='i-maintext i-maintip i-maintip1'>温馨提示：本测试所提及的内容仅作为生活保健的咨询建议，如遇不适请及时就医。</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'home',
  data() {
  	return {
  	}
  },
  methods: {
  	tab(item) {
  		this.$router.push({name: 'message', params: {title : item}});
  	}
  }
}
</script>
<style scoped lang="scss">
@import "../common/common.scss";
.i-content{
  width: 100%;
  background: url(../assets/indexbg.png) no-repeat;
  background-size: cover; 
  	.i-main{
  	  	margin-top: rem(18rem);
  	  	.i-maintext{
		   width: 83.2%;
		   margin-left: 8.4%;
		   letter-spacing: 0.01rem;
		   font-size: 0.32rem;
		   line-height: 0.59rem;
		   color: #000;
		   text-align: center;
		}
		.i-maincen{
			width: 53%;
			margin-left:23.5%;
			margin-bottom: 0.48rem;
		  	.i-mline{
			    width: 100%;
			    height: 0.03rem;
			}
			.i-micon{
			    width: 0.96rem;
			    height: 0.48rem;
			    margin-top: 0.4rem;
			    display: block;
			    margin-left: 40%;
			}
		}
		.i-maindocter{
		  width: 82.7%;
		  height: 2.35rem;
		  border: 0.05rem solid #e3e3e3;
		  border-radius: 0.16rem;
		  margin-left: 13.3%;
		  position: relative;
		  background: #fff;
		  span{
			  margin-left: 16%;
			  line-height: 2.35rem;
			  font-size: 0.37rem;
		  }
		  .i-maintest{
			  width: 23.2%;
			  height: 0.75rem;
			  line-height: 0.75rem;
			  color: #ce8654;
			  border-radius: 0.11rem;
			  text-align: center;
			  position:absolute;
			  right: 3.9%;
			  top: 0.8rem;
			  img{
				width: 1.92rem;
				height: 0.75rem;
			  }
			}
			.i-mainportrait{
			  width: 1.82rem;
			  height: 1.82rem;
			  border-radius: 50%;
			  position: absolute;
			  left: -0.9rem;
			  top: 0.27rem;
			  img{
			    width: 1.82rem;
			    height: 1.82rem;
			  }
			}

		}
		.i-maindocter1{
		  margin-bottom: 0.48rem;
		}
		.i-maintip{
		  color: #ce8654;
		  margin-top: 0.8rem;
		}
	}
}
</style>
