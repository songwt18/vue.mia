<template>
  <div id="app">
    <content-tabbar/>
     <router-view/>
  </div>
</template>

<script>
import ContentTabbar from 'components/contentTabbar/ContentTabbar';
export default {
  name: 'App',
  components: {
    ContentTabbar
  },
  mounted() {
    console.log(this.$route.path)
    if(this.$route.path.indexOf('categories')!==-1){
      console.log('1111')
    }
  }
}
</script>

<style>
@import 'assets/css/base.css';
@import 'assets/css/iconfont.css'
</style>

