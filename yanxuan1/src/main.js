// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//引入路由文件
import router from './router'

//引入axios 解决网络请求问题
import axios from 'axios'
//添加到原型上，保证任何地方都可以访问，因为axios不是Vue组件，所以不能使用Vue.use();
Vue.prototype.axios = axios


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
