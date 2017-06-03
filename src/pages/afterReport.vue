<template>
	<div class='afterReport'>
      <!--聊天内容-->
      <div class='after-content'>
      	<div class='i-headbot'>
	        <div class='i-headbottext'>您的先天体质打败了34%的人</div>
	      </div>
	      <div class="r-main">
	      	<div class="r-mainchart" id='chart-container'>
	      		<!--<img src="../assets/reportcharts.png"/>-->
	      	</div>
	      	<div class='i-maincen'>
	        	<div class="r-mreport">
	        		<div class="r-mrcontent">
	        			<h3>先天体质</h3>
	        			<p>水平、火强、土平、金平、水平</p>
	        			<router-link to='/report'>
		        			<div class="right">
		        				<img src="../assets/afterRdetail.png"/>
		        			</div>
	        			</router-link>
	        		</div>
	        		<div class="r-mrcontent">
	        			<h3>后天体质</h3>
	        		    <p class="r-mrconp">相比先天体质，你的后天体质得到改善</p>
	        		    <div class="right" @click='afterReport'>
	        				<img src="../assets/afterRdetail.png"/>
	        			</div>
	        		</div>	
	        	</div>
	        	<div class="r-mseason">
        			<h3>当季体质</h3>
        		    <p class="r-mrconp">
        		    	你所在的城市6月气温升高，空气中湿度增加，体内汗液无法通畅的发散出来，
        		    	人们就会感到胸闷、心悸，精神不振，全身乏力。易出现中暑、腮腺炎、水痘。<br>
        		    	根据你的体质和所在地区基本月武侯，我给你制定了一份你的养生调理方案，请点击查看。<br>
        		    	每两个月根据气候的变化，我会更新你的养生调理方案，你可以通过公众号到时查看，祝你健康！
        		    </p>
        		    <router-link to='/recuperate'>
        		    <img class="r-mrconimg" src="../assets/afterRmy.png"/>
        		    </router-link>
        		</div>	
             </div>
	      </div>
      </div>
      <!--<afterReportDetail ></afterReportDetail>-->
      <!--后天报告详情开始-->
      <div class="reportDetail" v-show='afterReportHidden'>
		<div class="reportDetail-main">
			<div class="top">
				<img src="../assets/afterHou.png"/>
			</div>
			<img class="close" src="../assets/shopcarClose.png" @click='afterReportHidden = !afterReportHidden'/>
			<p>
			你所在的城市6月气温升高，空气中湿度增加，体内汗液无法通畅的发散出来，
	    	人们就会感到胸闷、心悸，精神不振，全身乏力。易出现中暑、腮腺炎、水痘。
	    	<span>根据你的体质和所在地区基本月物侯，我给你制定了一份你的养生调理方案，请点击查看。</span>
	    	每两个月根据气候的变化，我会更新你的养生调理方案，你可以通过公众号到时查看，祝你健康！
			</p>
		</div>
	  </div>
	  <!--后天报告详情结束-->
   </div>
</template>
<script>
import axios from 'axios'
import api from '../api/api'
var Highcharts = require('highcharts');
require('../../static/highcharts-more')(Highcharts);
export default {
  data (){
  	return{
  		list:[],
  		afterReportHidden: false
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
	afterReport(){
		this.afterReportHidden = true
	},
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
            name: '先天体质',
            data: [ 5, 4, 3, 2, 1],
            pointPlacement: 'between'
        }, {
            type: 'area',
            name: '后天体质',
            data: [1, 2, 3, 4, 5]
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
.after-content{
  width: 100%;
  height: 100%;
  position: absolute;
  background: url(../assets/indexbg.png) repeat-y;
  background-size: cover;
  .r-main{
	margin-top: 0.48rem;
	padding-bottom: rem(40rem);
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
	  .r-mreport{
	  	width: 100%;
	  	overflow: hidden;
	  	background: #fff;
	  	padding-top: rem(18rem);
	  	box-shadow: rem(1rem) rem(1rem) rem(1rem) rem(1.5rem) #e2e1df;
	  	margin-top: rem(10rem);
	  	.r-mrcontent{
	  		padding-bottom: rem(10rem);
	  		position: relative;
	  		h3{
		  	  background: url(../assets/rmattribute.png) no-repeat center left;
		  	  padding-left: 3%;
		  	  font-size: $font14;
		  	  color: #c69b70; 	
		  	}
		  	p{
		  		margin:rem(5rem) rem(8rem) 0;
		  		line-height: rem(22rem);
		  		letter-spacing: rem(0.2rem);
		  		border-bottom: 1px solid #ead5ba;
		  		padding-bottom: rem(10rem);
		  	}
		  	.r-mrconp{
		  		border-bottom: 0;
		  		padding-bottom: 0;
		  	}
		  	.right{
		  		width: rem(72rem);
		  		height: rem(28rem);
		  		position: absolute;
		  		right: rem(10rem);
		  		top: rem(8rem);
		  		img{
		  			width: 100%;
		  			height: 100%;
		  		}
		  	}
	  	  }	
	   }
	   .r-mseason{
		   	width: 100%;
		  	background: #fff;
		  	padding: rem(18rem) 0;
		  	box-shadow: rem(1rem) rem(1rem) rem(1rem) rem(1.5rem) #e2e1df;
		  	margin-top: rem(10rem);
		  	position: relative;
		  	h3{
		  	  background: url(../assets/rmattribute.png) no-repeat center left;
		  	  padding-left: 3%;
		  	  font-size: $font14;
		  	  color: #c69b70; 	
		  	}
		  	p{
		  		margin:rem(5rem) rem(8rem) 0;
		  		line-height: rem(22rem);
		  		letter-spacing: rem(0.2rem);
		  		padding-bottom: rem(10rem);
		  	}
		  	.r-mrconimg{
		  		width: rem(150rem);
		  		height: rem(50rem);
		  		position: absolute;
		  		bottom: rem(-25rem);
		  		left: 26%;
		  	}
	   }
	}
  }
}
.reportDetail{
	width: 100%;
	height: 100%;
	background: rgba(0,0,0,0.6);
	position: absolute;
	bottom: 0;
	left: 0;
	top: 0;
	z-index: 99;
	.reportDetail-main{
		width: 74.6%;
		height: rem(340rem);
		background: #fff;
		border-radius: rem(10rem);
		position: absolute;
		top: rem(130rem);
		left: 12.7%; 
		.top{
			position: absolute;
			width: 54%;
			height: rem(54rem);
			top: rem(-16rem);
			left: 23%;
			img{
				width: 100%;
				height: 100%; 
			}
		}
		.close{
			position: absolute;
			width: rem(19rem);
			height: rem(19rem);
			top: rem(10rem);
			right: rem(10rem);
		}
		p{
			margin: rem(48rem) 8% 0;
	  		line-height: rem(22rem);;
	  		padding-bottom: rem(10rem);
	  		font-size: $font14;
	  		color: #505050;
	  		border-bottom: 1px double #f4eade;
	  		span{
	  			display: inline-block;
	  			margin: rem(10rem) 0;
	  		}
		}
	}
}
</style>
