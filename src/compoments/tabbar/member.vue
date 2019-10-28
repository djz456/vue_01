<template>
  <div>
    <h1>会员页面</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {
    this.getlist();
  },
  methods: {
    getlist() {
      this.$http.get("/sakl/saksa").then(result => {
        if (result.body.status === 0) {
          this.list = result.body.massege;
        }
      });
    }
  }
};
</script>

<style scoped>
.mui-slider {
  height: 200px;
}
</style>