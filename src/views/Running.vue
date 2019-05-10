<template>
  <section>
    <van-nav-bar  left-arrow fixed :border="false" @click-right="onRunSetClick" @click-left="onClickLeft" class="head" v-show="true">
      <van-icon name="arrow-left" slot="left" size="20px" color="#FFFFFF"/>
      <span slot="title" style="color: #FFFFFF">户外跑步</span>
      <van-icon name="wap-nav" slot="right" size="20px" color="#FFFFFF" click="toRunClick"/>
    </van-nav-bar>
    <article>
      <van-swipe  indicator-color="white"  @change="onChange">
        <van-swipe-item>
          <div class="banner-item"><p>0.00</p><p>Km</p></div>
        </van-swipe-item>
<!--        <van-swipe-item>-->
<!--          <div class="banner-item">-->
<!--            <van-row type="flex" justify="space-between">-->
<!--               <van-col>-</van-col>-->
<!--               <van-col>-->
<!--                 <van-row>-->
<!--                   <p>卡路里跑</p>-->
<!--                   <p>100</p>-->
<!--                   <p>Kcal</p>-->
<!--                 </van-row>-->
<!--               </van-col>-->
<!--               <van-col>+</van-col>-->
<!--            </van-row>-->
<!--          </div>-->
<!--        </van-swipe-item>-->
<!--        <van-swipe-item>-->
<!--          <div class="banner-item"></div>-->
<!--        </van-swipe-item>-->
<!--        <van-swipe-item>-->
<!--          <div class="banner-item"></div>-->
<!--        </van-swipe-item>-->
      </van-swipe>
      <van-row type="flex" justify="space-between" >
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
    background: #282A2E;
    height: 100vh;
  }
  .head{
    background: transparent
  }

  .banner-item {
    height: 250px;
    display: flex;
    flex-direction: column;
    color: #FFFFFF;
    justify-content: center;
    text-align: center;
  }
  .banner-item p:nth-of-type(1){
    font-size: 60px;

  }
  .banner-item:nth-of-type(2){
    background: #FE6633;

  }
  .banner-item:nth-of-type(3){
    background: #FE6633;

  }
  .banner-item:nth-of-type(4){
    background: #AACC00;

  }
  .statistics p:first-of-type {
    font-size: 18px;
    text-align: center;
    line-height: 30px;
    color: #D4D4D4;
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
