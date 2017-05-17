<template>
	<div class='message'>
      <!--聊天内容-->
      <div class='m-char'>
      	<div class="m-chartime"><span></span><p>2016-01-14 12:33</p><span></span></div>
	      	<div class="m-chardocter">
	      		<div class="m-charperson"><img src="../assets/indexheadportrait.png"/></div>
	      		<div class="m-charcont">您好！欢迎使用体质辨析，了解自己的体质可以更有针对性的养生和调理！</div>
	      	</div>
	      	<div class="m-chardocter">
	      		<div class="m-charperson"><img src="../assets/indexheadportrait.png"/></div>
	      		<div class="m-charcont">我需要知道你的性别和生日。{{title}}</div>
	      	</div>
	      	<div class="m-charcustom">
	      		<div class="m-charperson"><img src="../assets/indexheadportrait.png"/></div>
	      		<div class="m-charcont">人家是女生！</div>
	      	</div>
      </div>
      <!--选择问题内容-->
      <div class="m-select">
      	<div class="m-selecttit">性别</div>
      	<div class="m-selectcon">
      		<div class="m-selectman" :class="{'active': active == 0}" @click="change_active(0,$event)"><img src="../assets/msgman.png"/>男</div>
      		<div class="m-selectman" :class="{'active': active == 1}" @click="change_active(1,$event)"><img src="../assets/msgwoman.png"/>我是女生</div>	
      	</div>
      	<div class="m-selecttit">出生日期</div>
      	<div class="m-selectdate">年/月/日</div>
      	<router-link to='/report'>
      		<button class="submit">确定</button>
        </router-link>
      </div>
   </div>
</template>
<script>
export default {
  name: 'message',
  data(){
  	return {
      active: 0,
      title:''
    }
  },
  methods:{
  	change_active(num, event) {
      this.active = num;
    }
  },
  mounted() {
   this.change_active(0);
   this.title = this.$router.currentRoute.params.title; 
  }
}
</script>
<style scoped>
body,html{
	width: 100%;
	height: 100%;
	overflow: hidden;
}
.message{
	background: #f8f8f8;
	width: 100%;
	height: 100%;
}
/*聊天内容*/
.m-char{
	width: 100%;
	height: 9rem;
	border-bottom: 0.05px solid #dab589;
	background: #f2f2f2;
}
.m-chartime{
	width: 86%;
	height: 0.8rem;
	margin-left: 7%;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #aeaeae;
	padding: 0.3rem 0;
}
.m-chartime p{
	font-size: 0.32rem;
	width: 44%;
	text-align: center;
}
.m-chartime span{
	width: 33%;
	height: 0.03rem;
	display: block;
	background: url(../assets/indexline.png) no-repeat center;
}
.m-chardocter{
	width: 78%;
	margin-left: 7%;
	overflow: hidden;
	display: flex;
	margin-bottom: 0.42rem;
}
.m-charcustom{
	width: 78%;
	margin-right: 7%;
	overflow: hidden;
	margin-bottom: 0.42rem;
	float: right;
}
.m-charperson{
	width: 1.07rem;
	height: 1.07rem;
	float: right;
}
.m-charperson img{
	width: 1.07rem;
	height: 1.07rem;
}
.m-charcont{
	color: #3c3c3c;
	background: #fff;
	line-height: 0.56rem;
	font-size: 0.43rem;
	padding: 0.21rem 0.32rem;
	border-radius: 0.15rem;
	letter-spacing: 0.01rem;
	float: right;
}
/*选择问题内容*/
.m-select{
	width: 74.6%;
	margin-left: 12.2%;
}
.m-selecttit{
	text-align: center;
	font-size: 0.4rem;
	color: #3C3C3C;
	margin: 0.53rem 0.32rem;
}
.m-selectcon{
	width: 100%;
	position: relative;
	height: 1.78rem;
	background: url(../assets/msggrey.png) no-repeat center;
	display: flex;
	border-radius: 1.06rem;
}
.m-selectman{
	width: 4.2rem;
	border-radius: 1.06rem;
	padding-top: 0.32rem;
	text-align: center;
	font-size: 0.36rem;
	color: #b0bfbc;
}
.active{
	background: #fff;
	width: 4.8rem;
}
.m-selectman img{
	width: 0.80rem;
	height: 0.80rem;
	display: block;
	margin-left: 1.4rem;
	margin-bottom: 0.24rem;
}
.m-selectdate{
	width: 92.8%;
	height: 1.3rem;
	background: url(../assets/msgdate.png) no-repeat center;
	line-height: 1.3rem;
	font-size: 0.37rem;
	padding-left: 7.2%;
	color: #bebaba;
	border-radius: 1.06rem;
}
.submit{
	width: 2.72rem;
	height: 1.06rem;
	background: #c69b70;
	border: 0;
	color: #fff;
	border-radius: 0.13rem;
	font-size: 0.37rem;
	text-align: center;
	line-height: 1.06rem;
	margin-top: 0.53rem;
	margin-left: 32%;
}
</style>
