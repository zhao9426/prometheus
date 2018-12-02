<template>
    <div ref="charts2" class="charts">
    </div>
</template>
<script>
import echarts  from "echarts"; 

export default{
  name: "graph2",
  data() {
    return {
        data: [],
        date: [],
        myEcharts: null, //实例
        option: {
            xAxis: {
                type: 'category',
                data: []
            },
        yAxis: {
            type: 'value'
            },
        series: [{
                data: [],
                type: 'line',
                smooth: true
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
       var base = +new Date(2018, 1, 1);
        var oneDay = 24 * 3600 * 1000;
        var date = [];
        var data = [Math.random() * 1000];

        for (var i = 1; i < 20; i++) {
            var now = new Date(base += oneDay*30);
            date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
            data.push(Math.floor((Math.random()+4) * 1000));
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
        this.myEcharts = echarts.init(this.$refs.charts2)
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


