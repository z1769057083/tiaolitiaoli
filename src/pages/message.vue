<template>
    <div class='message'>
        <!--聊天内容-->
        <div class='m-char' id="chatContainer">
            <div class="m-charscroll">
                <div :class="item.isQuestion?'m-chardocter':'m-charcustom'" v-for="(item,index) in renderedMessages">
                    <div v-if="item.isQuestion" class="m-charperson"><img :src='imgUrl'/></div>
                    <div v-if="!item.isQuestion" class="m-charperson"><img :src="myselfAvatar"/></div>
                    <div class="m-charcont">{{renderedMessages[index].content}}</div>

                    <!--<div class="m-charcont">人家是女生！</div>-->
                </div>
                <!--<div class="m-charcustom">-->
                <!--<div class="m-charperson"><img src="../assets/indexheadportrait.png"/></div>-->
                <!--<div class="m-charcont">人家是女生！</div>-->
                <!--</div>-->
            </div>
        </div>
        <maskconfirm v-show="maskhidden" v-bind:questionSection="questionSection"></maskconfirm>
        <uploadMode v-show="uploadHidden" @uploadModeEvent='uploadModeEvent'></uploadMode>

        <div class="m-select">
            <!--先天体质报告问题-->
            <gender v-if="index == 0" @updateUserAnswer="updateUserAnswer"></gender>
            <city v-bind:questionSection="questionSection" v-if="index == 1"
                  @updateUserAnswer="updateUserAnswer"></city>
            <!--公共问题开始-->
            <emotion v-if="index == 2" @updateUserAnswer="updateUserAnswer"></emotion>
            <season v-if="index == 3" @updateUserAnswer="updateUserAnswer"></season>
            <looks v-if="index == 4" @updateUserAnswer="updateUserAnswer"></looks>
            <headForm v-if="index == 5" @updateUserAnswer="updateUserAnswer"></headForm>
            <skinColor v-if="index == 6" @updateUserAnswer="updateUserAnswer"></skinColor>
            <limbs v-if="index == 7" @updateUserAnswer="updateUserAnswer"></limbs>
            <character v-if="index == 8" @updateUserAnswer="updateUserAnswer"></character>
            <temperament v-if="index == 9" @updateUserAnswer="updateUserAnswer"></temperament>
            <treatOthers1 v-if="index == 10"
                          @updateUserAnswer="updateUserAnswer"></treatOthers1>
            <treatOthers2 v-if="index == 11"
                          @updateUserAnswer="updateUserAnswer"></treatOthers2>
            <treatOthers3 v-if="index == 12"
                          @updateUserAnswer="updateUserAnswer"></treatOthers3>
            <treatOthers4 v-if="index == 13"
                          @updateUserAnswer="updateUserAnswer"></treatOthers4>
            <!--公共问题结束-->
            <parentsBirthday v-if="index == 14&&questionSection=='xianTian'"
                             @updateUserAnswer="updateUserAnswer"></parentsBirthday>
            <!--先天体质报告问题结束-->
            <!--后天体质报告问题-->
            <physiology class='hidden' :class="{show: index == 14 &&questionSection=='houTian'}" @updateUserAnswer="updateUserAnswer"></physiology>
            <aftertreat v-if="index == 15 &&questionSection=='houTian'"
                        @updateUserAnswer="updateUserAnswer"></aftertreat>

            <afterCrescent v-if="index == 16 &&questionSection=='houTian' "
                           @updateUserAnswer="updateUserAnswer"></afterCrescent>
            <!--后天体质报告问题结束-->
            <button class="submit" @click="confirm">确定</button>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    import api from '../api/api'
    import gender from '@/components/gender'
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
    import uploadMode from '@/components/uploadMode'
    import character from '@/components/character'
    import temperament from '@/components/temperament'
    import Toast from '@/packages/toast'
    export default {
        name: 'message',
        data(){
            return {
                title: '',
                questionSection: XianTianSectionType,
                renderedMessages: [],
                questions: [],
                imgUrl: '',
                isCurrentQuestionFinished:false,
                myselfAvatar: '../static/images/indexheadportrait.png',
                maskhidden: false,
                uploadHidden: false,
                xianTianAnswer: {},
                houTianAnswer: {},
                pendingAnswer: {},
                index: 0
            }
        },
        components: {
            gender, city, emotion, season, looks, skinColor, limbs, treatOthers1,
            treatOthers2, treatOthers3, treatOthers4, parentsBirthday,
            aftertreat, maskconfirm, physiology, uploadMode, afterCrescent, headForm,
            character,temperament
        },
        computed: {
            isFinished: function () {
                return (this.questionSection == XianTianSectionType && this.index >= 15
                || this.questionSection == HouTianSectionType && this.index >= 17);
            }
//          ,
//      	doctorAvatar(){
//      		var doctor=JSON.parse( localStorage.getItem(Doctor_Name_Key));
//      		console.log(doctor.img);
//      		return doctor.img;
//      	}
        },
        watch: {
            renderedMessages() {
                this.$nextTick(() => {
                    var container = this.$el.querySelector("#chatContainer");
//                  console.log(container);
                    container.scrollTop = container.scrollHeight;
                })
            }
        },
        methods: {
            checkFemaleQuestion(that){
                debugger;
                var xianTianAnswer = JSON.parse(localStorage.getItem(XianTianAnswer_Index));
                var isMale=xianTianAnswer.gender==='M';
                var diffValue=that.questionSection === XianTianSectionType?0:1;
                if(that.questions[that.index-diffValue+1]&&that.questions[that.index-diffValue+1].questionName==='femaleStatus'&&isMale){
                    that.index=that.index+2;
                }
                else {
                    that.index=that.index+1;
                }
            },
            updateUserAnswer(answerParams) {

                this.isCurrentQuestionFinished=true;
                this.pendingAnswer = answerParams;
                for (let key in answerParams) {
                    if (this.questionSection == XianTianSectionType) {
                        this.xianTianAnswer[key] = answerParams[key];
                    }
                    else {
                        this.houTianAnswer[key] = answerParams[key];
                    }
                }
            },
            confirm () {
                if(!this.isCurrentQuestionFinished){
                    Toast({
                        message: '请先完成当前问题',
                        position:'top',
                    });
                    return;
                }
                this.isCurrentQuestionFinished=false;
                console.log(this.xianTianAnswer)

                var answer = { isQuestion: false,content:'' };
                for (let key in this.pendingAnswer) {
                    answer.content += answerHelper.getAnswerText(key, this.pendingAnswer[key]);
                }
                if(answer.content===''){answer.content='回答完毕';}
                this.renderedMessages.push(answer);
                this.checkFemaleQuestion(this);
                var that = this;
                var diffValue=this.questionSection == XianTianSectionType?0:1;
                if(that.questions[that.index-diffValue]&&that.questions[that.index-diffValue].content){
                	 var item = { isQuestion: true };
                    item.content = that.questions[that.index-diffValue].content;
                    that.renderedMessages.push(item);
                }
//                setTimeout(function(){
//                    var item={isQuestion:true};
//                    item.content=that.questions[that.index].content;
//                    that.renderedMessages.push(item);
//                },100)
                if (this.isFinished) {
                    this.maskhidden = true;
                    this.saveAndGenerateReport();
                }
            },
            saveAndGenerateReport(){
                var userId = '591e8b4873e713ce5aaddbef';
                var that = this;
                var postData = { "answer": {} };
                if (that.questionSection == XianTianSectionType) {
                    postData.answer[XianTianSectionType] = this.xianTianAnswer;
                    localStorage.setItem(XianTianAnswer_Index, JSON.stringify(this.xianTianAnswer))
                } else {
                    postData.answer[HouTianSectionType] = this.houTianAnswer;
                    localStorage.setItem(HouTianAnswer_Index, JSON.stringify(this.houTianAnswer))
                }
                postData.userId = userId;
                axios.defaults.headers['Content-Type'] = 'application/json';
                axios.post(api.generateReportData + "?id=" + userId + "&reportType=" + that.questionSection, postData)
                    .then(function (res) {
                        if (res.data.errorCode == 0) {
                            let report = res.data.returnValue
                            if (that.questionSection == XianTianSectionType) {
                                localStorage.setItem(XianTianReport_Index, JSON.stringify(report))
                            }
                            else {
                                localStorage.setItem(HouTianReport_Index, JSON.stringify(report))
                            }
                            console.log(report)
                        }
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
            },
            startQuestionBySection(){
                this.questionSection = this.$route.query.questionSection;
                if (typeof(this.questionSection ) == 'undefined') {
                    this.questionSection = XianTianSectionType;
                }
                if (this.questionSection == XianTianSectionType) {
                    this.index = 0;
                    this.questions = JSON.parse(localStorage.getItem(Answer_Index)).xianTianQuestions;
                }
                else {
                    this.index = 1;
                    this.questions = JSON.parse(localStorage.getItem(Answer_Index)).houTianQuestions;
                }
                var item = { isQuestion: true };
                item.content = this.questions[0].content;
                this.renderedMessages.push(item);
            },
            uploadModeEvent(){
                this.uploadHidden = true
            }
        },
        mounted() {
            this.startQuestionBySection()
            //取title
            if (!window.localStorage) {
                return false;
            } else {
                let storage = window.localStorage;
                let obj_arr = storage.getItem(Doctor_Name_Key)
                let obj = JSON.parse(obj_arr)
                document.title = obj.name
                this.imgUrl = obj.img
                if (storage.getItem(Account_Index) !== null) {
                    let account = JSON.parse(storage.getItem(Account_Index))
                    this.myselfAvatar = account.headimgurl;
                }

            }
        }
    }
</script>
<style lang="scss">
    @import "../common/common.scss";

    .message {
        background: #f8f8f8;
        width: 100%;
        height: 100%;
        position: absolute;
        overflow: hidden;
    }

    /*聊天内容*/
    .m-char {
        width: 100%;
        height: 48%;
        background: #f2f2f2;
        padding-top: rem(20rem);
        border-bottom: rem(4rem) solid #dab589;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;

    .m-charscroll {
        width: 100%;

    .m-chardocter {
        width: 78%;
        margin-left: 7%;
        overflow: hidden;
        display: flex;
        margin-bottom: rem(14rem);

    .m-charperson {
        width: 1.07rem;
        height: 1.07rem;
        margin-right: rem(12rem);

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
    }

    }
    .m-charcustom {
        width: 78%;
        margin-right: 7%;
        overflow: hidden;
        margin-bottom: rem(14rem);
        float: right;

    .m-charperson {
        width: 1.07rem;
        height: 1.07rem;
        float: right;
        margin-left: rem(12rem);

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
    }

    }
    }
    }
    .m-select {
        width: 100%;
        background: #f8f8f8;
        height: 52%;
        position: relative;

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
        bottom: rem(40rem);
        left: 35%;
    }

    }
</style>

