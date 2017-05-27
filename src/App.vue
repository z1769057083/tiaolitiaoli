<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import '../static/flexible.js'
import '../static/common.js'
import '../static/swiper-3.4.2.min.js'
export default {
  name: 'app',
  mounted() {
    //NOTE:sample code to prevent browser scroll.
   // document.querySelector('body').addEventListener('touchmove', function (e) {
     // if (document.querySelector('.m-select').contains(e.target)) {
       // e.preventDefault();
     // }
    });
  }
}
</script>
<style>
</style>
