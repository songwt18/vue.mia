<template>
  <div  v-if="ifShow">
      <search-title>
          <div slot="icon">
              <div class="iconfont icon-sort"> 最近搜索</div>
          </div>
          <div slot="btn">
              <div class="iconfont icon-shanchu"  @click="empty"> 清空</div>
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
            searchList: [],
            ifShow: false
        }
    },
    components: {
        SearchTitle,
        SearchItem
    },
    methods: {
        empty() {
            this.searchList = []
            localStorage.clear();
            this.ifShow = false;
            this.$emit('clearHis',this.ifShow)
        },
        clickItem(item) {
            this.$emit('clickItem',item)
        },
        showLocalData() {
            this.searchList = JSON.parse(localStorage.getItem('HistoryList') || '[]')
        },
    },
    created() {
        this.showLocalData()
        if(this.searchList.length!==0) {
            this.ifShow = true
        }
    },
}
</script>

<style>

</style>