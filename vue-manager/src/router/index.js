import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'main',
        component: () => import('../views/MainView.vue'),
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('../views/HomeView.vue')
            },
            {
                path: '/user',
                name: 'user',
                component: () => import('../views/UserView.vue')
            },

        ]
    },
    {
        path:'/login',
        name:'login',
        component:()=>import('../views/LoginView')
    }

]
const router = new VueRouter({
    mode: 'history',
    routes
})
export default router;