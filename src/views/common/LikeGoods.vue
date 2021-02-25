<template>
  <div class="like-goods">
      <div class="goodsImg">
          <slot name="img"></slot>
          <!-- <img src="https://img.miyabaobei.com/d1/p6/2020/03/13/7c/1d/7c1db9e8ab30e27b13b6e22894f8d039822758411.jpg@base@tag=imgScale&w=500&q=90" alt=""> -->
      </div>
      <div class="goodsTitle">
          <slot name="title"></slot>
      </div>
      <div class="goodsOther">
          <div class="goodsPrice">
              <slot name="price"></slot>
          </div>
          <div class="goodsBuy">
              <span class="buyBtn iconfont icon-CartOutline" @click="goodsBuy"></span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    methods: {
        goodsBuy() {
            console.log('跳转至商品详情页')
        }
    }
}
</script>

<style lang="less" scoped>
.like-goods {
    background: #fff;
    flex: 45%;
    margin: .2rem;
    padding-bottom: .4rem;
  .goodsImg {
    width: 100%;
    img {
        width: 100%;
    }
  }

  .goodsTitle {
    font-size: 16px;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .goodsOther {
      display: flex;
      margin-top: 1rem;
      height: 1.3rem;
      line-height: 1.3rem;
    .goodsPrice {
        flex: 1;
        color: #d84f48;
        font-size: 18px;
    }

    .goodsBuy {
        flex: 1;
        text-align: right;
        padding-right: .2rem;
        .buyBtn {
            border: 1px solid #f2f2f2;
            color: #a1a1a1;
            border-radius: 50%;
            padding: .2rem;
            text-align: center;
        }
    }
  }
}
</style>