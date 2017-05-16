<template>
  <div class="commodyManage">
    <el-row>
      <el-col :span="24">
        <div class="grid-content">
          <div class="commody-title">
            <h3>商品基本详情</h3>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content">
          <dl class="commody-dl">
            <dt>商品名：</dt>
            <dd>三亚旅游</dd>
          </dl>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content">
          <dl class="commody-dl">
            <dt>供应商：</dt>
            <dd>上海巴黎</dd>
          </dl>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content">
          <dl class="commody-dl">
            <dt>创建时间：</dt>
            <dd>2017-04-03 12:04</dd>
          </dl>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content">
          <dl class="commody-dl">
            <dt>建议售价：</dt>
            <dd>12,000,000</dd>
          </dl>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content">
          <dl class="commody-dl">
            <dt>商品关键字：</dt>
            <dd>旅拍，三亚</dd>
          </dl>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content">
          <dl class="commody-dl">
            <dt>状态：</dt>
            <dd>上架</dd>
          </dl>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content">
          <dl class="commody-dl">
            <dt>行程天数：</dt>
            <dd>12</dd>
          </dl>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content">
          <dl class="commody-dl">
            <dt>父商品：</dt>
            <dd>三亚</dd>
          </dl>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content">
          <dl class="commody-dl">
            <dt>销售时间段：</dt>
            <dd>2017-06-07~2017-06-19</dd>
          </dl>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content">
          <dl class="commody-dl">
            <dt>城市代码：</dt>
            <dd>北京~三亚</dd>
          </dl>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content">
          <dl class="commody-dl">
            <dt>结算类型：</dt>
            <dd>自动结算</dd>
          </dl>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content">
          <dl class="commody-dl">
            <dt>可售渠道：</dt>
            <dd>web渠道</dd>
          </dl>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content">
          <dl class="commody-dl">
            <dt>商品描述：</dt>
            <dd>web渠道</dd>
          </dl>
        </div>
      </el-col>
      <el-col :span="24">
        <div class="grid-content">
          <div class="commody-title">
            <h3>商品类别</h3>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content">
          <dl class="commody-dl">
            <dt>商品类别：</dt>
            <dd>独立类型</dd>
          </dl>
        </div>
      </el-col>
       <el-col :span="12">
        <div class="grid-content">
          <dl class="commody-dl">
            <dt>商品类别：</dt>
            <dd>独立类型</dd>
          </dl>
        </div>
      </el-col>
       <el-col :span="12">
        <div class="grid-content">
          <dl class="commody-dl">
            <dt>商品类别：</dt>
            <dd>独立类型</dd>
          </dl>
        </div>
      </el-col>
       <el-col :span="12">
        <div class="grid-content">
          <dl class="commody-dl">
            <dt>商品类别：</dt>
            <dd>独立类型</dd>
          </dl>
        </div>
      </el-col>
       <el-col :span="12">
        <div class="grid-content">
          <dl class="commody-dl">
            <dt>商品类别：</dt>
            <dd>独立类型</dd>
          </dl>
        </div>
      </el-col>
       <el-col :span="24">
        <div class="grid-content">
          <div class="commody-title">
            <h3>审核意见</h3>
          </div>
        </div>
      </el-col>
      <el-col :span="24">
        <div class="grid-content">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item class="commody-label">
               <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item class="commody-form">
              <el-button type="primary" @click="onSubmit">通过</el-button>
              <el-button>驳回</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'commodyManage',
  data () {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      form: {
        desc: ''
      }
    }
  },
  methods: {
    handleRemove (file, fileList) {
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    }
  }
}
</script>
<style scoped>
*{
  padding:0;
  margin:0;
}
.el-row {
  background: #fff;
}
.el-col {
  border-radius: 4px;
  margin: 10px 0;
}
.grid-content{
  border-radius: 4px;
  line-height: 36px;
  overflow: hidden;
  border-right:1px solid #ededed;
}
.commody-title{
  padding-left:50px;
}
.commody-upload{
  margin-left:50px;
}
.commody-dl dt,dd{
  float:left;
}
.commody-dl dt{
  width:120px;
  padding-left:50px;
}
.commody-form{
  margin-left:20%;
}
.commody-label{
  width:50%;
}
</style>
