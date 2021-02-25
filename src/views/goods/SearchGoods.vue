<template>
  <div class="goods">
    <div class="goods-item" v-for="item in goodList" :key="item.goodsId">
      <div class="img">
        <img :src=item.img alt="">
      </div>
      <div class="desc">
        <div class="text">
          <span class="title">{{item.title}}</span>
        </div>
        <div class="payAbout">
          <div class="price">
            <span class="newPrice">￥{{item.newPrice}} </span>
            <span class="oldPrice"> ￥{{item.oldPrice}}</span>
          </div>
          <div class="buy-btn" @click="goBuy">
            <span>立即购买</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'goodList'
  ],
  methods: {
    goBuy() {
      console.log('gobuy')
    }
  }
}
</script>

<style lang="less" scoped>
.goods {
  .goods-item {
    display: flex;
    padding: .5rem .5rem 0 .5rem;

    .img {
      flex: 2;
      position: relative;
      img {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
      }
    }

    .desc {
      flex: 5;

      .text {
        width: 100%;
        .title {
          font-weight: bold;
          font-size: 20px;
          text-overflow:ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-box-pack: center;
          -webkit-box-align: center;
          -webkit-line-clamp:2;
          overflow: hidden;
        }
      }
      .payAbout {
        padding-top: 1.5rem;
        display: flex;
        .price {
          flex: 1;
          .newPrice {
            color: #d84f48;
            font-size: 22px;
          }
          .oldPrice {
            text-decoration: line-through;
            color: #999;
            font-size: 18px;
          }
        }

        .buy-btn {
          flex: 1;
          span {
            box-sizing: border-box;
            padding: .2rem .5rem;
            background: #d84f48;
            color: #fff;
            border-radius: 5rem;
            text-align: center;
            font-size: 18px;
            float: right;
          }
        }
      }
    }
  }
}
</style>