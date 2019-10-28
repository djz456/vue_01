<template>
  <div>
    <mt-swipe :auto="4000">
      <!-- 轮播图遍历 -->
      <!-- <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
        <img :src="item.img" alt="">
      </mt-swipe-item>-->
      <mt-swipe-item>
        <img src="images/1.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="images/2.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="images/3.jpg" alt="">
      </mt-swipe-item>
    </mt-swipe>

    <!-- 首页第二部分 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <span class="mui-icon mui-icon-home"></span>
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photolist">
          <span class="mui-icon mui-icon-email">
            <span class="mui-badge">5</span>
          </span>
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="#">
          <span class="mui-icon mui-icon-chatbubble"></span>
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="#">
          <span class="mui-icon mui-icon-location"></span>
          <div class="mui-media-body">留言反馈</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="#">
          <span class="mui-icon mui-icon-search"></span>
          <div class="mui-media-body">视频专区</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="#">
          <span class="mui-icon mui-icon-phone"></span>
          <div class="mui-media-body">联系我们</div>
        </router-link>
      </li>
      
    </ul>
    <!-- <h3>首页页面</h3> -->
  </div>
</template>
<script>
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      //lunbotuList: [] //保存轮播图的数组
    };
  },
  created() {
    //this.getLunbotu();
  },
  methods: {
   // getLunbotu() {
      //获取轮播图数据的方法
      //this.$http.get(" http://vue.studyit.io/api/getlunbo").then(result => {
        // console.log(result.body);
       // if (result.body.status === 0) {
       //   this.lunbotuList = result.body.message;
       // } else {
       //   //失败
       //   Toast({
       //     message: "获取失败",
   //         position: "middle"
   //       });
   //     }
   //   });
   // }
  }
};
</script>

<style scoped>
.mint-swipe {
  height: 200px;
  /* text-align: center; */
  /* line-height: 200px; */
}
/* .mint-swipe-item:nth-child(1) {
  background-color: red;
} */
.mint-swipe-item:nth-child(2) {
  background-color: rgb(46, 128, 250);
}
.mint-swipe-item:nth-child(3) {
  background-color: rgb(255, 238, 80);
}
.mint-swipe-item img {
  width: 100%;
  height: 100%;
}
.mui-grid-view.mui-grid-9{
  background-color: #fff;
  border:none;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
  border:none;
}
</style>