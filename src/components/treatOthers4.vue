<template>
	<div class="m-selectfacon">
	  	<div class="m-selecttreat">
	  		<dl>
	  			<dt>清瘦</dt>
	  			<dd>
	  				<p :class="{'active': section4.lean === 0}" @click="change_active(0,'1','lean',$event)">是</p>
	  				<p :class="{'active': section4.lean === 1}" @click="change_active(1,'1','lean',$event)">不是</p>
	  				<p :class="{'active': section4.lean === 2}" @click="change_active(2,'1','lean',$event)">不确定</p>
	  			</dd>
	  		</dl>
	  		<dl>
	  			<dt>观察透彻</dt>
	  			<dd>
	  				<p :class="{'active': section4.observe === 0}" @click="change_active(0,'2','observe',$event)">是</p>
	  				<p :class="{'active': section4.observe === 1}" @click="change_active(1,'2','observe',$event)">不是</p>
	  				<p :class="{'active': section4.observe === 2}" @click="change_active(2,'2','observe',$event)">不确定</p>
	  			</dd>
	  		</dl>
	  		<dl>
	  			<dt>为人庄重</dt>
	  			<dd>
	  				<p :class="{'active': section4.solemn === 0}" @click="change_active(0,'3','solemn',$event)">是</p>
	  				<p :class="{'active': section4.solemn === 1}" @click="change_active(1,'3','solemn',$event)">不是</p>
	  				<p :class="{'active': section4.solemn === 2}" @click="change_active(2,'3','solemn',$event)">不确定</p>
	  			</dd>
	  		</dl>
	  		<dl>
	  			<dt>办事爽快</dt>
	  			<dd>
	  				<p :class="{'active': section4.frank === 0}" @click="change_active(0,'4','frank',$event)">是</p>
	  				<p :class="{'active': section4.frank === 1}" @click="change_active(1,'4','frank',$event)">不是</p>
	  				<p :class="{'active': section4.frank === 2}" @click="change_active(2,'4','frank',$event)">不确定</p>
	  			</dd>
	  		</dl>
	  		<dl>
	  			<dt>讲话策略多</dt>
	  			<dd>
	  				<p :class="{'active': section4.speech === 0}" @click="change_active(0,'5','speech',$event)">是</p>
	  				<p :class="{'active': section4.speech === 1}" @click="change_active(1,'5','speech',$event)">不是</p>
	  				<p :class="{'active': section4.speech === 2}" @click="change_active(2,'5','speech',$event)">不确定</p>
	  			</dd>
	  		</dl>
	  	</div>
	</div>
</template>
<script type="text/javascript">

    import Common from '../../static/common'
export default {
  data(){
	  	return {
            section4:{
	      	lean:'',
	      	observe:'',
	      	solemn:'',
	      	frank:'',
	      	speech:''
	      }
	    }
	},
	methods:{
	  	change_active(answerValue,sectionId,sectionKey,event) {
            this.$data.section4[sectionKey]=answerValue
            var answer={'section4':this.section4}
            this.$emit('updateUserAnswer', answer)
	    }
	},
    mounted(){
        Common.loadXianTianUserData(this);
    }
}
</script>
<style lang="scss">
@import "../common/common.scss";
	/*选择问题内容*/
	.m-selectfacon{
		width: 90%;
		margin-left: 5%;
		.m-selecttreat{
			width: 100%;
			overflow: hidden;
			dl{
				width: 100%;
				height: rem(44rem);
				border-bottom: 1px solid #e3e3e3;
				dt{
					width: 22%;
					float: left;
					line-height: rem(44rem);
				}
				dd{
					width: 78%;
					float: left;
					line-height: rem(44rem);
					p{
						display: block;
						width: 30%;
						float: left;
						height: rem(24rem);
						background: #fff;
						margin-top: rem(10rem);
						border-radius: rem(10rem);
						line-height: rem(24rem);
						text-align: center;
						margin-left: 3%;
					}
					.active{
						color: #fff;
						background: #c69b70;
					}
				}
			}
		}
	}
</style>