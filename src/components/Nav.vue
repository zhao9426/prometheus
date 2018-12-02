<template>
    <el-menu
      default-active="2"
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
import { Menu, MenuItem, MenuItemGroup, Submenu } from "element-ui";
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
      menus: [
        {
          name: "数据",
          icon: "el-icon-menu",
          children: [
            {
              name: "Table"
            },
            {
              name: "总览"
            },
            {
              name: "没人报告"
            },
            {
              name: "盈亏情况"
            },
            {
              name: "金钱明细"
            },
            {
              name: "充值兑换积分"
            }
          ]
        },

        {
          name: "游戏情况",
          icon: "el-icon-location",
          children: [
            {
              name: "Table"
            },
            {
              name: "总览"
            }
          ]
        },
        {
          name: "玩家留存",
          icon: "el-icon-location",
          children: [
            {
              name: "Table"
            },
            {
              name: "总览"
            }
          ]
        },
        {
          name: "玩家付费",
          icon: "el-icon-location",
          children: [
            {
              name: "Table"
            },
            {
              name: "总览"
            }
          ]
        },
        {
          name: "行为分析",
          icon: "el-icon-location",
          children: [
            {
              name: "Table"
            },
            {
              name: "总览"
            }
          ]
        },
        {
          name: "渠道",
          icon: "el-icon-location",
          children: [
            {
              name: "Table"
            },
            {
              name: "总览"
            }
          ]
        },
        {
          name: "游戏通知",
          icon: "el-icon-location",
          children: [
            {
              name: "Table"
            },
            {
              name: "总览"
            }
          ]
        },
        {
          name: "游戏用户管理",
          icon: "el-icon-location",
          children: [
            {
              name: "Table"
            },
            {
              name: "总览"
            }
          ]
        },
        {
          name: "游戏管理",
          icon: "el-icon-location",
          children: [
            {
              name: "Table"
            },
            {
              name: "总览"
            }
          ]
        }
      ]
    };
  },
  components: {
    "el-menu": Menu,
    "el-menu-item": MenuItem,
    "el-menu-item-group": MenuItemGroup,
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
