<template>
<div>
  <div class="box">
    <div>总览</div>
    <div>数据/总览</div>
  </div>
  <div class="line"></div>
  <div class="set">
    <i class="el-icon-setting">运营设置</i><br/>
    <span style="margin-left:-20px; margin-top:20px;">当前公告：</span>

    <div>
      <div class="blueline"></div>
    </div>
  </div>
  <el-row :gutter="20" style="padding-top:2px;">
  <el-col :span="2.5" style="margin-left:2px;">
    <div class="grid-content bg-purple">
    <el-button type="primary"><i class="el-icon-star-off">发布公告</i></el-button>
    </div>
  </el-col>
  <el-col :span="2.5" :offset="0.5">
    <div class="grid-content bg-purple">
      <el-button type="warning"><i class="el-icon-delete">删除公告</i></el-button>
    </div>
  </el-col>
  <el-col :span="2.5" :offset="1.0">
    <div class="grid-content bg-purple">
      <el-button type="success"><i class="el-icon-warning">更新IP黑名单</i></el-button>
    </div>
  </el-col>
  <el-col :span="2.5" :offset="1.5">
    <div class="grid-content bg-purple">
      <el-button type="danger"><i class="el-icon-star-off">自动兑换</i></el-button>
    </div>
  </el-col>
  <el-col :span="2.5" :offset="2.0">
    <div class="grid-content bg-purple">
      <el-button type="primary"><i class="el-icon-setting">充值兑换设置</i></el-button>
    </div>
  </el-col>
  <el-col :span="2.5" :offset="1.0">
    <div class="grid-content bg-purple">
     <el-button type="primary"><i class="el-icon-setting">运营设置</i></el-button>
    </div>
  </el-col>
  <el-col :span="2.5" :offset="1.0">
    <div class="grid-content bg-purple">
      <el-button type="primary"><i class="el-icon-setting">游戏设置</i></el-button>
    </div>
  </el-col>
</el-row>
</div>
</template>

<script>
export default {
  name: "Button"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.line {
  width: 100%;
  height: 2px;
  background-color: green;
}
.box{
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 15px;
  padding-bottom: 20px;
}
.set{
  display: flex;
  justify-content: flex-start;
  font-size: 15px;
  margin-top: 20px;
}
.blueline{
  width:33.3%;
  height:2px;
  background-color: blue;
}
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>

</style>

