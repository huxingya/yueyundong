<template>
  <section>
    <van-row type="flex" justify="space-around" class="out-btn">
      <van-col span="10" class="plaza-btn">
        <router-link to="/plaza_search" tag="div">
          <van-icon name="search" tag="span"/>
          <span>查找</span>
        </router-link>

      </van-col>
      <van-col span="10" class="plaza-btn">
        <router-link to="/plaza_issue" tag="div">
          <van-icon name="plus" tag="span"/>
          <span>发布</span>
        </router-link>
      </van-col>
    </van-row>
    <van-row type="flex" align="center" class="out-new">
      <van-col span="3">
        <van-tag mark type="danger">NEW</van-tag>
      </van-col>
      <van-col span="21">
        <van-cell title="锻炼" icon="manager" is-link @click="onToPlazaDetil('最新训练')"/>
      </van-col>
    </van-row>
    <div>
      <div class="out-choiceness">
        <van-cell title="周精选" is-link value="查看全部" @click="onToPlazaDetil('周精选')"/>
        <ChoicenessItem></ChoicenessItem>
      </div>
      <div class="out-img">
        <van-row type="flex" justify="space-between">
          <van-col span="7" class="image-item"><img src="" alt=""></van-col>
          <van-col span="7" class="image-item"><img src="" alt=""></van-col>
          <van-col span="7" class="image-item"><img src="" alt=""></van-col>
        </van-row>
      </div>
      <div class="out-choiceness">
        <van-cell title="周热门" is-link value="查看全部" @click="onToPlazaDetil('周热门')"/>
      </div>
    </div>
  </section>
</template>

<script>
  import ChoicenessItem from "@/components/ChoicenessItem"

  export default {
    name: "Plaza",
    components: {
      ChoicenessItem
    },
    methods:{
      onToPlazaDetil(value) {
        this.$router.push({path:"/plaza_detail",query:{name:value}})
      }
    },

  }
</script>

<style scoped>

  section {
    padding-top: 46px
  }

  .out-btn {
    padding: 10px 0;
  }

  .out-new {
    border-top: 10px solid #EEEEEE;
    border-bottom: 10px solid #EEEEEE;
    font-size: 14px;
  }

  .plaza-btn {
    width: 170px;
    height: 37px;
    line-height: 37px;
    background-color: rgba(238, 238, 238, 1);
    text-align: center;
    border: 1px solid rgba(187, 187, 187, 1);
    font-size: 12px;
  }

  .plaza-btn span {
    vertical-align: middle;
    margin: 0 2px;
  }

  .out-img {
    border-top: 16px solid #EEEEEE;
    border-bottom: 8px solid #EEEEEE;
    padding: 10px 0;
  }

  .image-item img {
    height: 61px;
    width: 100%;
    background: black;
  }
</style>
