<template>
  <section>
    <van-swipe :autoplay="3000" :height="200" class="van-swipe">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image"/>
      </van-swipe-item>
    </van-swipe>
    <van-row type="flex" justify="space-around" class="sub-nav-box">
      <router-link class="sub-nav" v-for="(item,index) in shoppingNavs" :key="index" :to="{path:item.url,query:{title:item.title}}">
        <figure @click='move(index)'>
          <img :src="item.imgUrl">
          <figcaption>{{item.title}}</figcaption>
        </figure>
      </router-link>
    </van-row>
    <van-cell title="精选好货" :border="false">
      <van-icon slot="right-icon" name="ellipsis" class="good-icon" />
    </van-cell>
    <swiper class="swiper-choiceness" :options="swiperOptionChoiceness" ref="mySwiper">
      <!-- slides -->
      <swiper-slide class="swiper-slide">
        <lazy-component>
          <img  v-lazy="images[0]" >
        </lazy-component>
        <!--          <img src="http://www.dcloud.io/hellomui/images/shuijiao.jpg" alt="">-->
      </swiper-slide>
      <swiper-slide class="swiper-slide"><img src="http://www.dcloud.io/hellomui/images/shuijiao.jpg" alt="">
      </swiper-slide>
      <swiper-slide class="swiper-slide"><img src="http://www.dcloud.io/hellomui/images/shuijiao.jpg" alt="">
      </swiper-slide>
      <swiper-slide class="swiper-slide"><img src="http://www.dcloud.io/hellomui/images/shuijiao.jpg" alt="">
      </swiper-slide>
    </swiper>
    <div v-for="(item,index) in data" :key="index">
      <van-cell :title="item.title" :border="false" >
        <span v-show="index!=0">更多</span>
      </van-cell>
      <van-row type="flex" justify="space-between" style="flex-wrap: wrap;padding: 0 15px;margin-top:-15px;border-bottom:20px solid #EEEEEE" >
        <van-col  v-for="(itemChild,indexChild) in item.datas" :key="indexChild"><div class="commodity-card">
          <img :src="itemChild.picture" alt="">
          <p class="van-ellipsis">{{itemChild.name}}</p>
          <p>￥{{itemChild.pricemin}}</p>
        </div></van-col>
      </van-row>
    </div>
  </section>
</template>

<script>
  export default {
    name: "Shopping",
    data(){
      return{
        data: [
          {
            title: "热门推荐",
            datas: [
              {
                "id": 1,
                "name": "女款蓝色训练T恤",
                "picturesid": null,
                "ab": null,
                "pricemin": "99",
                "pricemax": null,
                "num": null,
                "skuid": null,
                "type": null,
                "picture": "http://ft-info.fit-time.cn/ftmall_nvtlan1.jpg"
              },
              {
                "id": 2,
                "name": "男款黑色训练T恤",
                "picturesid": null,
                "ab": null,
                "pricemin": "99",
                "pricemax": null,
                "num": null,
                "skuid": null,
                "type": null,
                "picture": "http://ft-info.fit-time.cn/ftmall_nanhei.jpg"
              },
              {
                "id": 3,
                "name": "FUN运动-女款卫衣",
                "picturesid": null,
                "ab": null,
                "pricemin": "300",
                "pricemax": null,
                "num": null,
                "skuid": null,
                "type": null,
                "picture": "http://ft-info.fit-time.cn/ftmall_nvwei1.jpg"
              },
              {
                "id": 6,
                "name": "FUN运动-女款训练紧身衣(尺码偏小，建议买大)",
                "picturesid": null,
                "ab": null,
                "pricemin": "169",
                "pricemax": null,
                "num": null,
                "skuid": null,
                "type": null,
                "picture": "http://ft-info.fit-time.cn/ftmall_nvjin1.jpg"
              },
              {
                "id": 7,
                "name": "美国ON欧普特蒙乳清蛋白粉 5磅",
                "picturesid": null,
                "ab": null,
                "pricemin": "528",
                "pricemax": null,
                "num": null,
                "skuid": null,
                "type": null,
                "picture": "http://ft-info.fit-time.cn/ftmall_on_1.jpg"
              }
            ]
          },
          {
            title: "运动服饰",
            datas: [
              {
                "id": 1,
                "name": "女款蓝色训练T恤",
                "picturesid": null,
                "ab": null,
                "pricemin": "99",
                "pricemax": null,
                "num": null,
                "skuid": null,
                "type": null,
                "picture": "http://ft-info.fit-time.cn/ftmall_nvtlan1.jpg"
              },
              {
                "id": 2,
                "name": "男款黑色训练T恤",
                "picturesid": null,
                "ab": null,
                "pricemin": "99",
                "pricemax": null,
                "num": null,
                "skuid": null,
                "type": null,
                "picture": "http://ft-info.fit-time.cn/ftmall_nanhei.jpg"
              },
              {
                "id": 3,
                "name": "FUN运动-女款卫衣",
                "picturesid": null,
                "ab": null,
                "pricemin": "300",
                "pricemax": null,
                "num": null,
                "skuid": null,
                "type": null,
                "picture": "http://ft-info.fit-time.cn/ftmall_nvwei1.jpg"
              },
              {
                "id": 4,
                "name": "FUN运动-男款卫衣",
                "picturesid": null,
                "ab": null,
                "pricemin": "300",
                "pricemax": null,
                "num": null,
                "skuid": null,
                "type": null,
                "picture": "http://ft-info.fit-time.cn/ftmall_nanwei1.jpg"
              },
              {
                "id": 5,
                "name": "FUN运动-男款训练紧身衣",
                "picturesid": null,
                "ab": null,
                "pricemin": "169",
                "pricemax": null,
                "num": null,
                "skuid": null,
                "type": null,
                "picture": "http://ft-info.fit-time.cn/ftmall_nanjin1.jpg"
              },
              {
                "id": 6,
                "name": "FUN运动-女款训练紧身衣(尺码偏小，建议买大)",
                "picturesid": null,
                "ab": null,
                "pricemin": "169",
                "pricemax": null,
                "num": null,
                "skuid": null,
                "type": null,
                "picture": "http://ft-info.fit-time.cn/ftmall_nvjin1.jpg"
              }
            ]
          },
          {
            title: "运动装备",
            datas: [
              {
                "id": 7,
                "name": "美国ON欧普特蒙乳清蛋白粉 5磅",
                "picturesid": null,
                "ab": null,
                "pricemin": "528",
                "pricemax": null,
                "num": null,
                "skuid": null,
                "type": null,
                "picture": "http://ft-info.fit-time.cn/ftmall_on_1.jpg"
              },
              {
                "id": 8,
                "name": "ISOPURE 低碳水/零碳水健身乳清蛋白粉 3磅",
                "picturesid": null,
                "ab": null,
                "pricemin": "599",
                "pricemax": null,
                "num": null,
                "skuid": null,
                "type": null,
                "picture": "http://ft-info.fit-time.cn/ftmall_isopure1-1.jpg"
              },
              {
                "id": 9,
                "name": "ALTUS瑜伽垫",
                "picturesid": null,
                "ab": null,
                "pricemin": "79",
                "pricemax": null,
                "num": null,
                "skuid": null,
                "type": null,
                "picture": "http://ft-info.fit-time.cn/ftmall_altus2-1.jpg"
              },
              {
                "id": 10,
                "name": "ALTUS弹力带套装",
                "picturesid": null,
                "ab": null,
                "pricemin": "169",
                "pricemax": null,
                "num": null,
                "skuid": null,
                "type": null,
                "picture": "http://ft-info.fit-time.cn/ftmall_gofit_show_01.jpg"
              },
              {
                "id": 11,
                "name": "PROIRON男士高档烤漆哑铃套装20KG公斤",
                "picturesid": null,
                "ab": null,
                "pricemin": "266",
                "pricemax": null,
                "num": null,
                "skuid": null,
                "type": null,
                "picture": "http://ft-info.fit-time.cn/ftmall_proiron1-1.jpg"
              },
              {
                "id": 12,
                "name": "PROIRON家用女士海绵泡棉软体小哑铃套装",
                "picturesid": null,
                "ab": null,
                "pricemin": "171",
                "pricemax": null,
                "num": null,
                "skuid": null,
                "type": null,
                "picture": "http://ft-info.fit-time.cn/ftmall_proiron2-1.jpg"
              }
            ]
          }
        ],
        active: 0,
        images: [
          'https://img.yzcdn.cn/public_files/2017/09/05/fd08f07665ed67d50e11b32a21ce0682.jpg',
          'https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg',
          'https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg'
        ],
        shoppingNavs:[
          {title:"视频训练",imgUrl:"../../static/img/home_train_recommend_prgrams.png",url:"/video_drill"},
          {title:"训练计划",imgUrl:"../../static/img/home_train_recommend_plan.png",url:"/training_plan"},
          {title:"自由训练",imgUrl:"../../static/img/home_train_recommend_feed_st.png",url:"/drill_recommend"},
        ],
        swiperOptionChoiceness: {
          freeMode: true,
          slidesPerView: 3,
          centeredSlides: true,
        },
      }
    },
    created() {
      this.$axios({
        method: 'GET',
        url: 'http://10.8.159.34:8080/goodsshow.do'
      }).then((data) => {
        console.log(data)
      }).catch((err) => {
      })
    }
  }
</script>

<style scoped>
  section{
    padding-top: 44px;
  }
  .van-swipe img{
    width: 100%;
    height: 200px;
  }
  .sub-nav-box{
    border-bottom: 20px solid #EEEEEE;
  }
  .sub-nav {
    width: 70px;
    height: 78px;
  }

  .sub-nav figure {
    color: #101010;
    font-size: 14px;
    width: 100%;
    margin: 0;
    text-align: center;
    padding-top: 10px;
  }
  .sub-nav img{
    width: 22px;
    height: 35px;
    margin: 0 auto;
  }
  .good-icon{
    transform: rotate(90deg);
  }
  swiper-choiceness{
    height: 107px;
  }
  .swiper-slide{
    height: 107px;
    margin-right: 80px;
  }
  .swiper-choiceness img {
    width: 220px;
    height: 107px;
  }

  .swiper-choiceness {
    margin-left: -145px;
  }
  .commodity-card{
    width: 165px;
    height: 225px;
    margin-top: 15px;
  }
  .commodity-card img{
    width: 165px;
    height: 165px;
  }
  .commodity-card p:first-of-type{
    font-size: 12px;
    line-height: 17px;
    margin-top: 10px;
  }
  .commodity-card p:last-of-type{
    font-size: 16px;
    line-height: 22px;
    margin-top: 4px;
    color: #7766cc;
  }
</style>
