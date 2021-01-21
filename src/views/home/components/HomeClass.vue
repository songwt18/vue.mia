<template>
  <div class="homeClass">
      <div class="homeClassInner">
      <div class="itemclass iconfont icon-muying-naiping">
          <div class="itemtext">宝宝用品</div>
      </div>
      <div class="itemclass iconfont icon-huangguan2">
          <div class="itemtext">独代品牌</div>
      </div>
      <div class="itemclass iconfont icon-meizhuang">
          <div class="itemtext">美妆护肤</div>
      </div>
      <div class="itemclass iconfont icon-fuzhuang">
          <div class="itemtext">服饰鞋包</div>
      </div>
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.homeClass{
    position: relative;
    width: 95%;
    margin: 0 auto;
    height: 3rem;
    .homeClassInner {
        position: absolute;
        display: flex;
        width: 100%;
        height: 3rem;
        border-radius: 25px;
        box-shadow: 0 2px 2px rgba(0, 0, 0, .3);
        background-color: #fff;
        top: 0;
        z-index: 9;
        .itemclass{
            flex: 1;
            font-size: 30px;
            text-align: center;
            color: #d84f48;
            padding-top: .25rem;
            .itemtext{
                font-size: 16px;
                color: #000;
                font-weight: bold;
            }
        }
    }
}

</style>