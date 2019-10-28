import VueRouter from 'vue-router'


import home from './compoments/tabbar/home.vue'
import member from './compoments/tabbar/member.vue'
import shop from './compoments/tabbar/shop.vue'
import search from './compoments/tabbar/search.vue'
import newslist from './compoments/news/newslist.vue'
import newsinfo from './compoments/news/newsinfo.vue'
import photolist from './compoments/photo/photolist.vue'

var router = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:home},
        {path:'/member',component:member},
        {path:'/shop',component:shop},
        {path:'/search',component:search},
        {path:'/home/newslist',component:newslist},
        {path:'/home/newsinfo',component:newsinfo},
        {path:'/home/photolist',component:photolist}
    ],
    linkActiveClass:'mui-active'
})

export default router