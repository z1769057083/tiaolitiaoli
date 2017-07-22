<template>
    <div class="wrap-box">
        <div class="wrap">
            <h3 class="title">{{list.title}}</h3>
            <video v-if='list.index' poster="../../static/images/videoDefault.png"  width="100%" height="240" controls autobuffer :src="apiPath+'/video/'+videotype+'/'+list.index+'.mp4'">
            </video>
            <p class="content">
                {{list.description}}
            </p>
        </div>
    </div>
</template>
<script>
	
    import axios from 'axios'
    import api from '../api/api'
    export default {
        data(){
            return {
                apiPath: '',
                list: {},
                videotype:''
            }
        },
        methods: {
            loadVideo(){
                var that = this;
                that.videoId = this.$route.query.itemid;
                that.videotype = this.$route.query.type
                console.log(that.videotype)
                axios.get(api.videoListDetail + that.videoId)
                    .then(function (res) {
                        if (res.data.errorCode == 0) {
                            res = res.data.returnValue
                            that.list = res
                        }
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
            }
        },
        mounted() {
            //this.apiPath = api.apipath
            //Note:test for local.
            this.apiPath = 'http://ikehealth.cn'
            this.loadVideo()
            this.$nextTick(() => {
				this.loadVideo()
			})
            document.documentElement.scrollTop = 0
            document.body.scrollTop = 0
        }
    }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
    @import "../common/common.scss";
    .wrap-box {
        width: 100%;
        overflow: hidden;
        background: #fff;
        .wrap {
            width: 92%;
            margin: 0 4%;
            padding-bottom: rem(15rem);
            .title {
                font-size: $font18;
                font-weight: bold;
                margin: rem(10rem) 0 rem(8rem);
            }
            .date {
                font-size: $font12;
                color: #868686;
                span {
                    color: #4e7b9c;
                }
            }
            .wuxing {
                font-size: $font12;
                color: #666;
                margin: rem(8rem) 0 rem(10rem);
            }
            .content {
                margin-top: rem(10rem);
                line-height: rem(26rem);
                color: #000;
                font-size: $font14;
                text-align: justify;
            }
        }
    }


</style>

