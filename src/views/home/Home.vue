<template>
  <div class="home">
      <top-search/>
      <Scroll
        class="wrapper"
        ref="scroll"
        @scroll="getPosition"
        :probeType=3
      >
        <top-swiper/>
        <home-class/>
        <home-news/>
        <home-discount/>
        <home-bt/>
        <home-ms/>
        <home-tm/>
      </Scroll>
  </div>
</template>

<script>
import Scroll from 'components/scroll/Scroll.vue'
import TopSearch from './components/TopSearch'
import TopSwiper from './components/TopSwiper'
import HomeClass from './components/HomeClass'
import HomeNews from './components/HomeNews'
import HomeDiscount from './components/HomeDiscount'
import HomeBt from './components/HomeBt'
import HomeMs from './components/HomeMs'
import HomeTm from './components/HomeTm'
export default {
  components: {
    Scroll,
    TopSearch,
    TopSwiper,
    HomeClass,
    HomeNews,
    HomeDiscount,
    HomeBt,
    HomeMs,
    HomeTm
  },
  methods: {
    getPosition() {
      // 获取当前滚动距离
      // console.log(position)
    }
  },
}
</script>

<style lang="less" scoped>
.home {
  position: relative;
  height: 100vh;
  .wrapper {
    top: 2.45rem;
    bottom: 2.5rem;
    left: 0;
    right: 0;
    overflow: hidden;
    position: absolute;
  }
}
</style>