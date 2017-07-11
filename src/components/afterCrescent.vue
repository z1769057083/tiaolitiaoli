<template>
    <div class="m-afterCrescent">
        <h3>上传舌苔图片</h3>
        <div class="m-crescent">
            <div class="m-picture" @click='beginUsePic'>
                <img :src="fingerImage"/>
            </div>
            <div class="re-choose-button" v-show="isChosen" @click='choosePic'>
                <div class="re-choose-text">重新选择</div>
                <div class="m-remove">
                    <img src="../assets/mafterRemove.png"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    export default {
        data(){
            return {
                isChosen: false,
                fingerImage: '/static/images/mafterCrescent.png',
                upLoadArr:{}
            }
        },
        methods: {
        	
        	beginUsePic(){
	            if (!this.isChosen) {
	                this.choosePic();
	            }
	            else{
	                this.showPicDetails();
	            }
        	},
        	choosePic(){
        		this.$emit('maskUpLoadEvent')
        	},
        showPicDetails(){
            if (this.isChosen) {
                var localIds = [this.fingerImage];
                wx.previewImage({
                    current: this.fingerImage, // 当前显示图片的http链接
                    urls: localIds // 需要预览的图片http链接列表
                });
            }
        },
        	onImageChoosedHandler(obj){
          		this.upLoadArr = obj
          		this.isChosen = this.upLoadArr.isChosen
	            this.fingerImage = this.upLoadArr.fingerImage
        	}
        },
        beforeDestroy(){
           	
        },
        mounted() {
            //Note:the emit make it enable to go through the question.
            this.$emit('updateUserAnswer', {})
			this.$bus.on('onImageChoosed', this.onImageChoosedHandler);
       }       
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    @import "../common/common.scss";
    /*选择问题内容*/
    .m-afterCrescent {
        width: 90%;
        margin-left: 5%;
        overflow: hidden;
        h3 {
            text-align: center;
            margin-top: rem(13rem);
            margin-bottom: rem(48rem);
            font-size: $font14;
        }
        .m-crescent {
            width: 26%;
            height: rem(132rem);
            margin-left: 36%;
            overflow: hidden;
            .m-picture {
                width: 100%;
                height: rem(88rem);
                margin-bottom: rem(15rem);
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .re-choose-text {
                float: left;
                height: rem(29rem);
                line-height: rem(29rem);;
            }
            .m-remove {
                float: left;
                width: 23%;
                height: rem(29rem);
                margin-left: 10%;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
</style>