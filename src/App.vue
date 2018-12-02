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
        <el-main><Button/></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import { Container, Header, Aside, Main, Row, Col } from "element-ui";
import Nav from "./components/Nav";
import Button from "./components/Button";
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
    'Button':Button
  }
}
</script>

<style scoped>
body{
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
    background-color: #ffffff;
    color: #333;
    text-align: center;
    min-height: calc(100vh - 60px);
  }
</style>
