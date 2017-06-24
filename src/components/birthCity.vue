<template>
    <div class="m-selection1">
        <div class="m-selectcity">出生地<b>{{ addressProvince }} {{ addressCity }}</b></div>
        <div class="page-picker">
            <div class="page-picker-wrapper">
                <mt-picker :slots="addressSlots" @change="onAddressChange" :visible-item-count="5"></mt-picker>
            </div>
        </div>
        <div class="m-selectMask"></div>
    </div>
</template>
<script type="text/babel">
    import  Common from '../../static/common'
    const address = {
        '北京': ['北京'],
        '上海': ['上海'],
        '天津': ['天津'],
        '重庆': ['重庆'],
        '河北': ['石家庄', '邯郸', '邢台', '保定', '张家口', '承德', '秦皇岛', '唐山', '沧州', '廊坊', '衡水'],
        '山西': ['太原', '大同', '阳泉', '晋城', '朔州', '晋中', '忻州', '吕梁', '临汾', '运城', '长治'],
        '河南': ['郑州', '开封', '洛阳', '平顶山', '焦作', '鹤壁', '新乡', '安阳', '濮阳', '许昌', '漯河', '三门峡', '南阳', '商丘', '周口', '驻马店', '信阳', '济源'],
        '辽宁': ['沈阳', '大连', '鞍山', '抚顺', '本溪', '丹东', '锦州', '葫芦岛', '营口', '盘锦', '阜新', '辽阳', '朝阳', '铁岭'],
        '吉林': ['长春', '吉林', '四平', '辽源', '通化', '白山', '松原', '白城', '延边'],
        '黑龙江': ['鹤岗', '双鸭山', '鸡西', '大庆', '伊春', '牡丹江', '佳木斯', '七台河', '黑河', '绥化', '大兴安岭', '哈尔滨', '齐齐哈尔'],
        '内蒙古': ['呼和浩特', '包头', '乌海', '赤峰', '乌兰察布', '锡林郭勒盟', '呼伦贝尔', '鄂尔多斯', '巴彦淖尔', '阿拉善盟', '兴安盟', '通辽'],
        '江苏': ['南京', '徐州', '连云港', '淮安', '宿迁', '盐城', '扬州', '泰州', '南通', '镇江', '常州', '无锡', '苏州'],
        '山东': ['济宁', '济南', '青岛', '淄博', '枣庄', '东营', '潍坊', '烟台', '威海', '莱芜', '德州', '临沂', '聊城', '滨州', '菏泽', '日照', '泰安'],
        '安徽': ['黄山', '滁州', '阜阳', '亳州', '宿州', '池州', '六安', '宣城', '铜陵', '合肥', '淮南', '淮北', '芜湖', '蚌埠', '马鞍山', '安庆', '巢湖'],
        '浙江': ['宁波', '衢州', '丽水', '台州', '舟山', '杭州', '温州', '嘉兴', '湖州', '绍兴', '金华'],
        '福建': ['福州', '厦门', '三明', '莆田', '泉州', '漳州', '南平', '龙岩', '宁德'],
        '湖北': ['孝感', '黄冈', '咸宁', '恩施', '鄂州', '荆门', '随州', '神农架林区', '武汉', '黄石', '襄阳', '十堰', '荆州', '宜昌', '潜江', '天门', '仙桃'],
        '湖南': ['长沙', '株洲', '湘潭', '衡阳', '邵阳', '岳阳', '常德', '张家界', '郴州', '益阳', '永州', '怀化', '娄底', '湘西'],
        '广东': ['广州', '深圳', '珠海', '汕头', '韶关', '河源', '梅州', '揭阳', '惠州', '汕尾', '东莞', '中山', '江门', '佛山', '阳江', '湛江', '茂名', '肇庆', '云浮', '清远', '潮州'],
        '广西': ['崇左', '南宁', '柳州', '桂林', '梧州', '北海', '防城港', '钦州', '贵港', '玉林', '贺州', '百色', '河池', '来宾'],
        '江西': ['南昌', '景德镇', '萍乡', '新余', '九江', '鹰潭', '上饶', '宜春', '抚州', '吉安', '赣州'],
        '四川': ['凉山', '成都', '自贡', '攀枝花', '泸州', '绵阳', '德阳', '广元', '遂宁', '内江', '乐山', '宜宾', '广安', '南充', '达州', '巴中', '雅安', '眉山', '资阳', '阿坝', '甘孜'],
        '海南': ['三亚', '文昌', '五指山', '临高县', '澄迈县', '定安县', '屯昌县', '昌江', '白沙', '琼中', '陵水', '保亭', '乐东', '三沙', '海口', '琼海', '万宁', '东方', '儋州'],
        '贵州': ['贵阳', '六盘水', '遵义', '铜仁', '毕节', '安顺', '黔西南州', '黔东南州', '黔南州'],
        '云南': ['迪庆', '昆明', '曲靖', '玉溪', '昭通', '普洱', '临沧', '保山', '丽江', '文山', '红河', '西双版纳', '楚雄', '大理', '德宏', '怒江'],
        '西藏': ['阿里', '林芝', '拉萨', '那曲', '山南', '昌都', '日喀则'],
        '陕西': ['延安', '汉中', '榆林', '商洛', '安康', '西安', '铜川', '宝鸡', '咸阳', '渭南'],
        '甘肃': ['庆阳', '陇南', '武威', '张掖', '酒泉', '甘南', '临夏', '定西', '兰州', '金昌', '白银', '天水', '嘉峪关', '平凉'],
        '青海': ['西宁', '海东地区', '海北', '黄南', '海南', '果洛', '玉树', '海西'],
        '宁夏': ['银川', '石嘴山', '吴忠', '固原', '中卫'],
        '新疆': ['铁门关', '五家渠', '阿拉尔', '图木舒克', '乌鲁木齐', '克拉玛依', '石河子', '吐鲁番地区', '哈密地区', '和田地区', '阿克苏', '喀什地区', '克孜勒苏', '巴音郭楞', '昌吉', '博尔塔拉', '伊犁', '塔城', '阿勒泰'],
        '香港': ['香港'],
        '澳门': ['澳门'],
        '台湾': ['台北市', '高雄市', '台北县', '桃园县', '新竹县', '苗栗县', '台中县', '彰化县', '南投县', '云林县', '嘉义县', '台南县', '高雄县', '屏东县', '宜兰县', '花莲县', '台东县', '澎湖县', '基隆市', '新竹市', '台中市', '嘉义市', '台南市']
    };
    export default {
        props: ['questionSection'],
        methods: {
            onAddressChange(picker, values) {
                picker.setSlotValues(1, address[values[0]]);
                this.addressProvince = values[0];
                this.addressCity = values[1];
                this.Obj.birthCity = this.addressCity;
                this.Obj.location = Common.getLocationByCity(this.addressProvince, this.addressCity);
                this.$emit('updateUserAnswer', this.Obj);
            },

        },
        data() {
            return {
                Obj: {
                    birthCity: ''
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
<style lang="scss" rel="stylesheet/scss">
    @import "../common/common.scss";
    /*选择问题内容*/
    .m-selection1 {
        width: 74.6%;
        margin-left: 12.2%;
        overflow: hidden;
        position: relative;
        .m-selectcity {
            width: 92.8%;
            height: 1.3rem;
            background: url(../assets/msgdate.png) no-repeat center;
            background-size: cover;
            line-height: 1.3rem;
            font-size: $font16;
            padding-left: 7.2%;
            color: #ccc;
            border-radius: 1.06rem;
            margin-top: rem(30rem);
            z-index: 9999;
            position: absolute;
            b {
                color: $c3c3c;
                margin-left: 5%;
            }
        }
        .page-picker {
            margin-top: rem(35rem);
        }
        .m-selectMask {
            position: absolute;
            height: 140px;
            width: 100%;
            background: #f8f8f8;
            margin-top: rem(-1614rem);
        }
    }
</style>