<template>
    <div class='receive'>
         <h3>绑定条形码</h3>
         <div class="address-main">	
				<div class="address-mcon">
					<dl>
						<dt>姓名</dt>
						<dd>
							<input type="text" placeholder="姓名" name='name'/>
						</dd>
					</dl>
					<dl>
						<dt>性别</dt>
						<dd>
							<input class="gender" type="radio" name="lick"/>男
							<input class="gender gender1" type="radio" name="lick"/>女
						</dd>
					</dl>
					<dl>
						<dt>出生日期</dt>
						<dd>
							<input type="date" min='1900-01-01' :class="{'activeDate': toggle}" class="m-selectdate" name='birthday' v-model='birthday' @change='change_date(birthday)'/>
						</dd>
					</dl>
					<dl>
						<dt>条形码编号</dt>
						<dd>
							<input type="number" placeholder="条形码编号"  name='postCode'/>
						</dd>
					</dl>
					<div class="address-btn">保存</div>
				</div>
			</div>
    </div>
</template>
<script>
    import axios from 'axios'
    import api from '../api/api'
    export default {
        data() {
            return {
				birthday: "1990-01-01"
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
			text-align: center;
			margin: rem(50rem) 0 rem(50rem);
		}
		.myCode{
			width: 40%;
			height: rem(40rem);
			border: 1px solid #00A0E9;
			float: left;
			margin-left: 6.6%;
		}
		.address-main{
			background:#fff;
			width: 100%;			
			.address-mcon{
				width: 94%;
				padding: 0 3%;
				dl{
					border-bottom: 1px solid #efefef;
					height: rem(50rem);
					width: 100%;
					font-size: $font14;
					dt{
						width: 20%;
						float: left;
						line-height: rem(50rem);
					}
					dd{
						width: 76%;
						float: right;
						margin-top: rem(14rem);
						input{
							width: 100%;
							border: 0;
						}
						.gender{
							width: rem(12rem);
							height: rem(12rem); 
							margin-right: 3%;	
							vertical-align: middle;						
						}
						.gender1{							
							margin-left: 10%;							
						}
					}
					.selectAddress{
						margin-top: rem(12rem);
						overflow: hidden;
					}
				}
				.address-btn{
					width: 100%;
					height: rem(40rem);
					text-align: center;
					line-height: rem(40rem);
					font-size: $font16;
					border-radius: rem(5rem) ;
					background: #DEA726;
					color: #fff;
					margin-bottom: rem(10rem);
					margin-top: rem(24rem);
				}
			}	
		}
	}
</style>


