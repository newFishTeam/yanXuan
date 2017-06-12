import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

//引入组件
import Home from '../pages/home/Home'
import Cart from '../pages/cart/Cart'
import Mine from '../pages/mine/Mine'
import Classify from '../pages/classify/Classify'
import Subject from '../pages/subject/Subject'
import Classify2 from '../pages/classify/classify2/Classify2'
import Detail from '../components/Detail'

//定义路由规则
const routes = [
    { path: '' , component: Home },
    { path: '/home' , component: Home },
    { path: '/cart' , component: Cart },
    { path: '/mine' , component: Mine },
    { path: '/classify' , component: Classify ,children:[
        {path: '/classify2/:id:idMini' , component: Classify2 }
    ]},
    { path: '/subject' , component: Subject },
    { path: '/detail/:product' , component: Detail }
]

export default new VueRouter({
    routes
})
