<template>
	<div class="m-afterCrescent">
	  	<h3>上传月牙白图片</h3>
	  	<div class="m-crescent">
	  		<div class="m-picture" @click='uploadPic'>
	  			<img src="../assets/mafterCrescent.png"/>
	  		</div>
	  		<div class="m-remove">
	  			<img src="../assets/mafterRemove.png"/>
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
		uploadPic(){
			this.$emit('uploadModeEvent')
		}
	}
}
</script>
<style lang="scss">
@import "../common/common.scss";
/*选择问题内容*/
.m-afterCrescent{
	width: 90%;
	margin-left: 5%;
	overflow: hidden;
	h3{
		text-align: center;
		margin-top: rem(13rem);
		margin-bottom: rem(48rem);
		font-size: $font14;
	}
	.m-crescent{
		width: 26%;
		height: rem(132rem);
		margin-left: 36%;
		overflow: hidden;
		.m-picture{
			width: 100%;
			height: rem(88rem);
			margin-bottom: rem(15rem);
			img{
				width: 100%;
				height: 100%;
			}
		}
		.m-remove{
			width: 23%;
			height: rem(29rem);
			margin-left: 38.5%;
			img{
				width: 100%;
				height: 100%;
			}
		}
	}
}	
</style>