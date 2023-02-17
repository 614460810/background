import Vue from 'vue'
import {Button,Container,Aside,Header,Main,Menu,Submenu,MenuItem,MenuItemGroup,Dropdown,DropdownItem,DropdownMenu} from 'element-ui'
import App from './App.vue'
import router from './router'
import store from './store'

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

 
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
