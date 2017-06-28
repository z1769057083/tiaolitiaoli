<template>
    <div class='receive'>
         <h3>我的订单流程</h3>
         <p><span>2017-08-08:12:00:00</span><br />1.您的付款成功，7个工作日之内货物到达</p>
         <p><span>2017-08-08:12:00:00</span><br />2.您已绑定条形码</p>
         <p><span>2017-08-08:12:00:00</span><br />3.正在为您进行基因检测</p>
         <p><span>2017-08-08:12:00:00</span><br />4.您的报告正在生成中</p>
         <p><span>2017-08-08:12:00:00</span><br />5.点击下面按钮可以查看您的基因检测报告</p>
         <div class="viewReport">查看报告</div>
    </div>
</template>
<script>
    import axios from 'axios'
    import api from '../api/api'
    export default {
        data() {
            return {
				
            }
        },
        methods: {

        },
        mounted() {
            document.title = "调理调理"
        }
    }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
    @import "../common/common.scss";
.receive{
	width: 100%;
	height: 100%;
	position: absolute;
	overflow: hidden;
	background: url(../assets/indexbg.jpg) no-repeat;
    background-size: 100% 100%;
	h3{
		font-size: $font18;
		margin: rem(50rem) 0 rem(20rem) 5%;
	}
	p{
		line-height: rem(20rem);
		font-size: $font16;
		margin-top: rem(20rem);
		color: #999;
		margin-left: 5%;
		span{
			font-size: $font12;
			margin-left: 4%;
		}
	}
	.viewReport{
		width: 25%;
		height: rem(35rem);
		background: #F08300;
		color: #fff;
		text-align: center;
		line-height: rem(35rem);
		font-size: $font14;
		margin-left: 37.5%;
		margin-top: rem(40rem);
	}
}
</style>



