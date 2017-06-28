<template>
    <div class='receive'>
         <h3>优惠券绑定介绍</h3>
         <p>是否绑定，什么时候绑定 查看订单详情界面：是否绑定，什么时候绑定 查看订单详情界面</p>
         <p>是否绑定，什么时候绑定 查看订单详情界面：是否绑定，什么时候绑定 查看订单详情界面：是否绑定，什么时候绑定 查看订单详情界面：是否绑定，什么时候绑定 查看订单详情界面：是否绑定，什么时候绑定 查看订单详情界面：是否绑定。</p>
         <p>什么时候绑定 查看订单详情界面：是否绑定，什么时候绑定 查看订单详情界面：是否绑定，什么时候绑定 查看订单详情界面：是否绑定，什么时候绑定 查看订单详情界面：是否绑定，什么时候绑定 查看订单详情界面：是否绑定，什么时候绑定 查看订单详情界面：是否绑定，什么时候绑定 查看订单详情界面：是否绑定，什么时候绑定。</p>
         <div class="viewReport">绑定优惠券</div>
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
	h3{
		font-size: $font18;
		margin: rem(30rem) 0;
		text-align: center;
	}
	p{
		margin: 0 5%;
		font-size: $font14;
		line-height: rem(22rem);
		text-align: justify;
		margin-top: rem(10rem);
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


