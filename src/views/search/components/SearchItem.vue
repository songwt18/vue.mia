<template>
  <div class="item">
      <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.item {
    margin: .2rem .3rem;
    padding: .1rem .3rem;
    border: 1px solid #ccc;
    border-radius: .5rem;
    color: #424242;
    display: inline-block;
    font-size: 18px;
}
</style>