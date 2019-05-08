<template>
    <div>
        <router-link to="/gender">
            <van-nav-bar
                    left-arrow
                    fixed
                    :border="false"
                    left-text="返回"
            />
        </router-link>
        <section>
            <h3>您的身高是?</h3>
            <van-picker
                :columns="columns"
                :visible-item-count=5
                :default-index="15"
            />
        </section>
        <van-button type="primary" class="btn" to="weight">下一步</van-button>
    </div>
</template>

<script>
    export default {
        name: "Meter",
        data() {
            return {
                columns: ['165cm','166cm','167cm','168cm','169cm','170cm', '171cm', '172cm', '173cm', '174cm', '175cm','176cm', '177cm', '178cm', '179cm', '180cm', '181cm','182cm', '183cm', '184cm', '185cm']
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
    section h3{
        font-weight: normal;
        font-size: 18px;
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