<template>
  <div class="result-input">
      <div class="input">
        <div class="backBtn iconfont icon-fenxiang"  @click="back"></div>
        <div class="input-box"><input type="text"></div>
      </div>
      <div class="condition">
          <div class="condition-item" 
            v-for="(item,index) in showCondition" 
            :key="item.cid" 
            @click="conditionClick(item,index)"
            :class="conditionIndex===index?'conditionActive':''"
            >
              {{item.desc}}
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            conditionIndex: 0,
            showCondition:[{
                cid:'001',
                desc:'人气'
            },{
                cid:'002',
                desc:'销量'
            },{
                cid:'003',
                desc:'新品'
            },{
                cid:'004',
                desc:'价格'
            }]
        }
    },
    methods: {
        back() {
            this.$router.go(-1)
        },
        conditionClick(item,index) {
            this.conditionIndex = index
            console.log(item,index)
        }
    }
}
</script>

<style lang="less" scoped>
.result-input {
    .input {
        height: 2.45rem;
        line-height: 1.85rem;
        padding: .3rem .5rem;
        box-sizing: border-box;
        display: flex;
    .backBtn {
        flex: 1;
        text-align: center;
        font-size: 26px;
        color: #808089;
    }

    .input-box {
        flex: 9;
        input {
            border: none;
            background: none;  
            outline: none; 
            background:#f5f5f5;
            box-sizing: border-box;
            padding: .5rem .5rem .5rem 1rem;
            font-size: 20px;
            width: 95%;
            border-radius: 5rem;
            color: #b3b3b3;
        }
    }
  }
  .condition {
      padding: 0 .5rem .5rem .5rem;
      display: flex;
      border-bottom: .1rem solid #f5f5f5;
    .condition-item {
        flex: 1;
        text-align: center;
        font-size: 20px;
    }
  }
}
.conditionActive {
    color: #d84f48;
}
</style>