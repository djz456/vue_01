<template>
  <div class="newsinfo-container">
    <h3 class="title" @click="add">新闻标题</h3>
    <p class="subtitle">
      <span>发表时间：2019-10-10</span>
      <span>点击：0次</span>
    </p>
    <hr />
    <div class="content">
      <p>
        台“农委会”农航所欲淘汰旧飞机，以远超售价的价格租用新飞机。（图片来源：台湾“中时电子报”）
        中国台湾网10月14日讯 据台湾“中时电子报”报道，台湾“农委会”农林航空测量所用来航拍的2架遥测飞机，因过于老旧，准备淘汰换新。但“农委会”不打算添购新机，改向民间租赁，由厂商购买新机，当局再耗资近17亿元（新台币，下同）向厂商租用7年。但据称购入2架新机合计仅7亿多，租比买还贵。国民党“立委”马文君强烈质疑，“农委会”的决策是何道理？希望不要又是绿营开标案图利自己人。
        农林航空测量所所长管立豪喊冤表示，购买新机从采购到手要6至8年，租赁不必遵循采购相关规定，就可缩短为4年。测量所现只剩1台40年的元老级飞机，今年出机只剩400小时，若不缩短采购时间，万一发生森林火灾、农民乱垦乱栽等将无机可用。
        台“农委会”农航所欲淘汰旧飞机，以远超售价的价格租用新飞机。（图片来源：台湾“中时电子报”）
        中国台湾网10月14日讯 据台湾“中时电子报”报道，台湾“农委会”农林航空测量所用来航拍的2架遥测飞机，因过于老旧，准备淘汰换新。但“农委会”不打算添购新机，改向民间租赁，由厂商购买新机，当局再耗资近17亿元（新台币，下同）向厂商租用7年。但据称购入2架新机合计仅7亿多，租比买还贵。国民党“立委”马文君强烈质疑，“农委会”的决策是何道理？希望不要又是绿营开标案图利自己人。
        农林航空测量所所长管立豪喊冤表示，购买新机从采购到手要6至8年，租赁不必遵循采购相关规定，就可缩短为4年。测量所现只剩1台40年的元老级飞机，今年出机只剩400小时，若不缩短采购时间，万一发生森林火灾、农民乱垦乱栽等将无机可用。
      </p>
    </div>
    <com-box class="com-box"></com-box>
  </div>
</template>

<script>
// import func from '../../../vue-temp/vue-editor-bridge';
import {Toast} from 'mint-ui'
import comment from '../subcomponents/comment.vue'
export default {
  data() {
    return {
      id: this.$route.params.id,
      newsinfo: {} //新闻对象
    };
  },
  created(){
// this.getNewsinfo()

  },
  methods: {
    // getNewsinfo() {
    //   this.$http.get("路径", function(result) {
    //     if (result.body.status === 0) {
    //       console.log("获取数据成功");
    //     } else {
    //       Toast('获取失败')
    //     }
    //   });
    // }
    add(){
      Toast('不要点击标题')
    }
  },
  components:{
    "com-box":comment
  }
};
</script>

<style scoped>
.newsinfo-container {
  padding: 40px 4px;
}
.title {
  font-size: 16px;
  text-align: center;
  color: red;
}
.subtitle {
  display: flex;
  margin: 10px 0;
  justify-content: space-between;
  color: rgb(23, 199, 190);
}

</style>