import Vue from 'vue'
import { Button, Container, Aside, Header, Main, Menu, Submenu, MenuItem, MenuItemGroup, Dropdown, DropdownItem, DropdownMenu, Row, Col, Card, Table, TableColumn, Dialog, Form, FormItem, Select, Option, DatePicker, Input, MessageBox, Message } from 'element-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import './api/mock'
import Cookies from 'js-cookie'
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Header)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Dialog)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Select)
Vue.use(Option)
Vue.use(DatePicker)
Vue.use(Input)
Vue.use(MessageBox)
Vue.use(Message)

router.beforeEach((to, from ,next) => {
  const token = Cookies.get('token')
  if (!token && to.name !== 'login') {
    next({ name: 'login' })
  } else if (token && to.name === 'login') {
    next({ name: 'home' })
  } else {
    next()
  }
})


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
