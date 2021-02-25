<template>
  <div>
      <h1>profile</h1>
      <guess-like :guessLikeList="guessLikeList"></guess-like>
      <div class="add"></div>
  </div>
</template>

<script>
import GuessLike from '../common/GuessLike'
export default {
  data() {
    return {
      guessLikeList: [{
        path: 'https://img.miyabaobei.com/d1/p6/2020/09/14/26/7a/267a6644410c9145758465550d59ed95795372632.jpg@base@tag=imgScale&w=500&q=90',
        title: '爱他美 【保税仓发货 闪电送达 包邮包税】白金版 婴幼儿配方奶粉3段12M+  900g/罐 1罐装',
        price: '289',
      },{
        path: 'https://img.miyabaobei.com/d1/p6/2020/09/14/26/7a/267a6644410c9145758465550d59ed95795372632.jpg@base@tag=imgScale&w=500&q=90',
        title: '爱他美 【保税仓发货 闪电送达 包邮包税】白金版 婴幼儿配方奶粉3段12M+  900g/罐 1罐装',
        price: '289',
      },{
        path: 'https://img.miyabaobei.com/d1/p6/2020/09/14/26/7a/267a6644410c9145758465550d59ed95795372632.jpg@base@tag=imgScale&w=500&q=90',
        title: '爱他美 【保税仓发货 闪电送达 包邮包税】白金版 婴幼儿配方奶粉3段12M+  900g/罐 1罐装',
        price: '289',
      },{
        path: 'https://img.miyabaobei.com/d1/p6/2020/09/14/26/7a/267a6644410c9145758465550d59ed95795372632.jpg@base@tag=imgScale&w=500&q=90',
        title: '爱他美 【保税仓发货 闪电送达 包邮包税】白金版 婴幼儿配方奶粉3段12M+  900g/罐 1罐装',
        price: '289',
      }]
    }
  },
  components: {
    GuessLike
  }
}
</script>

<style lang="less" scoped>
.add {
  width: 100%;
  height: 2.5rem;
}
</style>