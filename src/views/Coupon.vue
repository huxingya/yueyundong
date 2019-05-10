<template>
    <div>
        <Head :title="title"></Head>
        <van-tabs class="tab" color="#333">
            <van-tab title="未使用"></van-tab>
            <van-tab title="已使用"></van-tab>
            <van-tab title="已过期"></van-tab>
        </van-tabs>
        <section>
            <span></span>
            <p>不要着急~</p>
            <p>一会就把优惠券为您送上</p>
        </section>
    </div>
</template>

<script>
    import Head from '@/components/Head'
    export default {
        name: "Coupon",
        data(){
            return{
                title:'我的优惠券'
            }
        },
        components:{
            Head
        }
    }
</script>

<style scoped>
    .tab{
        margin-top: 46px;
    }
    section{
        height: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    section span{
        display: block;
        width: 100px;
        height: 100px;
        border: 1px solid #ccc;
        border-radius:50%;
        background: #ccc;
    }
    section p{
        margin-top: 10px;
    }

</style>