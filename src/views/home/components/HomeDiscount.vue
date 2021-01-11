<template>
  <div class="discount">
      <div class="disTitle">
          <span class="t1">每日特惠&nbsp;</span>
          <span class="t2">买到就是赚到</span>
      </div>
      <div class="disPro clearfix">
          <div class="proItem" v-for="(item,index) in countList" :key="index">
              <div class="itemTitle">
                  {{item.title}}
              </div>
              <div class="itemDesc">
                  {{item.desc}}
              </div>
              <div class="itemImg">
                  <img src="~assets/img/black.png" alt="">
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            countList:[
                {
                    id:1,
                    title:'新品首发',
                    desc:'独家全球发布',
                    img:'../../../'
                },
                {
                    id:2,
                    title:'买赠狂欢',
                    desc:'独家全球发布',
                    img:''
                },
                {
                    id:3,
                    title:'福利星期五',
                    desc:'独家全球发布',
                    img:''
                },
                {
                    id:4,
                    title:'超级工厂',
                    desc:'独家全球发布',
                    img:''
                },
                {
                    id:5,
                    title:'品牌放价',
                    desc:'独家全球发布',
                    img:''
                },
            ]
        }
    }
}
</script>

<style lang="less" scoped>
.discount {
    // background-color: rosybrown;
    width: 95%;
    margin: .3rem auto;
    .disTitle {
        margin-bottom: .6rem;
        margin-top: .6rem;
        .t1 {
            font-size: 22px;
            color: #000;
            font-weight: 500;
        }
        .t2 {
            font-size: 16px;
            color: #999;
        }
    }
    .disPro {
        width: 100%;
        text-align: center;
        // overflow: hidden;
        .proItem:nth-child(1){
            background-color: #fdf1ef;
            height: 10rem;
            margin-right: .15rem;
        }
         .proItem:nth-child(4){
             margin-right: .15rem;
         }
        .proItem {
            float: left;
            width: 49%;
            background-color: #fafafa;
            position: relative;
            height: 5rem;
            border-radius: 15px;
            padding: .3rem;
            box-sizing: border-box;
            margin-bottom: .3rem;
            .itemTitle {
                font-size: 22px;
                color: #000;
                position: relative;
                z-index: 1;
            }
            .itemDesc {
                font-size: 16px;
                color: #999;
                position: relative;
                z-index: 1;
            }
            .itemImg {
                width: 100%;
                img {
                    width: 70%;
                    height: 70%;
                    position: absolute;
                    right: 0;
                    bottom: 0;
                }
            }
        }
    }
}
.clearfix:before, .clearfix:after {
    content: '';
    display: table;
}
.clearfix:after {
    clear: both
}
.clearfix {
    *zoom: 1;
}
</style>