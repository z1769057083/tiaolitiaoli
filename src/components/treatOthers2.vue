<template>
    <div class="m-selectfacon">
        <div class="m-selectfacial">
            <dl>
                <dt>为人耿直</dt>
                <dd>
                    <p :class="{'active': section2.upright === 1}" @click="change_active(1,'1','upright',$event)">是</p>
                    <p :class="{'active': section2.upright === 0}" @click="change_active(0,'1','upright',$event)">不是</p>
                    <p :class="{'active': section2.upright === -1}" @click="change_active(-1,'1','upright',$event)">
                        不确定</p>
                </dd>
            </dl>
            <dl>
                <dt>体格健壮</dt>
                <dd>
                    <p :class="{'active': section2.strong === 1}" @click="change_active(1,'2','strong',$event)">是</p>
                    <p :class="{'active': section2.strong === 0}" @click="change_active(0,'2','strong',$event)">不是</p>
                    <p :class="{'active': section2.strong === -1}" @click="change_active(-1,'2','strong',$event)">不确定</p>
                </dd>
            </dl>
            <dl>
                <dt>性格开朗</dt>
                <dd>
                    <p :class="{'active': section2.optimistic === 1}" @click="change_active(1,'3','optimistic',$event)">
                        是</p>
                    <p :class="{'active': section2.optimistic === 0}" @click="change_active(0,'3','optimistic',$event)">
                        不是</p>
                    <p :class="{'active': section2.optimistic === -1}" @click="change_active(-1,'3','optimistic',$event)">
                        不确定</p>
                </dd>
            </dl>
            <dl>
                <dt>好动</dt>
                <dd>
                    <p :class="{'active': section2.active === 1}" @click="change_active(1,'4','active',$event)">是</p>
                    <p :class="{'active': section2.active === 0}" @click="change_active(0,'4','active',$event)">不是</p>
                    <p :class="{'active': section2.active === -1}" @click="change_active(-1,'4','active',$event)">不确定</p>
                </dd>
            </dl>
            <dl>
                <dt>喜形于色</dt>
                <dd>
                    <p :class="{'active': section2.pleasure === 1}" @click="change_active(1,'5','pleasure',$event)">
                        是</p>
                    <p :class="{'active': section2.pleasure === 0}" @click="change_active(0,'5','pleasure',$event)">
                        不是</p>
                    <p :class="{'active': section2.pleasure === -1}" @click="change_active(-1,'5','pleasure',$event)">
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
                section2: {
                    upright: -2,
                    strong: -2,
                    optimistic: -2,
                    active: -2,
                    pleasure: -2
                }
            }
        },
        computed: {
            answer(){
                var answer = {};
                answer.section2 = this.section2;
                return answer;
            },
            isAllFilled(){
                return this.section2.upright != -2 && this.section2.strong != -2
                    && this.section2.optimistic != -2 && this.section2.active != -2
                    && this.section2.pleasure != -2;
            }
        },
        methods: {
            change_active(answerValue, sectionId, sectionKey, event) {
                this.$data.section2[sectionKey] = answerValue
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
