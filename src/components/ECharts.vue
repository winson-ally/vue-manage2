
<template>
<!-- // 封装出一个公共组件,
// 在home组件调用 -->
  <div ref="echart"></div>
</template>

<script>
import * as echart from "echarts";
export default {
  props: {
    isAxisChart: {// 该属性用于区分图形的类别
      type: Boolean,
      default: true,// 默认值为true
    },
    chartData: {
      type: Object,
      default() {// 设置默认值是为了保证无数据时,组件的容错性
        return {
          xData: [],
          series:[]
        };
      },
    },
  },
  watch:{// 深度监听echarts数据 发生变化就调用初始化echarts方法
    chartData:{
        handler:function(){
            this.initChart()
        },
        deep:true,
    }
  },
  methods: {
        initChart(){ // 此方法控制渲染
            this.initChartData()// 拿到配置数据后渲染
            if(this.echart){
                this.echart.setOption(this.options)//如果echart存在直接传option渲染
            }else{// 不存在则重新拿到dom再渲染
                this.echart=echart.init(this.$refs.echart)
                this.echart.setOption(this.options)
            }
        },
        initChartData(){// 此方法判断line or pie 来拿到不同的数据
            if(this.isAxisChart){
                this.axisOption.xAxis.data=this.chartData.xData
                this.axisOption.series=this.chartData.series
            }else{// pie图只需要对series赋值就行
                this.normalOption.series=this.chartData.series
            }
        }
  },
  data() {
    return {
      axisOption: {
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
          data: [],
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
        color: [
          "#2ec7c9",
          "#b6a2de",
          "#5ab1ef",
          "#ffb980",
          "#d87a80",
          "#8d98b3",
        ],
        series: [],
      },
      //饼状图
      normalOption: {
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
        series: [],
      },
      echart:null
    };
  },
  computed: {
    options() {// 判断当前图形是line还是pie, 在当前data中取line或者pie的数据
      return this.isAxisChart ? this.axisOption : this.normalOption;
    },
  },
};
</script>
<style scoped>

</style>
