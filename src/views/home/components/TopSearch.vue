<template>
  <div class="top-search" :class="{showImage:!showImg}">
      <div class="search-input" @click="toSearch">
          <div class="input-icon iconfont icon-search"></div>
          <div class="input-text">学习机</div>
      </div>
      <div class="search-msg iconfont icon-message2"></div>
  </div>
</template>

<script>
export default {
    props: {
        showImg: {
            type: Boolean,
            default: true,
        }
    },
    methods: {
        toSearch() {
            // 跳转到搜索页面
            this.$router.push('/search')
        }
    }
}
</script>

<style lang="less" scoped>
.top-search {
    height: 2.45rem;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    .search-input {
        display: flex;
        flex: 6;
        margin: 0.4rem;
        border-radius: 1rem;
        background-color: rgba(255, 255, 255);
        .input-icon {
            flex: 1;
            line-height: 1.65rem;
            text-align: center;
            font-size: 30px;
            color: #999;
        }
        .input-text {
            flex: 6;
            text-align: left;
            line-height: 1.65rem;
            font-size: 18px;
            color: #999;
        }
    }
    .search-msg {
        flex: 1;
        text-align: center;
        font-size: 30px;
        line-height: 2.45rem;
        color: #ffffff;
    }
}
.showImage {
    background-color: #d84f48;
}
</style>