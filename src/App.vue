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
    import Highcharts from 'highcharts';
    import Hig from 'highcharts/highcharts-more' ;
    Hig(Highcharts)
    global.Highcharts = Highcharts
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
            loadUserInfo(){
                let openid = this.$route.query.openid;
                if (typeof (openid) == 'undefined' || openid == '') {
                    //Note:generate test account.
                    if (localStorage.getItem(Account_Index) == null) {
                        axios.get(api.generateTestAccount)
                            .then(function (res) {
                                if (res.data.errorCode == 0) {
                                    let user = res.data.returnValue;
                                    localStorage.setItem(Account_Index, JSON.stringify(user))
                                }
                            })
                    }
                }
                else {
                    axios.get(api.getUserByOpenId + "?openid=" + openid)
                        .then(function (res) {
                            if (res.data.errorCode == 0) {
                                res = res.data.returnValue;
                                localStorage.setItem(Account_Index, JSON.stringify(res))
                            }
                        })
                }
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
            this.loadUserInfo()
            console.log('当前版本:' + Version);
        }
    }
</script>
<style>
</style>
