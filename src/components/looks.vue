<template>
    <div class="m-selectfacon">
        <div class="m-selectfacial">
            <dl>
                <dt>裸眼视力</dt>
                <dd>
                    <p :class="{'active': eye === 1}" @click="change_active(1,'eye',$event)">好</p>
                    <p :class="{'active': eye === 0}" @click="change_active(0,'eye',$event)">一般</p>
                    <p :class="{'active': eye === -1}" @click="change_active(-1,'eye',$event)">差</p>
                </dd>
            </dl>
            <dl>
                <dt>味觉</dt>
                <dd>
                    <p :class="{'active': taste === 1}" @click="change_active(1,'taste',$event)">灵敏</p>
                    <p :class="{'active': taste === 0}" @click="change_active(0,'taste',$event)">一般</p>
                    <p :class="{'active': taste === -1}" @click="change_active(-1,'taste',$event)">迟钝</p>
                </dd>
            </dl>
            <dl>
                <dt>嗅觉</dt>
                <dd>
                    <p :class="{'active': smell === 1}" @click="change_active(1,'smell',$event)">灵敏</p>
                    <p :class="{'active': smell === 0}" @click="change_active(0,'smell',$event)">一般</p>
                    <p :class="{'active': smell === -1}" @click="change_active(-1,'smell',$event)">迟钝</p>
                </dd>
            </dl>
            <dl>
                <dt>口气</dt>
                <dd>
                    <p :class="{'active': tone === 1}" @click="change_active(1,'tone',$event)">清新</p>
                    <p :class="{'active': tone === 0}" @click="change_active(0,'tone',$event)">一般</p>
                    <p :class="{'active': tone === -1}" @click="change_active(-1,'tone',$event)">不告诉你</p>
                </dd>
            </dl>
            <dl>
                <dt>听觉</dt>
                <dd>
                    <p :class="{'active': hear === 1}" @click="change_active(1,'hear',$event)">好</p>
                    <p :class="{'active': hear === 0}" @click="change_active(0,'hear',$event)">一般</p>
                    <p :class="{'active': hear === -1}" @click="change_active(-1,'hear',$event)">差</p>
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
                eye: -2,
                taste: -2,
                smell: -2,
                tone: -2,
                hear: -2
            }
        },
        computed: {
            answer(){
                var answer = {};
                answer.eye = this.eye;
                answer.taste = this.taste;
                answer.tone = this.tone;
                answer.smell = this.smell;
                answer.hear = this.hear;
                var answerContainer={};
                answerContainer.looks=answer;
                return answerContainer;
            }
        },
        methods: {
            change_active(answerValue, sectionKey, event) {
                this.$data[sectionKey] = answerValue
                if (this.eye !== -2 && this.taste !== -2 && this.smell !== -2 && this.tone !== -2 && this.hear !== -2) {
                    this.$emit('updateUserAnswer', this.answer)
                }
            }
        },
        mounted() {
            Common.loadExtendXianTianUserData(this,'houTian','looks');
        }
    }
</script>