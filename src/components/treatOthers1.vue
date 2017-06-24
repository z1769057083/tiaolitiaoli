<template>
    <div class="m-selectfacon">
        <div class="m-selectfacial">
            <dl>
                <dt>待人和气</dt>
                <dd>
                    <p :class="{'active': section1.treat === 1}" @click="change_active(1,'1','treat',$event)">是</p>
                    <p :class="{'active': section1.treat === 0}" @click="change_active(0,'1','treat',$event)">不是</p>
                    <p :class="{'active': section1.treat === -1}" @click="change_active(-1,'1','treat',$event)">不确定</p>
                </dd>
            </dl>
            <dl>
                <dt>谋定而动</dt>
                <dd>
                    <p :class="{'active': section1.trick === 1}" @click="change_active(1,'2','trick',$event)">是</p>
                    <p :class="{'active': section1.trick === 0}" @click="change_active(0,'2','trick',$event)">不是</p>
                    <p :class="{'active': section1.trick === -1}" @click="change_active(-1,'2','trick',$event)">不确定</p>
                </dd>
            </dl>
            <dl>
                <dt>乐于助人</dt>
                <dd>
                    <p :class="{'active': section1.help === 1}" @click="change_active(1,'3','help',$event)">是</p>
                    <p :class="{'active': section1.help === 0}" @click="change_active(0,'3','help',$event)">不是</p>
                    <p :class="{'active': section1.help === -1}" @click="change_active(-1,'3','help',$event)">不确定</p>
                </dd>
            </dl>
            <dl>
                <dt>洁身自好</dt>
                <dd>
                    <p :class="{'active': section1.clean === 1}" @click="change_active(1,'4','clean',$event)">是</p>
                    <p :class="{'active': section1.clean === 0}" @click="change_active(0,'4','clean',$event)">不是</p>
                    <p :class="{'active': section1.clean === -1}" @click="change_active(-1,'4','clean',$event)">不确定</p>
                </dd>
            </dl>
            <dl>
                <dt>随遇而安</dt>
                <dd>
                    <p :class="{'active': section1.liberty === 1}" @click="change_active(1,'5','liberty',$event)">是</p>
                    <p :class="{'active': section1.liberty === 0}" @click="change_active(0,'5','liberty',$event)">不是</p>
                    <p :class="{'active': section1.liberty === -1}" @click="change_active(-1,'5','liberty',$event)">
                        不确定</p>
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
                section1: {
                    treat: -1,
                    trick: -1,
                    help: -1,
                    clean: -1,
                    liberty: -1
                }
            }
        },
        computed: {
            answer(){
                var answer = {};
                answer.section1 = this.section1;
                return answer;
            },
            isAllFilled(){
                return this.section1.treat != -1 && this.section1.trick != -1
                    && this.section1.help != -1 && this.section1.clean != -1
                    && this.section1.liberty != -1;
            }
        },
        methods: {
            change_active(answerValue, sectionId, sectionKey, event) {
                this.$data.section1[sectionKey] = answerValue
                if (this.isAllFilled) {
                    this.$emit('updateUserAnswer', this.answer)
                }
            }
        },
        mounted(){
            Common.loadXianTianUserData(this);
        }
    }
</script>
  			
	  		