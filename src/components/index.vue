<template>
	<div class='index'>
    <div class='i-header'>
      <img class='i-headerback' src="../assets/back.png">
      <div class='i-headertit'>调理调理</div>
    </div>
    <div class='i-conent'>
      <div class='i-headbot'>
        <div class='i-headbottext'>你是第12580位测试者</div>
      </div>
      <div class='i-main'>
        <h3 class='i-maintop'>体质检测</h3>
        <div class='i-maintext'>本测试由林博士、胡大夫两位教授多年潜心研究和临床观察，利用《皇帝内经》等传统中医理论结合人工智能技术创立的体质辨析研究模型；完成测试后，您将了解到您的</div>
        <div class='i-maintext'>体质详情，并获得相应的个性化的解决方法。</div>
        <div class='i-maintext'>本次测试大约需要10分钟的时间填写。</div>
        <div class='i-maincen'><img src="../assets/index.png"></div>
        <div class='i-maindocter i-maindocter1'>
          <span>林博士</span>
          <router-link to='/message'>
            <div class='i-maintest'>开始检测</div>
          </router-link>
          <div class='i-mainportrait'><img src="../assets/indexheadportrait.png"></div>
        </div>
        <div class='i-maindocter'>
          <span>胡大夫</span>
          <router-link to='/message'>
            <div class='i-maintest'>开始检测</div>
          </router-link>
          <div class='i-mainportrait'><img src="../assets/indexheadportrait1.png"></div>
        </div>
        <div class='i-maintext i-maintip i-maintip1'>温馨提示：本测试所提及的内容仅作为生活保健的咨询建</div>
        <div class='i-maintext i-maintip'>议，如遇不适请及时就医。</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
  }
</script>
<style scoped>
.i-header{
  width: 95.8%;
  height: 40px;
  background: #000;
  padding: 0 2.1%;
  position: relative;
}
.i-headerback{
  padding-top: 12px;
  width: 8px;
  height: 16px;
}
.i-headertit{
  color: #fff;
  font-size: 16px;
  position: absolute;
  top: 12px;
  left: 39.7%;
}
.i-headbot{
  width: 100%;
  border-top: 2px solid #d6b592;
  height:20px;
  position: relative;
}
.i-headbottext{
  background: #eb9d6f;
  width: 34.7%;
  font-size: 12px;
  text-align: center;
  height: 20px;
  line-height: 20px;
  color: #fff;
  position: absolute;
  top: 0;
  left: 32.6%;
}
.i-main{
  margin-top: 18px;
}
.i-maintop{
  font-size: 20px;
  color: #000;
  font-weight: blod;
  text-align: center;
  margin-bottom: 14px;
  line-height:28px;
}
.i-maintext{
  width: 83.2%;
  margin-left: 8.4%;
  letter-spacing: 0.4px;
  font-size: 12px;
  line-height: 22px;
  color: #000;
  text-align: center;
}
.i-maincen{
  width: 9.6%;
  height: 18px;
  margin: 20px 0 20px 45.2%;
}
.i-maincen img{
  width:36px;
  height: 18px;
}
.i-maindocter{
  width: 82.7%;
  height: 88px;
  border: 1px solid #e3e3e3;
  border-radius: 6px;
  margin-left: 13.3%;
  position: relative;
}
.i-maindocter1{
  margin-bottom: 18px;
}
.i-maindocter span{
  margin-left: 16%;
  line-height: 88px;
  font-size: 14px;
}
.i-maintest{
  width: 23.2%;
  height: 28px;
  line-height: 28px;
  color: #ce8654;
  border: 1px solid #ce8654;
  border-radius: 4px;
  text-align: center;
  position:absolute;
  right: 3.9%;
  top: 30px;
}
.i-mainportrait{
  width:68px;
  height:68px;
  border-radius:50%;
  position:absolute;
  left: -34px;
  top: 10px;
}
.i-mainportrait img{
  width:68px;
  height:68px;
}
.i-maintip{
  color: #ce8654;
}
.i-maintip1{
  margin-top: 30px;
}
</style>
