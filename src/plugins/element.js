import Vue from 'vue'
// 引入弹框提示组件 Message 需要全局引用 使用 Vue.prototype
import {Button,Radio,Container,Aside,Header,Main,Menu,Submenu,
    MenuItem,MenuItemGroup,Dropdown,DropdownItem,DropdownMenu,
    Row,Col,Card,Table,TableColumn,Breadcrumb,BreadcrumbItem,Tag,
    Form,FormItem,Input,Select,Switch,DatePicker,Dialog,Pagination,
    MessageBox,Message,Option} from 'element-ui';

    Vue.use(Button)
Vue.use(Radio)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Header)
Vue.use(Main)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Menu)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(TableColumn)
Vue.use(Table)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Tag)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(Switch)
Vue.use(DatePicker)
Vue.use(Dialog)
Vue.use(Pagination)

Vue.prototype.$confirm=MessageBox.confirm
Vue.prototype.$message=Message