<template>
    <div class="m-selectfacon">
        <div class="m-selectappend">
            <dl>
                <!--<dt>最近出现情况:</dt>-->
                <dd>
                    <p v-for="item in items" :class="{active: tags.indexOf(item) > -1 }" @click="ac(item)">
                        {{item}}</p>
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
                tags: [],
                items: ["头发干枯", "久咳久喘", "多动症",
                    "易上火",
                    "关节活动不利",
//                    "发育不良",
                    "过敏",
//                    "胸胁胀痛",
                    "头晕头重",
//                    "青春期痤疮",
                     "怕冷",
//                    "气虚体弱",
                    "耳鸣头晕", "手脚冰冷",
                     "易感冒",
//                    "免疫力低下",
                    "健忘",
                    "面色憔悴	",
//                    "长斑",
                    "眼脸浮肿",
                    "胸闷心慌",
                    "易出虚汗",
                     "阳痿","失眠",

                    "腰腿酸软","四肢肿胀","颈肩腰腿疼痛",
                    "烦躁易怒	", "精神萎靡","倦怠无力",
                    "迎风流泪	","视力欠佳",
                    "消化不良	","挑食厌食", "胃痛","饭后即欲大便","腹胀呕吐泄泻",
                    "经常口干","多食易饥", "口中黏腻","口气重","口腔溃疡",
                    "大便稀溏粘滞","小便不利", "尿频",
//                    "白带清稀量多",
                    "痛经","月经不调",
//                    "月子调养"
                    ]
            }
        },
        computed: {
            answer(){
                var answer = {};
                answer.tags = this.tags;
                return answer;
            }
        },
        methods: {
            ac(obj) {
                var numb = this.tags.indexOf(obj);
                if (numb > -1) {
                    this.tags.splice(numb, 1);
                } else {
                    this.tags.push(obj);
                }
                this.$emit('updateUserAnswer', this.answer)

            }
        },
        mounted(){
            Common.loadXianTianUserData(this);
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    @import "../common/common.scss";
    /*选择问题内容*/
    .m-selectfacon {
        width: 90%;
        margin-left: 5%;
        .m-selectappend {
            height: rem(240rem);
            overflow-y: scroll;
            width: 100%;
            dl {
                width: 100%;
                overflow: hidden;
                padding-bottom: rem(14rem);
                padding-top: rem(14rem);
                font-size: $font12;
                dt {
                    width: 100%;
                    line-height: rem(20rem);
                    font-size: $font13;
                }
                dd {
                    width: 100%;
                    float: left;
                    line-height: rem(44rem);
                    p {
                        display: block;
                        width: 22%;
                        float: left;
                        height: rem(30rem);
                        background: #fff;
                        margin-top: rem(12rem);
                        border-radius: rem(10rem);
                        line-height: rem(30rem);
                        text-align: center;
                        margin-right: 4%;
                    }
                    p:nth-child(4n) {
                        margin-right: 0;
                    }
                    .m-selectulcer {
                        width: 40%;

                    }
                    .active {
                        color: #fff;
                        background: #dec19d;
                    }
                }
            }
        }
    }
</style>