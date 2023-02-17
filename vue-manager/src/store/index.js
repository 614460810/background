import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state={
    isCollapse:false
}
const mutations={
    isCollapseMenu(state){
        state.isCollapse=!state.isCollapse
    }
}
const store=new Vuex.Store({
    state,
    mutations,
})
export default store;