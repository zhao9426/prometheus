<template>
    <div ref="charts" class="charts">

    </div>
</template>
<script>
import echarts  from "echarts"; 

export default{
  name: "graph",
  data() {
    return {
        data: [],
        date: [],
        myEcharts: null, //实例
        option: {
               tooltip: {
                    trigger: 'axis',
                    position: function (pt) {
                        return [pt[0], '10%'];
                    }
                },
                title: {
                    left: 'center',
                    text: '大数据量面积图',
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    dataMax: 700,
                    data: []
                },
                yAxis: {
                    name: "实时在线人数",
                    type: 'value',
                    boundaryGap: [0, '100%']
                },
                dataZoom: [{
                    type: 'inside',
                    start: 0,
                    end: 10
                }, {
                    start: 0,
                    end: 10,
                    handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                    handleSize: '80%',
                    handleStyle: {
                        color: '#fff',
                        shadowBlur: 3,
                        shadowColor: 'rgba(0, 0, 0, 0.6)',
                        shadowOffsetX: 2,
                        shadowOffsetY: 2
                    }
                }],
                series: [
                    {
                        name:'数据',
                        type:'line',
                        smooth:true,
                        symbol: 'none',
                        sampling: 'average',
                        itemStyle: {
                            color: 'rgb(255, 70, 131)'
                        },
                        areaStyle: {
                            color: "#fff"
                        },
                        data: []
                    }
                ]
                }
    }
},
created() {
  this.getData()
},
mounted() {
  this.draw();
},

methods: {
    getData() { 
        var base = +new Date(1969, 6, 24);
        var oneDay = 24 * 3600 * 1000;
        var date = [];
        var data = [Math.random() * 300];

        for (var i = 1; i < 20000; i++) {
            var now = new Date(base += oneDay);
            date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
            data.push(Math.round((Math.random()-0.5)*20 + data[i - 1]));
        }
        return {
            data, 
            date
        }
    },
    draw(){
        let {data, date} = this.getData();
        this.data = data;
        this.date = date;
        this.option.xAxis.data = date;
        this.option.series[0].data = data
        this.myEcharts = echarts.init(this.$refs.charts)
        this.myEcharts.setOption(this.option)
        const self = this
        window.addEventListener('resize', function() {
            self.myEcharts.resize()
        })
    }
  }       
}
</script>
<style>
.charts {
    height: 400px;
    width: 100%;
}
</style>


