<template>
  <div>
    <van-nav-bar :title="title"  @click-left="onClickLeft" :fixed="true" :z-index="999">
      <van-icon name="arrow-left" slot="left" color="#101010"/>
      <van-icon name="search" slot="right" color="#101010" v-if="rightShow"/>
    </van-nav-bar>
  </div>
</template>

<script>
  export default {
    name: 'Head',
    props:["title","rightShow"],
    data () {
      return {
        name:"",
        // rightShow:false
      }
    },
    methods:{
      onClickLeft(){
        this.$router.go(-1)
      }
    },
    created() {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
