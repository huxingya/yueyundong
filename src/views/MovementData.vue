<template>
  <div>
    <Head :title="title" :rightShow="true"></Head>
    <router-view></router-view>
  </div>
</template>

<script>
  import Head from "@/components/Head"

  export default {
    name: "MovementData",
    data(){
      return{
        title:"动作库"
      }
    },
    components:{
      Head
    }

  }
</script>

<style scoped>

</style>
