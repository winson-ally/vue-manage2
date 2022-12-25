# vue-manage2

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

###后台管理系统
项目描述：这是一个后台管理系统的vue2项目，采用vue-cli脚手架开发的，我主要负责前端，项目主要功能分为首页，用户管理
首页
本项目为pc端，在开发过程中，使用vue-router进行路由跳转
前端：
1.首页
·使用了element的Container布局容器和NavMenu 导航菜单，Dropdown下拉菜单，Layout布局，
Card 卡片，Breadcrumb面包屑，Tag标签，MessageBox弹框,Message消息提示来完成首页
·封装了echarts，在首页上出现柱状图，饼图，折线图
2.用户管理
·搜索模块，实现用户名字模糊搜索
·用户模块，实现编辑，新增,删除用户信息
·使用了element的Pagination分页，Form表单，Table 表格，将用户信息分页展示
·做了用户的权限管理，实现管理员和普通用户看到的页面不一样
·用了fastmock做后台接口生成数据

