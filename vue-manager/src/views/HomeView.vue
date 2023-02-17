<template>
    <el-row :gutter=20>
        <el-col :span=8>
            <el-card shadow="hover" class="box-card" >
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
        <el-col :span="16">
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
                </el-card>
            <div class="grahic">
                <el-card style="height: 260px;"> </el-card>
                <el-card style="height: 260px;"></el-card>
            </div>
        </el-col>
    </el-row>
</template>
<script>
export default {
    name: 'HomeView',
    data() {
        return {
            userImage: require('../assets/user.png'),
            tableData: [
                {
                    name: 'oppo',
                    todayBuy: 100,
                    monthBuy: 300,
                    totalBuy: 800
                },
                {
                    name: 'vivo',
                    todayBuy: 100,
                    monthBuy: 300,
                    totalBuy: 800
                },
                {
                    name: '苹果',
                    todayBuy: 100,
                    monthBuy: 300,
                    totalBuy: 800
                },
                {
                    name: '小米',
                    todayBuy: 100,
                    monthBuy: 300,
                    totalBuy: 800
                },
                {
                    name: '三星',
                    todayBuy: 100,
                    monthBuy: 300,
                    totalBuy: 800
                },
                {
                    name: '魅族',
                    todayBuy: 100,
                    monthBuy: 300,
                    totalBuy: 800
                }

            ],
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
.num{
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
.grahic{
   display: flex; 
   justify-content: space-between;

}
.grahic .el-card {
        width: 48%;
    }

</style>