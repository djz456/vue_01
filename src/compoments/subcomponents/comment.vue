<template>
  <div class="commen-box">
    <h3 @click="noset">发表评论</h3>
    <hr />
    <textarea placeholder="请输入要评论的内容（不要超过120个字）"></textarea>
    <mt-button type="primary" size="large" class="btn1" @click="noset">发表评论</mt-button>

    <div class="cmt-list">
      <div class="cmt-item">
        <div class="cmt-title">第一楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：2019-10-15 23：07：33</div>
        <div class="cmt-body">之前我也看过，感触颇深</div>
      </div>
    </div>
    <div class="cmt-list">
      <div class="cmt-item">
        <div class="cmt-title">第二楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：2019-10-15 23：07：33</div>
        <div class="cmt-body">之前我也看过，感触颇深</div>
      </div>
    </div>
    <div class="cmt-list">
      <div class="cmt-item">
        <div class="cmt-title">第三楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：2019-10-15 23：07：33</div>
        <div class="cmt-body">之前我也看过，感触颇深</div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain @click="addset">加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import { Indicator } from "mint-ui";
export default {
  data() {
    return {
      msg: "还没设置好，哈哈！！"
    };
  },
  methods: {
    noset() {
      Toast({
          message:this.msg,
          duration:1000
      })
    },
    addset() {
    //   Indicator.open();
    //   Indicator.close();
  //  Indicator.open('加载中...');
       
   
      
    //   Indicator.open({
    //     text: "Loading...",
    //     spinnerType: "fading-circle"
    //   });
    }
  }
};
</script>

<style scoped>
.commen-box {
  margin-bottom: 30px;
}
.commen-box h3 {
  font-size: 18px;
}
.commen-box textarea {
  margin: 0;
  font-size: 14px;
}
.commen-box .btn1 {
  margin-bottom: 5px;
}
.commen-box .cmt-title {
  background-color: #ccc;
  line-height: 30px;
}
.commen-box .cmt-item {
  font-size: 13px;
}
.commen-box .cmt-body {
  line-height: 35px;
  text-indent: 2em;
}
.commen-box .cmt-list {
  margin: 10px 0;
}
</style>