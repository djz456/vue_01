import Vue from 'vue'
//1.1导入路由的包
import VueRouter from 'vue-router'
//1.2安装路由
Vue.use(VueRouter)

import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// import { Header, Swipe, SwipeItem , Button , Toast} from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name, Button)
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)


//1.3导入路由 router.js 模块
import router from './router.js'

//2.1导入 vue-resource
import VueResource from 'vue-resource'
//2.2安装 vue-resource
Vue.use(VueResource)
// 设置请求的根路径
// Vue.http.options.root = '/root';//'/root'写网址的根路径http://vue.studyit.io

// 导入格式化时间的插件 
import moment from 'moment'

// import axios from 'axios'
// import VueAxios from 'vue-axios'
// Vue.use(VueAxios,axios)

// 定义全局事件过滤器
Vue.filter('dateFormat', function (dateStr, pattern = "YYYY-MM-DD HH:mm:ss ") {
    return moment(dateStr).format(pattern)
})


// 导入组件
import App from './App.vue'

var vm = new Vue({
    el: '#app',
    render: c => c(App),
    router
})
