<template>
    <el-row :gutter=20>
        <el-col :span=8 style="padding-right: 10px;">
            <el-card shadow="hover" class="box-card">
                <div class="user">
                    <img :src="userImage">
                    <div class="userInfo">
                        <p class="name">admin</p>
                        <p class="access">access</p>
                    </div>
                </div>
                <div class="loginInfo">
                    <p>上次登录时间:<span>昨天</span></p>
                    <p>上次登录地点:<span>福州</span></p>
                </div>
            </el-card>
            <el-card style="margin-top: 20px;height: 400px;">
                <el-table :data="tableData">
                    <!-- 遍历 -->
                    <el-table-column v-for="(val, key) in tableLabel" :key="key" :prop="key" :label="val"></el-table-column>
                    <!-- <el-table-column prop="name" label="姓名"></el-table-column>
                                        <el-table-column prop="todayBuy" label="当日购买"></el-table-column>
                                        <el-table-column prop="monthBuy" label="当月购买"></el-table-column>
                                        <el-table-column prop="totalBuy" label="总购买"></el-table-column> -->
                </el-table>
            </el-card>
        </el-col>
        <el-col :span="16" style="padding-right: 10px;">
            <div class="num">
                <el-card v-for="item in countData" :key="item.name" :body-style="{ display: 'flex' }">
                    <i class='icon' :class="'el-icon-' + item.icon" :style="{ background: item.color }"></i>
                    <div class="detail">
                        <p class="price">￥{{ item.value }}</p>
                        <p class="des">{{ item.name }}</p>
                    </div>
                </el-card>
            </div>
            <el-card style="height: 280px;">
                <div ref="echarts1" style="height: 280px"></div>
            </el-card>
            <div class="grahic">
                <el-card style="height: 260px;">
                    <div ref="echarts2" style="height: 260px"></div>
                </el-card>
                <el-card style="height: 260px;">
                    <div ref="echarts3" style="height: 260px"></div>
                </el-card>
            </div>
        </el-col>
    </el-row>
</template>
<script>
import { getData } from '../api';
import * as echarts from 'echarts'
export default {
    name: 'HomeView',
    data() {
        return {
            userImage: require('../assets/user.png'),
            tableData: [],
            tableLabel: {
                name: '课程',
                todayBuy: '当日购买',
                monthBuy: '当月购买',
                totalBuy: '总共购买',

            },
            countData: [
                {
                    name: "今日支付订单",
                    value: 1234,
                    icon: "success",
                    color: "#2ec7c9",
                },
                {
                    name: "今日收藏订单",
                    value: 210,
                    icon: "star-on",
                    color: "#ffb980",
                },
                {
                    name: "今日未支付订单",
                    value: 1234,
                    icon: "s-goods",
                    color: "#5ab1ef",
                },
                {
                    name: "本月支付订单",
                    value: 1234,
                    icon: "success",
                    color: "#2ec7c9",
                },
                {
                    name: "本月收藏订单",
                    value: 210,
                    icon: "star-on",
                    color: "#ffb980",
                },
                {
                    name: "本月未支付订单",
                    value: 1234,
                    icon: "s-goods",
                    color: "#5ab1ef",
                },
            ],
        }
    },
    mounted() {
        getData().then(({ data }) => {
            const { tableData } = data.data
            console.log(data.data)
            this.tableData = tableData

            // 基于准备好的dom，初始化echarts实例
            const echarts1 = echarts.init(this.$refs.echarts1)
            // 指定图表的配置项和数据
            var echarts1Option = {}
            // 处理数据xAxis
            const { orderData, userData, videoData } = data.data
            const xAxis = Object.keys(orderData.data[0])
            const xAxisData = {
                data: xAxis
            }
            echarts1Option.xAxis = xAxisData
            echarts1Option.yAxis = {}
            echarts1Option.legend = xAxisData
            echarts1Option.series = []
            xAxis.forEach(key => {
                echarts1Option.series.push({
                    name: key,
                    data: orderData.data.map(item => item[key]),
                    type: 'line'
                })
            })
            console.log(echarts1Option)
            // 使用刚指定的配置项和数据显示图表。
            echarts1.setOption(echarts1Option)

            // 柱状图
            const echarts2 = echarts.init(this.$refs.echarts2)
            const eachrts2Option = {
                legend: {
                    // 图例文字颜色
                    textStyle: {
                    color: "#333",
                    },
                },
                grid: {
                    left: "20%",
                },
                // 提示框
                tooltip: {
                    trigger: "axis",
                },
                xAxis: {
                    type: "category", // 类目轴
                    data: userData.map(item => item.date),
                    axisLine: {
                    lineStyle: {
                        color: "#17b3a3",
                    },
                    },
                    axisLabel: {
                    interval: 0,
                    color: "#333",
                    },
                },
                yAxis: [
                    {
                    type: "value",
                    axisLine: {
                        lineStyle: {
                        color: "#17b3a3",
                        },
                    },
                    },
                ],
                color: ["#2ec7c9", "#b6a2de"],
                series: [
                    {
                        name: '新增用户',
                        data: userData.map(item => item.new),
                        type: 'bar'
                    },
                    {
                        name: '活跃用户',
                        data: userData.map(item => item.active),
                        type: 'bar'
                    }
                ],
            }
            echarts2.setOption(eachrts2Option)

            // 饼状图
            const echarts3 = echarts.init(this.$refs.echarts3)
            const eachrts3Option = {
                tooltip: {
                    trigger: "item",
                },
                color: [
                    "#0f78f4",
                    "#dd536b",
                    "#9462e5",
                    "#a6a6a6",
                    "#e1bb22",
                    "#39c362",
                    "#3ed1cf",
                ],
                series: [
                    {
                        data: videoData,
                        type: 'pie'
                    }
                ],
            }
            echarts3.setOption(eachrts3Option)
        })
    }
}
</script>
<style>
.user {
    display: flex;
    align-items: center;
    margin-bottom: 40px;

}

.user img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-right: 40px;
}

.name {
    font-size: 32px;
}

.access {
    font-size: 22px;
    color: #999999;
    ;
}

.num {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.icon {
    width: 70px;
    height: 70px;
    text-align: center;
    line-height: 80px;
    margin-right: 10px;
    font-size: 30px;
}

.grahic {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;

}

.grahic .el-card {
    width: 48%;
}
</style>