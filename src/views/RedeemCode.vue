<template>
    <div>
        <Head :title="title"></Head>
        <section>
            <van-icon name="point-gift" size='80px' class="tubiao"/>
            <p>在网站或实物中获取兑换码,</p>
            <p>填入下方输入框进行兑换。</p>
            <em>
                 <van-cell-group class="shuru" :border=false>
                    <van-field v-model="value" placeholder="请输入兑换码"/>
                </van-cell-group>
            </em>
            <van-button type="primary" class="btn">立即兑换</van-button>
        </section>

    </div>
</template>
false
<script>
    import Head from '@/components/Head'
    export default {
        name: "RedeemCode",
        data(){
            return{
                title:'使用兑换码',
                value:''
            }
        },
        components:{
            Head
        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    section{
        height: 400px;
        margin-top: 46px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .tubiao{
        margin-bottom: 10px;
        color:#666;
    }
    section p{
        font-size: 12px;
    }
    section em{
        width: 200px;
        display: block;
        border-bottom:1px solid #aaa;
        font-style: normal;
        font-size: 16px;
        margin-top: 30px;
    }
    .btn{
        background: #666;
        border: 0;
        width: 200px;
        margin-top: 20px;
    }
</style>