<template>
    <div>
        <router-link to="/screen" class="loa">
        <section>
            <h3>根据您的信息匹配针对训练</h3>
            <p><van-loading type="spinner"/></p>
        </section>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "Loading"
    }
</script>

<style scoped>
    section{
        margin-top: 58%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .loa{
        color: #000;
    }
</style>