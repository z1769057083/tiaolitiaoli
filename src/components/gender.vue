<template>
    <div class="m-selection">
        <div class="m-selectcon">
            <div class="m-selectboy" :class="{'active': gender == 'M'}" @click="change_active('M',$event)">
                <img v-show='msgBoyImg' src="../assets/msgman.png"/>
                <img v-show='!msgBoyImg' src="../assets/msgmanactive.png"/>
                <span v-show='msgBoyImg'>男</span>
                <span v-show='!msgBoyImg'>我是男生</span>
            </div>
            <div class="m-selectgirl" :class="{'active': gender == 'F'}" @click="change_active('F',$event)">
                <img v-show='msgGrilImg' src="../assets/msgwoman.png"/>
                <img v-show='!msgGrilImg' src="../assets/msgwomanactive.png"/>
                <span v-show='msgGrilImg'>女</span>
                <span v-show='!msgGrilImg'>我是女生</span>
            </div>
        </div>
        <span class="date-tit">出生日期和时间：</span>
        <input type="date" min='1900-01-01' class="m-selectdate" name='birthday' v-model='birthday' @change='change_date(birthday)'/>
        <select v-model="time" id="selProv" @change='change_date1(time)'>
			<option v-for="option in timeArr" :value="option" >
				{{ option}}
			</option>
		</select>
    </div>
</template>
<script type="text/javascript">
    import Common from '../../static/common'
    import Toast from '@/packages/toast'
    var arr = ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23']
    export default {
        data(){
            return {
            	timeArr: arr,
                gender: "F",
                birthday: "",
                time:'',
                msgBoyImg: true,
                msgGrilImg: false,
                toggle: false,
                time:'12'
            }
        },
        computed: {
            answer(){
                var answer = {};
                answer.gender = this.gender;
                answer.time = this.time
                answer.birthday = this.birthday+" "+this.time+":00:00";
                if(this.gender !== '' && this.birthday !== ''){
                	answer.isAllFilled = true;
                }
                return answer;
            }
        },
        methods: {
            change_active(gender) {
                if (gender == 'M') {
                    this.msgBoyImg = false
                    this.msgGrilImg = true
                } else {
                    this.msgBoyImg = true
                    this.msgGrilImg = false
                }
                this.gender = gender;
                if (this.birthday !== '') {
                    global.User.gender = this.answer.gender;
                    global.User.age = Common.getUserAge(this.birthday);
                    global.User.birthday = this.birthday;
                    this.$emit('updateUserAnswer', this.answer);
                }
            },
            change_date(changedBirthday){ 
            	let  bir = new Date(changedBirthday)
                let  nowYear = new Date()
                if (bir > nowYear) {
                    Toast({
                        message: '你的生日不可以晚于今天',
                        position: 'top',
                        duration:1500
                    })
                    return;
                }
                this.birthday = changedBirthday;
                this.toggle = true
                if (this.gender !== '') {
                    global.User.gender = this.answer.gender;
                    global.User.age = Common.getUserAge(this.birthday);
                    global.User.birthday =this.birthday;
                    this.$emit('updateUserAnswer', this.answer);                 
                }
            },
            concat(birthday,hour){
            	return birthday +" : "+hour+":00:00";
            },
            change_date1(time){
            	this.time = time
        		global.User.time = this.answer.time;
        		this.$emit('updateUserAnswer', this.answer);    
            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    @import "../common/common.scss";
    /*选择问题内容*/
    .m-selection {
        width: 74.6%;
        margin-left: 12.2%;
        .m-selecttit1 {
            text-align: center;
            font-size: 0.4rem;
            color: #3C3C3C;
            padding: rem(20rem) 0 rem(20rem);
        }
        .m-selectcon {
            width: 100%;
            position: relative;
            height: rem(70rem);
            background: url(../assets/msggrey.png) no-repeat center;
            background-size: cover;
            border-radius: rem(45rem);
            margin-bottom: rem(20rem);
			margin-top: rem(40rem);
            .m-selectboy {
                width: rem(155rem);
                height: rem(70rem);
                border-radius: rem(45rem);
                text-align: center;
                font-size: rem(14rem);
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
                span{
                	color: #999;
                }
                .msgimgboy {
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
                span{
                	color: #999;
                }

            }
            .active {
                background: #fff;
            }
        }
        .date-tit{
        	color: $c3c3c;
            font-size: $font14;
            display: inline-block;
            padding-bottom: rem(15rem);
        }
        .m-selectdate {
            width: 65.6%;
            height: 1.3rem;
            background: url(../assets/msgdate.png) no-repeat center;
            background-size: cover;
            line-height: 1.3rem;
            font-size: 0.37rem;
            padding: 0 7.2%;
            color: #000;
            border-radius: 1.06rem;
            border: 0;
        }
        #selProv{
        	width: 20%;
        	height: 1.3rem;
        	overflow: hidden;
        	float: right;
        	border-radius: 1.06rem;
        	border: 1px solid #DEDEDE;       	
    		text-align: center;
    		padding: 0 7%;
    		color: #000;
    		background: transparent;
			appearance:none;
			-moz-appearance:none;
			-webkit-appearance:none;    		
        }
    }
</style>
