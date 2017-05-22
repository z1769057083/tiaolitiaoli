<template>
  <div class='articledetail'> 
    <!--主题部分-->
	<div class="a-detailmain">
		<h3 class="a-dtitle">《黄帝内经》揭秘:正常的脉象是啥样的？</h3>
		<div class="a-dtime">2017.05.22<span>羊毛</span></div>
		<p class="a-dcontent">
			
		</p>
	</div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'articledetail',
  data(){
  	return {
    }
  },
  methods: {
  },
  mounted() {
  }
}
</script>
<style scoped lang="scss">
	@import "../common/common.scss";
.articledetail{
	width: 100%;
	overflow: hidden;
	background: #f6f6f6;
	.a-detailmain{
		width: 92%;
		overflow: hidden;
		background: #fff;
		margin-left: 4%;
		.a-dtitle{
			
		}
	}
}
</style>