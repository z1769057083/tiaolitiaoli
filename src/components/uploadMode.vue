<template>
	<div class="upload-main">
		<div class="upload-mtop">
			<h3>请选择上传方式</h3>
			<div class="upload-mcon">
				<dl>
					<dt><img src="../assets/mupload.png" alt="" /></dt>
					<dd>拍照</dd>
				</dl>
				<dl class="upload-mright">
					<dt><img src="../assets/mupload2.png" alt="" /></dt>
					<dd>相册</dd>
				</dl>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
export default {
   data(){
	  	return {     
	    }
	},
	methods:{  	
	}
}
</script>
<style lang="scss" rel="stylesheet/scss">
@import "../common/common.scss";
/*选择问题内容*/
.upload-main{
	width: 100%;
	height: 100%;
	position: absolute;
	background: rgba(0,0,0,.5);
	bottom: 0;
	left: 0;
	top: 0;
	z-index: 99;
	.upload-mtop{
		width: 74.4%;
		height: rem(225rem);
		background: #fff;
		border-radius: rem(5rem);
		position: absolute;
		left: 12.8%;
		top: 28%; 
		h3{
			font-size: $font16;
			text-align: center;
			line-height: rem(40rem);
			border-bottom: 1px solid #EFEFEF; 
		}
		.upload-mcon{
			width: 65%;
			margin-left: 17.5%;
			height: rem(76rem);
			margin-top: rem(43rem);
			dl{
				width: 27%;
				height: rem(76rem);
				float: left;
				dt{
					width: 100%;
					height: rem(42rem);
					img{
						width: 100%;
						height: 100%;
					}
				}
				dd{
					text-align: center;
					margin-top: rem(18rem);
					color: #9a9a9a;
				}
			}
			.upload-mright{
				float: right;
			}
		}
	}
}
</style>