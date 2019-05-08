<template>
  <div>
    <Head :title="title" :rightShow="false"></Head>
    <section>
      <van-row class="out-drill-item" type="flex" align="bottom" v-for="(item,index) in items" :key="index">
        <van-col>
          <van-cell :title="item.title" class="content">
            <template slot="label">
              <span class="custom-text">{{item.title}}</span>
            </template>
          </van-cell>
        </van-col>
      </van-row>
    </section>
  </div>
</template>

<script>
  import Head from "@/components/Head"

  export default {
    name: "TrainingPlan",
    data(){
      return{
        title: "",
        items: [
          {title:1,imgUrl:""},
          {title:2,imgUrl:""},
          {title:3,imgUrl:""},
          {title:4,imgUrl:""},
          {title:5,imgUrl:""},
          {title:6,imgUrl:""},
          {title:7,imgUrl:""},
          {title:8,imgUrl:""},
          {title:9,imgUrl:""},
          {title:1,imgUrl:""},
          {title:1,imgUrl:""},
          {title:1,imgUrl:""},
        ]
      }
    },
    components: {
      Head
    },
    created() {
      this.title = this.$route.query.title;
    }
  }
</script>

<style scoped>
  section{
    padding-top: 44px;
  }
  .out-drill-item {
    width: 356px;
    height: 125px;
    background: red;
    margin: 7px auto;
  }
  .content{
    margin: 10px;
    background: transparent;
  }
</style>
