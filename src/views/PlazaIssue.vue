<template>
  <section>
    <div class="head-close">
      <van-icon name="cross" tag="span" @click="onClossClick"/>
    </div>
    <div class="content">
      <div>
        <div class="out-photo">
          <img src="" alt="">
          <p>头像</p>
        </div>
        <p>创造者才是真证的享受者</p>
        <p>罗杰.福尔克</p>
      </div>
      <div class="out-btn">
        <div>
          <van-button type="warning" class="btn">警告按钮</van-button>
        </div>
        <div>
          <van-button type="primary" class="btn">主要按钮</van-button>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "PlazaIssue",
    methods: {
      onClossClick() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  section {
    height: 100vh;
    background: #FFFFFF;
  }

  .head-close {
    height: 44px;
  }

  .head-close span {
    width: 32px;
    height: 44px;
    font-size: 20px;
    line-height: 44px;
    padding-left: 12px;
  }

  .content {
    text-align: center;
    margin-top: 85px;
  }

  .content p:nth-of-type(1) {
    font-size: 14px;
    margin-top: 20px;
  }

  .content p:nth-of-type(2) {
    font-size: 12px;
    margin-top: 10px;
  }

  .out-photo {
    overflow: hidden;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    border: 1px solid #bbbbbb;
    text-align: center;
    line-height: 100px;
    margin: 0 auto;
  }

  .out-photo img {
    height: 100px;
    width: 100px;
  }

  .out-btn {
    margin-top: 210px;
  }

  .btn {
    width: 200px;
    margin: 10px 0;
  }
</style>
