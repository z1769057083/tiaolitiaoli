<template>
	<div class='message'>
      <!--聊天内容-->
      <div class='m-char'>
      	<div class="m-charscroll">
      		<div class="m-chardocter" v-for="(item,index) in question">
	      		<div class="m-charperson"><img src='../assets/indexheadportrait.png'/></div>
	      		<div class="m-charcont">{{question[index].content}}</div>
	      	</div>
	      	<div class="m-charcustom">
	      		<div class="m-charperson"><img src="../assets/indexheadportrait.png"/></div>
	      		<div class="m-charcont">人家是女生！</div>
	      	</div>
      	</div>
      </div>
      <maskconfirm v-show="maskhidden"></maskconfirm> 
      <uploadMode v-show="uploadHidden" @uploadModeEvent='uploadModeEvent'></uploadMode>
      <div class="m-select">
      	    <!--先天体质报告问题-->
	        <gender class='hidden' :class="{show: index == 0}"  @updateUserAnswer="updateUserAnswer"></gender>
	        <city class='hidden' :class="{show: index == 1}" @updateUserAnswer="updateUserAnswer"></city>
	        <!--公共问题开始-->
		    <emotion class='hidden' :class="{show: index == 2}" @updateUserAnswer="updateUserAnswer"></emotion>
		    <season class='hidden' :class="{show: index == 3}" @updateUserAnswer="updateUserAnswer"></season>
		    <looks class='hidden' :class="{show: index == 4}" @updateUserAnswer="updateUserAnswer"></looks>
		    <headForm class='hidden' :class="{show: index == 5}" @updateUserAnswer="updateUserAnswer"></headForm>
		    <skinColor class='hidden' :class="{show: index == 6}" @updateUserAnswer="updateUserAnswer"></skinColor>
		    <limbs class='hidden' :class="{show: index == 7}" @updateUserAnswer="updateUserAnswer"></limbs>
		    <treatOthers1 class='hidden' :class="{show: index == 8}" @updateUserAnswer="updateUserAnswer"></treatOthers1>
		    <treatOthers2 class='hidden' :class="{show: index == 9}" @updateUserAnswer="updateUserAnswer"></treatOthers2>
		    <treatOthers3 class='hidden' :class="{show: index == 10}" @updateUserAnswer="updateUserAnswer"></treatOthers3>
		    <treatOthers4 class='hidden' :class="{show: index == 11}" @updateUserAnswer="updateUserAnswer"></treatOthers4>
		    <!--公共问题结束-->
		    <parentsBirthday class='hidden' :class="{show: index == 12}" @updateUserAnswer="updateUserAnswer"></parentsBirthday>
		    <!--先天体质报告问题结束-->		    	
		    <!--后天体质报告问题-->
		    <physiology class='hidden' :class="{show: index == 13}" @updateUserAnswer="updateUserAnswer"></physiology>
		    <aftertreat class='hidden' :class="{show: index == 14}" @updateUserAnswer="updateUserAnswer"></aftertreat>
		    <afterCrescent class='hidden' :class="{show: index == 15}" @updateUserAnswer="updateUserAnswer"></afterCrescent>
		    <!--后天体质报告问题结束-->
		    <button class="submit" @click="confirm">确定</button>
      </div>
   </div>
</template>
<script>
import axios from 'axios'
import api from '../api/api';
import gender from '@/components/gender'
import city from '@/components/city'
import emotion from '@/components/emotion'
import season from '@/components/season'
import looks from '@/components/looks'
import headForm from '@/components/headForm'
import skinColor from '@/components/skinColor'
import limbs from '@/components/limbs'
import treatOthers1 from '@/components/treatOthers1'
import treatOthers2 from '@/components/treatOthers2'
import treatOthers3 from '@/components/treatOthers3'
import treatOthers4 from '@/components/treatOthers4'
import parentsBirthday from '@/components/parentsBirthday'
import physiology from '@/components/physiology'
import aftertreat from '@/components/aftertreat'
import afterCrescent from '@/components/afterCrescent'
import maskconfirm from '@/components/maskconfirm'
import uploadMode from '@/components/uploadMode'
export default {
  name: 'message',
  data(){
  	return {
      title:'',
      question:[],
      imgUrl:'',
      maskhidden: false,
      uploadHidden: false,
      answer: {
      },
      index:0
    }
  },
  components: {
  	gender,
    city,
    emotion,
    season,
    looks,
    headForm,
    skinColor,
    limbs,
    treatOthers1,
    treatOthers2,
    treatOthers3,
    treatOthers4,
    parentsBirthday,
    physiology,
    aftertreat,
    afterCrescent,
    maskconfirm, 
    uploadMode
  },
  methods:{
  	beforeQuestion(){
	  	var that = this;
	  	axios.get(api.beforeQuestionData)
		  .then(function (res) {
		  	if(res.data.errorCode == 0){
		  		res = res.data.returnValue.xianTianQuestions
		  		that.question = res
		  	}
		  })
	      .catch(function (error) {
	        console.log(error)
	      })
	},
	updateUserAnswer(answerParams) {
	  	for(let key in answerParams){
	  		this.answer[key] = answerParams[key];
	  	}
	},
	uploadModeEvent(){
	  	this.uploadHidden = true
	},
	confirm () {
	  	console.log(this.answer)
	  	this.index  ++;
	  	if(this.index <= 15){
	  	}else{
	  		this.maskhidden = true;
	    }
	},
  	requestlist(){
//	  	var that = this;
//      axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
//	  	axios.post(api.beforeQuestionData)
//		  .then(function (res) {
////		  	console.log(res.data)
////		  	if(res.data.errorCode == 0){
////		  		res = res.data.returnValue
////		  		that.question = res
////		  		console.log(that.question)
////		  	}
//		  })
//	      .catch(function (error) {
//	        console.log(error)
//	      })
	}
  },
  mounted() {
    this.beforeQuestion()
    this.requestlist()
    //取title
   	if(!window.localStorage){
        return false;
    }else{
        let storage = window.localStorage;
        let obj_arr = storage.getItem(Doctor_Name_Key)
		let obj = JSON.parse(obj_arr)
		document.title = obj.name
		this.imgUrl = obj.img
		console.log(this.imgUrl)
    }
  }
}
</script>
<style lang="scss">
@import "../common/common.scss";
.message{
	background: #f8f8f8;
	width: 100%;
	height: 100%;
	position: absolute;
	overflow: hidden;
}
/*聊天内容*/
.m-char{
	width: 100%;
	height: 48%;
	background: #f2f2f2;
	padding-top: rem(20rem);
	border-bottom: rem(4rem) solid #dab589;
	overflow-y: auto;
	-webkit-overflow-scrolling:touch;
	.m-charscroll{
		width: 100%;
		.m-chardocter{
			width: 78%;
			margin-left: 7%;
			overflow: hidden;
			display: flex;
			margin-bottom: rem(14rem);
			.m-charperson{
				width: 1.07rem;
				height: 1.07rem;
				margin-right: rem(12rem);
				img{
					width: 1.07rem;
					height: 1.07rem;
				}
			}
			.m-charcont{
				color: #3c3c3c;
				background: #fff;
				line-height: 0.56rem;
				font-size: 0.37rem;
				padding: 0.21rem 0.32rem;
				border-radius: 0.15rem;
				letter-spacing: 0.01rem;
			}
		}
		.m-charcustom{
			width: 78%;
			margin-right: 7%;
			overflow: hidden;
			margin-bottom: rem(14rem);
			float: right;
			.m-charperson{
				width: 1.07rem;
				height: 1.07rem;
				float: right;
				margin-left: rem(12rem);
				img{
					width: 1.07rem;
					height: 1.07rem;
				}
			}
			.m-charcont{
				color: #3c3c3c;
				background: #fff;
				line-height: 0.56rem;
				font-size: 0.37rem;
				padding: 0.21rem 0.32rem;
				border-radius: 0.15rem;
				letter-spacing: 0.01rem;
				float: right;
			}
		}
	}
}
.m-select{
	width: 100%;
	background: #f8f8f8;
	height: 52%;
	position: relative;
	.hidden{
		display: none;
	}
	.show{
		display: block;
	}
	.submit{
		width: 30%;
		height: rem(40rem);
		background: #c69b70;
		border: 0;
		color: #fff;
		border-radius: 0.13rem;
		font-size: 0.37rem;
		line-height: rem(40rem);
		position: absolute;
		bottom: rem(40rem);
		left: 35%;
	}
}
</style>

