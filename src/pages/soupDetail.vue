<template>
  <div class="soup">
  	<div class="soup-main">
  		 <h3 class="activeShow" v-if="list.title">{{list.title}}</h3>
  		 <div class="soup-mpic activeShow" v-if="list.index">
  		 		<img  :src="''+apiPath+'/image/soup/'+list.index+'/1.jpg'" 
							  onerror="this.src='../../static/images/defaultPicture.jpg'"/>
  		 </div>
  		 <p class="activeShow" v-if="list.material"><span>需备食材：</span></p>
  		 <p class="activeShow" v-if="list.material">{{list.material}}</p>
  		 <p class="activeShow" v-if="list.step1"><span>主要步骤：</span></p>
  		 <p class="activeShow" v-if="list.step1">{{list.step1}}</p>
  		 <p class="activeShow" v-if="list.step2">{{list.step2}}</p>
  		 <p class="activeShow" v-if="list.step3">{{list.step3}}</p>
  		 <p class="activeShow" v-if="list.step4">{{list.step4}}</p>
  		 <p class="activeShow" v-if="list.step5">{{list.step5}}</p>
  		 <div class="soup-img activeShow" v-if="list.images" >
  		 		<img class='soupImg' v-for='imgItem in list.images' 
  		 			:src="''+apiPath+'/image/soup/'+list.index+'/'+imgItem+'.jpg'" 
						onerror="this.src='../../static/images/defaultPicture.jpg'">
						<!--<img class="soupImg" src="../assets/2.jpg"/>
						<img class="soupImg" src="../assets/2.jpg"/>
						<img class="soupImg" src="../assets/2.jpg"/>-->
  		 </div>
  		 <footerCode></footerCode>
  	</div>  
  </div>
</template>
<script>
	import axios from 'axios'
	import api from '../api/api'
	import footerCode from '@/components/footerCode'
  export default {
    data(){
    	return{
    		list:[],
    		apiPath:''
    	}
    },
    components:{
    	footerCode
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
    	document.title="食谱"
    	this.apiPath = api.apipath
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
@import "../common/common.scss";
.soup{
	width: 100%;
	overflow: hidden;
	.soup-main{
		width: 92%;
		margin-left: 4%;
		margin-top: rem(20rem);
		.activeShow{
			display: block;
		}
		h3{
			text-align: center;
			font-size: $font16;
			font-weight: bold;
			margin-bottom: rem(15rem);			
		}
		p{
			line-height: rem(26rem);
			text-align: justify;
			font-size: $font13;
			color: $c3c3c;
			span{
				font-size: $font14;
				font-weight: bold;
			}
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
		.soupImg{
			width: 100%;
			height: 100%;
		}
		.soup-img{
			margin-top: rem(10rem);
			width: 100%;
			overflow: hidden;
		}
	}
}
</style>