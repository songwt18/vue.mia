<template>
  <div class="hometm">
      <div class="tmTitle iconfont icon-shizhong_f">
         <span class="tmDesc">&nbsp;限时特卖</span>
      </div>
      <tm-pros></tm-pros>
  </div>
</template>

<script>
import TmPros from './TmPros'
export default {
    components: {
        TmPros
    }
}
</script>

<style lang="less" scoped>
.hometm {
    .tmTitle {
        text-align: center;
        padding: .5rem 0 0 0;
        color: #edbcb3;
        font-size: 26px;
        .tmDesc {
            color: #000;
            font-size: 28px;
        }
    }
}
</style>