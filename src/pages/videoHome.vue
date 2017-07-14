<template>
  <div class='wrap'> 
		<div class="recommend-top">
			<p @click="change_active(0,$event)" :class="{'activeTit':toggle===0}">文章</p>
			<p @click="change_active(1,$event)" :class="{'activeTit':toggle===1}" class="top-right">视频</p>
		</div>
		<div class="article-main" v-if='mainShow'>
			<dl>
				<dt>
					<h3>正常的脉象是啥样的？</h3>
					<p>中医里很多看似神秘莫测的说法，却蕴含诸多令人捉摸不透的真知灼见。</p>
				</dt>
				<dd><img src=""/></dd>
			</dl>
			<dl>
				<dt>
					<h3>正常的脉象是啥样的？</h3>
					<p>中医里很多看似神秘莫测的说法，却蕴含诸多令人捉摸不透的真知灼见却蕴含诸多令人捉摸不透的真知灼见。</p>
				</dt>
				<dd><img src=""/></dd>
			</dl>
		</div>
		<div class="video-mtop" v-if='!mainShow'>
			<p  @click='baDuanJin(0,$event)' class="mtop-left" :class="{'activeBtn':btnIndex===0}">八段锦</p>
			<p  @click='xiaoErTuiNa(1,$event)' :class="{'activeBtn':btnIndex===1}" class="mtop-center">小儿推拿</p>
			<p  @click='liuZiJue(2,$event)' :class="{'activeBtn':btnIndex===2}">六字诀</p>
		</div>
		<div class="video-main" v-if='!mainShow'>
			 <dl v-for='videoItem in videoDateList'>
        <router-link :to="{ name: 'videoListDetail', query: { itemid: videoItem._id }}">
            <dt>
                <img :src="''+apiPath+'/image/video/'+videoItem.type+'/'+videoItem.index+'.jpg'"
                     onerror="this.src='http://placeholder.qiniudn.com/800'"/>
            </dt>
        </router-link>
        <dd>
            <span>{{videoItem.title}}</span>
            <p>{{videoItem.content}}</p>
        </dd>
    	</dl>
			<!--<dl>
				<dt></dt>
				<dd>养生 、 三伏天养生，不同体质要区别对待</dd>
			</dl>
			<dl>
				<dt></dt>
				<dd>养生 、 三伏天养生，不同体质要区别对待</dd>
			</dl>-->
		</div>
	<!--<div class="s-mrecombottom">我是有底线的</div>-->
  </div>
</template>
<script>
import axios from 'axios'
import api from '../api/api'
export default {
  data(){
  	return {
  		apiPath:'',
  		toggle: 0,
  		mainShow:true,
  		type:'baduanjin',
  		videoDateList:[],
  		btnIndex: 0
    }
  },
  methods: {
  	change_active(index,event) {
        this.toggle = index
        if(this.toggle==0){
        	this.mainShow = true
        }else{
        	this.mainShow = false
        }
    },
    baDuanJin(index,event){
    	this.btnIndex = index
    	this.type = 'baduanjin'
    	this.loadVideo()
    },
    xiaoErTuiNa(index,event){
    	this.btnIndex = index
    	this.type = 'tuina'
    	this.loadVideo()
    },
    liuZiJue(index,event){
    	this.btnIndex = index
    	this.type = 'liuzijue'
    	this.loadVideo()
    },
    loadVideo(){
	    var that = this;
	    axios.get(api.videoList+this.type)
	        .then(function (res) {
	            if (res.data.errorCode == 0) {
	                res = res.data.returnValue
	                that.videoDateList = res
	                console.log(that.videoDateList)
	            }
	        })
	        .catch(function (error) {
	            console.log(error)
	        })
    }
  },
  mounted() {
  	this.loadVideo()
		this.apiPath = api.apipath
		document.documentElement.scrollTop = 0
    document.body.scrollTop =0
  }
}
</script>
<style scoped lang="scss" rel="stylesheet/scss">
   @import "../common/common.scss";
	.wrap{
		width: 100%;
		overflow: hidden;
		.recommend-top{
			width: 100%;
			height: rem(37rem);
			border-bottom: 1px solid #dcdcdc;
			p{
				float: left;
				line-height: rem(34rem);
				margin-left: 24%;
				margin-right: 34%;
				font-size: $font14;
			}
			.top-right{
				margin: 0;
			}
			.activeTit{
				color: #c69b70;
				line-height: rem(34rem);
				border-bottom: 4px solid #c69b70;
			}			
		}
		.video-mtop{
			width: 100%;
			overflow: hidden;
			height: rem(52rem);
			border-bottom: 1px solid #dcdcdc;
			padding-top: rem(18rem);
			p{
				padding: 0 rem(20rem);
				font-size: $font13;
				height: rem(32rem);
				float: left;
				line-height: rem(32rem);
				border: 1px solid #dcdcdc;
				text-align: center;
				border-radius: rem(15rem);
				background: #fcfcfc;
				color: #3c3c3c;
			}
			.activeBtn{
				color: #c69b70;
				border: 1px solid #c69b70;
			}
			.mtop-left{
				margin-left: 6%;
			}
			.mtop-center{
				margin-left: 10%;
				margin-right: 10%;
			}
		}
		.article-main{
			width: 92%;
			overflow: hidden;
			margin-left: 4%;
			dl{
        width: 100%;
        overflow: hidden;
        margin-top: rem(15rem);
        padding-bottom: rem(15rem);
        border-bottom: rem(1rem) solid #e8e8e8;
        dt {
            width: 66%;
            float: left;
            margin-right: 2%;
            font-size: $font12;
            color: #999;
            h3{
                font-size: $font18;
                color: #000;
                font-weight: bold;
                line-height: rem(26rem);
                margin-bottom: rem(5rem);
                letter-spacing: rem(1rem);
                font-weight: normal;
            }
            p{
            	line-height: rem(16rem);
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;                	
            }
        }
        dd {
            width: 32%;
            height: rem(64rem);
            float: left;
            img {
                width: 100%;
                height: 100%;
            }
        }
      }
		}
		.video-main{
			width: 100%;
			overflow: hidden;			
			background: #f6f6f6;
			dl{
				width: 92%;
				padding: rem(14rem) 4% 0;
				background: #fff;
				height: rem(244rem);
				margin-bottom: rem(10rem);
				dt{
					width: 100%;
					height: rem(195rem);
					background: #EDEDED;
					img{
						width: 100%;
						height: 100%;
					}
				}
				dd{
					line-height: rem(49rem);
					font-size: $font14;
				}
			}
		}
	}
</style>
