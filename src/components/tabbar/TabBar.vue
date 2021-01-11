<template>
  <div id="tabbar">
      <div class="tabbar-content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
#tabbar {
    height: 2.5rem;
    border-top: 1px solid #ebebeb;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    .tabbar-content {
        height: 100%;
        display: flex;
    }
}
</style>