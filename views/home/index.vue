<template>
  <el-row class="home" :gutter="20">
    <!-- 个人信息展示Column -->
    <el-col :span="8" style="margin-top: 20px">
      <el-card shadow="hover">
        <div class="user">
          <img :src="userImg" />
          <div class="userinfo">
            <p class="name">Admin</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间:<span>2021-7-10</span></p>
          <p>上次登录地点:<span>武汉</span></p>
        </div>
      </el-card>
       <!-- 购买信息盒子 -->
      <el-card style="margin-top: 20px; height: 460px">
        <el-table :data="tableData">
          <el-table-column
            v-for="(val, key) in tableLabel"
            :key="key"
            :prop="key"
            :label="val"
          >
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <!-- 图表信息展示Column -->
    <el-col style="margin-top: 20px" :span="16">
      <!-- 订单统计盒子 -->
      <div class="num">
        <el-card
          v-for="item in countData"
          :key="item.name"
          :body-style="{ display: 'flex', padding: 0 }"
        >
          <i
            class="icon"
            :class="`el-icon-${item.icon}`"
            :style="{ background: item.color }"
          ></i>
          <div class="detail">
            <p class="num">￥{{ item.value }}</p>
            <p class="txt">{{ item.name }}</p>
          </div>
        </el-card>
      </div>
      <!-- 折线图 -->
      <el-card style="height: 280px">
        <Echart :chartData="echartData.order" style="height: 280px;width:100%;" />
      </el-card>
      <!-- 柱状图 -->
      <div class="graph">
        <el-card style="height: 260px">
          <Echart :chartData="echartData.user" style="height: 240px;width:100%;" />
        </el-card>
        <!-- 球形图 -->
        <el-card style="height: 260px">
          <Echart
            :chartData="echartData.video"
            :isAxisChart="false"
            style="height: 240px;width:100%;"
          />
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { getData } from "../../api/data.js";//引入首页数据请求接口
import Echart from "../../src/components/ECharts.vue";
export default {
  name: "home",
  components: {
    Echart,
  },
  data() {
    return {
      userImg: require("@/assets/images/user.png"),
      // 中间的图表
      tableData: [
        {
          name: "oppo",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
        {
          name: "vivo",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
        {
          name: "苹果",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
        {
          name: "小米",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
        {
          name: "三星",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
        {
          name: "魅族",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
      ],
      // 左侧课程
      tableLabel: {
        name: "课程",
        todayBuy: "今日购买",
        monthBuy: "本月购买",
        totalBuy: "总购买",
      },
      // 上面的订单
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
      echartData: {
        order: {
          xData: [],
          series: [],
        },
        user: {
          xData: [],
          series: [],
        },
        video: {
          series: [],
        },
      },
    };
  },
  mounted() {
    getData().then((res) => {
      console.log(res);
      const { code, data } = res.data; // 解构后端返回的状态码code和data
      // 拿到data并进行echarts渲染
      if (code === 20000) {
        // 从后端接口拿到左侧表格数据
        this.tableData = data.tableData;
        // 拿到table后 继续对后端接口数据为orderData做处理生成折线图
        const order = data.orderData;//订单数据是一个数组[data,date]
        const xData = order.date;// x轴数据(日期)
        const keyArray = Object.keys(order.data[0]);// 拿到所有的key值返回一个数组
        const series = [];
        keyArray.forEach((key) => {
          series.push({
            name: key,
            data: order.data.map(item => item[key]), // 拿到key值对应的value并返回一个由value组成的数组
            type: "line",// 表示折线图
          });
        });
        this.echartData.order.xData = xData;
        this.echartData.order.series = series;
        //用户图

        this.echartData.user.xData = data.userData.map(item => item.date),
          this.echartData.user.series = [
            {
              name: "新增用户",
              data: data.userData.map((item) => item.new),
              type: "bar",
            },
            {
              name: "活跃用户",
              data: data.userData.map((item) => item.active),
              type: "bar",
            },
          ]
        //饼图
        this.echartData.video.series = [
          {
            data: data.videoData,
            type: "pie",
          },
        ];
      }
      console.log(res);
    });
  },
};
</script>
<style scoped></style>
