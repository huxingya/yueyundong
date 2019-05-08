<template>
    <div>
        <router-link to="/Meter">
            <van-nav-bar
                    left-arrow
                    fixed
                    :border="false"
                    left-text="返回"
            />
        </router-link>
        <section>
            <h4>您的体重是?</h4>
            <van-picker
                    :columns="columns"
                    :visible-item-count=5
                    :default-index="15"
            />
        </section>
        <van-button type="primary" class="btn" to="select">下一步</van-button>
    </div>
</template>

<script>
    export default {
        name: "Weight",
        data(){
            return{
                columns: ['60kg','61kg','62kg','63kg','64kg','65kg','66kg','67kg','68kg','69kg','70kg','71kg','72kg','73kg','74kg','75kg','76kg','77kg','78kg','79kg','80kg']
            }
        }
    }
</script>

<style scoped>
    section{
        margin-top: 38%;
        text-align: center;
        font-weight: normal;
        width: 100%;
    }
    section h4{
        font-weight: normal;
        font-size: 18px;
        margin-top: 20%;
    }
    .btn{
        position: fixed;
        bottom: 0px;
        background: #666;
        width: 100%;
        border: 0;
        color: #000;
    }
</style>