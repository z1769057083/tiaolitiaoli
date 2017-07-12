<template>
    <div class="m-selection">
        <div class="m-selectcon">
            <div class="m-selectboy" :class="{'active': gender == 'M'}" @click="change_active('M',$event)">
                <img v-if='msgBoyImg' src="../assets/msgman.png"/>
                <img v-if='!msgBoyImg' src="../assets/msgmanactive.png"/>
                <span v-if='msgBoyImg'>男</span>
                <span class="activeSpan" v-if='!msgBoyImg'>我是男生</span>
            </div>
            <div class="m-selectgirl" :class="{'active': gender == 'F'}" @click="change_active('F',$event)">
                <img v-if='msgGrilImg' src="../assets/msgwoman.png"/>
                <img v-if='!msgGrilImg' src="../assets/msgwomanactive.png"/>
                <span v-if='msgGrilImg'>女</span>
                <span class="activeSpan" v-if='!msgGrilImg'>我是女生</span>
            </div>
        </div>
        <span class="date-tit" @click='upLoad'>出生日期和时辰：</span>
        <div class="date-timer">
        	  <input type="date" min='1900-01-01' :class="{'activeDate': toggle}" class="m-selectdate" name='birthday' v-model='birthday' @change='change_date(birthday)'/>
        <select v-model="time" class="selHour" :class="{'activeHour': toggle1}" @change='change_date1(time)'>
			<option v-for="option in timeArr" :value="option" >
				{{ option}}
			</option>
		</select>
        </div>     
    </div>
</template>
<script type="text/javascript">
    import Common from '../../static/common'
    import Toast from '@/packages/toast'
    import moment from 'moment'
    var arr = ['','00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23']
    export default {
        data(){
            return {
            	timeArr: arr,
                gender: "F",
                birthday: "1990-01-01",
                time:'',
                msgBoyImg: true,
                msgGrilImg: false,
                toggle: false,
                toggle1: false,
                time:'',
                today:''
            }
        },
        computed: {
            answer(){
                var answer = {};
                answer.gender = this.gender;
                answer.birthday = this.birthday+" "+this.time+":00:00";
                answer.isAllFilled=false;
                if(this.gender !== '' && this.birthday !== ''&&this.time!==''){
                	answer.isAllFilled = true;
                }
                return answer;
            },
        },
        methods: {
        	upLoad(){
        		console.log(1)
        		this.$emit('maskUpLoadEvent')
        	},
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
                    this.$emit('updateUserAnswer', this.answer)
                }
            },
            change_date(changedBirthday){ 
            	let  bir = new Date(changedBirthday)
                let  nowYear = new Date()
                if (bir > nowYear) {
                    Toast({
                        message: '您的生日不可以晚于今天',
                        position: 'top',
                        duration:1500
                    })
                    return;
                }
                this.birthday = changedBirthday;
                this.toggle = true
                    global.User.gender = this.answer.gender;
                    global.User.age = Common.getUserAge(this.birthday);
                    global.User.birthday =this.birthday;
                    this.$emit('updateUserAnswer', this.answer);                 
                
            },
            change_date1(time){  
            	this.toggle1 = true
            	this.time = time
            	global.User.gender = this.gender;
                global.User.age = Common.getUserAge(this.birthday);
                global.User.birthday =this.birthday;
        		this.$emit('updateUserAnswer', this.answer);         		
            }
        },
        mounted(){
        	
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
                	color: #bebaba;
                	line-height: rem(20rem);
                }
                .activeSpan{
                	color: #C69B70;
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
                	color: #bebaba;
                	line-height: rem(20rem);
                }
                .activeSpan{
                	color: #C69B70;
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
        .date-timer{
        	position: relative;
        	overflow: hidden;
        	width: 100%;
        	background: #fff;
        	border-radius: 1.06rem;
        	.m-selectdate {
	            width: 45.6%;
	            height: 1.3rem;
	            background: url(../assets/msgdate.png) no-repeat center;
	            background-size: cover;
	            line-height: 1.3rem;
	            font-size: 0.37rem;
	            padding: 0 7.2%;
	            color: #999;
	            border-radius: 1.06rem;
	            border: 0;
	        }
	        .activeDate {
	            color: #000;
	        }
	        .selHour{
	        	position: absolute;
	        	right: 0;
	        	top: 0;
	        	width: 40%;
	        	height: 0.6rem;
	        	overflow: hidden;
	        	margin-top: 0.35rem;
	        	float: right;
	        	border: 0;
	        	border-left: 1px solid #efefef;       	
	    		text-align: center;
	    		padding: 0 16%;
	    		border-radius: 0;
	    		color: #000;
				appearance:none;
				-moz-appearance:none;
				-webkit-appearance:none; 
				background: url(../assets/btnTime.png) no-repeat center;
				background-size: cover;   		
	        }
	        .activeHour{
	        	background: #fff;
	        }
        }
        
    }
</style>
