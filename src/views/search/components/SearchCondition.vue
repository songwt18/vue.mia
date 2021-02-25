<template>
  <div class="search-condition">
      <div class="condition">
            <div class="type" v-for="(item,index) in goodCondition" :key="index" @click="conditionClick(index)" :class="index===conditionIndex?'conditionActive':''">
                {{item.ctype}}
                <span v-if="index===conditionIndex" class="iconfont icon-arrow_up_fat"></span>
                <span v-else class="iconfont icon-arrow_down_fat"></span>
            </div>
        </div>
        <condition-item v-show="ifShowItem" class="item" :goodCondition='goodCondition' :conditionIndex='conditionIndexs' @itemClick="itemClick" @conditionWrapperClick="conditionWrapperClick"></condition-item>
    </div>
</template>

<script>
import ConditionItem from './ConditionItem'

export default {
    data() {
        return {
            ifShowItem: false,
            conditionIndex: -1,
            conditionIndexs: 0,
        }
    },
    props: [
        'goodCondition'
    ],
    methods: {
        conditionClick(index) {
            this.conditionIndex = index
            this.conditionIndexs = index
            this.ifShowItem = true
            console.log(index)
        },
        itemClick(item) {
            if(item.name !== '') {
                console.log(item.name)
                this.ifShowItem = false
                this.conditionIndex = -1
                this.conditionIndexs = 0
            }
        },
        conditionWrapperClick( ){
            this.ifShowItem = false
            this.conditionIndex = -1
            this.conditionIndexs = 0
        }
    },
    components: {
        ConditionItem
    }
}
</script>

<style lang="less" scoped>
.search-condition {
    position: relative;
    height: 100%;
    .condition {
        display: flex;
        margin-top: .2rem;
        .type {
            flex: 1;
            background: #f5f5f5;
            border-radius: .2rem;
            text-align: center;
            font-size: 20px;
            margin: .2rem .1rem;
            color: #9c9c9c;
            padding-top: .1rem;
            padding-bottom: .1rem;
        }
    }
    .item {
        position: fixed;
        z-index: 9;
        top: 6rem;
        left: 0;
        right: 0;
        bottom: 0rem;
    }
}

.conditionActive {
    color: #db4f48 !important;
    background: #fff !important;
}
</style>