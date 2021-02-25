<template>
  <div>
      <result-input></result-input>
      <search-condition :goodCondition="goodCondition"></search-condition>
      <search-goods :goodList="goodList"></search-goods>
  </div>
</template>

<script>
import ResultInput from './ResultInput'
import SearchCondition from './SearchCondition'
import SearchGoods from 'views/goods/SearchGoods'
export default {
    data() {
        return {
            goodList: [{
                goodsId:'001',
                img: 'https://img.miyabaobei.com/d1/p6/2020/09/14/26/7a/267a6644410c9145758465550d59ed95795372632.jpg@base@tag=imgScale&w=500&q=90',
                title: 'a2 【品牌授权】PLATINUM 婴幼儿奶粉 4段（3-6岁）900g/罐 4段 3-14岁 900g 1罐装',
                oldPrice: '260',
                newPrice: '210',
            },{
                goodsId:'002',
                img: 'https://img.miyabaobei.com/d1/p6/2020/03/13/7c/1d/7c1db9e8ab30e27b13b6e22894f8d039822758411.jpg@base@tag=imgScale&w=500&q=90',
                title: '爱他美 【保税仓发货 闪电送达 包邮包税】白金版 婴幼儿配方奶粉3段12M+  900g/罐 1罐装',
                oldPrice: '390',
                newPrice: '260',
            }],
            goodCondition: [{
                ctype:'分类',
                citem:[{
                    name: '婴幼儿牛奶粉'
                },{
                    name: '婴幼儿羊奶粉'
                },{
                    name: '成长奶粉'
                },{
                    name: '孕产妇奶粉'
                },{
                    name: '蛋白粉/牛初乳'
                }]
            },{
                ctype:'价格',
                citem:[{
                    name: '16-300'
                },{
                    name: '310-600'
                },{
                    name: '616-905'
                },{
                    name: '910-1220'
                },{
                    name: '1236-1276'
                }]
            },{
                ctype:'包装',
                citem:[{
                    name: '箱装'
                },{
                    name: '罐装'
                },{
                    name: '盒装'
                },{
                    name: '袋装'
                }]
            },{
                ctype:'原产地',
                citem:[{
                    name: '新西兰'
                },{
                    name: '中国'
                },{
                    name: '匈牙利'
                },{
                    name: '丹麦'
                },{
                    name: '新加坡'
                }]
            }]
        }
    },
    components: {
        ResultInput,
        SearchCondition,
        SearchGoods
    },
}
</script>

<style lang="less" scoped>
 
</style>