<template>
  <div class="soup">
  	<div class="soup-main">
  		 <h3>《黄帝内经》揭秘：正常的脉象是啥样的？</h3>
  		 <p>
  		 	中医里很多看似神秘莫测的说话，却蕴藏着诸多令人捉摸不透的真知灼见，
  		 	比如中医里的脉诊，能断疾病，能看健康，甚至能断生死，让很多人感觉
  		 	难以置信。早在《黄帝内经》中，其实就有不少关于脉诊的记载，今天就
  		 	从《黄帝内经》的角度看看正常脉象是什么样子的。
  		 </p>
  		 <div class="soup-mpic">
  		 		<img src="../assets/shoparticle.png" alt="" />
  		 </div>
  		 <p>
  		 	中医里很多看似神秘莫测的说话，却蕴藏着诸多令人捉摸不透的真知灼见，
  		 	比如中医里的脉诊，能断疾病，能看健康，甚至能断生死，让很多人感觉
  		 	难以置信。早在《黄帝内经》中，其实就有不少关于脉诊的记载，今天就
  		 	从《黄帝内经》的角度看看正常脉象是什么样子的。
  		 </p>
  		 <div class="soup-mpic">
  		 		<img src="../assets/shoparticle.png" alt="" />
  		 </div>
  		 
  	</div>  
  </div>
</template>
<script>
	import axios from 'axios'
	import api from '../api/api';
  export default {
    data(){
    	return{
    		list:[]
    	}
    },
    methods:{
      singleSoupList(){
        var that = this;
        that.soupId = this.$route.query.soupId;
        console.log(that.soupId)
        axios.get(api.singleSoupData + that.soupId)
          .then(function (res) {
            if (res.data.errorCode == 0) {
              res = res.data.returnValue
               that.list = res
               console.log(that.list)
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    },
    mounted(){
    	this.singleSoupList()
    }
  }
</script>
<style scoped lang="scss">
@import "../common/common.scss";
.soup{
	width: 100%;
	overflow: hidden;
	.soup-main{
		width: 92%;
		margin-left: 4%;
		margin-top: rem(20rem);
		h3{
			text-align: center;
			font-size: $font16;
			font-weight: bold;
			margin-bottom: rem(15rem);			
		}
		p{
			line-height: rem(26rem);
			text-align: justify;
			font-size: $font12;
			color: $c3c3c;
		}
		.soup-mpic{
			margin: rem(15rem) 0;
			width: 100%;
			height: rem(200rem);
			img{
				width: 100%;
				height: 100%;
			}
		}
	}
}
</style>