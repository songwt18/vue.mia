<template>
  <div class="leftCate">
      <Scroll 
        class="wrapper wrapper1"
        ref="scroll"> 
        <div class="content-left">
            <div class="left-item" :class="leftclickIndex === item.titleNum ? 'left-active':''" v-for="item in titleList" :key="item.titleNum" @click="leftClick(item)">
                <div class="itemDesc">
                    {{item.titleDesc}}
                </div>
            </div>
        </div>
      </Scroll>
  </div>
</template>

<script>
import Scroll from 'components/scroll/Scroll'

export default {
    components: {
        Scroll
    },
    data() {
        return {
            leftclickIndex: 1,
            titleList: [{
                titleNum: 1,
                titleDesc: '独家甄选',
            },{
                titleNum: 2,
                titleDesc: '独代品牌',
            },{
                titleNum: 3,
                titleDesc: '超级工厂',
            },{
                titleNum: 4,
                titleDesc: '奶粉辅食',
            },{
                titleNum: 5,
                titleDesc: '宝宝用品',
            },{
                titleNum: 6,
                titleDesc: '美妆护肤',
            },{
                titleNum: 7,
                titleDesc: '个护清洁',
            },{
                titleNum: 8,
                titleDesc: '服饰鞋包',
            },{
                titleNum: 9,
                titleDesc: '童装童鞋',
            },{
                titleNum: 10,
                titleDesc: '食品保健',
            },{
                titleNum: 11,
                titleDesc: '家居厨具',
            },{
                titleNum: 12,
                titleDesc: '玩具书籍',
            },{
                titleNum: 13,
                titleDesc: '家用电器',
            },{
                titleNum: 14,
                titleDesc: '手机数码',
            },{
                titleNum: 15,
                titleDesc: '孕产母乳',
            }],
        }
    },
    methods: {
        leftClick(item) {
            this.leftclickIndex = item.titleNum
        }
    }
}
</script>

<style lang="less" scoped>
.leftCate {
    position: relative;
    height: 100vh;
    .wrapper{
        overflow: hidden;
        position: absolute;
        left: 0; 
        right: 0; 
        top: 2.5rem; 
        bottom: 2.5rem;
        z-index: 11;
        .content-left {
            .left-item {
                height: 2rem;
                line-height: 2rem;
                text-align: center;
                box-sizing: border-box;
                color: #333;
                background-color: #f6f6f6;
                .itemDesc {
                    font-size: 20px;
                }
            }
        }
    }
}

.left-active {
    border-left: 2px solid #d84f48;
    color: #d84f48 !important;
    background: #fff !important;
}
</style>