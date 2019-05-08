<template>
  <div class="out-part">
    <TopTab></TopTab>
    <div>
      <van-row class="out-card" v-for="(item,index) in data" :key="index">
        <van-col><img
          src="https://w2.dwstatic.com/yy/ojiastoreimage/20160429_621bb9e534150cb33800359dbdef0e57.jpg?imageview/2/0/w/361/blur/1/format/webp"
          alt=""></van-col>
        <van-col>
          <van-row class="card-text">
            <p>{{item.name}}</p>
            <p>{{item.instrument}}</p>
          </van-row>
        </van-col>
      </van-row>

    </div>
  </div>
</template>

<script>
  import TopTab from "@/components/TopTab"

  export default {
    name: "MovementPart",
    data(){
      return{
        tabs:["部位","器械","教练"],
        data:[]
      }
    },
    components: {
      TopTab
    },
    created() {
      console.log(JSON.parse(this.$route.query.actionType))
      if (JSON.parse(this.$route.query.actionType)){
        this.tabs.splice(0,1,JSON.parse(this.$route.query.actionType).place)
      }
      console.log(this.tabs)
      this.data=[
        {
          "id": 39,
          "name": "四足臂屈伸",
          "picture": "https://w2.dwstatic.com/yy/ojiastoreimage/20160429_621bb9e534150cb33800359dbdef0e57.jpg?imageview/2/0/w/361/blur/1/format/webp",
          "video": null,
          "action": null,
          "imgleft": null,
          "imgright": null,
          "place": null,
          "instrument": "徒手",
          "sex": null
        },
        {
          "id": 41,
          "name": "肱三头肌拉伸 L",
          "picture": "https://w2.dwstatic.com/yy/ojiastoreimage/20160429_d290e46333564af0383fa1d0cbe85742.jpg?imageview/2/0/w/361/blur/1/format/webp",
          "video": null,
          "action": null,
          "imgleft": null,
          "imgright": null,
          "place": null,
          "instrument": "徒手",
          "sex": null
        },
        {
          "id": 43,
          "name": "肱三头肌拉伸 R",
          "picture": "https://w2.dwstatic.com/yy/ojiastoreimage/20160429_3e13ca29d49c0921f8f525f16a1e71a9.jpg?imageview/2/0/w/361/blur/1/format/webp",
          "video": null,
          "action": null,
          "imgleft": null,
          "imgright": null,
          "place": null,
          "instrument": "徒手",
          "sex": null
        }
      ]
    },
    mounted() {

    }
  }
</script>

<style scoped>
  .out-part {
    padding-top: 84px;
  }

  .out-card {
    height: 51px;
    border-bottom: 1px solid #BBBBBB;
  }

  .out-card img {
    width: 90px;
    height: 51px;
    margin-right: 10px;
  }

  .out-card p:first-child {
    font-size: 14px;
    margin-top: 7px;
  }
  .out-card p:last-child {
    font-size: 12px;
    margin-top: 1px;
  }
</style>
