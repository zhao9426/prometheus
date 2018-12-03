<template class="card">
    <div class="box-card">
    <div class="card-header">
        <div>{{overview.name}}</div>
        <div>
            <span v-for="(op, i) in overview.options" :key="i" v-text="op"></span>
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
  .header-item {
      text-align: left;
      flex: 1;
  }
  .profit {
      flex: 1;
      text-align: left;
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
      color: #1890ff;
      text-align: left;

  }
  .item-2 {
      flex: 1;
      background-color: #7cb305;
      text-align: left;
  }
  </style>