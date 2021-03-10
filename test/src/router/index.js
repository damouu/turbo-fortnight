import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "about" */ '../components/HelloWorld')
    },
    {
        path: '/Todos',
        name: 'Todos',
        component: () => import(/* webpackChunkName: "about" */ '../components/Todos')
    },
]

const router = new VueRouter({
    routes
})

export default router