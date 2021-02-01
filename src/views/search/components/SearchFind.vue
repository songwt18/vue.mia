<template>
  <div class="find">
      <search-title>
          <div slot="icon">
              <div class="iconfont icon-yanjing-kejian"> 搜索发现</div>
          </div>
      </search-title>
      <search-item v-for="(item,index) in searchList" :key="index" @click.native="clickItem(item)">{{item}}</search-item>
  </div>
</template>

<script>
import SearchTitle from './SearchTitle'
import SearchItem from './SearchItem'
export default {
    data() {
        return {
            searchList: ['雀氏','奶粉','花王','植护','抽纸','水杯','礼盒','保温杯','奶瓶']
        }
    },
    components: {
        SearchTitle,
        SearchItem
    },
    methods: {
        clickItem(item) {
            this.$emit('clickItem',item)
        }
    },
}
</script>

<style>

</style>