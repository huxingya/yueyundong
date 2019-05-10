<template>
  <div>
    <Head :title="title" :rightShow="false"></Head>
    <section>
      <van-tabs class="tabs" sticky lazy-render :offset-top="44">
        <van-tab v-for="(item,index) in tabs" :title="item.name" :key="index">
          <div class="tab-content">
            <DrillList :key="index"></DrillList>
          </div>
        </van-tab>
      </van-tabs>
    </section>

  </div>
</template>

<script>
  import Head from "@/components/Head"
  import DrillList from "@/components/DrillList"

  export default {
    name: "VideoDrill",
    data() {
      return {
        title: "",
        tabs: [
          {
            name: "全部",
            id: 1
          },
          {
            name: "全部2",
            id: 2
          },
          {
            name: "全部3",
            id: 3
          },
          {
            name: "全部4",
            id: 4
          },
          {
            name: "全部5",
            id: 5
          },
          {
            name: "全部6",
            id: 6
          },
        ]
      }
    },
    components: {
      Head,
      DrillList
    },
    created() {
      this.title = this.$route.query.title;
    }
  }
</script>

<style scoped>
  section {
    padding-top: 46px;
  }

  .tabs {
  }
</style>
