<template>
  <div class="condition-item" @click="conditionClick">
      <div class="item-wrapper">
            <div class="item" v-for="(item,index) in goodCondition[conditionIndex].citem" :key="index" @click="itemClcik(item)">
                {{item.name}}
            </div>
      </div>
  </div>
</template>

<script>
export default {
    props: ['goodCondition','conditionIndex'],
    data() {
        return {
            ifShowItems: true,
        }
    },
    methods: {
        itemClcik(item) {
            console.log(item)
            this.$emit('itemClick',item)
        },
        conditionClick() {
            this.$emit('conditionWrapperClick')
        }
    },
}
</script>

<style lang="less" scoped>
.condition-item {
    background: rgba(1,1,1,.6);
    .item-wrapper {
        background: #fff;
        padding: .5rem;
        overflow: hidden;
        .item {
            font-size: 20px;
            float: left;
            width: 50%;
        }
    }
}
</style>