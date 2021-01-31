<template>
  <div id="contentTabbar" v-show="ifUse">
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
    data() {
        return {
            links:[
                ['home','首页'],
                ['categories','分类'],
                ['cart','购物车'],
                ['profile','我的'],
            ]
        }
    },
    components: {
        TabBar,
        TabBarItem
    },
    created() {
        console.log(this.$route.path)
    },
    computed: {
        ifUse(){
            let path = this.$route.path.substr(1)
            return this.links.find(link => (link[0] === path))
        }
    }
}
</script>

<style>

</style>