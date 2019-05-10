<template>
  <section>
    <Head :title="title" :rightShow="false"></Head>
    <ChoicenessItem></ChoicenessItem>
  </section>
</template>

<script>
  import Head from "@/components/Head"
  import ChoicenessItem from "@/components/ChoicenessItem"

  export default {
    name: "PlazaDetail",
    data(){
      return{
        title:"周精选"
      }
    }
    ,
    components: {
      Head,
      ChoicenessItem
    }
    ,created() {
      this.title = this.$route.query.name
    }
  }
</script>

<style scoped>
  section{
    padding-top: 44px;
  }
</style>
