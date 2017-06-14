<template>
    <div class='shop'>
        <!--主题部分-->
        <div class="s-main">
            <!--轮播图部分-->
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="hotItem in hotList">
                        <template>
                            <router-link :to="{ name: 'goodsdetail', query: { itemid: hotItem._id }}">
                                <img class="swiper-img"
                                     :src="''+apiPath+'/image/product/'+hotItem.index+'/top.jpg'"
                                     onerror="this.src='http://placeholder.qiniudn.com/800'"/>
                            </router-link>
                        </template>
                    </div>
                </div>
                <!-- 如果需要分页器 -->
                <div class="swiper-pagination"></div>
            </div>
            <div class="s-shopping">
                <div class="s-shoppingMain">
                    <commodity></commodity>
                </div>
            </div>
        </div>
        <div class="s-mrecombottom">我是有底线的</div>
    </div>
</template>
<script>
    import axios from 'axios'
    import api from '../api/api';
    import commodity from '@/components/commodity'
    export default {
        data(){
            return {
                hotList: [],
                apiPath: ''
            }
        },
        components: {
            commodity
        },
        methods: {

            swiperlist(){
                var that = this;
                axios.get(api.hotGoods)
                    .then(function (res) {
                        if (res.data.errorCode == 0) {
                            res = res.data.returnValue
                            that.hotList = res
                        }
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
            }
        },
        mounted() {
            this.swiperlist()
            this.onWeChatShare()
            document.title = "在线商城"
            document.documentElement.scrollTop = 0
            document.body.scrollTop = 0
            this.apiPath = api.apipath
            console.log(this.apiPath)
        },
        watch: {
            hotList: {
                handler(val, oldVal) {
                    this.$nextTick(() => {
                        if (!this.swiper) {
                            this.swiper = new Swiper('.swiper-container', {
                                loop: true,
                                autoplay: 3000,
                                pagination: '.swiper-pagination',
                                paginationClickable: true,
                                autoplayDisableOnInteraction: false
                            });
                        }
                    });
                },
                deep: true
            }
        }
    }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
    @import "../common/common.scss";

    .shop {
        width: 100%;
        height: 100%;
        background: #f6f6f6;
        .s-shopping {
            width: 100%;
            background: #fff;
            .s-shoppingMain {
                width: 92%;
                margin-left: 4%;
            }
        }
        .s-mrecombottom {
            line-height: 0.45rem;
            font-size: 0.32rem;
            color: #999;
            width: 100%;
            overflow: hidden;
            text-align: center;
            margin: rem(20rem) 0;
        }
    }
</style>