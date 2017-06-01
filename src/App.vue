<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<script>
    import '../static/flexible.js'
    import '../static/common.js'
    import '../static/swiper-3.4.2.min.js'
    import axios from 'axios'
    import api from '@/api/api'
    export default {
        name: 'app',
        methods: {
            loadQuestions(){
                axios.get(api.beforeQuestionData)
                    .then(function (res) {
                        if (res.data.errorCode == 0) {
                            res = res.data.returnValue;
                            let storage = window.localStorage;
                            storage.setItem(Answer_Index, JSON.stringify(res))
                        }
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
            },
            //NOTE:sample code to prevent browser scroll.
            disableBrowserScroll(){
                document.querySelector('body').addEventListener('touchmove', function (e) {
                    if (document.querySelector('.m-select').contains(e.target)) {
                        e.preventDefault();
                    }
                });
            }
        },
        mounted() {
            this.loadQuestions()
        }
    }
</script>
<style>
</style>
