<template>
  <div class="topbar">
      <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
 .topbar {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    height: 2.5rem;
    background-color: #fff;
    border-bottom: 1px solid #ccc;
 }
</style>