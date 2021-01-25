<template>
  <div class="rightCate">
      <Scroll
        class="wrapper"
        ref="scroll">
          <div class="content-right">
            <div class="right-item-wrapper">
                <div class="right-item" v-for="(item,index) in prosList" :key="index">
                    <div class="item-title">{{item.title}}</div>
                    <div class="detail-wrapper">
                        <div class="item-detail" v-for="(item1,index1) in item.pros" :key="index1"  @click="clickItem(item1)">
                            <div class="item-banner">
                                <img :src=item1.banner_image alt="">
                            </div>
                            <div class="item-desc">{{item1.c_name}}</div>
                        </div>
                    </div>
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
    methods: {
        clickItem(item1) {
            console.log(item1.p_id)
        }
    },
    data() {
        return {
            prosList:[{
               title: '',
               pros: [{
                    banner_image:'https://img.miyabaobei.com/d1/p6/2020/11/20/75/62/75629fe24b6c5afe73835b05ad4379ab504762445.jpg',
                    p_id:'1001',
                    c_name: ''
               }]
            },{
                title: '兔头妈妈甄选',
                pros: [{
                    banner_image:'https://img.miyabaobei.com/d1/p5/2017/08/30/8e/77/8e77a8b9be595c9e1ab588af39ee320e655911217.jpg',
                    p_id: '1002',
                    c_name: '纸尿裤',
                },{
                    banner_image:'https://img.miyabaobei.com/d1/p6/2019/03/21/44/d9/44d9468e1e0ad717b0dff80e5d1d9941658912916.jpg',
                    p_id: '1003',
                    c_name: '纸品湿巾',
                },{
                    banner_image:'https://img.miyabaobei.com/d1/p6/2020/11/19/ab/bc/abbce79cac10dc2dd42fe77963783234771953020.jpg',
                    p_id: '1004',
                    c_name: '卫生巾',
                },{
                    banner_image:'https://img.miyabaobei.com/d1/p6/2020/11/19/11/5c/115cf3c65bf08ca30cb3db5efd6b55f1813101955.png',
                    p_id: '1005',
                    c_name: '婴儿洗护',
                },{
                    banner_image:'https://img.miyabaobei.com/d1/p6/2020/11/19/49/d8/49d857455261ddea17a04816f5197add819728644.png',
                    p_id: '1006',
                    c_name: '洗发护发',
                },{
                    banner_image:'https://img.miyabaobei.com/d1/p5/2017/10/11/7a/36/7a36f32037f7fe8725ac427396aef5c6004948732.jpg',
                    p_id: '1007',
                    c_name: '宝宝清洁',
                },{
                    banner_image:'https://img.miyabaobei.com/d1/p6/2020/11/19/b7/63/b763569b67802b2ff5ca2983124d96f8826283821.png',
                    p_id: '1008',
                    c_name: '孕妇护肤',
                },{
                    banner_image:'https://img.miyabaobei.com/d1/p6/2020/11/19/8b/2e/8b2e2b9aede9669620e4b6fe37b7dbd0836316786.jpg',
                    p_id: '1009',
                    c_name: '用品玩具',
                },{
                    banner_image:'https://img.miyabaobei.com/d1/p5/2018/10/08/a9/f3/a9f39e312ab2066e85d2afb83475a704900447875.jpg',
                    p_id: '1010',
                    c_name: '辅食',
                }]
            },{
                title: '其他品牌',
                pros: [{
                    banner_image:'https://img.miyabaobei.com/d1/p6/2019/03/13/b6/31/b63103b2fea68ea521d4900e1d10f9c3594448765.jpg',
                    p_id:'2001',
                    c_name: '法蔓蘭'
                },{
                    banner_image:'https://img.miyabaobei.com/d1/p6/2020/12/30/50/15/501552be23836fb36364303e3abb0757224775109.jpg',
                    p_id:'2002',
                    c_name: '优培农场'
                },{
                    banner_image:'https://img.miyabaobei.com/d1/p6/2019/03/21/14/64/1464de231d082198bb9ae9c1643ffe88654257931.png',
                    p_id:'2003',
                    c_name: '沛多力'
                },{
                    banner_image:'https://img.miyabaobei.com/d1/p6/2020/07/01/ad/15/ad1583807b4de190938804ae0d2c8683881806498.jpg',
                    p_id:'2004',
                    c_name: '来点花样'
                },{
                    banner_image:'https://img.miyabaobei.com/d1/p6/2019/03/21/db/d9/dbd9897ed6d6e9d245ae3403e18703a2675597370.png',
                    p_id:'2005',
                    c_name: '五个小卡车'
                },{
                    banner_image:'https://img.miyabaobei.com/d1/p6/2019/03/22/b4/6f/b46f5b1a22696485c80851ada78b9a80351611867.png',
                    p_id:'2006',
                    c_name: '蜜芽衍生品'
                }]
            }]
        }
    }
}
</script>

<style lang="less" scoped>
.rightCate {
    position: relative;
    height: 100vh;
    .wrapper {
        overflow: hidden;
        position: absolute;
        left: 0; 
        right: 0; 
        top: 2.5rem; 
        bottom: 2.5rem;
        .content-right {
            height:100%;
            background: #fff;
            padding: 0 .5rem 0 .5rem;
            .right-item-wrapper {
                .right-item {
                    .item-title {
                        color: #333;
                        font-size: 18px;
                        font-weight: bold;
                        padding: .5rem .2rem;
                    }

                    .detail-wrapper {
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: space-around;
                        .item-detail {
                            flex: 33%;
                            .item-banner {
                                width: 100%;
                                height: 4rem;
                                display: flex;
                                align-items: center;
                                img {
                                    width: 95%;
                                    height: 90%;
                                    margin: 0 auto;
                                }
                            }
                            .item-desc {
                                color: #777;
                                font-size: 14px;
                                text-align: center;
                            }
                        }
                        .item-banner:nth-last-child {
                            width: 33%;
                        }
                    }
                }
            }
        }
    }
}
</style>