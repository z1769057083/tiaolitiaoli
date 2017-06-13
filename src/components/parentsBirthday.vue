<template>
    <div class="m-selection">
        <!--<div class="m-selecttit">父母生日</div>-->
        	<span>父亲生日：</span>
        	<input type="date" class="m-selectbirthday" name='fatherBirthday' v-model='fatherBirthday'
               @change='change_date(fatherBirthday)'/>
        	<span>母亲生日：</span>
        	<input type="date" class="m-selectbirthday" name='motherBirthday' v-model='motherBirthday'
               @change='change_MotherDate(motherBirthday)'/>
        
    </div>
</template>
<script type="text/javascript">
    export default {
        data(){
            return {
                motherBirthday: '1990-01-01',
                fatherBirthday: '1990-01-01'
            }
        },
        computed: {
            answer(){
                var answer = {};
                answer.motherBirthday = this.motherBirthday;
                answer.fatherBirthday = this.fatherBirthday;
                return answer;
            }
        },
        methods: {
            change_date(fatherBirthday){
                this.fatherBirthday = fatherBirthday;
                if (this.motherBrithdy !== '') {
                    this.$emit('updateUserAnswer', this.answer);
                }
            },
            change_MotherDate(motherBirthday){
                this.motherBrithdy = motherBirthday;
                if (this.fatherBirthday !== '') {
                    this.$emit('updateUserAnswer', this.answer);
                }
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
	span{
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

    }
</style>