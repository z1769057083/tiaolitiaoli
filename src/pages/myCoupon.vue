<template>
	<div class='receive'>
         <h3>我的优惠券</h3>
         <div class="myCode">wfewfergeg</div>
         <div class="viewReport">立即使用</div>
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
	.myCode{
		width: 40%;
		height: rem(40rem);
		border: 1px solid #00A0E9;
		float: left;
		margin-left: 6.6%;
	}
	.viewReport{
		width: 25%;
		height: rem(35rem);
		background: #F08300;
		color: #fff;
		float: left;
		text-align: center;
		line-height: rem(35rem);
		font-size: $font14;
		margin-top: rem(2.5rem);
		margin-left: 4%;
	}
	
}
</style>

