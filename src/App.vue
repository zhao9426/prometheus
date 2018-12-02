<template>
  <div id="app">
    <el-container>
      <el-header style="padding: 0px">
        <div class="head-name">sjjd</div>
        <div>sss</div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <pp-nav/>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import { Container, Header, Aside, Main, Row, Col } from "element-ui";
import Nav from "./components/Nav";
export default {
  name: 'app',
  data: function(){
    return {
      visible: false
    }
  },
  components: {
    'el-container': Container,
    'el-header': Header,
    'el-aside': Aside,
    'el-main': Main,
    'el-row': Row,
    'el-col': Row,
    'pp-nav': Nav
  }
}
</script>

<style>
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
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .head-name{
    width: 200px;
    border-right: 1px solid #fff;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    min-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    min-height: calc(100vh - 60px);
  }
</style>
