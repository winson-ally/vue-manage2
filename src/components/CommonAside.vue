<template>
  <el-menu
    background-color="#545c64"
    text-color="#fff"
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
  >
    <h3>{{ isCollapse ? "后台" : "通用后台管理系统" }}</h3>
    <!-- 遍历无子项目的数据  唯一标识选择其路径 -->
    <el-menu-item
      @click="clickMenu(item)"
      v-for="item in noChildren"
      :index="item.path"
      :key="item.path"
    >
    <!-- 遍历有子项目数据 -->
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <el-submenu
      v-for="item in hasChildren"
      :index="item.label"
      :key="item.label"
    >
      <template slot="title">
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </template>
      <el-menu-item-group
        v-for="(subItem, subIndex) in item.children"
        :key="subItem.path"
      >
        <el-menu-item
          @click="clickMenu(subItem)"
          :index="subIndex.toString()"
          >{{ subItem.label }}</el-menu-item
        >
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  height: 100%;
  border: none;
  h3 {
    color: white;
    text-align: center;
    line-height: 48px;
  }
}
</style>

<script>
export default {
  data() {
    return {
      menu: [
        
      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickMenu(item) {
      this.$router.push({
        name: item.name,
      });
      this.$store.commit("selectMenu", item);
    },
  },
  computed: {
    // 将数据拆成 无子项目和有子项目
    noChildren() {
      return this.asyncMenu.filter((item) => !item.children);// 返回menu中无子项目数据组成的数组
    },
    hasChildren() {
      return this.asyncMenu.filter((item) => item.children);// 返回menu中有子项目数据组成的数组
    },
    isCollapse() {
      return this.$store.state.tab.isCollapsed;
    },
    asyncMenu(){
      return this.$store.state.tab.menu
    }
  },
};
</script>
