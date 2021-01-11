<template>
  <div>
      <top-search/>
      <top-swiper/>
      <home-class/>
      <home-discount/>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
  </div>
</template>

<script>
import TopSearch from './components/TopSearch'
import TopSwiper from './components/TopSwiper'
import HomeClass from './components/HomeClass'
import HomeDiscount from './components/HomeDiscount'
export default {
  components: {
    TopSearch,
    TopSwiper,
    HomeClass,
    HomeDiscount
  },
}
</script>

<style lang="less" scoped>

</style>