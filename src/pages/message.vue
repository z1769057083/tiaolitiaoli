<template>
	<div class='message'>
      <!--聊天内容-->
      <div class='m-char'>
      	<div class="m-charscroll">
      		<div class="m-chardocter" v-for="(item,index) in question">
	      		<div class="m-charperson"><img :src='imgUrl'/></div>
	      		<div class="m-charcont">{{question[index].content}}</div>
	      	</div>
	      	<div class="m-charcustom">
	      		<div class="m-charperson"><img src="../assets/indexheadportrait.png"/></div>
	      		<div class="m-charcont">人家是女生！</div>
	      	</div>
      	</div>
      </div>
      <!-- <maskconfirm></maskconfirm> -->
      <div class="m-select">
      	    <!--先天体质报告问题-->
	        <gender class='hidden' :class="{show: index == 0}"  @genderChange="genderChange"></gender>
	        <city class='hidden' :class="{show: index == 1}" @genderChange="genderChange"></city>
	        <facialFeatures class='hidden' :class="{show: index == 2}" @genderChange="genderChange1"></facialFeatures>
	        <!--多选-->
		    <emotion class='hidden' :class="{show: index == 3}" @genderChange="genderChange1"></emotion>
		    <season class='hidden' :class="{show: index == 4}" @genderChange="genderChange1"></season>
		    <treatOthers1 class='hidden' :class="{show: index == 5}" @genderChange="genderChange1"></treatOthers1>
		    <treatOthers2 class='hidden' :class="{show: index == 6}" @genderChange="genderChange1"></treatOthers2>
		    <treatOthers3 class='hidden' :class="{show: index == 7}" @genderChange="genderChange1"></treatOthers3>
		    <treatOthers4 class='hidden' :class="{show: index == 8}" @genderChange="genderChange1"></treatOthers4>
		    <parentsBirthday class='hidden' :class="{show: index == 9}" @genderChange="genderChange1"></parentsBirthday>
		    <!--后天体质报告问题-->
		    <aftercity class='hidden' :class="{show: index == 10}" @genderChange="genderChange1"></aftercity>
		    <afteremotion class='hidden' :class="{show: index == 11}" @genderChange="genderChange1"></afteremotion>
		    <afterseason class='hidden' :class="{show: index == 12}" @genderChange="genderChange1"></afterseason>
		    <afterlimb class='hidden' :class="{show: index == 13}" @genderChange="genderChange1"></afterlimb>
		    <afterfigure class='hidden' :class="{show: index == 14}" @genderChange="genderChange1"></afterfigure>
		    <aftertreat1 class='hidden' :class="{show: index == 15}" @genderChange="genderChange1"></aftertreat1>
		    <aftertreat2 class='hidden' :class="{show: index == 16}" @genderChange="genderChange1"></aftertreat2>
		    <aftertreat3 class='hidden' :class="{show: index == 17}" @genderChange="genderChange1"></aftertreat3>
		    <aftertreat4 class='hidden' :class="{show: index == 18}" @genderChange="genderChange1"></aftertreat4>
		    <aftertreat5 class='hidden' :class="{show: index == 19}" @genderChange="genderChange1"></aftertreat5>
		    <!--多选-->
		    <aftertreat6 class='hidden' :class="{show: index == 20}" @genderChange="genderChange1"></aftertreat6>
		    <button class="submit" @click="confirm">确定</button>
      </div>
   </div>
</template>
<script>
import axios from 'axios'
import api from '../api/api';
import gender from '@/components/gender'
import city from '@/components/city'
import facialFeatures from '@/components/facialFeatures'
import emotion from '@/components/emotion'
import season from '@/components/season'
import treatOthers1 from '@/components/treatOthers1'
import treatOthers2 from '@/components/treatOthers2'
import treatOthers3 from '@/components/treatOthers3'
import treatOthers4 from '@/components/treatOthers4'
import parentsBirthday from '@/components/parentsBirthday'
import maskconfirm from '@/components/maskconfirm'
import aftercity from '@/components/aftercity'
import afteremotion from '@/components/afteremotion'
import afterseason from '@/components/afterseason'
import afterlimb from '@/components/afterlimb'
import afterfigure from '@/components/afterfigure'
import aftertreat1 from '@/components/aftertreat1'
import aftertreat2 from '@/components/aftertreat2'
import aftertreat3 from '@/components/aftertreat3'
import aftertreat4 from '@/components/aftertreat4'
import aftertreat5 from '@/components/aftertreat5'
import aftertreat6 from '@/components/aftertreat6'
export default {
  name: 'message',
  data(){
  	return {
      title:'',
      toggle: false,
      question:[],
      imgUrl:'',
      hideMaskConfirm: true,
      hideGender: true,
      hideCity: true,
      currentComponentIndex:true,
      form: {
      	gender:'',
      	birthday:'',
      	address:''
      },
      filledIndex:0,
      index:0
    }
  },
  components: {
  	gender,
    city,
    facialFeatures,
    emotion,
    season,
    treatOthers1,
    treatOthers2,
    treatOthers3,
    treatOthers4,
    parentsBirthday,
    maskconfirm,
    aftercity,
    afteremotion,
    afterseason,
    afterlimb,
    afterfigure,
    aftertreat1,
    aftertreat2,
    aftertreat3,
    aftertreat4,
    aftertreat5,
    aftertreat6 
  },
  methods:{
  	firstQuestion(){
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
	  genderChange (gender) {
	  	this.form = gender;
	  },
	  genderChange1 (gender) {
//	  	this.form = gender;
	  },
//	  answerFinished(){
//	  	this.filledIndex++;
//	  },
	  confirm () {
	  	console.log(this.form)
	  	this.index  ++;
	  	if(this.index<=20){
	  	}else{
	  		this.$router.push('/report')
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
    this.firstQuestion()
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

