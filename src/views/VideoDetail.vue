<template>
  <section>
    <div class="head">
      <van-icon name="arrow-left" size="24px" tag="span" @click="back"/>
    </div>
    <van-row type="flex" justify="center" algin="center" class="top-head">
      <van-icon name="play-circle-o" size="69px" tag="span"/>
    </van-row>

    <van-row type="flex" justify="space-between" class="btn-box">
      <van-col>
        <van-row type="flex" algin="center">
          <van-icon name="comment-o" tag="span"/>
          <span class="message">12345</span>
        </van-row>
      </van-col>
      <van-col>
        <van-icon name="star-o" tag="span"/>
        <van-icon name="upgrade" tag="span" class="download"/>
        <van-icon name="bars" tag="span"/>
        <van-icon name="share" tag="span"/>
      </van-col>
    </van-row>
    <van-cell title="肌肉激活" label="无器械 13分钟" size="large"/>
    <van-cell title="7次训练">
      <van-row type="flex" algin="center" justify="end">
        <van-icon name="comment-o" tag="span" size="16px"/>
        <span style="font-size: 12px;line-height: 18px;margin-left: 5px" @click="allShow=true">全部</span></van-row>
    </van-cell>
    <swiper class="swiper-videos" :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide class="swiper-slide">
        <div>
          <img src="http://www.dcloud.io/hellomui/images/shuijiao.jpg" alt="">
          <p>Day1:下肢训练1</p>
          <p>18分钟</p>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <div>
          <img src="http://www.dcloud.io/hellomui/images/shuijiao.jpg" alt="">
          <p>Day1:下肢训练1</p>
          <p>18分钟</p>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <div>
          <img src="http://www.dcloud.io/hellomui/images/shuijiao.jpg" alt="">
          <p>Day1:下肢训练1</p>
          <p>18分钟</p>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <div>
          <img src="http://www.dcloud.io/hellomui/images/shuijiao.jpg" alt="">
          <p>Day1:下肢训练1</p>
          <p>18分钟</p>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <div>
          <img src="http://www.dcloud.io/hellomui/images/shuijiao.jpg" alt="">
          <p>Day1:下肢训练1</p>
          <p>18分钟</p>
        </div>
      </swiper-slide>
    </swiper>
    <div class="bottom-box">
      <van-cell title="7131人训练">
        <van-row type="flex" algin="center" justify="end"></van-row>
        <van-icon name="arrow" tag="span" size="16px" slot="right-icon" style="line-height: 24px"/>
      </van-cell>
      <van-cell title="装备:瑜伽套装" class="bottom-item">
        <van-icon name="arrow" tag="span" size="16px" slot="right-icon" style="line-height: 24px"/>
      </van-cell>
    </div>
    <van-popup v-model="allShow" position="bottom">
      <div class="all-box">
        <div class="all-head">
          <van-cell-group >
            <van-cell title="全部训练">
              <van-icon name="cross" tag="span" size="16px" slot="right-icon" style="line-height: 24px"/>
            </van-cell>
          </van-cell-group>
        </div>
        <div class="all-list">
          <van-list
            v-model="loading"
            :finished="finished"
            :error.sync="error"
            finished-text="没有更多了"
            error-text="请求失败，点击重新加载"
            @load="onLoad"
          >
            <div class="video-list-item"  v-for="item in list" :key="item">
              <img src="http://www.dcloud.io/hellomui/images/shuijiao.jpg" alt="">
              <div class="video-list-item-right">
                <p>胸部训练</p>
                <p>哑铃</p>
                <van-row  gutter="10">
                  <van-col >难度</van-col>
                  <van-col style="margin-top: 3px">
                    <van-rate
                      v-model="value"
                      :count="3"
                      color="#f44"
                      icon="fire"
                      void-icon="fire"
                      void-color="#eee"
                      :size="14"
                    />
                  </van-col>
                  <van-col style="margin-top: 4px; font-size: 12px">10:20</van-col>
                </van-row>
              </div>
            </div>

          </van-list>
        </div>
      </div>

    </van-popup>
  </section>
</template>

<script>
  export default {
    name: "VideoDetail",
    data() {
      return {
        allShow: false,
        swiperOption: {
          slidesPerView: 4,
          centeredSlides: true,
        },

        list: [],
        loading: false,
        finished: false,
        error: false,
        value: 2
      }
    },
    methods: {
      back(){
        this.$router.go(-1);
      },
      onLoad() {
        this.error = true;
        // 异步更新数据
        setTimeout(() => {
          for (let i = 0; i < 10; i++) {
            this.list.push(this.list.length + 1);
          }
          // 加载状态结束
          this.loading = false;

          // 数据全部加载完成
          if (this.list.length >= 40) {
            this.finished = true;
          }
        }, 500);
      }
    }
  }
</script>

<style scoped>
  .head{
    position: fixed;
    top: 15px;
    left: 15px;
    background: transparent;
  }
  .top-head {
    height: 200px;
    background: #EEEEEE;
  }

  .top-head span {
    line-height: 200px;
  }

  .btn-box {
    height: 38px;
    border-bottom: 1px solid #BBBBBB;
  }

  .btn-box span {
    margin-left: 15px;
    line-height: 38px;
  }

  .btn-box .message {
    font-size: 12px;
    margin-left: 5px;
  }

  .btn-box span:last-of-type {
    margin-right: 15px;
  }

  .download {
    transform: rotate(180deg);
  }

  .swiper-videos {
    margin-left: -195px;
  }

  .swiper-slide {
    margin-right: 10px;
  }

  .swiper-slide img {
    height: 60px;
    width: 140px;
  }

  .swiper-slide p:first-of-type {
    height: 46px;
    line-height: 36px;
    font-size: 14px;
  }

  .swiper-slide p:last-of-type {
    height: 30px;
    line-height: 30px;
    font-size: 12px;
  }

  .bottom-box {
    background: #EEEEEE;
    padding: 10px 0;
  }

  .bottom-item {
    margin-top: 10px;
  }
  .all-head{
  }
  .all-list {
    height: 420px;
  }

  .video-list-item {
    display: flex;
    height: 94px;
    align-items: center;
    padding: 0 15px;
    font-size: 14px;
    border-bottom: 1px solid #BBBBBB;
  }

  .video-list-item > img {
    height: 70px;
    width: 80px;
  }
  .video-list-item-right{
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 10px;
  }
</style>
