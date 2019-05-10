<template>
    <div class="swiper">

        <swiper :options="swiperOption" ref="mySwiper">

            <swiper-slide v-for="(item, index) in picList" :key="index"><img :src="item.img"></swiper-slide>

        </swiper>

    </div>


</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import {swiper, swiperSlide} from 'vue-awesome-swiper';

    export default {

        name: "SwiperCard",
        data: function () {
            return {
                activeIndex:0,

                cardList:[],

                swiperOption: {

                    init:false,
                    initialSlide: 0,
                    loop : true,
                    observer:true,
                    slidesPerView: "auto",
                    centeredSlides: true,
                    on: {
                        slideChangeTransitionEnd: ()=>{
                            let swiper = this.$refs.mySwiper.swiper;
                            if(swiper){
                                this.activeIndex =  swiper.realIndex;
                                this.$emit("swiperIndex",this.activeIndex)
                            }

                        },
                    },


                }

            }


        },
        components: {
            swiper,
            swiperSlide
        },
        methods:{

        },
        mounted() {

        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper;
            }
        },
        props:['picList'],
        updated() {
             console.log(this.$props.picList)
             if(this.$props.picList.length > 1){
                 this.swiper.init();
             }
        }


    }
</script>

<style  scoped>
    .swiper{
        width:100%;

        height:160px;

        overflow:hidden;
    }



    .swiper-slide{
        width:80%;

        height:160px;
    }



    .swiper-slide.swiper-slide-active img{
        margin-top:0;

        width:100%;
        height:100%;

    }
    img{

        display:block;

        margin:0 auto;

        margin-top:3.5%;

        width:90.625%;
        height:90.625%;




        vertical-align:middle;

        -webkit-transition:all .5s ease 0s;

        -moz-transition:all .5s ease 0s;

        -ms-transition:all .5s ease 0s;

        -o-transition:all .5s ease 0s;

        transition:all .5s ease 0s;
    }










</style>
