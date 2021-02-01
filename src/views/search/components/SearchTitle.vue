<template>
  <div class="search-title">
      <div class="icon">
          <slot name="icon">最近搜索</slot>
      </div>
      <div class="btn">
          <slot name="btn"></slot>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.search-title {
    box-sizing: border-box;
    padding: .5rem;
    width: 100%;
    display: flex;
  .icon {
      flex: 2;
      color: #999;
  }
  .btn {
      flex: 5;
      color: #8893a4;
      text-align: right;
  }
}
</style>