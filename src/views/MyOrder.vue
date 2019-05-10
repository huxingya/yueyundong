<template>
    <div>
        <Head :title="title"></Head>
        <van-picker
                show-toolbar
                title="全部订单"
                @cancel="onCancel"
                @confirm="onConfirm"
                :columns="columns"
                :visible-item-count=5
                :default-index="1"
                :item-height="36"
                class="zhifu"
        />
    </div>
</template>

<script>
    import Head from '@/components/Head'
    export default {
        name: "MyOrder",
        data(){
            return{
                title:'全部订单',
                columns:['待支付','待发货','已发货','已完成']
            }
        },
        components:{
            Head
        },
        methods: {
            onConfirm(value, index) {

            },
            onCancel() {

            }
        }
    }
</script>

<style scoped>
    .zhifu{
        margin-top: 46px;
    }
</style>