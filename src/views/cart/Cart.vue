<template>
  <div>
      <div class="cartTitle">
        购物车
      </div>
      <div class="emptyCart">
        <img :src=emptySrc alt="">
        <div class="btn" @click="goCheckGoods">
          去挑选好货
        </div>
      </div>
      <guess-like :guessLikeList="guessLikeList"></guess-like>
      <div class="add"></div>
  </div>
</template>

<script>
import GuessLike from '../common/GuessLike'
import emptySrc from 'assets/img/cart/zero.jpg'
export default {
  data() {
    return {
      emptySrc,
      guessLikeList: [{
        path: 'https://img.miyabaobei.com/d1/p6/2020/03/13/7c/1d/7c1db9e8ab30e27b13b6e22894f8d039822758411.jpg@base@tag=imgScale&w=500&q=90',
        title: '爱他美 【保税仓发货 闪电送达 包邮包税】白金版 婴幼儿配方奶粉3段12M+  900g/罐 1罐装',
        price: '169',
      },{
        path: 'https://img.miyabaobei.com/d1/p6/2020/03/13/7c/1d/7c1db9e8ab30e27b13b6e22894f8d039822758411.jpg@base@tag=imgScale&w=500&q=90',
        title: '爱他美 【保税仓发货 闪电送达 包邮包税】白金版 婴幼儿配方奶粉3段12M+  900g/罐 1罐装',
        price: '169',
      },{
        path: 'https://img.miyabaobei.com/d1/p6/2020/03/13/7c/1d/7c1db9e8ab30e27b13b6e22894f8d039822758411.jpg@base@tag=imgScale&w=500&q=90',
        title: '爱他美 【保税仓发货 闪电送达 包邮包税】白金版 婴幼儿配方奶粉3段12M+  900g/罐 1罐装',
        price: '169',
      },{
        path: 'https://img.miyabaobei.com/d1/p6/2020/03/13/7c/1d/7c1db9e8ab30e27b13b6e22894f8d039822758411.jpg@base@tag=imgScale&w=500&q=90',
        title: '爱他美 【保税仓发货 闪电送达 包邮包税】白金版 婴幼儿配方奶粉3段12M+  900g/罐 1罐装',
        price: '169',
      }]
    }
  },
  components: {
    GuessLike
  },
  methods: {
    goCheckGoods() {
      this.$router.push('/home')
    }
  }
}
</script>

<style lang="less" scoped>
.cartTitle {
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #eee;
  padding-top: .2rem;
  padding-bottom: .2rem;
  color: #333;
  font-size: 22px;
}
.emptyCart {
  width: 100%;
  text-align: center;
  img {
    width: 70%;
  }
  .btn {
    margin:0 auto .8rem auto;
    width: 35%;
    background: #d84f48;
    color: #fff;
    text-align: center;
    font-size: 18px;
    border-radius: .5rem;
    height: 1.2rem;
    line-height: 1.2rem;
  }
}
.add {
  width: 100%;
  height: 2.5rem;
}
</style>




