
module.exports = {
    loadChart(element,items){
        let chart = new Highcharts.Chart(element, {
            chart: {
                backgroundColor: 'transparent',
                polar: true,
                marginTop: 15
            },
            colors: [ '#eee5d7', '#e2c8a8','#d8b688'],
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
                        let textArray = ['金', '木', '水', '火', '土']
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
            tooltip:{
                formatter: function () {
                    var textArray = ['金', '木', '水', '火', '土'];
                    var text= textArray[this.x / 72];
                    return ' <b>' +this.series.name  +
                        '</b> : '+text +' '+ this.y ;
                },
            },
            series: items
        });
    }
}
