<template>
	<div class="maskmain">
		<div class="mask-conent">
			<div class="mask-conTop">
				<img  class="close" @click='maskClose' src="../assets/shopcarClose.png" alt="" />
			</div>			
			<div class="mask-main">
				<div class="mask-btn" @click='choosePic("camera")'>
					<img src="../assets/mupload.png"/>
					<p>拍照</p>
				</div>
				<div class="mask-btn" @click='choosePic("album")'>
					<img class="right-img" src="../assets/mupload2.png"/>
					<p>相册</p>
				</div>
			</div>			
		</div>
	</div>
</template>
<script type="text/javascript">
import axios from 'axios'
import api from '../api/api'
import wx from 'weixin-js-sdk'
export default {
	data(){
	  	return {
	  		upLoadArr:{
	  			isChosen:true
	  		}
	    }
	},
    methods:{
    	maskClose(){
    		this.$emit('UpLoadEvent')
    	},    	
        choosePic(picType){
            var that = this;
            wx.chooseImage({
                count: 1, // 默认9
//                  sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
                sourceType: [picType], // 可以指定来源是相册还是相机，默认二者都有
                success: function (res) {
                	that.$emit('UpLoadEvent')
                    that.fingerImage = res.localIds[0];                    
                    //js判断是否ios或Android
                    var u = navigator.userAgent;
                    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
                    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
                    if(isiOS){
                        wx.getLocalImgData({
                            localId: res.localIds[0], // 图片的localID
                            success: function (res) {
                                var localData = res.localData; // localData是图片的base64数据，可以用img标签显示
                                that.fingerImage=localData;
                                //Note:code here for ios.
                                that.upLoadArr.fingerImage = that.fingerImage
                                that.$bus.emit('onImageChoosed',that.upLoadArr)
                            }
                        });
                        
                    }else{
                    	//Note:code here for android.
                    	that.upLoadArr.fingerImage = that.fingerImage                   	
                        that.$bus.emit('onImageChoosed',that.upLoadArr)
                    }
                      	
                    that.uploadPic(res.localIds[0].toString());
                }
            })
        },
        uploadPic(localId){
            wx.uploadImage({
                localId: localId, // 需要上传的图片的本地ID，由chooseImage接口获得
                isShowProgressTips: 1, // 默认为1，显示进度提示
                success: function (res) {
                    var serverId = res.serverId; // 返回图片的服务器端ID
                }
            });
        }
	},
	mounted() {
        
    }
}
</script>
<style lang="scss" rel="stylesheet/scss">
@import "../common/common.scss";
	/*选择问题内容*/
.maskmain{
	width: 100%;
	height: 100%;
	background: rgba(0,0,0,0.6);
	position: absolute;
	bottom: 0;
	left: 0;
	top: 0;
	z-index: 99;
	.mask-conent{
		width: 74.4%;
		height: rem(330rem);
		border-radius: rem(10rem);
		position: absolute;
		top: rem(90rem);
		left: 12.8%; 
		overflow: hidden;
		background: #fff;
		/*background: url(../assets/afterCresent.jpg) no-repeat center;
		background-size: cover;*/
		.mask-conTop{
			width: 100%;
			height: rem(210rem);
			background: red;
			background: url(../assets/afterCresent.jpg) no-repeat center;
			background-size: cover;
			.close{
				width: rem(19rem);
				height: rem(19rem);
				position: absolute;
				right: 3%;
				top: 2%;
			}
		}
		.mask-main{
			width: 100%;
			height: rem(96rem);
			position: absolute;
			bottom: 0;
			left: 0;
			.mask-btn{
				width: 50%;
				height: rem(96rem);
				float: left;
				text-align: center;
				img{
					width: rem(48rem);
					height: rem(40rem);
					margin-bottom: rem(20rem);
				}
				.right-img{
					width: rem(45rem);
					height: rem(35rem);
					margin-top: rem(3rem);
				}
				p{
					color: #999;
					font-size: $font14;
				}
			}
		}
	}
}
</style>