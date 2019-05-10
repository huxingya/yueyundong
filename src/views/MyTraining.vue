<template>
  <section>
    <van-nav-bar title="我的训练" left-arrow fixed @click-right="toRunClick" @click-left="onUserClick">
      <van-icon name="user-circle-o" slot="left" size="20px" color="#101010"/>
      <van-icon name="chart-trending-o" slot="right" size="20px" color="#101010"/>
    </van-nav-bar>
    <article @click="onHistoryClick">
      <van-cell title="总训练时长"/>
      <van-row type="flex" justify="space-between" align="center" class="out-all-time">
        <p >0</p>
        <van-cell title=" " is-link value="LV0" class="level"/>
      </van-row>
      <van-cell title="本周好友排名" is-link style="background: transparent">
          <span class="custom-text"><van-icon name="user-circle-o" size="20px"/></span>
      </van-cell>
    </article>
    <article>
      <van-cell title="我的训练"/>
      <DrillList></DrillList>
    </article>
  </section>
</template>

<script>
  import DrillList from "@/components/DrillList"
  export default {
    name: "MyTraining",
    components:{
      DrillList
    },
    methods:{
      toRunClick(){
        this.$router.push("/running")
      },
      onHistoryClick(){
        this.$router.push("/all_history")
      },
      onUserClick(){
        this.$router.push("/sidebar")
      }
    },
    created() {
      this.$store.commit({
        type: 'setMainTabIndex',
        amount: {
          mainTabIndex: 0
        }
      });
    }
  }
</script>

<style scoped>
  section {
    padding-top: 44px;
  }
  article{
    background: #FFFFFF;
  }
  .out-all-time {
    height: 82px;
    padding-left: 15px;
  }
  .out-all-time P{
    font-size: 72px;
    font-weight: bold;
  }
  .out-all-time .level{
    background: transparent;
  }
</style>
