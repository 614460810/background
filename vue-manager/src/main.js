import Vue from 'vue'
import {Button,Container,Aside,Header,Main,Menu,Submenu,MenuItem,MenuItemGroup} from 'element-ui'
import App from './App.vue'
import router from './router'

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
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
