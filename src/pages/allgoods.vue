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
	<div class="s-mrecombottom">我是有底线的</div>
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
        that.categoryId = this.$route.query.categoryId;
        console.log(this.$route.query.categoryId)
        axios.get('http://139.162.116.116/product/category?category=daily')
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
	overflow: hidden;
	.a-main{
		width: 95%;
		overflow: hidden;
		margin-left: 2.5%;
		margin-top: rem(15rem);
		dl{
			width: 48.5%;
			float: left;
			margin: 0 3% rem(10rem) 0;
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
	 	}	
}
</style>