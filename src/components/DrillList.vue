<template>
  <div>
    <div class="video-item" v-for="(item,index) in items" :key="index">
      <img :src="item.img" :alt="item.name">
      <p>{{item.name}}</p>
      <p>{{item.people}}人训练过</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DrillList",
    data() {
      return {
        items: [
          {
            "id": 2,
            "type": "家庭健身",
            "outlineid": 29,
            "name": "能量妈咪塑形计划",
            "img": "http://ft-video.fit-time.cn/program_1.png",
            "people": "34524"
          },
          {
            "id": 13,
            "type": "生理期",
            "outlineid": 79,
            "name": "生理期运动系列",
            "img": "http://ft-video.fit-time.cn/program_10.jpg",
            "people": "235432"
          },
          {
            "id": 3,
            "type": "瑜伽系列",
            "outlineid": 37,
            "name": "瑜伽课堂",
            "img": "http://ft-video.fit-time.cn/program_11.png",
            "people": "877432"
          },
          {
            "id": 2,
            "type": "家庭健身",
            "outlineid": 25,
            "name": "人鱼线雕刻",
            "img": "http://ft-video.fit-time.cn/program_12.jpg",
            "people": "7371836"
          },{
            "id": 1,
            "type": "减肥燃脂",
            "outlineid": 7,
            "name": "基础体能训练系列",
            "img": "http://ft-video.fit-time.cn/program_20.jpg",
            "people": "716432"
          },
          {
            "id": 1,
            "type": "减肥燃脂",
            "outlineid": 8,
            "name": "进阶体能训练系列",
            "img": "http://ft-video.fit-time.cn/program_21.png",
            "people": "996650"
          },
          {
            "id": 14,
            "type": "小器械训练",
            "outlineid": 80,
            "name": "弹力带训练系列",
            "img": "http://ft-video.fit-time.cn/program_22.jpg",
            "people": "12354"
          },
          {
            "id": 3,
            "type": "瑜伽系列",
            "outlineid": 44,
            "name": "瑜伽能量提升系列",
            "img": "http://ft-video.fit-time.cn/program_23.png",
            "people": "653243"
          },
        ]
      }
    }
  }
</script>

<style scoped>
  .video-item {
    position: relative;
    width: 356px;
    height: 125px;
    margin: 7px auto;
  }

  .video-item img {
    width: 356px;
    height: 125px;
  }

  .video-item p:first-of-type {
    position: absolute;
    left: 10px;
    bottom: 30px;
    color: #FFFFFF;
    font-size: 14px;
    font-weight: bold;
  }

  .video-item p:last-of-type {
    position: absolute;
    color: #FFFFFF;
    font-size: 12px;
    left: 10px;
    bottom: 10px;
  }
</style>
