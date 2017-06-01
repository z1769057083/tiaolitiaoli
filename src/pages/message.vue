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
        <maskconfirm v-show="maskhidden" v-bind:questionSection="questionSection"></maskconfirm>
        <div class="m-select">
            <!--先天体质报告问题-->
            <gender v-if="index == 0" @updateUserAnswer="updateUserAnswer"></gender>
            <city v-bind:questionSection="questionSection" v-if="index == 1"
                  @updateUserAnswer="updateUserAnswer"></city>
            <!--公共问题开始-->
            <emotion v-if="index == 2" @updateUserAnswer="updateUserAnswer"></emotion>
            <season v-if="index == 3" @updateUserAnswer="updateUserAnswer"></season>
            <looks v-if="index == 4" @updateUserAnswer="updateUserAnswer"></looks>
            <skinColor v-if="index == 5" @updateUserAnswer="updateUserAnswer"></skinColor>
            <limbs v-if="index == 6" @updateUserAnswer="updateUserAnswer"></limbs>
            <treatOthers1 v-if="index == 7"
                          @updateUserAnswer="updateUserAnswer"></treatOthers1>
            <treatOthers2 v-if="index == 8"
                          @updateUserAnswer="updateUserAnswer"></treatOthers2>
            <treatOthers3 v-if="index == 9"
                          @updateUserAnswer="updateUserAnswer"></treatOthers3>
            <treatOthers4 v-if="index == 10"
                          @updateUserAnswer="updateUserAnswer"></treatOthers4>
            <!--公共问题结束-->
            <parentsBirthday v-if="index == 11&&questionSection=='xianTian'"
                             @updateUserAnswer="updateUserAnswer"></parentsBirthday>
            <!--先天体质报告问题结束-->
            <!--后天体质报告问题-->
            <aftertreat v-if="index == 11 &&questionSection=='houTian'"
                        @updateUserAnswer="updateUserAnswer"></aftertreat>
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
    export default {
        name: 'message',
        data(){
            return {
                title: '',
                questionSection: XianTianSectionType,
                question: [],
                imgUrl: '',
                maskhidden: false,
                xianTianAnswer: {},
                houTianAnswer: {},
                index: 0
            }
        },
        components: {
            gender,
            city,
            emotion,
            season,
            looks,
            skinColor,
            limbs,
            treatOthers1,
            treatOthers2,
            treatOthers3,
            treatOthers4,
            parentsBirthday,
            aftertreat,
            maskconfirm,
        },
        computed: {
            isFinished: function () {
                return (this.questionSection == XianTianSectionType && this.index >= 12
                || this.questionSection == HouTianSectionType && this.index >= 12);
            }
        },
        methods: {
            updateUserAnswer(answerParams) {
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
                console.log(this.xianTianAnswer)
                this.index++;
                if (this.isFinished) {
                    this.maskhidden = true;
                    this.saveAndGenerateReport();
                }
            },
            saveAndGenerateReport(){
                var userId = '591e8b4873e713ce5aaddbef';
                var that = this;
                var postData ={"answer":{}};
                if(that.questionSection == XianTianSectionType){
                    postData.answer[XianTianSectionType]=this.xianTianAnswer;
                }else{
                    postData.answer[HouTianSectionType]=this.houTianAnswer;
                }
                postData.userId=userId;
                axios.defaults.headers['Content-Type'] = 'application/json';
                axios.post(api.generateReportData + "?id=" + userId + "&reportType=" + that.questionSection, postData)
                //                    .then(function (res1) {
                //                        axios.get(api.generateReportData + "?id=" + userId + "&reportType=" + that.questionSection)
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
                    this.question = JSON.parse(localStorage.getItem(Answer_Index)).xianTianQuestions;
                }
                else {
                    this.index = 1;
                    this.question = JSON.parse(localStorage.getItem(Answer_Index)).houTianQuestions;
                }
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
                console.log(this.imgUrl)
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

