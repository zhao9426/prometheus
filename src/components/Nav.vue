<template>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      >
      <el-submenu v-for="(m, i) in menus"
        :key="i"
        v-bind:index="String(i)">
          <template slot="title">{{m.name}}</template>
          <el-menu-item v-for="(s, j) in m.children" 
            v-if="m.children.length > 0"
            :key="j"
           v-bind:index="String(i)+'-'+String(j)">{{s.name}}</el-menu-item>
        </el-submenu>
    </el-menu>
</template>
<style>

</style>

<script>
import { Menu, MenuItem, MenuItemGroup } from "element-ui";
export default {
    name: "pp-nav",
     methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    data: function(){
            return {
                    menus: [{
                    name: "数据",
                    icon: "el-icon-location",
                    children: [{
                        name: "Table"
                    },{
                        name: "总览"
                    }]
                },{
                    name: "数据",
                    icon: "el-icon-location",
                    children: [{
                        name: "Table"
                    },{
                        name: "总览"
                    }]
                }]
            } 
    },
    components: {
        "el-menu": Menu,
        "el-menu-item": MenuItem,
        "el-menu-item-group": MenuItemGroup
    }
}
</script>

