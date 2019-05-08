<template>
  <section>
    <Head :title="title" :rightShow="false"></Head>
    <TopTab></TopTab>
    <div class="content">
      <ChoicenessItem></ChoicenessItem>

    </div>
  </section>
</template>

<script>
  import Head from "@/components/Head"
  import TopTab from "@/components/TopTab"
  import ChoicenessItem from "@/components/ChoicenessItem"

  export default {
    name: "PlazaSearch",
    data(){
      return{
        title:"查找训练"
      }
    },
    components: {
      Head,
      TopTab,
      ChoicenessItem
    }
  }
</script>

<style scoped>
  .content {
    padding-top: 84px;
  }
</style>
