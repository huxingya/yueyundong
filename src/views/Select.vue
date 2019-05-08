<template>
    <div>
        <router-link to="/weight">
            <van-nav-bar
                    left-arrow
                    fixed
                    :border="false"
                    left-text="返回"
            />
        </router-link>
        <h3>请选择适合您的标签</h3>
        <h4>(最多选择3个)</h4>
        <section >
            <p :class="{selectBg:item.isShow}" v-for="item in arr" @click='tab(item)'>{{item.name}}</p>
        </section>
        <van-button type="primary" class="btn" to="loading">下一步</van-button>
    </div>
</template>

<script>
    export default {
        name: "Select",
        data(){
            return{
                arr:[{name:'减肥燃脂',isShow:false}
                ,{name:'拉伸运动',isShow:false}
                ,{name:'态度纠正',isShow:false}
                ,{name:'身体调谐',isShow:false}
                ,{name:'身心放松',isShow:false}
                ,{name:'力量提升',isShow:false}
                ,{name:'产后恢复',isShow:false}],
                arrs:[]
            }

        },
        methods:{
            tab(item){
                // console.log(!item.isShow)
                if (this.arrs.length>=3&&!item.isShow){
                    this.$toast("最多选择3个")
                }else {
                    if (item.isShow){
                        this.arrs.indexOf(item)
                        this.arrs.splice(this.arrs.indexOf(item),1)
                    }else {
                        this.arrs.push(item)
                    }
                    item.isShow=!item.isShow;
                }

            }
        }
    }
</script>

<style scoped>
    h3{
        font-weight: normal;
        margin-top: 38%;
        text-align: center;
    }
    h4{
        font-weight: normal;
        text-align: center;
    }
    section p{
        width: 110px;
        height: 35px;
        border: 1px solid #ccc;
        font-size: 14px;
        color: #999;
        text-align: center;
        line-height: 35px;
        margin:8px 20px;
    }
    section p:last-child{
        margin-right: 172px;
    }
    section{
        display: flex;
        flex-wrap: wrap;
        justify-content:center;

    }
    .btn{
        position: fixed;
        bottom: 0px;
        background: #666;
        width: 100%;
        border: 0;
        color: #000;
    }
    .selectBg{
        background: #666;
    }
</style>