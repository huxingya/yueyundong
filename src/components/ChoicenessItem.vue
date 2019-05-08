<template>
  <div class="choiceness-item">
    <div class="choiceness-item-left">
      <p><img src="" alt="">磊磊</p>
      <p><span>高强度然退计划</span><span>222人练过</span></p>
      <p>9个动作，循环2次，17分钟</p>
      <p>
        <van-tag color="#f2826a" plain class="tag-choiceness">标签</van-tag>
        <van-tag color="#f2826a" plain class="tag-choiceness">标签</van-tag>
      </p>
    </div>
    <div class="choiceness-item-right">
      <p>10月31日更新</p>
      <p>
        <van-rate
          v-model="2.5"
          allow-half
          :size="15"
          void-icon="star"
          void-color="#eee"
        />
      </p>
      <p>222人练过</p>
    </div>

  </div>

</template>

<script>
  export default {
    name: "ChoicenessItem"
  }
</script>

<style scoped>
  .choiceness-item {
    display: flex;
    border-bottom: 1px solid #BBBBBB;
    margin: 0 15px;
    justify-content: space-between;
  }

  .choiceness-item-left {
    position: relative;
  }

  .choiceness-item-left p {
    display: flex;
    font-size: 12px;
    align-items: center;
    padding: 2px 0;

  }

  .choiceness-item-left p:nth-of-type(1) {
    padding-top: 10px;
  }

  .choiceness-item-left p:nth-of-type(2) {
    display: flex;
    justify-content: space-between;
  }

  .choiceness-item-left p:nth-of-type(2) span:first-child {
    font-size: 14px;
  }

  .choiceness-item-left p img {
    height: 21px;
    width: 21px;
    border-radius: 50%;
    background: #000;
    margin-right: 5px;
  }

  .tag-choiceness {
    margin: 4px 10px 4px 0;
  }
  .choiceness-item-right{
    text-align: right;
    font-size: 12px;
  }
  .choiceness-item-right p{
    margin-top: 5px;
  }
  .choiceness-item-right p:first-child{
    margin-top: 12px;
  }
</style>
