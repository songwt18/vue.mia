<template>
  <div class='mspros'>
      <div class="pros" v-for='(item,index) in msList' :key=index>
          <div class="proImg">
              <img :src=item.path alt="">
          </div>
          <div class="proContent">
              <div class="contentTitle">
                  {{item.title}}
              </div>
              <div class="contentDesc">
                  {{item.desc}}
              </div>
              <div class="contentProgress">
                  <div class="saleProgress" ref="saleProgress" :style="{'--myWidth':item.saleMount/item.amountNum*200 + 'px'}"></div>
                  <div class="saleCount">
                      已抢{{item.saleMount/item.amountNum*100 | dataFormg}}%
                  </div>
              </div>
              <div class="price">
                  <span class="newPrice">￥{{item.newPrice}}</span>
                  <span class="oldPrice">￥{{item.oldPrice}}</span>
              </div>
          </div>
          <div class="goBuy">
              {{buyStatus}}
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            msList: [{
                path: 'http://img.miyabaobei.com/d1/p6/2020/10/21/2b/19/2b19024c3d9fe22aa5fdc5bfc70b084f647093017.jpg',
                title: '蓝胖子高钙全脂两罐',
                desc: '蓝胖子高钙全脂两罐',
                oldPrice: '299',
                newPrice: '189',
                saleMount: 30,
                amountNum: 200,
            },{
                path: 'http://img.miyabaobei.com/d1/p6/2020/07/16/9a/0a/9a0a0f268b501af22e6603a3148566fd960526914.jpg',
                title: '澳爱白金3段900g/罐',
                desc: '澳洲奶源，天然无污染',
                oldPrice: '359',
                newPrice: '249',
                saleMount: 125,
                amountNum: 200,
            },{
                path:'http://img.miyabaobei.com/d1/p6/2020/09/16/f3/f8/f3f8e7eaf625b5b6411758449d41e10d332576213.jpg',
                title: '玛丽小羊100%桑蚕丝秋冬加厚被子',
                desc: '优选中长丝 轻若无感 暖似阳春',
                oldPrice: '499',
                newPrice: '329',
                saleMount: 36,
                amountNum: 200,
            },{
                path:'http://img.miyabaobei.com/d1/p6/2020/08/31/aa/f5/aaf586dbbf18f8ab428cd38df97d0fbf600053531.jpg',
                title: '口味清淡好吸收',
                desc: '新加坡版美素佳儿3段900克',
                oldPrice: '259',
                newPrice: '159',
                saleMount: 60,
                amountNum: 200,
            },{
                path:'http://img.miyabaobei.com/d1/p6/2020/12/07/7d/ec/7dec599d069244aa11b44e201f8ae17f278222214.jpg',
                title: '韩束玻尿酸臻润活肤礼盒',
                desc: '玻尿酸补水保湿护肤套装',
                oldPrice: '399',
                newPrice: '319',
                saleMount: 90,
                amountNum: 200,
            }],
            buyStatus: '马上抢'
        }
    },
    mounted() {

    },
    methods: {
    },
    filters: {
        dataFormg(msg){
            return msg.toFixed(1)
        }
    }
}
</script>

<style lang="less" scoped>
.mspros {
  .pros {
    display:flex;
    background-color: #fff;
    height: 7rem;
    padding: .25rem 0;
    position: relative;
    .goBuy {
        position: absolute;
        background: linear-gradient(to right,#ed6c40,#d84f48);
        box-shadow: 1px 1px 1px rgba(0,0,0,.3);
        border-radius: .8rem;
        height: 1rem;
        line-height: 1rem;
        padding: .1em .4rem;
        text-align: center;
        font-size: 16px;
        color: #fff;
        right: .5rem;
        bottom: .5rem;
        z-index: 99;
    }
    .proImg {
        width: 38%;
        position: relative;
        img {
            width: 80%;
            height: 80%;
            position: absolute;
            top: 50%;
            left: .5rem;
            transform: translateY(-50%);
        }
    }

    .proContent {
        width: 62%;
      .contentTitle {
          width: 100%;
          font-size: 20px;
          margin-top: .25rem;
          font-weight: bold;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
      }

      .contentDesc {
          font-size: 16px;
          color: #666;
          margin-bottom: 2rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
      }

      .contentProgress {
          background-color: #f7dfbf;
          border-radius: .5rem;
          height: 1rem;
          width: 8rem;
          position: relative;
        .saleProgress {
          background-color: #f2ab55;
          border-radius: .5rem;
          height: 1rem;
          width: var(--myWidth) !important;
        }
        .saleCount {
            position: absolute;
            height: 1rem;
            line-height: 1rem;
            left: 0rem;
            top: 0;
            color: #ffffff;
            font-size: 14px;
            padding-left: .5rem;
        }
      }

      .price {
        .newPrice {
            color: #d84f48;
            font-weight: bold;
            font-size: 26px;
        }

        .oldPrice {
            font-size: 16px;
            text-decoration: line-through;
            color: #ababab;
        }
      }
    }
  }
}
</style>