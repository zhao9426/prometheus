<template>
    <el-menu
      default-active="2"
      :default-openeds="defaultOpens"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      >
      <el-submenu
        
        v-for="(m, i) in menus"
        :key="i"
        :index="String(i)">
          <template slot="title">
            <i :class="m.icon" v-if="m.icon"></i>
             <span>{{m.name}}</span>
         </template>
          <el-menu-item 
            v-for="(s, j) in m.children" 
            v-if="m.children.length > 0"
            :key="j"
           :index="String(i)+'-'+String(j)">{{s.name}}</el-menu-item>
        </el-submenu>
    </el-menu>
</template>
<style>

</style>

<script>
import { menus } from "../mock/data";
import { Menu, MenuItem, Submenu } from "element-ui";
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  data: function() {
    return {
      menus: menus,
      defaultOpens: ['0'] 
    };
  },
  components: {
    "el-menu": Menu,
    "el-menu-item": MenuItem,
    "el-submenu": Submenu
  }
};
</script>
<style scoped>
.el-submenu{
    text-align:left;
    background-color:#E9EEF3;
}
.el-menu-item{
    background-color:#F4F4F4;
}
</style>
