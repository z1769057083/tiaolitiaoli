<template>
	<div class="main">
		<div class="wrapper">
			<div class="container-fluid">
				<transition name="fade fadeIn">
					<router-view></router-view>
				</transition>
				<div class="wrap-footer"></div>
			</div>
		</div>
		<footer class="site-footer">
	    <span>Copyright © 2017 yueshijue.com</span>
	    <a href="javascript:;" id="backTop" class="back-top">
	      <i class="fa fa-angle-up"></i>
	    </a>
	  </footer>
	</div>
</template>
<style scoped>
	.main {
	position: absolute;
    top: 60px;
    left: 240px;
    right: 0;
    height: calc(100% - 60px);
    
	}
	.main .wrapper {
    min-height: 100%;
    height: auto !important;
    height: 100%;
    margin-bottom: -40px;
    background: #f0f3f4;
  }
  .container-fluid {
    margin-right: auto;
    margin-left: auto;
    padding: 20px;
  }
  .container-fluid:after,
  .container-fluid:before {
  	display: table;
  	content: '';
  }
  .container-fluid:after {
  	clear: both;
  }
  .wrap-footer {
		height: 40px;
	}
	.site-footer {
    position: relative;
    padding: 11px 0;
    text-align: center;
    color: #fff;
    background: #5b6e84;
	}
	.back-top {
	  float: right;
	  width: 20px;
	  height: 20px;
	  margin-right: 1%;
	  color: #72d0eb;
	  background: rgba(127, 221, 248, .5);
	  border-radius: 50%;
	  
	}
	.back-top i {
			color: #2A3542;
		}
</style>
