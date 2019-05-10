<template>
    <section>
      <van-swipe :autoplay="3000" indicator-color="white" class="banner">
        <van-swipe-item><img src="http://img13.360buyimg.com/n1/s450x450_jfs/t26743/103/1729821154/228380/3b20bf70/5bebd2cdNabea9166.jpg" alt=""></van-swipe-item>
      </van-swipe>

      <van-cell title="商品名字" label="描述信息" size="large" :border="false" label-class="goods-intr"/>
      <van-cell   title-class="goods-price" :border="false">
        <span slot="title"><span style="font-size: 12px">￥</span><span style="font-size: 18px">999</span></span>
        <span class="sales-num">快递 : 免费&nbsp;&nbsp;销量 : 8999</span>
      </van-cell>
      <div class="goods-content">
        <van-cell  is-link @click="showSku">
          <span slot="title" class="goods-model">请选择:颜色/尺寸</span>
        </van-cell>
      </div>

      <van-sku
        v-model="showBase"
        :sku="sku"
        :goods="goods"
        :goods-id="goodsId"
        :hide-stock="sku.hide_stock"
        :quota="quota"
        :quota-used="quotaUsed"
        :custom-stepper-config="customStepperConfig"
        @buy-clicked="onBuyClicked"
        @add-cart="onAddCartClicked"
      >
        <div slot="sku-messages" style="margin-top: 100px"></div>
      </van-sku>

      <van-goods-action class="van-hairline--top">
        <van-goods-action-mini-btn
          icon="shopping-cart-o"
          @click="onClickMiniBtn"
        />
        <van-goods-action-mini-btn
          icon="service-o"
          @click="onClickMiniBtn"
          class="van-hairline--right"
        />
        <van-goods-action-big-btn
          text="加入购物车"
          @click="onClickBigBtn"
          style="background:transparent;border-color: transparent;color: #7766cc"
        />
        <van-goods-action-big-btn
          text="立即购买"
          @click="onClickBigBtn"
          style="background: #7766cc;border-color: #7766cc"
        />
      </van-goods-action>
    </section>
</template>

<script>
    export default {
        name: "GoodsDetail",
      data(){
          return{
            showBase:false,
            sku: {
              // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
              // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
              tree: [
                {
                  k: '颜色', // skuKeyName：规格类目名称
                  v: [
                    {
                      id: '30349', // skuValueId：规格值 id
                      name: '红色', // skuValueName：规格值名称
                      imgUrl: 'https://img.yzcdn.cn/1.jpg' // 规格类目图片，只有第一个规格类目可以定义图片
                    },
                    {
                      id: '1215',
                      name: '蓝色',
                      imgUrl: 'https://img.yzcdn.cn/2.jpg'
                    },
                  ],
                  k_s: 's1' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
                }
              ],
              // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
              list: [
                {
                  id: 2259, // skuId，下单时后端需要
                  price: 100, // 价格（单位分）
                  s1: '1215', // 规格类目 k_s 为 s1 的对应规格值 id
                  s2: '1193', // 规格类目 k_s 为 s2 的对应规格值 id
                  s3: '0', // 最多包含3个规格值，为0表示不存在该规格
                  stock_num: 110 // 当前 sku 组合对应的库存
                },
                {
                  id: 2259, // skuId，下单时后端需要
                  price: 100, // 价格（单位分）
                  s1: '30349', // 规格类目 k_s 为 s1 的对应规格值 id
                  s2: '1193', // 规格类目 k_s 为 s2 的对应规格值 id
                  s3: '0', // 最多包含3个规格值，为0表示不存在该规格
                  stock_num: 110 // 当前 sku 组合对应的库存
                }
              ],
              price: '1.00', // 默认价格（单位元）
              stock_num: 227, // 商品总库存
              collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
              none_sku: false, // 是否无规格商品
            /*  messages: [
                {
                  // 商品留言
                  datetime: '0', // 留言类型为 time 时，是否含日期。'1' 表示包含
                  multiple: '0', // 留言类型为 text 时，是否多行文本。'1' 表示多行
                  name: '留言', // 留言名称
                  type: 'text', // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
                  required: '1' // 是否必填 '1' 表示必填
                }
              ],*/
              hide_stock: false // 是否隐藏剩余库存
            },
            customStepperConfig: {
              // 自定义限购文案
              quotaText: '每次限购xxx件',
              // 自定义步进器超过限制时的回调
              handleOverLimit: (data) => {
                const { action, limitType, quota, quotaUsed } = data;

                if (action === 'minus') {
                  Toast('至少选择一件商品');
                } else if (action === 'plus') {
                  // const { LIMIT_TYPE } = Sku.skuConstants;
                  if (limitType === LIMIT_TYPE.QUOTA_LIMIT) {
                    let msg = `单次限购${quota}件`;
                    if (quotaUsed > 0) msg += `，你已购买${quotaUsed}`;
                    Toast(msg);
                  } else {
                    Toast('库存不够了');
                  }
                }
              }
            }
            ,
            goods:{// 商品标题
              title: '测试商品',
              // 默认商品 sku 缩略图
              picture: 'https://img.yzcdn.cn/1.jpg'},
            goodsId:"11111",
            quota:0,
            quotaUsed:22,
          }
      },
      methods:{
        showSku(){
          this.showBase=true;
        }
      }
    }
</script>

<style scoped>
.banner img{
  width: 375px;
  height: 277px;
}
  .goods-intr{
    font-size: 14px;
    color:#7766cc
  }
  .goods-price{
    color:#7766cc
  }
  .sales-num{
    font-size: 12px;
  }
  .goods-content{
    background:#EEEEEE;
    padding-top: 10px;
  }
  .goods-model{
    font-size: 14px;
  }
</style>
