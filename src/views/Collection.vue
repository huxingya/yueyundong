<template>
    <div>
        <Head :title="title"></Head>
        <section>
            <van-tabs background="#aaa" color="#333" :line-width="50">
                <van-tab title="课程"></van-tab>
                <van-tab title="资讯"></van-tab>
            </van-tabs>
            <div>
                <p>如果您收藏了喜欢的内容,可以在这里找到哦~</p>
            </div>
        </section>
    </div>
</template>

<script>
    import Head from "@/components/Head"
    export default {
        name: "Collection",
        data(){
            return{
                title:"我的收藏"
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
        background: #aaa;
        position: fixed;
        top: 46px;
    }
    section div{
        padding:100px 0 0 30px;
    }

</style>