<template>
	<div class="maskmain">
		<div class="address-main">	
			<h3 @click="close">新增收货地址</h3>
			<div class="address-mcon">
				<dl>
					<dt>收货人</dt>
					<dd>
						<input type="text" placeholder="收货人姓名"/>
					</dd>
				</dl>
				<dl>
					<dt>联系电话</dt>
					<dd>
						<input type="text" placeholder="手机或固定电话"/>
					</dd>
				</dl>
				<!--<dl>
					<dt>选择地区</dt>
					<dd>
						<div class="m-selectcity" @click='selectCity'><b>{{ addressProvince }} {{ addressCity }}</b></div>
						<div class="page-picker" v-show='pickerhidden'>
						    <div class="page-picker-wrapper">
						      <mt-picker :slots="addressSlots" @change="onAddressChange" :visible-item-count="5"></mt-picker>
						    </div>
					   </div>
					</dd>
				</dl>-->
				<dl>
					<dt>详细地址</dt>
					<dd>
						<input type="text" placeholder="如街道，楼层，门牌号等"/>
					</dd>
				</dl>
				<dl>
					<dt>邮政编码</dt>
					<dd>
						<input type="text" placeholder="邮政编码(选填)"/>
					</dd>
				</dl>
				<div class="address-btn preserve">保存</div>				
				<div class="address-btn remove">删除收货地址</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
const address = {
    '北京': ['北京'],
    '广东': ['广州', '深圳', '珠海', '汕头', '韶关', '佛山', '江门', '湛江', '茂名', '肇庆', '惠州', '梅州', '汕尾', '河源', '阳江', '清远', '东莞', '中山', '潮州', '揭阳', '云浮'],
    '上海': ['上海'],
    '天津': ['天津'],
    '重庆': ['重庆'],
    '辽宁': ['沈阳', '大连', '鞍山', '抚顺', '本溪', '丹东', '锦州', '营口', '阜新', '辽阳', '盘锦', '铁岭', '朝阳', '葫芦岛'],
    '江苏': ['南京', '苏州', '无锡', '常州', '镇江', '南通', '泰州', '扬州', '盐城', '连云港', '徐州', '淮安', '宿迁'],
    '湖北': ['武汉', '黄石', '十堰', '荆州', '宜昌', '襄樊', '鄂州', '荆门', '孝感', '黄冈', '咸宁', '随州', '恩施', '仙桃', '天门', '潜江', '神农架林区'],
    '四川': ['成都', '自贡', '攀枝花', '泸州', '德阳', '绵阳', '广元', '遂宁', '内江', '乐山', '南充', '眉山', '宜宾', '广安', '达州', '雅安', '巴中', '资阳', '阿坝', '甘孜', '凉山'],
    '陕西': ['西安', '铜川', '宝鸡', '咸阳', '渭南', '延安', '汉中', '榆林', '安康', '商洛'],
    '河北': ['石家庄', '唐山', '秦皇岛', '邯郸', '邢台', '保定', '张家口', '承德', '沧州', '廊坊', '衡水'],
    '山西': ['太原', '大同', '阳泉', '长治', '晋城', '朔州', '晋中', '运城', '忻州', '临汾', '吕梁'],
    '河南': ['郑州', '开封', '洛阳', '平顶山', '安阳', '鹤壁', '新乡', '焦作', '濮阳', '许昌', '漯河', '三门峡', '南阳', '商丘', '信阳', '周口', '驻马店'],
    '吉林': ['长春', '吉林', '四平', '辽源', '通化', '白山', '松原', '白城', '延边'],
    '黑龙江': ['哈尔滨', '齐齐哈尔', '鹤岗', '双鸭山', '鸡西', '大庆', '伊春', '牡丹江', '佳木斯', '七台河', '黑河', '绥化', '大兴安岭'],
    '内蒙古': ['呼和浩特', '包头', '乌海', '赤峰', '通辽', '鄂尔多斯', '呼伦贝尔', '巴彦淖尔', '乌兰察布', '锡林郭勒盟', '兴安盟', '阿拉善盟'],
    '山东': ['济南', '青岛', '淄博', '枣庄', '东营', '烟台', '潍坊', '济宁', '泰安', '威海', '日照', '莱芜', '临沂', '德州', '聊城', '滨州', '菏泽'],
    '安徽': ['合肥', '芜湖', '蚌埠', '淮南', '马鞍山', '淮北', '铜陵', '安庆', '黄山', '滁州', '阜阳', '宿州', '巢湖', '六安', '亳州', '池州', '宣城'],
    '浙江': ['杭州', '宁波', '温州', '嘉兴', '湖州', '绍兴', '金华', '衢州', '舟山', '台州', '丽水'],
    '福建': ['福州', '厦门', '莆田', '三明', '泉州', '漳州', '南平', '龙岩', '宁德'],
    '湖南': ['长沙', '株洲', '湘潭', '衡阳', '邵阳', '岳阳', '常德', '张家界', '益阳', '郴州', '永州', '怀化', '娄底', '湘西'],
    '广西': ['南宁', '柳州', '桂林', '梧州', '北海', '防城港', '钦州', '贵港', '玉林', '百色', '贺州', '河池', '来宾', '崇左'],
    '江西': ['南昌', '景德镇', '萍乡', '九江', '新余', '鹰潭', '赣州', '吉安', '宜春', '抚州', '上饶'],
    '贵州': ['贵阳', '六盘水', '遵义', '安顺', '铜仁地区', '毕节地区', '黔西南布', '黔东南苗族', '黔南布'],
    '云南': ['昆明', '曲靖', '玉溪', '保山', '昭通', '丽江', '普洱', '临沧', '德宏傣族景', '怒江傈', '迪庆', '大理白族', '楚雄', '红河哈尼族', '文山壮族', '西双版纳'],
    '西藏': ['拉萨', '那曲地区', '昌都地区', '林芝地区', '山南地区', '日喀则', '阿里'],
    '海南': ['海口', '三亚', '五指山', '琼海', '儋州', '文昌', '万宁', '东方', '澄迈县', '定安县', '屯昌县', '临高县', '白沙', '昌江', '乐东', '陵水', '保亭黎族', '琼中黎族'],
    '甘肃': ['兰州', '嘉峪关', '金昌', '白银', '天水', '武威', '酒泉', '张掖', '庆阳', '平凉', '定西', '陇南', '临夏', '甘南'],
    '宁夏': ['银川', '石嘴山', '吴忠', '固原', '中卫'],
    '青海': ['西宁', '海东地区', '海北', '海南', '黄南', '果洛', '玉树', '海西蒙古族'],
    '新疆': ['乌鲁木齐', '克拉玛依', '吐鲁番地区', '哈密地区', '和田地区', '阿克苏', '喀什地区', '克孜勒苏', '巴音郭楞', '昌吉', '博尔塔拉', '石河子', '阿拉尔', '图木舒克', '五家渠', '伊犁哈萨克'],
    '香港': ['香港'],
    '澳门': ['澳门'],
    '台湾': ['台北市', '高雄市', '台北县', '桃园县', '新竹县', '苗栗县', '台中县', '彰化县', '南投县', '云林县', '嘉义县', '台南县', '高雄县', '屏东县', '宜兰县', '花莲县', '台东县', '澎湖县', '基隆市', '新竹市', '台中市', '嘉义市', '台南市']
  };
  export default {
    methods: {
      onAddressChange(picker, values) {
        picker.setSlotValues(1, address[values[0]]);
        this.addressProvince = values[0];
        this.addressCity = values[1];
        this.Obj.city = this.addressCity;
        this.$emit('updateUserAnswer', this.Obj);
      },
      selectCity(){
    	this.pickerhidden = true
      },
      close(){
    	this.$emit('closeDialogEvent')
      }
    },
    data() {
      return {
      	pickerhidden:false,
      	Obj:{
      	city: '',
      },
        number: 0,
        yearSlot: [{
          flex: 1,
          values: ['1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995'],
          className: 'slot1'
        }],
        numberSlot: [{
          flex: 1,
          defaultIndex: 0,
          values: [0, 1, 2, 3, 4, 5, 6],
          className: 'slot1'
        }],
        dateSlots: [
          {
            flex: 1,
            values: ['2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'],
            className: 'slot1',
            textAlign: 'right'
          }, {
            divider: true,
            content: '-',
            className: 'slot2'
          }, {
            flex: 1,
            values: ['2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'],
            className: 'slot3',
            textAlign: 'left'
          }
        ],
        dateStart: '2002',
        dateEnd: '2002',
        addressSlots: [
          {
            flex: 1,
            values: Object.keys(address),
            className: 'slot1',
            textAlign: 'center'
          }, {
            divider: true,
            content: '-',
            className: 'slot2'
          }, {
            flex: 1,
            values: ['北京'],
            className: 'slot3',
            textAlign: 'center'
          }
        ],
        addressProvince: '',
        addressCity: ''
      };
    },
    mounted() {
      this.$nextTick(() => {
        let step = 0;
        setInterval(() => {
          this.numberSlot[0].defaultIndex = step++;
          if (step > this.numberSlot[0].values.length - 1) {
            step = 0;
          }
        }, 1000);
      });
    }
  };
</script>
<style lang="scss">
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
	.address-main{
		height: rem(394rem);
		background:#fff;
		width: 100%;
		position: absolute;
		bottom: 0;
		left: 0;
		h3{
			font-size: $font16;
			text-align: center;
			line-height: rem(52rem);
			border-bottom: 1px solid #efefef;
			background: url(../assets/shopcarClose.png) no-repeat 97% center;
			background-size: rem(19rem);
		}
		.address-mcon{
			width: 94%;
			padding: 0 3%;
			dl{
				border-bottom: 1px solid #efefef;
				height: rem(50rem);
				width: 100%;
				font-size: $font14;
				dt{
					width: 18%;
					float: left;
					line-height: rem(50rem);
				}
				dd{
					width: 78%;
					float: right;
					margin: rem(16rem) 0;
					input{
						width: 100%;
						border: 0;
					}
				}
			}
			.address-btn{
				width: 100%;
				height: rem(40rem);
				text-align: center;
				line-height: rem(40rem);
				font-size: $font16;
				border-radius: rem(5rem) ;
			}
			.preserve{
				background: #50b347;
				color: #fff;
				margin-bottom: rem(10rem);
				margin-top: rem(24rem);
			}
			.remove{
				color: $c3c3c;
				border: 1px solid #999;
			}
		}
		
		
	}	
}
</style>