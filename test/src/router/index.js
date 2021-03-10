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
        path: '/Pokemon',
        name: 'Pokemon',
        component: () => import(/* webpackChunkName: "about" */ '../components/Pokemon')
    },
]

const router = new VueRouter({
    routes
})

export default router