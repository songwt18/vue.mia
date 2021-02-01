<template>
  <div class="search">
      <search-input :searchItem="searchItem" :ifShowHis="ifShowHis"></search-input>
      <search-history @clickItem="clickItem" @clearHis="clearHis"></search-history>
      <search-find @clickItem="clickItem"></search-find>
      <search-class @clickItem="clickItem"></search-class>
  </div>
</template>

<script>
import SearchInput from './components/SearchInput'
import SearchHistory from './components/SearchHistory'
import SearchFind from './components/SearchFind'
import SearchClass from './components/SearchClass'
export default {
  data() {
    return {
      searchItem: '',
      ifShowHis: true
    }
  },
  components: {
    SearchInput,
    SearchHistory,
    SearchFind,
    SearchClass
  },
  methods: {
    clickItem(myItem){
      this.searchItem = myItem
    },
    clearHis(ifShow){
      this.ifShowHis = ifShow
    }
  }
}
</script>

<style lang="less" scoped>
.search {
}
</style>