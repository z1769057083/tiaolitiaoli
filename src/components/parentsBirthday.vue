<template>
    <div class="m-selection">
        <!--<div class="m-selecttit">父母生日</div>-->
        <span>父亲生日：</span>
        <input type="date" :class="{'activeDate': toggle}" class="m-selectbirthday" name='fatherBirthday'
               v-model='fatherBirthday' min="1901-01-01"
               @change='change_date(fatherBirthday)'/>
        <span>母亲生日：</span>
        <input type="date" :class="{'activeDate': toggle1}" class="m-selectbirthday" name='motherBirthday'
               v-model='motherBirthday'  min="1901-01-01"
               @change='change_MotherDate(motherBirthday)'/>

    </div>
</template>
<script type="text/javascript">
    import Toast from '@/packages/toast'
    export default {
        data(){
            return {
                motherBirthday: '1990-01-01',
                fatherBirthday: '1990-01-01',
                toggle: false,
                toggle1: false
            }
        },
        computed: {
            answer(){
                var answer = {};
                answer.motherBirthday = this.motherBirthday;
                answer.fatherBirthday = this.fatherBirthday;
                answer.isAllFilled = false;
                if (this.motherBirthday !== '' &&
                    this.fatherBirthday !== '' &&
                    new Date(this.fatherBirthday) < new Date(global.User.birthday) &&
                    new Date(this.fatherBirthday) > new Date('1901-01-01') &&
                    new Date(this.motherBirthday) > new Date('1901-01-01') &&
                    new Date(this.motherBirthday) < new Date(global.User.birthday)) {
                    answer.isAllFilled = true;
                }
                return answer;
            }
        },
        methods: {
            change_date(fatherBirthday){
                if (new Date(fatherBirthday) >= new Date(global.User.birthday)) {
                    Toast({
                        message: '父亲生日不能晚于你的生日',
                        position: 'top'
                    })
                    return;
                }
                this.toggle = true
                this.fatherBirthday = fatherBirthday;
                    this.$emit('updateUserAnswer', this.answer);
                
            },
            change_MotherDate(motherBirthday){
                if (new Date(motherBirthday) >= new Date(global.User.birthday)) {
                    Toast({
                        message: '母亲生日不能晚于你的生日',
                        position: 'top'
                    })
                    return;
                }
                this.toggle1 = true
                this.motherBirthday = motherBirthday;
                this.$emit('updateUserAnswer', this.answer);
                
            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    @import "../common/common.scss";
    /*选择问题内容*/
    .m-selection {
        /*width: 74.6%;
        margin-left: 12.2%;*/
        margin-top: rem(35rem);
        .m-selecttit {
            text-align: center;
            font-size: 0.4rem;
            color: $c3c3c;
            padding: rem(14rem) 0 rem(14rem);
        }
        span {
            color: $c3c3c;
            font-size: $font14;
            display: inline-block;
            padding-bottom: rem(15rem);
        }
        .m-selectbirthday {
            width: 92.8%;
            height: 1.3rem;
            background: url(../assets/msgdate.png) no-repeat center;
            background-size: cover;
            line-height: 1.3rem;
            font-size: 0.37rem;
            padding-left: 7.2%;
            color: #999;
            border-radius: 1.06rem;
            margin-bottom: rem(30rem);
            border: 0;
        }
        .activeDate {
            color: #000;
        }
    }
</style>