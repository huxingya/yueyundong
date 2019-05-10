<template>
    <div>
        <Head :title="title"></Head>
        <section>
            <span class="iconfont icon-erweima"></span>
            <p>可通过二维码进行邀请</p>
        </section>
        <Config class="tubiao"></Config>
    </div>
</template>

<script>
    import Head from "@/components/Head";
    import Config from "@/components/Config";
    export default {
        name: "Invita",
        data(){
            return{
                title:'邀请有礼'
            }
        },
        components:{
            Head,
            Config
        }
    }
</script>

<style scoped>
    .iconfont.icon-erweima{
        font-size: 180px;
    }
    section{
        margin-top: 46px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    section span{
        margin-top: 80px;
    }
    .tubiao{
        margin: 60px 82px;
    }
</style>