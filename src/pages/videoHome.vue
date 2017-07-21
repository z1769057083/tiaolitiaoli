<template >
  <div class='wrap'> 
		<div class="recommend-top">
			<p @click="change_active(0,$event)" :class="{'activeTit':toggle===0}">文章</p>
			<p @click="change_active(1,$event)" :class="{'activeTit':toggle===1}" class="top-right">视频</p>
		</div>
		<div class="article-main" v-if='mainShow' ref="scroll_hook">
			<div>
				<dl v-for='articleItem in articleAll'>
					<router-link :to="{ name: 'articleDetails', query: { itemid: articleItem._id }}">
						<dt>
							<h3>{{articleItem.title}}</h3>
							<p v-html='articleItem.content'></p>
						</dt>
						<dd><img :src="''+apiPath+'/image/article/'+articleItem.index+'.jpg'"
	                     onerror="this.src='../../static/images/defaultPicture.jpg'"/></dd>
          </router-link>
				</dl>
			</div>			
		</div>
		<div class="video-mtop" v-if='!mainShow'>
			<p  @click='baDuanJin(0,$event)' class="mtop-left" :class="{'activeBtn':btnIndex===0}">八段锦</p>
			<p  @click='xiaoErTuiNa(1,$event)' :class="{'activeBtn':btnIndex===1}" class="mtop-center">小儿推拿</p>
			<p  @click='liuZiJue(2,$event)' :class="{'activeBtn':btnIndex===2}">六字诀</p>
		</div>
		<div class="video-main" v-if='!mainShow'>
			 <dl v-for='videoItem in videoDateList'>
        <router-link :to="{ name: 'videoListDetail', query: { itemid: videoItem._id, type:videoItem.type }}">
            <dt>
                <img :src="''+apiPath+'/image/video/'+videoItem.type+'/'+videoItem.index+'.jpg'"
                     onerror="this.src='../../static/images/defaultPicture.jpg'"/>
            </dt>
        </router-link>
        <dd>
            <span>{{videoItem.title}}</span>
            <p>{{videoItem.content}}</p>
        </dd>
    	</dl>
		</div>	
		<div class="s-mrecombottom">我是有底线的</div>
  </div>	
</template>
<script>
import axios from 'axios'
import api from '../api/api'
import BScroll from 'better-scroll'
export default {
  data(){
  	return {
  		apiPath:'',
  		toggle: 0,
  		mainShow:true,
  		type:'baduanjin',
  		videoDateList:[],
  		articleAll:[],
  		articleDateList:[],
  		btnIndex: 0,
  		pageIndex:0,
  		MIN_PULL: 40
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
	            }
	        })
	        .catch(function (error) {
	            console.log(error)
	        })
    },
    loadArticle(){
    	var that = this;
	    axios.get(api.articleList+this.pageIndex)
	        .then(function (res) {
	            if (res.data.errorCode == 0) {
	                res = res.data.returnValue
	                that.articleDateList = res
	                that.articleAll = that.articleAll.concat(that.articleDateList)
	                console.log(that.articleDateList)
	                  
	            }
	        })
	        .catch(function (error) {
	            console.log(error)
	        })
    },
    initScroll() {
	    this.$nextTick(() => {
	      if (!this.scroll) {
	        // 主体滚动初始化
	        this.scroll = new BScroll(this.$refs.scroll_hook, {
	          probeType: 3,
	          click: true
	        });
	        // 记录最大高度
					this.maxHeight = this.scroll.maxScrollY;
	        // 上拉加载
	        this.scroll.on('touchend', (pos) => {
	          	if (pos.y < this.maxHeight - this.MIN_PULL) {
		            this.pageIndex++;	
		            console.log(this.pageIndex)
		            if(this.pageIndex==1){
		            	this.pageIndex=1
		            	this.loadArticle()
		            }else if(this.pageIndex==2){
		            	this.pageIndex=2
		            	this.loadArticle()
		            }else if(this.pageIndex==3){
		            	this.pageIndex=3
		            	this.loadArticle()
		            }
	            }
	        })
	      } else {
	        this.scroll.refresh();
	        // 记录最大高度
	        this.maxHeight = this.scroll.maxScrollY;
	      }
    	})
  	}   
  },
  mounted() {
  	this.loadVideo()
		this.loadArticle()
		this.apiPath = api.apipath
		document.documentElement.scrollTop = 0
    document.body.scrollTop =0
  },
  watch: {
      articleDateList: {
        handler(val, oldVal) {
//        this.initScroll();
        },
        deep: true
      },
  }
}
</script>
<style scoped lang="scss" rel="stylesheet/scss">
   @import "../common/common.scss";
	.wrap{
		width: 100%;
		height: 100%;
		background: #f6f6f6;
		overflow: hidden;
		.recommend-top{
			width: 100%;
			height: rem(37rem);
			background: #fff;
			border-bottom: 1px solid #dcdcdc;
			position: absolute; 
			left: 0;
			top: 0;
			right: 0; 
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
			background: #fff;
			position: absolute;
			top: rem(38rem);
			left: 0;
			right: 0;
			
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
			width: 100%;
			position: absolute;
			top: rem(38rem);
			left: 0;
			right: 0;
			bottom: 0;
			overflow: hidden;			
			background: #fff;
			-webkit-overflow-scrolling: touch;
			dl{
        width: 92%;
        margin-left: 4%;
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
            overflow: hidden;
            height: rem(60rem);
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
			position: absolute;		
			background: #f6f6f6;
			top: rem(90rem);
			left: 0;
			right: 0;
			-webkit-overflow-scrolling: touch;
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
		.s-mrecombottom{
	 		line-height: 0.45rem;
	 		font-size: 0.32rem;
	 		color: #999;
	 		width: 100%;
	 		overflow: hidden;
	 		text-align: center;
	 		margin: rem(20rem) 0;
	 		display: block;
	 	}
	}
</style>
