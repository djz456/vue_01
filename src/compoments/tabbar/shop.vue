<template>
  <div class="shopcar-container">
    <div class="goods-list">
      <!-- 商品列表区域 -->
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch></mt-switch>
            <img
              src="https://img.alicdn.com/imgextra/i1/4084343896/O1CN012rZAXc1eePd4U0Y3Q_!!4084343896.jpg"
            />
            <div class="info">
              <h1>pro正品mate30 pro华为新品旗舰机</h1>
              <p>
                <span class="price">￥1199</span>
              </p>
              <div class="mui-numbox">
                <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
                <input class="mui-input-numbox" type="number" number="1" />
                <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
              </div>
              <a href="#">删除</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 结算区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等</div>
      </div>
    </div>
  </div>
</template>
<script>
import numbox from '../subcomponents/shopcar_numberbox.vue'
export default {
 components:{
     numbox
 }
};
</script>

<style scoped>
.shopcar-container {
  background-color: #eee;
  overflow: hidden;
}
.goods-list img {
  width: 60px;
  height: 60px;
}
</style>