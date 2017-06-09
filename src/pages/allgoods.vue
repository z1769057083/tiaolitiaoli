<template>
  <div class='allgoods'> 
     <!--主题部分-->
	<div class="a-main">
		<dl v-for='item in list'>
			<router-link :to="{ name: 'goodsdetail', query: { itemid: item._id }}">
				<dt>
					<img :src="'http://139.162.116.116/image/product/'+item.index+'/1.jpg'" 
							onerror="this.src='http://placeholder.qiniudn.com/800'"/>
				</dt>
			</router-link>
				<dd>
					<span>{{item.name}}</span>
					<p>¥{{item.price}}</p>
				</dd>
		</dl>
	</div>
	<div class="s-mrecombottom" v-if='list.length>4'>我是有底线的</div>
	<div class="s-mrecombottom1" v-if='list.length<=4'>当前商品还很少哦</div>
  </div>
</template>
<script>
import axios from 'axios'
import api from '../api/api'
export default {
  name: 'allgoods',
  data(){
  	return {
  		list:[]
    }
  },
  methods: {
  	requestlist(){
        var that = this;
        document.title = this.$route.query.titleName;
        that.categoryId = this.$route.query.categoryId;
        axios.get(api.allDoodsData+that.categoryId)
          .then(function (res) {
            if (res.data.errorCode == 0) {
              res = res.data.returnValue
              that.list = res
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      },
  },
  mounted() {
  	this.requestlist()
  	document.documentElement.scrollTop = 0
    document.body.scrollTop =0
  }
}
</script>
<style scoped lang="scss">
	@import "../common/common.scss";
.allgoods{
	width: 100%;
	height: 100%;
	background: #f6f6f6;
	overflow: auto;
	position: absolute;
	-webkit-overflow-scrolling: touch;
	.a-main{
		width: 95%;
		overflow: hidden;
		margin-left: 2.5%;
		margin-top: rem(12rem);
		dl{
			width: 48.5%;
			float: left;
			margin: 0 3% rem(12rem) 0;
			background: #fff;
			dt{
				width: 100%;
				height: rem(173rem);
				img{
					width: 100%;
					height: 100%;
				}
			}
			dd{
				width: 92%;
				margin-left: 4%;
				span{
					font-size: $font14;
					line-height: rem(26rem);
				}
				p{
					padding: rem(5rem) 0;
					color: #ff4443;
					font-size: $font12;
				}
			}
		}
		dl:nth-child(2n){
			margin-right: 0;
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
	 	.s-mrecombottom1{
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