<template>
  <div class="search">
      <div class="input">
          <div class="icon iconfont icon-search"></div>
          <div class="content"><input type="text" placeholder="学习机" v-model="inputText"></div>
      </div>
      <div class="cancel" @click="clickBtn">
          {{clcikBtn}}
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            inputText: '',
            clcikBtn: '取消',
            HistoryList:[]
        }
    },
    props: {
        searchItem:{
            type:String,
            default:''
        },
        ifShowHis:{
            type:Boolean,
            default:true
        }
    },
    watch: {
        inputText(newValue) {
            if(newValue) {
                this.clcikBtn = '搜索'
            }else{
                this.clcikBtn = '取消'
            }
        },
        searchItem(newValue) {
            this.inputText = newValue
        }
    },
    methods: {
        clickBtn() {
            if(this.inputText){
                this.addHistory(this.inputText)
                this.$router.push('/searchresult')
                this.HistoryList = []
                // if(!this.ifShowHis) {
                //     console.log('22')
                //     this.HistoryList = []
                // }
                return
            }else{
                this.$router.go(-1)
            }
        },
        addHistory(val) {
            if (this.HistoryList.length > 0) { // 有数据的话 判断
                if (this.HistoryList.indexOf(val) !== -1) { // 有相同的，先删除 再添加 
                    this.HistoryList.splice(this.HistoryList.indexOf(val), 1)
                    this.HistoryList.unshift(val)
                } else { // 没有相同的 添加
                    this.HistoryList.unshift(val)
                }
            } else { // 没有数据 添加
                this.HistoryList.unshift(val)
            }
            if (this.HistoryList.length > 6) { // 保留六个值
                this.HistoryList.pop()
            }
            localStorage.setItem('HistoryList', JSON.stringify(this.HistoryList))
        }
    },
    created() {
        this.HistoryList = JSON.parse(localStorage.getItem('HistoryList') || '[]')
    },
}
</script>

<style lang="less" scoped>
.search {
    display: flex;
    background: #fff;
    box-sizing: border-box;
    padding: .3rem .4rem;
    height: 2.45rem;
    line-height: 1.85rem;
    border-bottom: .05rem solid #ccc;
  .input {
    flex: 4;
    border-radius: 5rem;
    background: #eee;
    padding-left: .5rem;
    display: flex;
    .icon {
        flex: 10%;
        font-size: 24px;
        color: #808089;
    }
    .content {
        flex: 90%;
        input {
            border: none;
            background:none;  
            outline:none;  
            font-size: 22px;
            color: #b3b3b3;
        }
    }
  }

  .cancel {
    flex: 1;
    color: #545454;
    text-align: center;
    font-size: 20px;
  }
}
</style>