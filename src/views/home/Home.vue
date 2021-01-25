<template>
  <div class="home">
      <div class="homeContent">
        <img src="~assets/img/home/homeBg.jpg" alt="" v-show="showImg">
        <top-search :showImg="showImg"/>
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
  data() { 
    return {
      wHeight: 0,
      showImg: true,
    }
  },
  components: {
    Scroll,
    TopSearch,
    TopSwiper,
    HomeClass,
    HomeNews,
    HomeDiscount,
    HomeBt,
    HomeMs,
    HomeTm,
  },
  methods: {
    // 监听better-scroll的滚动距离
    getPosition(position) {
      if(position.y < 0) {
        this.showImg = false
      }else{
        this.showImg = true
      }
    }
  },
  created() {
  }
}
</script>

<style lang="less" scoped>
.home {
  position: relative;
  height: 100vh;
  .homeContent {
    img {
      width: 100%;
    }
    .wrapper {
      top: 2.45rem;
      bottom: 2.5rem;
      left: 0;
      right: 0;
      overflow: hidden;
      position: absolute;
      .addDiv {
        height: 2.5rem;
      }
    }
  }
}
</style>