<template>
    <div class='message'>
        <!--聊天内容-->
        <div class='m-char' id="chatContainer">
            <div class="m-charscroll">
                <div :class="item.isQuestion?'m-chardocter':'m-charcustom'" v-for="(item,index) in renderedMessages">
                    <div v-if="item.isQuestion" class="m-charperson"><img :src='imgUrl'/></div>
                    <div v-if="!item.isQuestion" class="m-charperson"><img :src="myselfAvatar"/></div>
                    <div class="m-charcont">
                        <img v-if="item.isQuestion" src="../assets/messageDlogLeft.png"/>
                        <img v-if="!item.isQuestion" src="../assets/messageDlogRight.png"/>
                        {{renderedMessages[index].content}}
                    </div>
                </div>
            </div>
        </div>
        <maskconfirm v-if="maskhidden"></maskconfirm>
        <div class="m-select">
            <!--体质报告问题开始-->
            <gender v-if="index == 0" @updateUserAnswer="updateUserAnswer"></gender>
            <birthCity v-if="index == 1"  @updateUserAnswer="updateUserAnswer"></birthCity>
            <city v-if="index == 2"  @updateUserAnswer="updateUserAnswer"></city>
            <parentsBirthday v-if="index == 3" @updateUserAnswer="updateUserAnswer"></parentsBirthday>
            <emotion v-if="index == 4" @updateUserAnswer="updateUserAnswer"></emotion>
            <season v-if="index == 5" @updateUserAnswer="updateUserAnswer"></season>
            <looks v-if="index == 6" @updateUserAnswer="updateUserAnswer"></looks>
            <headForm v-if="index == 7" @updateUserAnswer="updateUserAnswer"></headForm>
            <skinColor v-if="index == 8" @updateUserAnswer="updateUserAnswer"></skinColor>
            <figures v-if="index == 9" @updateUserAnswer="updateUserAnswer"></figures>
            <limbs v-if="index == 10" @updateUserAnswer="updateUserAnswer"></limbs>
            <character v-if="index == 11" @updateUserAnswer="updateUserAnswer"></character>
            <temperament v-if="index == 12" @updateUserAnswer="updateUserAnswer"></temperament>
            <treatOthers1 v-if="index == 13"
                          @updateUserAnswer="updateUserAnswer"></treatOthers1>
            <treatOthers2 v-if="index == 14"
                          @updateUserAnswer="updateUserAnswer"></treatOthers2>
            <treatOthers3 v-if="index == 15"
                          @updateUserAnswer="updateUserAnswer"></treatOthers3>
            <treatOthers4 v-if="index == 16"
                          @updateUserAnswer="updateUserAnswer"></treatOthers4>
            <physiology v-if="index == 17"
                        @updateUserAnswer="updateUserAnswer"></physiology>
            <aftertreat v-if="index == 18"
                        @updateUserAnswer="updateUserAnswer"></aftertreat>

            <afterCrescent v-if="index == 19"
                           @updateUserAnswer="updateUserAnswer"></afterCrescent>
            <!--体质报告问题结束-->
            <button class="submit" @click="confirm">确定</button>
        </div>
    </div>
</template>
<script >
    import noBounce from '../../static/inobounce'
    import axios from 'axios'
    import api from '../api/api'
    import gender from '@/components/gender'
    import birthCity from '@/components/birthCity'
    import city from '@/components/city'
    import emotion from '@/components/emotion'
    import season from '@/components/season'
    import looks from '@/components/looks'
    import skinColor from '@/components/skinColor'
    import limbs from '@/components/limbs'
    import treatOthers1 from '@/components/treatOthers1'
    import treatOthers2 from '@/components/treatOthers2'
    import treatOthers3 from '@/components/treatOthers3'
    import treatOthers4 from '@/components/treatOthers4'
    import parentsBirthday from '@/components/parentsBirthday'
    import aftertreat from '@/components/aftertreat'
    import maskconfirm from '@/components/maskconfirm'
    import answerHelper from '@/common/answerHelper'
    import physiology from '@/components/physiology'
    import afterCrescent from '@/components/afterCrescent'
    import headForm from '@/components/headForm'
    import character from '@/components/character'
    import temperament from '@/components/temperament'
    import Toast from '@/packages/toast'
    import figures from '@/components/figures'
    import Common from '../../static/common'
    export default {
        name: 'message',
        data(){
            return {             
                renderedMessages: [],
                questions: [],
                imgUrl: '../static/images/indexheadportrait.png',
                isCurrentQuestionFinished: false,
                myselfAvatar: '../static/images/indexheadportrait.png',
                maskhidden: false,
                uploadHidden: false,
                questionAnswer:{
                	xianTian: {},
                	houTian: {}
                },   
                pendingAnswer: {},
                index: 0
            }
        },
        components: {
            gender,birthCity, city, emotion, season, looks, skinColor, limbs, treatOthers1,
            treatOthers2, treatOthers3, treatOthers4, parentsBirthday,
            aftertreat, maskconfirm, physiology, afterCrescent, headForm,
            character, temperament, figures
        },
        computed: {
        	//判断问题是否回答完毕
            isFinished: function () {
                return (this.index >= 20);
            }
        },
        watch: {
        	//监听滚动事件
            renderedMessages() {
                this.$nextTick(() => {
                    var container = this.$el.querySelector("#chatContainer");
                    container.scrollTop = container.scrollHeight;
                })
            }
        },
        methods: {
        	//判断是否显示针对女性的问题        	
            checkFemaleQuestion(that){           	
            	var isMale = this.questionAnswer.xianTian.gender === 'M' 
            	if(that.questions[that.index+1]&&that.questions[that.index+1].questionName === 'femaleStatus'&&isMale){            		
            		that.index = that.index + 2;
            	}else{
            		that.index += 1;
            	}
                             
            },
            //存组件里面传过来的值
       		updateUserAnswer(answerParams) {
                if (answerParams.isAllFilled || typeof (answerParams.isAllFilled) === 'undefined') {
                    this.isCurrentQuestionFinished = true;
                }
                else {
                    this.isCurrentQuestionFinished = false;
                }
                if (this.isCurrentQuestionFinished) {
                    this.pendingAnswer = answerParams;
                    for (let key in answerParams) {
                    	if(this.index<=3&&this.index!==2){
                    		this.questionAnswer.xianTian[key] = answerParams[key];
                    	}else{
                    		this.questionAnswer.houTian[key] = answerParams[key];
                    	}                          
                    }
                    
                }
            },
//          点击确定判断问题是否全部回答
            confirm () {
                if (!this.isCurrentQuestionFinished) {
                    Toast({
                        message: '请先完成当前问题',
                        position: 'top',
                    });
                    return;
                }
                this.isCurrentQuestionFinished = false;
                var answer = { isQuestion: false, content: '' };
                for (let key in this.pendingAnswer) {
                	if(key==='birthday'){
                		this.pendingAnswer[key] = this.pendingAnswer[key].substring(0,this.pendingAnswer[key].length-6)+'点'
                		answer.content += answerHelper.getAnswerText(key, this.pendingAnswer[key]);
                	}else{
                	answer.content += answerHelper.getAnswerText(key, this.pendingAnswer[key]);
                	}                  
                }
                if (answer.content === '') {
                    answer.content = '回答完毕';
                }
                this.renderedMessages.push(answer);
                this.checkFemaleQuestion(this);
                var that = this;
                if (that.questions[that.index] && that.questions[that.index].content) {
                    var item = { isQuestion: true };
                    item.content = that.questions[that.index].content;
                    that.renderedMessages.push(item);
                }
                if (this.isFinished) {
                    this.maskhidden = true;
                    this.saveAndGenerateReport();
                }
            },
            mapToSingleActor(key,sectionAnswer){
                var single_actor=Common.actionMapper[key];
                single_actor.name=key;
                single_actor.value=sectionAnswer[key];
                return single_actor;
            },
            //完成测试发送请求获取报告
            saveAndGenerateReport(){
                let user = JSON.parse(localStorage.getItem(Account_Index));
                var userId = user._id;
                var that = this;
                var postData = { "answer": {} };
                var actorsAnswer=[];
                for(let key in this.questionAnswer.houTian.section1){
                    var single_actor=this.mapToSingleActor(key,this.questionAnswer.houTian.section1)
                    actorsAnswer.push(single_actor);
                }
                for(let key in this.questionAnswer.houTian.section2){
                    var single_actor= this.mapToSingleActor(key,this.questionAnswer.houTian.section2)
                    actorsAnswer.push(single_actor);
                }
                for(let key in this.questionAnswer.houTian.section3){
                    var single_actor= this.mapToSingleActor(key,this.questionAnswer.houTian.section3)
                    actorsAnswer.push(single_actor);
                }
                for(let key in this.questionAnswer.houTian.section4){
                    var single_actor= this.mapToSingleActor(key,this.questionAnswer.houTian.section4)
                    actorsAnswer.push(single_actor);
                }
				postData.answer = this.questionAnswer;
                postData.answer.houTian.actorsAnswer=actorsAnswer;
                localStorage.setItem(AllAnswer_Index, JSON.stringify(this.questionAnswer))
                postData.userId = userId;
                axios.defaults.headers['Content-Type'] = 'application/json';
                axios.post(api.generateReportData + "?id=" + userId, postData)
                    .then(function (res) {
                        if (res.data.errorCode == 0) {
                            let report = res.data.returnValue
//                          console.log(report)
                        }
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
            },
            //判断问题是先天问题还是后天问题
            startQuestionBySection(){
                this.questions = JSON.parse(localStorage.getItem(All_Question_Index)).questions;
                var item = { isQuestion: true };
                item.content = this.questions[0].content;
                this.renderedMessages.push(item);
            },
            loadDoctorAvatar(){
                if (!window.localStorage) {
                    return false;
                } else {
                    let storage = window.localStorage;
                    let obj_arr = storage.getItem(Doctor_Name_Key)
                    let obj = JSON.parse(obj_arr)
                    document.title = obj.name
                    this.imgUrl = obj.img
                    //取用户的头像
                    if (storage.getItem(Account_Index) !== null) {
                        let account = JSON.parse(storage.getItem(Account_Index))
                        this.myselfAvatar = account.headimgurl;
                    }
                }
            },
            isAndroid(){
	        	let u = navigator.userAgent
	        	if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {//安卓手机				
				} else{//苹果手机
				 noBounce.enable()
				}
	        }
        },
        beforeDestroy(){
            noBounce.disable();
        },
        mounted() {
//          noBounce.enable();		
            this.startQuestionBySection()
            document.title='体质检测'
            //取页面的title，医生名字跟头像
            if (!window.localStorage) {
                return false;
            } else {
                let storage = window.localStorage;
                //取用户的头像
                if (storage.getItem(Account_Index) !== null) {
                    let account = JSON.parse(storage.getItem(Account_Index))
                    this.myselfAvatar = account.headimgurl;
                }
            }
            this.isAndroid()	
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    @import "../common/common.scss";
    .message {
        background: #f2f2f2;
        width: 100%;
        height: 100%;
        position: absolute;
    }
    /*聊天内容*/
    .m-char {
        width: 100%;
        height: 44%;
        background: #f2f2f2;
        padding-top: rem(20rem);
        /*border-bottom: rem(4rem) solid #dab589;*/
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        .m-charscroll {
            width: 100%;
            .m-chardocter {
                width: 78%;
                margin-left: 5%;
                overflow: hidden;
                display: flex;
                margin-bottom: rem(14rem);

                .m-charperson {
                    width: rem(40rem);
                    height: rem(40rem);
                    border-radius: 50%;
                    margin-right: rem(12rem);
                    overflow: hidden;

                    img {
                        width: 1.07rem;
                        height: 1.07rem;
                    }

                }
                .m-charcont {
                    color: #3c3c3c;
                    line-height: 0.56rem;
                    font-size: 0.37rem;
                    padding: 0.21rem 0.32rem;
                    border-radius: 0.15rem;
                    letter-spacing: 0.01rem;
                    max-width: 72%;
                    position: relative;
                    background: #fff;

                    img {
                        width: rem(7rem);
                        height: rem(14rem);
                        position: absolute;
                        top: rem(10rem);
                        left: rem(-7rem);
                    }

                }
            }
            .m-charcustom {
                width: 78%;
                margin-right: 5%;
                overflow: hidden;
                margin-bottom: rem(14rem);
                float: right;

                .m-charperson {
                    width: rem(40rem);
                    height: rem(40rem);
                    float: right;
                    margin-left: rem(12rem);
                    border-radius: 50%;
                    overflow: hidden;

                    img {
                        width: 1.07rem;
                        height: 1.07rem;
                    }

                }
                .m-charcont {
                    color: #3c3c3c;
                    background: #fff;
                    line-height: 0.56rem;
                    font-size: 0.37rem;
                    padding: 0.21rem 0.32rem;
                    border-radius: 0.15rem;
                    letter-spacing: 0.01rem;
                    float: right;
                    max-width: 72%;
                    position: relative;

                    img {
                        width: rem(7rem);
                        height: rem(14rem);
                        position: absolute;
                        top: rem(10rem);
                        right: rem(-7rem);
                    }

                }

            }
        }
    }
    .m-select{
        width: 100%;
        background: #f8f8f8;
        height: 52.5%;
        position: relative;
        overflow: hidden;
		border-top: 1px solid #e8e8e8;
		border-top-left-radius: rem(15rem);
		border-top-right-radius: rem(15rem);
            -webkit-overflow-scrolling: touch;
        .hidden {
            display: none;
        }

        .show {
            display: block;
        }

        .submit {
            width: 30%;
            height: rem(40rem);
            background: #c69b70;
            border: 0;
            color: #fff;
            border-radius: 0.13rem;
            font-size: 0.37rem;
            line-height: rem(40rem);
            position: absolute;
            bottom: rem(20rem);
            left: 35%;
        }

    }
</style>

