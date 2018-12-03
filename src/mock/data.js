export const menus = [
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
];

export const overviews = [
    {
        name: "用户盈利排行榜",
        topLineColor: "#836FFF",
        options: [
            "游戏选择",
            "时间选择",
            "渠道选择"
        ],
        type: "用户",
        data: [{
            categray: "大厅",
            profit: 4315
        }, {
            categray: "黑红梅方",
            profit: 3234
        }, {
            categray: "百家乐",
            profit: 2315
        }, {
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
        data: [{
            categray: "贵宾111",
            profit: 4315
        }, {
            categray: "贵宾234",
            profit: 3234
        }, {
            categray: "贵宾456",
            profit: 2315
        }, {
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
        data: [{
            categray: "贵宾111",
            profit: 4315
        }, {
            categray: "贵宾234",
            profit: 3234
        }, {
            categray: "贵宾456",
            profit: 2315
        }, {
            categray: "贵宾692",
            profit: 5315
        },
        {
            categray: "贵宾756",
            profit: 1315
        }]
    }
];
export default {
    menus,
    overviews
}