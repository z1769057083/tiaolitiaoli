<template>
    <div class="m-selection">
        <span>父亲生日和小时：</span>
        <div class="date-time">
        	<input type="date" :class="{'activeDate': toggle}" class="m-selectbirthday" name='fatherBirthday'
               v-model='fatherBirthday' min="1901-01-01"
               @change='change_date(fatherBirthday)'/>
       	<select v-model="fatherHour" class="selHour" :class="{'activeHour': toggle2}" @change='change_date1(fatherHour)'>
			<option v-for="fItem in timeArr" :value="fItem" >
				{{ fItem}}
			</option>
		</select>
        </div>        
        <span>母亲生日和小时：</span>
        <div class="date-time">
        	<input type="date" :class="{'activeDate': toggle1}" class="m-selectbirthday" name='motherBirthday'
               v-model='motherBirthday'  min="1901-01-01"
               @change='change_MotherDate(motherBirthday)'/>
		<select v-model="motherHour" class="selHour" :class="{'activeHour': toggle3}" @change='change_date2(motherHour)'>
			<option v-for="mItem in timeArr" :value="mItem" >
				{{ mItem}}
			</option>
		</select>
        </div>       
    </div>
</template>
<script type="text/javascript">
    import Toast from '@/packages/toast'
    var arr = ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23']
    export default {
        data(){
            return {
            	timeArr: arr,
                motherBirthday: '1990-01-01',
                fatherBirthday: '1990-01-01',
                toggle: false,
                toggle1: false,
                toggle2: false,
                toggle3: false,
                fatherHour:'',
                motherHour:''
            }
        },
        computed: {
            answer(){
                var answer = {};
                answer.motherHour = this.motherHour
                answer.fatherHour = this.fatherHour
                answer.motherBirthday = this.motherBirthday+" "+this.motherHour+":00:00";
                answer.fatherBirthday = this.fatherBirthday+" "+this.fatherHour+":00:00";
                answer.isAllFilled = false;
                if (this.motherBirthday !== '' &&
                    this.fatherBirthday !== '' &&
                    new Date(this.fatherBirthday) < new Date(global.User.birthday) &&
                    new Date(this.fatherBirthday) > new Date('1901-01-01') &&
                    new Date(this.motherBirthday) > new Date('1901-01-01') &&
                    new Date(this.motherBirthday) < new Date(global.User.birthday)&&this.motherHour!==''&&this.fatherHour!=='') {
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
                
            },
            change_date1(fatherHour){
            	this.toggle2 = true
            	this.fatherHour = fatherHour         
        		global.User.fatherHour = this.answer.fatherHour;
        		this.$emit('updateUserAnswer', this.answer);    
            },
            change_date2(motherHour){
            	this.toggle3 = true
            	this.motherHour = motherHour
        		global.User.motherHour = this.answer.motherHour;
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
        .date-time{
        	position: relative;
        	overflow: hidden;
        	width: 100%;
        	background: #fff;
        	border-radius: 1.06rem;
        	margin-bottom: rem(30rem);
        	.m-selectbirthday {
	            width: 44%;
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
	        	border-left: 0.05px solid #efefef;       	
	    		text-align: center;
	    		padding: 0 14%;
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