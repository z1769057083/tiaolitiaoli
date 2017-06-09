<template>
    <div class="m-selection">
        <div class="m-selecttit1">性别</div>
        <div class="m-selectcon">
            <div class="m-selectboy" :class="{'active': gender == 'M'}" @click="change_active('M',$event)">
            	<img v-show='msgBoyImg' src="../assets/msgman.png"/>
            	<img v-show='!msgBoyImg' src="../assets/msgmanactive.png"/>
            	男
            </div>
            <div class="m-selectgirl" :class="{'active': gender == 'F'}" @click="change_active('F',$event)">
            	<img v-show='msgGrilImg' src="../assets/msgwoman.png"/>
            	<img v-show='!msgGrilImg' src="../assets/msgwomanactive.png"/>
            	我是女生
            </div>
        </div>
        <input type="date" class="m-selectdate" name='birthday' v-model='birthday' @change='change_date(birthday)'/>
    </div>
</template>
<script type="text/javascript">
    export default {
        data(){
            return {
                gender: "F",
                birthday: "2014-01-01",
                msgBoyImg: true,
                msgGrilImg: false
            }
        },
        computed: {
            answer(){
                var answer = {};
                answer.gender = this.gender;
                answer.birthday = this.birthday;
                return answer;
            }
        },
        mounted(){
        },
        methods: {
            change_active(gender) {
            	if(gender=='M'){
            		this.msgBoyImg = false
            		this.msgGrilImg = true
            	}else{
            		this.msgBoyImg = true
            		this.msgGrilImg = false
            	}
                this.gender = gender;
                if (this.birthday !== '') {
                    this.$emit('updateUserAnswer', this.answer);
                }
            },
            change_date(changedBirthday){
                this.birthday = changedBirthday;
                if (this.gender !== '') {
                    this.$emit('updateUserAnswer', this.answer);
                }
            }
        }
    }
</script>
<style lang="scss">
    @import "../common/common.scss";
    /*选择问题内容*/
    .m-selection {
        width: 74.6%;
        margin-left: 12.2%;

    .m-selecttit1 {
        text-align: center;
        font-size: 0.4rem;
        color: #3C3C3C;
        padding: rem(10rem) 0 rem(10rem);
    }

    .m-selectcon {
        width: 100%;
        position: relative;
        height: rem(70rem);
        background: url(../assets/msggrey.png) no-repeat center;
        background-size: cover;
        border-radius: rem(45rem);
        margin-bottom: rem(20rem);

    .m-selectboy {
        width: rem(155rem);
        height: rem(70rem);
        border-radius: rem(45rem);
        text-align: center;
        font-size: rem(14rem);
        color: #b0bfbc;
        overflow: hidden;
        position: absolute;
        left: 0;
        top: 0;

    img {
        width: rem(28rem);
        height: rem(28rem);
        display: block;
        margin: rem(12rem) 0 rem(6rem) rem(63.5rem);
    }
	.msgimgboy{
		display: block;
	}
    }
    .m-selectgirl {
        width: rem(155rem);
        height: rem(70rem);
        border-radius: rem(45rem);
        text-align: center;
        font-size: rem(14rem);
        color: #b0bfbc;
        position: absolute;
        right: 0;
        top: 0;
        overflow: hidden;

    img {
        width: rem(36rem);
        height: rem(28rem);
        display: block;
        margin: rem(12rem) 0 rem(6rem) rem(59rem);

    }

    }
    .active{
        background: #fff;
    }
    }
    .m-selectdate {
        width: 85.6%;
        height: 1.3rem;
        background: url(../assets/msgdate.png) no-repeat center;
        background-size: cover;
        line-height: 1.3rem;
        font-size: 0.37rem;
        padding: 0 7.2%;
        color: #bebaba;
        border-radius: 1.06rem;
        border: 0;
    }

    }
</style>
