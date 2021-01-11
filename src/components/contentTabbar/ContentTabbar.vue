<template>
  <div id="contentTabbar">
      <tab-bar>
        <tab-bar-item path="/home">
            <div slot="item-icon" class="iconfont icon-home"></div>
            <div slot="item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item path="/categories">
            <div slot="item-icon" class="iconfont icon-sort"></div>
            <div slot="item-text">分类</div>
        </tab-bar-item>
        <tab-bar-item path="/cart">
            <div slot="item-icon" class="iconfont icon-gouwuche2"></div>
            <div slot="item-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item path="/profile">
            <div slot="item-icon" class="iconfont icon-wode"></div>
            <div slot="item-text">我的</div>
        </tab-bar-item>
      </tab-bar>
     
  </div>
</template>

<script>
import TabBar from '../tabbar/TabBar';
import TabBarItem from '../tabbar/TabBarItem';
export default {
    components: {
        TabBar,
        TabBarItem
    }
}
</script>

<style>

</style>