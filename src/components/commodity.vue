<template>
    <div>
        <!--文章部分-->
        <div class="s-mrecomment" v-if="hasRecommend">
            <!--<h3 class="s-marttitle">个性化推荐</h3>-->
            <!--<dl class="s-marticlecon" v-for='(soupItem,index) in getSouplist' @click='soupClick(soupItem,index)'>-->
                <!--<dt>-->
                <!--<h3>{{soupItem.title}}</h3>-->
                <!--{{soupItem.material}}-->
                <!--<div class="s-mreconintrotip">-->
                    <!--<img class="tip" src="../assets/shopTip.png"/>-->
                   <!--{{soupItem.recommendText|textHandler}}-->
                <!--</div>-->
                <!--</dt>-->
                <!--<dd>-->
                    <!--<img :src="''+apiPath+'/image/soup/'+soupItem.index+'/1.jpg'"-->
                         <!--onerror="this.src='../../static/images/defaultPicture.jpg'"-->
                         <!--@click='soupClick(soupItem,index)'/>-->
                <!--</dd>-->
            <!--</dl>-->
            <dl class="s-marticlecon" v-for='(item,index) in recommendlist' @click='recomClick(item,index)' >
                <dt>
                <h3>{{item.name}}</h3>
                <span class="itemPrice">¥{{item.price}}.00</span>
                <div class="s-mreconintrotip">
                    <img class="tip" src="../assets/shopTip.png"/>
                    {{item.recommendText|textHandler}}
                </div>
                </dt>
                <dd>
                    <img :src="''+apiPath+'/image/product/thumbnail/'+item.index+'.jpg'"
                         onerror="this.src='../../static/images/defaultPicture.jpg'"
                         @click='soupClick(soupItem,index)'/>
                </dd>
            </dl>
        </div>
        <!--商品部分-->

        <div class="product-section" v-if="!hasRecommend">
            <h2 v-if="hasRecommend">逛一逛</h2>
            <img v-if="hasRecommend" class="recuperatebg" src="../assets/recuperatebg.png"/>
        <div class="s-mrecomment1" v-for="(item, index) in listem">

            <h3 class="s-marttitle">{{item.title}}
                <router-link :to="{ name: 'allgoods', query: { categoryId: item.category ,titleName:item.title}}">
                    <a class="s-mrecomall" @click='allClick(item,index)'>查看全部</a> 
                </router-link>
            </h3>
            <div>
                <dl class="s-mrecomlist" v-for="(temp,index) in item.items" @click='shopClick(temp,index)'>
                    <dt class="s-mreconimg">
                        <img :src="''+apiPath+'/image/product/thumbnail/'+temp.index+'.jpg'"
                             onerror="this.src='../../static/images/defaultPicture.jpg'"
                             @click='shopClick(temp,index)'/>
                    </dt>
                    <dd class="s-mreconintro">
                        <span if='name' class='activeShow'>{{temp.name}}</span>
                        <div class="s-mreconintrotip">
                            <img class="tip" src="../assets/shopTip.png"/>
                            {{temp.fit|transform}}
                        </div>
                    </dd>
                </dl>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    import api from '../api/api';
    export default {
        data(){
            return {
                listem: [],
                recommendlist: [],
                getSouplist: [],
                soupList: [],
                apiPath: '',
                toggle: true
            }
        },
        props: ['hasRecommend'],
        filters: {
            transform(object){
                if ( object && typeof object==='object' &&
                    Array == object.constructor && object.length>0) {
                    if(object.length>2){
                        var sliItem=object.slice(0, 2);
                        return sliItem.toString()
                    }
                    else {
                        return object.toString()
                    }
                }
                else {
                    return '平衡'
                }
            },
            textHandler(text){
                if(text==''){
                    return '平衡';
                }
                else{
                    return text;
                }
            }
        },
        methods: {
            requestlist(){
                var that = this;
                axios.get(api.shopData)
                    .then(function (res) {
                        if (res.data.errorCode == 0) {
                            res = res.data.returnValue
                            that.listem = res
                        }
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
            },
            recommend(){
                var that = this;
                if (window.localStorage.getItem(Account_Index) !== null) {
                    let account = JSON.parse(window.localStorage.getItem(Account_Index))
                    axios.get(api.recommendData + account._id)
                        .then(function (res) {
                            if (res.data.errorCode == 0) {
                                res = res.data.returnValue
                                that.recommendlist = res
                                that.recommendData = true
                            }
                        })
                        .catch(function (error) {
                            console.log(error)
                        })
                }
            },
            getSoup(){
                var that = this;
                axios.get(api.allSoupData)
                    .then(function (res) {
                        if (res.data.errorCode == 0) {
                            res = res.data.returnValue
                            that.getSouplist = res
                            for (var i in that.getSouplist)
                                that.soupList = that.getSouplist[i].images[0]
                        }
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
            }, 
            soupClick(soupItem,index){
            	this.$router.push({ name:'soupDetail', query: { soupId: soupItem._id }})
            },
            recomClick(recommendItem,index){
            	this.$router.push({ name: 'goodsdetail', query: { itemid: recommendItem._id}})
            },
        	allClick(item,index){
        		this.$router.push({ name: 'allgoods', query: { categoryId: item.category ,titleName:item.title}})
        	},
        	shopClick(temp,index){
        		this.$router.push({ name: 'goodsdetail', query: { itemid: temp._id}})
        	}
        },
        mounted() {
            this.requestlist()
            this.recommend()
            this.getSoup()
            this.apiPath = api.apipath
    	},
    	watch:{
        	listem: {
		        handler(val, oldVal) {
		          	document.documentElement.scrollTop = 0
            		document.body.scrollTop = 0
		        },
		        deep: true
		    },
		    recommendlist: {
		        handler(val, oldVal) {
		          	document.documentElement.scrollTop = 0
            		document.body.scrollTop = 0
		        },
		        dceep: true
		    },
		    getSouplist: {
		        handler(val, oldVal) {
		          	document.documentElement.scrollTop = 0
            		document.body.scrollTop = 0
		        },
		        deep: true
		    }
        }
    }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
    @import "../common/common.scss";
    /*文章部分*/
    .s-mrecomment {
        width: 100%;
        overflow: hidden;
        padding-top: rem(6rem);
        .s-marttitle {
            font-size: 0.42rem;
            line-height: rem(40rem);
            color: #000;
            font-weight: bold;
            margin-bottom: 0.26rem;
            background: url(../assets/shoptitleft.png) no-repeat center left;
            padding-left: 2.5%;
            border-bottom: rem(1rem) solid #e8e8e8;
        }
        .s-marticlecon {
            width: 100%;
            overflow: hidden;
            margin-top: rem(15rem);
            padding-bottom: rem(12rem);
            border-bottom: rem(1rem) solid #e8e8e8;
            dt {
                width: 66%;
                float: left;
                margin-right: 2%;
                font-size: $font12;
                color: #999;
                line-height: rem(23rem);
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                h3 {
                    font-size: $font18;
                    color: $c3c3c;
                    font-weight: bold;
                    line-height: rem(26rem);
                    margin-bottom: rem(5rem);
                    letter-spacing: rem(1rem);
                }
                .tip {
                    width: rem(12rem);
                    height: rem(12rem);
                   	float: left;
                   	margin-right: rem(4rem) ;
                    vertical-align: middle;
                }
                span{
                	vertical-align: middle;
                	/*float: left;*/
                }
                .itemPrice{
                	color: #ff4443;
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
        .s-marticlecon1 {
            width: 100%;
            overflow: hidden;
            margin-top: rem(10rem);
            padding-bottom: rem(10rem);
            border-bottom: rem(1rem) solid #e8e8e8;
            dt {
                width: 100%;
                .s-marcontitle {
                    font-size: $font16;
                    color: $c3c3c;
                    font-weight: bold;
                    line-height: rem(26rem);
                    margin-bottom: rem(5rem);
                    letter-spacing: rem(1rem);
                    background: url(../assets/shoptitleft.png) no-repeat center left;
                    padding-left: 2.5%;
                }
            }
            .s-martimg {
                width: 32%;
                float: left;
                margin-right: 2%;
                img {
                    width: 100%;
                    height: rem(64rem);
                }
                .s-martname {
                    font-size: $font12;
                    line-height: rem(18rem);
                    margin: rem(3rem) 0;
                    overflow: hidden;
	                white-space: nowrap;
	                text-overflow: ellipsis;
	                width: 100%;
                    
                }
                .s-martpic {
                    color: #ff4443;
                }
            }
            .s-martimg:nth-child(4) {
                margin-right: 0;
            }
        }
    }

    /*商品列表*/
    .product-section{
        h2 {
            padding-top: $font12;
            font-size: $font20;
            line-height: rem(28rem);
            text-align: center;
        }
        .recuperatebg {
            width: 49%;
            margin: rem(10rem) 25.5% rem(8rem);
        }
    }
    .s-mrecomment1 {
        width: 100%;
        overflow: hidden;
        padding-top: 0.32rem;
        border-bottom: rem(1rem) solid #e8e8e8;
        h3 {
            font-size: 0.42rem;
            line-height: 0.59rem;
            color: #000;
            font-weight: bold;
            margin-bottom: 0.26rem;
            background: url(../assets/shoptitleft.png) no-repeat left;
            padding-left: 2%;
            .s-mrecomall {
                font-size: 0.35rem;
                color: #c69b70;
                float: right;
                font-weight: normal;
                background: url(../assets/s-mrecomall.png) no-repeat right;
                background-size: 0.16rem 0.32rem;
                padding-right: 3%;
            }
        }
    }

    .s-mrecomlist {
        width: 31.9%;
        float: left;
        margin-right: 2.1%;
        margin-bottom: 0.26rem;
        .s-mreconimg {
            width: 100%;
            height: rem(64rem);
            margin-bottom: 0.21rem;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .s-mreconintro {
            width: 100%;
            overflow: hidden;
            span {
                font-size: 0.35rem;
                color: #000;
                line-height: 0.48rem;
                text-decoration: none;
                display: none;
                width: 100%;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                display: inline-block;
            }
            .s-mreconintrotip{
                width: 100%;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                color: #666;
                padding-top: rem(6rem);
                line-height: rem(15rem);
                .tip {
                    width: rem(12rem);
                    height: rem(12rem);
                   	float: left;
                   	margin-right: rem(4rem);
                    vertical-align: middle;
                }
            }
            .activeShow {
                display: block;
            }
        }
    }

    .s-mrecomlist:nth-child(3n) {
        margin-right: 0;
    }

</style>