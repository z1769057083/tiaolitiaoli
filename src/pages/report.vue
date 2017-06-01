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
                    <div class="r-mattribute">{{wuXingStatusText}}</div>
                    <img class="i-micon" src="../assets/index.png">
                </div>
                <div class="r-msuggest">
                    {{wuXingReportContent}}
                </div>
                <div class="r-mbotbtn">
                    <router-link to='/message?questionSection=houTian'>
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
            return {
                wuXingReportContent: '',
                wuXingStatusText: '',
                list: []
            }
        },
        methods: {
            renderReport(){
                var report = JSON.parse(localStorage.getItem(XianTianReport_Index));
                var wuXingArray = [];
                for (let key in report.wuXing) {
                    if (report.wuXing[key] <= 0) {
                        wuXingArray.push(0.1);
                    } else {
                        wuXingArray.push(report.wuXing[key]);
                    }
                }
                this.wuXingStatusText = '';
                var itemArray = [{
                    type: 'area',
                    name: '先天',
                    data: wuXingArray,
                    pointPlacement: 'between'
                }];
                this.loadChart(itemArray);
                var wuXingTextMapper = {
                    'gold': '金',
                    'wood': '木',
                    'water': '水',
                    'fire': '火',
                    'earth': '土',
                }
                for (let key in report.wuXingLevel) {
                    this.wuXingStatusText += wuXingTextMapper[key];
                    if (report.wuXingLevel[key] == 0) {
                        this.wuXingStatusText += '弱';
                    }
                    else {
                        this.wuXingStatusText += '强';
                    }
                    this.wuXingStatusText += ','
                }
                var wuXingReportContentText = '';
                if (typeof (report.report) != 'undefined' && report.report != '') {
                    for (let index = 0; index < report.report.length; index++) {
                        wuXingReportContentText += report.report[index].content;
                        wuXingReportContentText += report.report[index].illness;
                        //TOOD:check the user's gender and age info.
                        wuXingReportContentText += report.report[index].male;
                        wuXingReportContentText += report.report[index].female;
                        wuXingReportContentText += report.report[index].child;
                    }
                    this.wuXingReportContent = wuXingReportContentText;
                }
            },
            loadChart(items){
//        [{
//            type: 'area',
//            name: '先天',
//            data: [ 5, 4, 3, 2, 1],
//            pointPlacement: 'between'
//        }, {
//            type: 'area',
//            name: '后天',
//            data: [1, 2, 3, 4, 5]
//        }, {
//            type: 'area',
//            name: '节气',
//            data: [7, 3, 6, 4, 5]
//        }]
                var chart = new Highcharts.Chart('chart-container', {
                    chart: {
                        backgroundColor: 'transparent',
                        polar: true,
                        marginTop: 15
                    },
                    credits: {
                        enabled: false // 禁用版权信息
                    },
                    title: {
                        text: null
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
                                var textArray = ['金', '木', '水', '火', '土']
                                return textArray[this.value / 72];
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
                    series: items
                });
            }
        },
        mounted() {
            document.title = "体质报告"
            this.renderReport()
            document.documentElement.scrollTop = 0
            document.body.scrollTop = 0
        }
    }
</script>
<style scoped lang="scss">
    @import "../common/common.scss";

    .highcharts-background {
        fill: transparent;
    }

    .r-content {
        width: 100%;
        height: 100%;
        position: absolute;
        background: url(../assets/indexbg.png) no-repeat;
        background-size: cover;

    .r-main {
        margin-top: 0.48rem;

    .r-mainchart {
        width: 92%;
        height: rem(250rem);
        margin-top: rem(15rem);
        margin-left: 4%;
        overflow: hidden;
    }

    .i-maincen {
        width: 56%;
        margin-left: 22%;
        margin-bottom: rem(14rem);
        border-top: 1px solid #e5e5e3;
        padding-top: rem(15rem);

    .r-mattribute {
        width: 100%;
        text-align: center;
        font-size: $font14;
        background: url(../assets/rmattribute.png) no-repeat left;
        padding-left: 4%;
        line-height: rem(20rem);
        color: #c000;
    }

    .i-micon {
        width: 0.96rem;
        height: 0.48rem;
        margin-top: rem(18rem);
        display: block;
        margin-left: 40%;
    }

    }
    .r-msuggest {
        width: 84%;
        margin-left: 8%;
        text-align: center;
        font-size: $font12;
        color: #c69b70;
        line-height: rem(21rem);
        letter-spacing: rem(0.4rem);
    }

    .r-mbotbtn {
        width: 84%;
        margin: rem(30rem) 0 0 8%;
        overflow: hidden;
        padding-bottom: rem(30rem);

    .r-mbotleft {
        width: 47.6%;
        height: rem(50rem);
        float: left;
        margin-right: 4.8%;

    img {
        width: 100%;
        height: 100%;
    }

    }
    .r-mbotright {
        width: 47.6%;
        height: rem(50rem);
        float: left;

    img {
        width: 100%;
        height: 100%;
    }

    }
    }
    }
    }

</style>
