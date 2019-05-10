<template>
  <section>
    <van-nav-bar title="户外跑步" left-arrow fixed @click-right="onRunSetClick" @click-left="onClickLeft">
      <van-icon name="arrow-left" slot="left" size="20px" color="#101010"/>
      <van-icon name="wap-nav" slot="right" size="20px" color="#101010" click="toRunClick"/>
    </van-nav-bar>
    <article>
      <van-swipe  indicator-color="white"  @change="onChange">
        <van-swipe-item>
          <div class="banner-item">自由跑</div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="banner-item"></div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="banner-item"></div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="banner-item"></div>
        </van-swipe-item>
      </van-swipe>
      <van-row type="flex" justify="space-between">
        <van-col span="6" class="statistics"><p>--</p>
          <p>Min/Km</p></van-col>
        <van-col span="6" class="statistics"><p>00:00:00</p>
          <p>Time</p></van-col>
        <van-col span="6" class="statistics"><p>0</p>
          <p>Kacal</p></van-col>
      </van-row>
    </article>
    <article>
      <van-icon name="location" tag="span" class="map-btn"/>
      <div class="go-btn"><p>GO</p>
        <p>开始</p></div>
    </article>
  </section>
</template>

<script>
  export default {
    name: "Running",
    methods:{
      onClickLeft(){
        this.$router.go(-1)
      },
      onRunSetClick(){
        this.$router.push("/running_setting")
      },
      onChange(index){
        this.$toast(index)
        switch (index) {
          case 0:
            break;
          case 1:
            break;
          case 2:
            break;
          case 3:
            break;
        }
      }
    }
  }
</script>

<style scoped>
  section {
    padding-top: 46px;
  }

  .banner-item {
    height: 250px;
    background: red;
  }

  .statistics p:first-of-type {
    font-size: 18px;
    text-align: center;
    line-height: 30px;
  }

  .statistics p:last-of-type {
    font-size: 12px;
    color: #BBBBBB;
    text-align: center;
  }

  .map-btn {
    font-size: 24px;
    width: 50px;
    height: 50px;
    background: #FFFFFF;
    border-radius: 50%;
    text-align: center;
    line-height: 50px;
    position: absolute;
    bottom: 190px;
    left: 50%;
    margin-left: -25px;
  }

  .go-btn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    width: 100px;
    height: 100px;
    background: #FFFFFF;
    border-radius: 50%;
    text-align: center;
    left: 50%;
    bottom: 50px;
    margin-left: -50px;
  }

  .go-btn p:first-of-type {
    font-size: 28px;
    font-weight: bold;
  }

  .go-btn p:last-of-type {
    font-size: 14px;
  }
</style>
