<template>
  <div class="tmPros">
      <div class="prosItem" v-for="(item,index) in tmList" :key="index">
          <div class="itemBanner">
              <img :src=item.banners alt="">
          </div>
          <div class="itemWrapper">
              <div class="itemPros">
                  <swiper :options="swiperOption"  ref="mySwiper">
                    <swiper-slide v-for="(item1,index1) in item.pros" :key="index1">
                        <img class="swiper-slide" :src=item1.path />
                        <div class="prostitle">
                            {{item1.title}}
                        </div>
                        <div class="prosPrice">
                            <span class="newPrice">
                                ￥{{item1.newPrice}}
                            </span>
                            <span class="oldPrice">
                                ￥{{item1.oldPrice}}
                            </span>
                        </div>
                    </swiper-slide>
                </swiper>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
// import BScroll from 'better-scroll'
export default {
    data() {
        return {
            tmList: [{
                banners:'http://img.miyabaobei.com/d1/p6/2020/12/30/2e/38/2e38eb607c9e4856695125115ccdd021925928526.jpg',
                pros:[{
                    path:'http://img.miyabaobei.com/d1/p6/2020/07/15/0d/37/0d375ea4b1813ba7e1af8168a7fdd208815603331.jpg',
                    title:'国潮鹤系列刀具套装',
                    newPrice:399,
                    oldPrice:459,
                },{
                    path:'http://img.miyabaobei.com/d1/p6/2020/07/14/8c/4f/8c4f304b858ff0525c4530daf036d1bb105159952.jpg',
                    title:'抗菌率达99%',
                    newPrice:199,
                    oldPrice:259,
                },{
                    path:'http://img.miyabaobei.com/d1/p6/2020/07/03/91/1e/911e41194fb99a548c6343c3ed3f0e88605326187.jpg',
                    title:'5秒快速磨刀，可磨剪刀',
                    newPrice:99,
                    oldPrice:139,
                },{
                    path:'http://img.miyabaobei.com/d1/p6/2020/07/10/71/dc/71dca5afc99069a0fb4e8d89e1c0695f769621516.jpg',
                    title:'不锈钢黑刃砍骨刀',
                    newPrice:499,
                    oldPrice:569,
                },{
                    path:'http://img.miyabaobei.com/d1/p6/2020/07/07/d1/f3/d1f31f0ee6479c63442f45ad060887b6134311110.jpg',
                    title:'黑刃女士切菜刀，轻巧',
                    newPrice:398,
                    oldPrice:459,
                },{
                    path:'http://img.miyabaobei.com/d1/p6/2020/07/08/4b/f9/4bf95d9ea5a9fb862d3cbd633d3ab62e796845413.jpg',
                    title:'无漆无蜡楠竹筷子',
                    newPrice:99,
                    oldPrice:128,
                }]
            },{
                banners:'http://img.miyabaobei.com/d1/p6/2020/12/28/e9/d8/e9d8a172f540da1cfbb3db71dd8e8657220622584.jpg',
                pros:[{
                    path:'http://img.miyabaobei.com/d1/p6/2020/08/13/7e/28/7e28f58491f5f3d88974d3d99ed3410f959596747.jpg',
                    title:'全棉印花被芯冬被',
                    newPrice:698,
                    oldPrice:759,
                },{
                    path:'http://img.miyabaobei.com/d1/p6/2020/07/24/fd/e4/fde4abd2c2759796c04aee0a8a7c14a7694388134.jpg',
                    title:'40支全棉格子四件套',
                    newPrice:498,
                    oldPrice:599,
                },{
                    path:'http://img.miyabaobei.com/d1/p6/2020/08/03/0d/b7/0db7aef8b3b4d9bf55086a4ddb5ca0bd460907316.jpg',
                    title:'杜邦纤维羽丝被冬被',
                    newPrice:398,
                    oldPrice:529,
                },{
                    path:'http://img.miyabaobei.com/d1/p6/2020/04/27/2b/96/2b96de8d9d6ad2c073be13ca21e6fb67533285243.jpg',
                    title:'立体羽丝绒枕一对装',
                    newPrice:398,
                    oldPrice:469,
                },{
                    path:'http://img.miyabaobei.com/d1/p6/2020/03/13/98/69/9869026c9649ce942aef4cfe14b463a0686145546.jpg',
                    title:'磨毛四件套多规格',
                    newPrice:598,
                    oldPrice:759,
                },{
                    path:'http://img.miyabaobei.com/d1/p6/2020/07/27/14/b8/14b8ec8a71ef77839efea5d8ee6553f6226439020.jpg',
                    title:'洛卡棉绣花春秋冬被',
                    newPrice:398,
                    oldPrice:489,
                }]
            },{
                banners:'http://img.miyabaobei.com/d1/p6/2020/12/30/7b/13/7b13cbe2451b51fca3c5ea8065a13c4e163573197.jpg',
                pros:[{
                    path:'http://img.miyabaobei.com/d1/p5/2018/10/24/b3/12/b3122d1b8c262d95966ee5132f229719633583142.jpg',
                    title:'十月皇后日系哺乳内衣',
                    newPrice:398,
                    oldPrice:459,
                },{
                    path:'http://img.miyabaobei.com/d1/p6/2020/04/18/66/f4/66f48fa847861d52facf9309d3b66d53981234034.jpg',
                    title:'十月皇后两件装文胸',
                    newPrice:198,
                    oldPrice:259,
                },{
                    path:'http://img.miyabaobei.com/d1/p6/2019/12/23/19/74/1974eb45ced45e31a7aaee09e2f0dc9f921318424.jpg',
                    title:'十月皇后四条装内裤',
                    newPrice:398,
                    oldPrice:439,
                },{
                    path:'http://img.miyabaobei.com/d1/p6/2020/04/18/2f/b8/2fb831d510c58e3828801b07dd3a0157010798481.jpg',
                    title:'十月皇后黑天鹅文胸',
                    newPrice:229,
                    oldPrice:369,
                },{
                    path:'http://img.miyabaobei.com/d1/p6/2020/06/20/8a/4b/8a4b7fce713694f061c448323d3c58a8419773803.jpg',
                    title:'十月皇后聚拢文胸套装',
                    newPrice:398,
                    oldPrice:459,
                },{
                    path:'http://img.miyabaobei.com/d1/p6/2020/03/15/14/c9/14c94104c5a4685d7f60552133a16214648972578.jpg',
                    title:'十月皇后性感蕾丝文胸',
                    newPrice:198,
                    oldPrice:258,
                }]
            }],
            swiperOption: {
                //可见图片张数
                slidesPerView: 3,
                // 默认选中中间一张
                centeredSlides: false,
                //无限循环
                loop: true,
                //小圆点（我此处没使用，列出供参考）
                pagination: {
                el: '.swiper-pagination',
                clickable: true
                },
                //自动轮播
                autoplay: {
                stopOnLastSlide: true
                },
                //上下按钮点击轮播效果
                navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
                }
            }
        }
    },
    mounted() {
    }
}
</script>

<style lang="less" scoped>
.tmPros {
  .prosItem {
      margin-top: 1rem;
    .itemBanner {
        width: 100%;
      img {
          width: 100%;
          vertical-align: middle;
      }
    }
    .itemWrapper {
        background-color: #fff;
        width: 100%;
        height: 6.5rem;
        position: relative;
        .itemPros {
            position: absolute;
            left: .2rem;
            right: .2rem;
            top: -1.5rem;
            bottom: .5rem;
            padding: 0 .3rem;
            img {
                vertical-align: middle;
                border-radius: .5rem;
            }
            .prostitle {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                margin: 0 .2rem;
                font-size: 16px;
                height: 1rem;
                padding-left: .5rem;
                color: #999;
            }
            .prosPrice {
                height: 1.5rem;
                line-height: 1rem;
                padding-left: .5rem;
                .newPrice {
                    font-size: 16px;
                    color: #d84f48;
                }
                .oldPrice {
                    font-size: 15px;
                    color: #999;
                    text-decoration: line-through;
                }
            }
        }
    }
  }
}
.swiper-slide{
    //   transition: 2s;
      transform: scale(0.85);
    }
//swriper自带的类名（选中时的样式）
.swiper-slide-active,.swiper-slide-duplicate-active {
    transform: scale(1.1);
}
</style>