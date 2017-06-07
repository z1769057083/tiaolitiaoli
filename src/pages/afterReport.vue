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
						{{wuXingStatusText}}<br>
						{{wuXingReportContent}}
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
import ReportHelper from '../../static/reportHelper';
import Common from '../../static/common';
export default {
  data (){
  	return{
  		list:[],
        wuXingReportContent: '',
        wuXingStatusText: '',
  		afterReportHidden: false
  	}
  },
  methods:{
      renderReport(report){
//          let report = JSON.parse(localStorage.getItem(HouTianReport_Index));
          let wuXingXianTianArray = Common.parseWuXingToArray(report.wuXingXianTian);
          let wuXingHouTianArray = Common.parseWuXingToArray(report.wuXingHouTian);
          let wuXingDangshiArray = Common.parseWuXingToArray(report.wuXingDangShi);
          var items=  [{
              type: 'area',
              name: '先天体质',
              data: wuXingXianTianArray
          }, {
              type: 'area',
              name: '后天体质',
              data: wuXingHouTianArray
          },{
              type: 'area',
              name: '节令体质',
              data: wuXingDangshiArray
          }]
          ReportHelper.loadChart('chart-container',items)

          this.wuXingStatusText=Common.parseWuXingLevelToText(report.wuXingLevel);
          let wuXingReportContentText = '';
          if (typeof (report.report) != 'undefined' && report.report != '') {
              for (let index = 0; index < report.report.length; index++) {
                  if(report.report[index].content)
                      wuXingReportContentText += report.report[index].content;
                  if(report.report[index].illness)
                      wuXingReportContentText += report.report[index].illness;
                  //TODO:check the user's gender and age info.
                  if(report.report[index].male)
                      wuXingReportContentText += report.report[index].male;
                  if(report.report[index].female)
                      wuXingReportContentText += report.report[index].female;
                  if(report.report[index].child)
                      wuXingReportContentText += report.report[index].child;
              }
              this.wuXingReportContent = wuXingReportContentText;
          }
      },
      afterReport(){
          this.afterReportHidden = true
      }
  },
  mounted() {
	  document.title="体质报告"
      let that=this
	  let userId=JSON.parse(localStorage.getItem(Account_Index))._id
      axios.get(api.getReport+"?userId="+userId+"&reportType=houTian")
          .then(function (res) {
              if (res.data.errorCode == 0) {
                  let report = res.data.returnValue;
				  that.renderReport(report)
              }
          })
	  document.documentElement.scrollTop = 0
	  document.body.scrollTop =0
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
		  		text-justify: inter-ideograph;
                text-align: justify;
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
