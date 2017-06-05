import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

//引入组件
import Home from '../pages/home/Home'
import Cart from '../pages/cart/Cart'
import Mine from '../pages/mine/Mine'
import Classify from '../pages/classify/Classify'
import Subject from '../pages/subject/Subject'

//定义路由规则
const routes = [
    { path: '' , component: Home },
    { path: '/home' , component: Home },
    { path: '/cart' , component: Cart },
    { path: '/mine' , component: Mine },
    { path: '/classify' , component: Classify },
    { path: '/subject' , component: Subject },
]

export default new VueRouter({
    routes
})
