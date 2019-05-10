<template>
  <section>
    <Head :title="title" :rightShow="false"></Head>
    <van-cell-group>
      <van-switch-cell v-model="checked" title="语音播报" @click="onSwitchClick" active-color="rgb(7, 193, 96)"/>
    </van-cell-group>
    <van-radio-group v-model="radio" >
      <van-cell-group title="语音频率">
        <van-cell title="高频" clickable @click="radio = '1'">
          <van-radio name="1" checked-color="rgb(7, 193, 96)"/>
        </van-cell>
        <van-cell title="低频" clickable @click="radio = '2'">
          <van-radio name="2" checked-color="rgb(7, 193, 96)"/>
        </van-cell>
      </van-cell-group>
    </van-radio-group>
    <van-cell title="离线地图" is-link  class="last-item"/>
  </section>
</template>

<script>
  import Head from "@/components/Head"

  export default {
    name: "RunningSetting",
    data() {
      return {
        title: "设置",
        checked: true,
        radio:""
      }
    },
    methods:{
      onSwitchClick(){
        this.checked = !this.checked
      }
    },
    components: {
      Head
    }
  }
</script>

<style scoped>
  section {
    padding-top: 46px;
  }
  .last-item{
    margin-top: 10px;
  }
</style>
