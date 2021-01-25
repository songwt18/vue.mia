<template>
  <div class="categories">
      <!-- 顶部搜索框 -->
      <top-bar class="top-bar">
        <div class="top-search">
          <div class="search-icon iconfont icon-search">学习机</div>
        </div>
      </top-bar>
      <div class="top-bar-white"></div>
      <!-- 分类页面的内容 -->
      <categories-content></categories-content>
  </div>
</template>

<script>
import TopBar from 'components/topbar/TopBar'
import CategoriesContent from './components/CategoriesContent'
export default {
  components: {
    TopBar,
    CategoriesContent,
  },
  methods: {
  },
  mounted(){
    
  }
}
</script>

<style lang="less" scoped>
.categories {
  .top-bar {
    padding: .5rem .2rem;
    box-sizing: border-box;
    .top-search {
      height: 100%;
      width: 100%;
      background: #eee;
      border-radius: 5rem;
      .search-icon {
        font-size: 22px;
        padding-left: .5rem;
        padding-top: .1rem;
        color: #808089;
      }
    }
  }
}
</style>