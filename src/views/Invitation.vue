<template>
    <div>
        <Head :title="title"></Head>
        <section>
            <img src="../assets/u=2605772213,1403754938&fm=27&gp=0.jpg">
        </section>
        <van-button type="primary" class="btn" @click="Invita">立即邀请</van-button>
    </div>
</template>

<script>
    import Head from "@/components/Head"
    export default {
        name: "Invitation",
        data(){
            return{
                title:'邀请有礼'
            }
        },
        components:{
            Head
        },
        methods:{
            Invita(){
                this.$router.push("/invita")
            }
        }

    }
</script>

<style scoped>
    section{
        margin-top: 46px;
        width: 100%;
        height: 500px;
    }
    section img{
        width: 100%;
        height: 500px;
    }
    .btn{
        background: #666;
        border: 0;
        width: 200px;
        margin: 80px;
    }
</style>