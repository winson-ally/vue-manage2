<template>
  <el-container style="height: 100%">
    <!-- 侧边栏宽度自适应 -->
    <el-aside width="auto">
      <CommonAside />
    </el-aside>
    <el-container>
      <!-- 头部 -->
      <el-header><CommonHeader /></el-header>
      <CommonTag/>
      <!-- 主要内容区域 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from "../src/components/CommonAside.vue";
import CommonHeader from "../src/components/CommonHeader.vue";
import CommonTag from "../src/components/CommonTag.vue";
export default {
  name: "Home",
  components: {
    CommonAside,
    CommonHeader,
    CommonTag
  },
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.el-header {
  background-color: #333;
}
.el-main {
  padding-top: 0;
}
</style>
