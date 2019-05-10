<template>
    <div>
        <Head :title="title"></Head>
        <section>
            <p>离线观看视频</p>
            <p>随时随地开启您的FitTime!</p>
        </section>
    </div>
</template>

<script>
    import Head from "@/components/Head"
    export default {
        name: "Download",
        data(){
            return{
                title:'下载记录'
            }
        },
        components:{
            Head
        }
    }
</script>

<style scoped>
    section{
        width: 100%;
        height: 100%;
        background: #ccc;
        position: fixed;
        top: 46px;
        border-top: 1px solid #666;
        color: #666;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
        line-height: 28px;
    }
    section p:last-child{
        margin-bottom: 60px;
    }
</style>