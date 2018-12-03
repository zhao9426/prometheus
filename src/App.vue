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
        <el-row class="box" :gutter="20">
          <el-col :span="1">总览</el-col>
          <el-col :span="2" :offset="21">
            <el-breadcrumb separator="/">
            <el-breadcrumb-item><a href="/">数据</a></el-breadcrumb-item>
            <el-breadcrumb-item>总览</el-breadcrumb-item>
            </el-breadcrumb>
          </el-col>
        </el-row>
        <split-line/>
        <el-row class="set">
          <i class="el-icon-setting">运营设置</i><br/>
        </el-row>
        <el-row class="message">当前公告：游戏更新完成，如有问题联系在线客服！谢谢大家对我们的支持</el-row>
        <el-row :gutter="8" justify="space-around">
        <el-col :span="8">
          <el-row justify="space-between">
              <el-col :span="6">
                  <div class="grid-content bg-purple">
                    <el-button type="primary"><i class="el-icon-star-off">发布公告</i></el-button>
                  </div>
                </el-col>
                <el-col :span="6" :offset="2">
                  <div class="grid-content bg-purple">
                    <el-button type="warning"><i class="el-icon-delete">删除公告</i></el-button>
                  </div>
                </el-col>
                <el-col :span="6" :offset="4">
                  <div class="grid-content bg-purple">
                    <el-button type="success"><i class="el-icon-warning">更新IP黑名单</i></el-button>
                  </div>
                </el-col>
          </el-row>
        </el-col>
        <el-col :span="8">
          <el-row justify="space-around">
            <el-col :span="6" :offset="6">
          <div class="grid-content bg-purple">
            <el-button type="danger"><i class="el-icon-star-off">自动兑换</i></el-button>
          </div>
        </el-col>
        <el-col :span="6" :offset="6">
          <div class="grid-content bg-purple">
            <el-button type="primary"><i class="el-icon-setting">充值兑换设置</i></el-button>
          </div>
        </el-col>
          </el-row>
        </el-col>
        <el-col :span="8">
          <el-row justify="space-around">
            <el-col :span="6" :offset="6">
            <div class="grid-content bg-purple">
            <el-button type="primary"><i class="el-icon-setting">运营设置</i></el-button>
            </div>
          </el-col>
          <el-col :span="6" :offset="6">
            <div class="grid-content bg-purple">
              <el-button type="primary"><i class="el-icon-setting">游戏设置</i></el-button>
            </div>
          </el-col>
          </el-row>
        </el-col>  
      </el-row>
       <split-line/>
          <graph></graph>
          <split-line/>
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
import Graph from "./components/Graph";
import Graph2 from "./components/Graph2";
import Overview from "./components/Overview";
import SplitLine from "./components/SplitLine";
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
    'pp-nav': Nav,
    'graph': Graph,
    'graph2': Graph2,
    'overview': Overview,
    'split-line': SplitLine
  },
  data: function(){
    return ({
    overviews: [
        {
            name: "游戏盈亏",
            topLineColor: "red",
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
            name: "用户盈利排行旁",
            topLineColor: "#836FFF",
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
  text-align: left;
  display:flex;
  justify-content: space-around;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
 .el-header {
    background-color: #5CACEE;
    color: #fff;
    text-align: center;
    line-height: 60px;
  }
  .head-name{
    width: 200px;
    border-right: 1px solid #fff;
  }
  
  .el-aside {
    background-color: #FFF;
    color: #333;
    text-align: center;
    min-height: 200px;
  }
  .el-main {
    background-color: #fff;
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
  .el-col {
    border-radius: 4px;
  }
.box {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 15px;
  padding-bottom: 20px;
}
.set {
  display: flex;
  justify-content: flex-start;
  font-size: 15px;
  margin-top: 20px;
}
.message{
  display: flex;
  justify-content: flex-start;
  font-size:12px;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
