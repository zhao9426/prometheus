<template>
  <div id="app">
    <el-container>
      <el-header style="padding: 0px">
        <div class="head-name">欢乐岛游戏管理</div>
        <div>sss</div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <pp-nav/>
        </el-aside>
        <el-main>
          <Button/>
          <graph></graph>
           <graph2></graph2>
           <div class="overview-list">
             <overview 
             v-for="(o,index) in overviews"
            :key="index"
            :overview="o"></overview> 
           </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import { Container, Header, Aside, Main, Row, Col } from "element-ui";
import Nav from "./components/Nav";
import Button from "./components/Button";
import Graph from "./components/Graph";
import Graph2 from "./components/Graph2";
import Overview from "./components/Overview";
export default {
  name: 'app',
  components: {
    'el-container': Container,
    'el-header': Header,
    'el-aside': Aside,
    'el-main': Main,
    'el-row': Row,
    'el-col': Col,
    'pp-nav': Nav,
    'Button':Button,
    'pp-nav': Nav,
    'graph': Graph,
    'graph2': Graph2,
    'overview': Overview
  },
  data: function(){
    return ({
    overviews: [
        {
            name: "用户盈利排行旁",
            topLineColor: "#836FFF",
            options: [
                "游戏选择",
                "时间选择",
                "渠道选择"
            ],
            type: "用户",
            data:[{
                categray: "大厅",
                profit: 4315
            },{
                categray: "黑红梅方",
                profit: 3234
            },{
                categray: "百家乐",
                profit: 2315
            },{
                categray: "抢庄牛牛",
                profit: 5315
            },
            {
                categray: "龙虎斗",
                profit: 1315
            }]
        },
        {
            name: "游戏盈亏",
            topLineColor: "red",
            options: [
                "游戏选择",
                "时间选择",
                "渠道选择"
            ],
            type: "房间",
            data:[{
                categray: "贵宾111",
                profit: 4315
            },{
                categray: "贵宾234",
                profit: 3234
            },{
                categray: "贵宾456",
                profit: 2315
            },{
                categray: "贵宾692",
                profit: 5315
            },
            {
                categray: "贵宾756",
                profit: 1315
            }]
        },
        {
            name: "用户输分排行榜",
            topLineColor: "green",
            options: [
                "游戏选择",
                "时间选择",
                "渠道选择"
            ],
            type: "用户",
            data:[{
                categray: "贵宾111",
                profit: 4315
            },{
                categray: "贵宾234",
                profit: 3234
            },{
                categray: "贵宾456",
                profit: 2315
            },{
                categray: "贵宾692",
                profit: 5315
            },
            {
                categray: "贵宾756",
                profit: 1315
            }]
        }
     ]
})
}
}
</script>

<style scoped>
body {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-header {
  background-color: #5cacee;
  color: #fff;
  text-align: center;
  line-height: 60px;
}
.head-name {
  width: 200px;
  border-right: 1px solid #fff;
}

.el-aside {
  background-color: #fff;
  color: #333;
  text-align: center;
  min-height: 200px;
}

.el-main {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  min-height: calc(100vh - 60px);
}
.overview-list {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
}
</style>
