<template class="card">
    <div class="box-card" :style="{borderTopColor:overview.topLineColor}">
    <div class="card-header">
        <div class="option-name">{{overview.name}}</div>
        <div class="option-list">
            <span v-for="(op, i) in overview.options" :key="i">
                <i class="el-icon-search"></i>
                <span v-text="op"></span>
            </span>          
        </div>
    </div>
    <div>
        <div class="list-header">
            <div class="header-item">{{overview.type}}</div>
            <div class="profit">金币</div>
        </div>      
        <div v-for="(o, i ) in overview.data" :key="i" class="list-item">
            <div class="item-1">{{o.categray}}</div>
            <div class="item-2">{{o.profit | currency}}</div>
        </div>
    </div> 
</div>
</template>
<script>
import { Card } from "element-ui";
export default {
    name: 'overview',
    props:['overview'],
}
</script>
<style>
   .box-card {
       border-top-width: 2px;
        border-top-style: solid;
        padding: 8px;
       min-width: 360px;
   } 
  .card-header{
      display: flex;
      flex-direction: row;
      justify-content: stretch;
      align-items: center;
  }
  .list-header{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
  }
  .option-name{
      font-size: 16px;
  }
  .option-list {
      flex: 1;
      text-align: right;
      font-size: 12px;
      color: #1890ff;
  }
  .header-item {
      text-align: left;
      font-size: 14px;
      flex: 1;
  }
  .profit {
      flex: 1;
      text-align: left;
      font-size: 14px;
      align-self: flex-start;
  }

  .list-item {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 2px 0;
  }

  .item-1 {
      flex:1;
      font-size: 14px;
      color: #1890ff;
      text-align: left;

  }
  .item-2 {
      flex: 1;
      background-color: #66CDAA;
      text-align: left;
  }
  </style>