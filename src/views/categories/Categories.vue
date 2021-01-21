<template>
  <div>
      <Scroll
        class="wrapper"
        ref="scroll"
        @scroll="getPosition"
        :probeType=3
      >
      <h1>categories</h1>
      <h1>categories</h1>
      <h1>categories</h1>
      <h1>categories</h1>
      <h1>categories</h1>
      <h1>categories</h1>
      <h1>categories</h1>
      <h1>categories</h1>
      <h1>categories</h1>
      <h1>categories</h1>
      <h1>categories</h1>
      <h1>categories</h1>
      <h1>categories</h1>
      <h1>categories</h1>
      <h1>categories</h1>
      <h1>categories</h1>
      <h1>categories</h1>
      <h1>categories</h1>
      <h1>categories</h1>
      <h1>categories</h1>
      <h1>categories</h1>
      <h1>categories</h1>
      <h1>categories</h1>
      <h1>categories</h1>
      <h1>categories</h1>
      <h1>categories</h1>
      <h1>categories</h1>
      <h1>categories</h1>
      <h1>categories</h1>
      <h1>categories</h1>
      <h1>categories</h1>
      <h1>categories</h1>
      <h1>categories</h1>
      <h1>categories</h1>
      <h1>categories</h1>
      <h1>categories</h1>
      </Scroll>
  </div>
</template>

<script>
import Scroll from 'components/scroll/Scroll.vue'
export default {
  components: {
    Scroll
  },
  methods: {
    getPosition() {
      // 获取当前滚动距离
      // console.log(position)
    }
  },
  mounted(){
    
  }
}
</script>

<style leng="less" scoped>
.wrapper {
  background-color: red;
  height: 200px;
  overflow: hidden;
}
</style>