<template>
	<div class="m-selectfacon">
	  	<div class="m-selectseason">
	  		<dl>
	  			<dt>最近出现情况:</dt>
	  			<dd>
	  				<p>经常腹泻</p>
	  				<p>入眠困难</p>
	  				<p>肠胃不好</p>
	  				<p>睡觉易醒</p>
	  				<p>心慌</p>
	  				<p>全身无力</p>
	  				<p>便秘</p>
	  				<p>食欲不振</p>
	  				<p class="m-selectulcer">持续口腔溃疡</p>
	  				<p>痛经</p>
	  				<p>经期紊乱</p>
	  				<p>无</p>
	  			</dd>
	  		</dl>
	  	</div>
	</div>
</template>
<script type="text/javascript">
export default {
  data(){
  	return {
    }
  }
}
</script>
<style lang="scss">
@import "../common/common.scss";
	/*选择问题内容*/
	.m-selectfacon{
		width: 90%;
		margin-left: 5%;
		.m-selectseason{
			width: 100%;
			overflow: hidden;
			dl{
				width: 100%;
				border-bottom: 1px solid #e3e3e3;
				overflow: hidden;
				padding-bottom: rem(14rem);
				dt{
					width: 100%;
					line-height: rem(36rem);
				}
				dd{
					width: 100%;
					float: left;
					line-height: rem(44rem);
					p{
						display: block;
						width: 22%;
						float: left;
						height: rem(24rem);
						background: #fff;
						margin-top: rem(10rem);
						border-radius: rem(10rem);
						line-height: rem(24rem);
						text-align: center;
						margin-right: 4%;
					}
					p:nth-child(4n){
						margin-right: 0;
					}
					.m-selectulcer{
						width: 40%;
						
					}
				}
			}
		}
	}
</style>