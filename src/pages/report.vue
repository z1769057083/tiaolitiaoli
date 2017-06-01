<template>
	<div class='report'>
      <!--聊天内容-->
      <div class='r-content'>
      	<div class='i-headbot'>
	        <div class='i-headbottext'>您的先天体质打败了34%的人</div>
	      </div>
	      <div class="r-main">
	      	<h3 class='i-maintop'>你的先天体质情况</h3>
	      	<div class="r-mainchart" id='chart-container'>
	      		<!--<img src="../assets/reportcharts.png"/>-->
	      	</div>
	      	<div class='i-maincen'>
	        	<div class="r-mattribute">木平、火强、土平、金平、水平</div>
	        	<div class="r-mreport">
	        		<h3>先天体质</h3>
	        		<p>你所在的城市6月气温升高，空气中湿度增加，体内汗液无法通畅的发散出来，人们就会感到胸闷、心悸，精神不振，全身乏力。易出现中暑、腮腺炎、水痘。</p>
	        	</div>
	        	<img class="i-micon" src="../assets/index.png">
        	</div>
        	<div class="r-msuggest">
	        	如果您成年后生活的城市、生活习惯等改变较大，强烈建议您再测试一下后天体质！
        	</div>
        	<div class="r-mbotbtn">
        	  <router-link to='/message'>
        		<div class="r-mbotleft"><img src="../assets/reportleft.png"/></div>
        	  </router-link>
        	  <router-link to='/shop'>
        		<div class="r-mbotright"><img src="../assets/reportright.png"/></div>
        	  </router-link>
        	</div>
	      </div>
      </div>
   </div>
</template>
<script>
import axios from 'axios'
import api from '../api/api';
var Highcharts = require('highcharts');
require('../../static/highcharts-more')(Highcharts);
export default {
  name: 'report',
  data (){
  	return{
  		list:[]
  	}
  },
  methods:{
//	reportlist(){
//	  	var that = this;
//	  	axios.get(api.generateReportData)
//		  .then(function (res) {
//		  	if(res.data.errorCode == 0){
//		  		res = res.data.returnValue
//		  		that.list = res
//		  		console.log(that.list)
//		  	}
//		  })
//		  .catch(function (error) {
//		    console.log(error)
//		  })
//	},
    loadChart(){
        var chart= new Highcharts.Chart('chart-container', {
            chart: {
            	backgroundColor:'transparent',
                polar: true,
                marginTop:15
            },
            credits:{
                enabled:false // 禁用版权信息
            },
        title: {
            text: '极地图'
        },
        pane: {
            startAngle: 0,
            endAngle: 360
        },
        xAxis: {
            tickInterval: 72,
            min: 0,
            max: 360,
            labels: {
                formatter: function () {
                var textArray=['金','木','水','火','土']
//                  console.log(this)
                    return textArray[this.value/72] ;
                }
            }
        },
        yAxis: {
            min: 0
        },
        plotOptions: {
            series: {
                pointStart: 0,
                pointInterval: 72,
                marker: {
                    radius: 1,  //曲线点半径，默认是4
                    symbol: 'circle' //曲线点类型："circle", "square", "diamond", "triangle","triangle-down"，默认是"circle"
                }
            },
            column: {
                pointPadding: 0,
                groupPadding: 0
            }
        },
        series: [{
            type: 'area',
            name: '先天',
            data: [ 5, 4, 3, 2, 1],
            pointPlacement: 'between'
        }, {
            type: 'area',
            name: '后天',
            data: [1, 2, 3, 4, 5]
        }, {
            type: 'area',
            name: '节气',
            data: [7, 3, 6, 4, 5]
        }]
      });
      var title = {text:null};
      chart.setTitle(title);
    }
  },
  mounted() {
  	document.title="体质报告"
  	this.loadChart()
  	document.documentElement.scrollTop = 0
    document.body.scrollTop =0
//	this.reportlist()
  }
}
</script>
<style scoped lang="scss">
@import "../common/common.scss";
.highcharts-background{
	fill:transparent;
}
.r-content{
  width: 100%;
  height: 100%;
  position: absolute;
  background: url(../assets/indexbg.png) no-repeat;
  background-size: cover;
  .r-main{
	margin-top: 0.48rem;
	.r-mainchart{
		width: 92%;
		height: rem(250rem);
		margin-top: rem(15rem);
		margin-left: 4%;
		overflow: hidden;
	}
	.i-maincen{
	  width: 92%;
	  margin-left: 4%;
	  margin-bottom: rem(14rem);
	  border-top: 1px solid #e5e5e3;
	  padding-top: rem(15rem);
	  .r-mattribute{
		  width: 100%;
		  text-align: center;
		  font-size: $font14;
		  padding-left: 4%;
		  line-height: rem(20rem);
		  color: #c000;
	  }
	  .r-mreport{
	  	width: 100%;
	  	overflow: hidden;
	  	background: #fff;
	  	padding: rem(18rem) 0;
	  	box-shadow: rem(1rem) rem(1rem) rem(1rem) rem(1.5rem) #e2e1df;
	  	margin-top: rem(10rem);
	  	h3{
	  	  background: url(../assets/rmattribute.png) no-repeat center left;
	  	  padding-left: 3%;
	  	  font-size: $font14;
	  	  color: #c69b70; 	
	  	}
	  	p{
	  		margin:rem(5rem) rem(8rem) 0;
	  		line-height: rem(20rem);
	  		letter-spacing: rem(0.2rem);
	  	}
	  }
	  .i-micon{
		  width: 0.96rem;
		  height: 0.48rem;
		  margin-top: rem(18rem);
		  display: block;
		  margin-left: 40%;
	  }
	}
	.r-msuggest{
		width: 84%;
		margin-left: 8%;
		text-align: center;
		font-size: $font12;
		color: #c69b70;
		line-height: rem(21rem);
		letter-spacing: rem(0.4rem);
	}
	.r-mbotbtn{
		width: 84%;
		margin: rem(10rem) 0 0 8%;
		overflow: hidden;
		padding-bottom: rem(10rem);
		.r-mbotleft{
			width: 47.6%;
			height: rem(50rem);
			float: left;
			margin-right: 4.8%;
			img{
				width: 100%;
				height: 100%;
			}
		}
		.r-mbotright{
			width: 47.6%;
			height: rem(50rem);
			float: left;
			img{
				width: 100%;
				height: 100%;
			}
		}
	}
  }
}

</style>
