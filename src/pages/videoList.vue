<template>
    <div class='video-list'>
        <!--主题部分-->
        <div class="a-main">
            <dl v-for='item in list'>
                <router-link :to="{ name: 'videoListDetail', query: { itemid: item._id }}">
                    <dt>
                        <img :src="''+apiPath+'/image/video/'+item.index+'.jpg'"
                             onerror="this.src='http://placeholder.qiniudn.com/800'"/>
                    </dt>
                </router-link>
                <dd>
                    <span>{{item.title}}</span>
                    <p>{{item.content}}</p>
                </dd>
            </dl>
        </div>
        <div class="bottom-info">更多视频，敬请期待！</div>
    </div>
</template>
<script>
    import axios from 'axios'
    import api from '../api/api'
    export default {
        data(){
            return {
                apiPath: '',
                list: []
            }
        },
        methods: {
            loadVideos(){
                var that = this;
                axios.get(api.videoList)
                    .then(function (res) {
                        if (res.data.errorCode == 0) {
                            res = res.data.returnValue
                            that.list = res
                            console.log(that.list)
                        }
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
            }
        },
        mounted() {
            this.apiPath = api.apipath
            this.loadVideos()
            document.documentElement.scrollTop = 0
            document.body.scrollTop = 0
        }
    }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
    @import "../common/common.scss";

    .video-list {
        width: 100%;
        height: 100%;
        background: #f6f6f6;
        overflow: auto;
        position: absolute;
        -webkit-overflow-scrolling: touch;
        .a-main {
            overflow: hidden;
            margin-top: rem(12rem);
            dl {
                width: 49%;
                float: left;
                margin-right: 2%;
                background: #fff;
                margin-bottom: rem(7rem);
                padding-bottom: rem(5rem);
                dt {
                    width: 100%;
                    height: rem(98rem);
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
                dd {
                    width: 92%;
                    margin-left: 4%;
                    span {
                        width: 100%;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        font-size: $font14;
                        line-height: rem(26rem);
                        color: $c3c3c;
                    }
                    p {
                        padding: rem(2rem) 0;
                        width: 100%;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        color: #8a8a8a;
                        font-size: $font12;
                    }
                }
            }
            dl:nth-child(2n) {
                margin-right: 0;
            }
        }
        .bottom-info {
            line-height: 0.45rem;
            font-size: 0.32rem;
            color: #999;
            width: 100%;
            overflow: hidden;
            text-align: center;
            margin: rem(20rem) 0;
            display: block;
            position: absolute;
            bottom: 0;
            left: 0;
        }
    }
</style>
