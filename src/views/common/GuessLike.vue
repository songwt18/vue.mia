<template>
  <div class="guess-like">
      <div class="title">
        <span class="icon iconfont icon-aixin"></span>
        <span class="desc"> 猜你喜欢</span>
      </div>
      <div class="goods">
        <like-goods v-for="(item,index) in guessLikeList" :key="index">
          <img slot="img" :src=item.path alt="">
          <div slot="title">{{item.title}}</div>
          <div slot="price">￥{{item.price}}</div>
        </like-goods>
      </div>
  </div>
</template>

<script>
import LikeGoods from './LikeGoods'
export default {
  props: ['guessLikeList'],
  components: {
    LikeGoods
  }
}
</script>

<style lang="less" scoped>
.guess-like {

  background: #f5f5f5;
  .title {
    width: 100%;
    text-align: center;
    .icon {
      color: #df484f;
    }
    .desc {
      font-size: 18px;
      color: #2f2f2f;
    }
  }

  .goods {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>