<template>
  <div class="categoriesContent">
      <left-cate class="wrapper1"></left-cate>
      <right-cate class="wrapper2"></right-cate>
  </div>
</template>

<script>
import LeftCate from './LeftCate'
import RightCate from './RightCate'
export default {
    data() {
        return {
        }
    },
    components: {
        LeftCate,
        RightCate,
    },
}
</script>

<style lang="less" scoped>
.categoriesContent {
  display: flex;
  .wrapper1 {
      flex: 2;
      overflow: hidden;
  }
  .wrapper2 {
      flex: 5;
      overflow: hidden;
  }
}
</style>