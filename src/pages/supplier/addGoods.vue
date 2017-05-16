<template>
  <div class="addGoods">
    <el-form :model="ruleForm" :label-position="labelPosition" :rules="rules" ref="ruleForm" label-width="140px" class="demo-ruleForm">
      <el-form-item label="商品名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="供应商" prop="provider">
        <el-input v-model="ruleForm.provider"></el-input>
      </el-form-item>
      <el-form-item label="商品类别" prop="kind">
        <el-input v-model="ruleForm.kind"></el-input>
      </el-form-item>
      <el-form-item label="建议售价" prop="price">
        <el-input v-model="ruleForm.price"></el-input>
      </el-form-item>
      <el-form-item label="行程天数" prop="days">
        <el-input v-model="ruleForm.days"></el-input>
      </el-form-item>
      <el-form-item label="商品关键字" prop="keyWords">
        <el-input v-model="ruleForm.keyWords"></el-input>
      </el-form-item>
      <el-form-item label="父商品" prop="parent">
        <el-input v-model="ruleForm.parent"></el-input>
      </el-form-item>
      <el-form-item label="销售时间段" prop="date1">
        <el-date-picker id="addgoods-date" model="value3" type="datetimerange" placeholder="选择时间范围"></el-date-picker>
      </el-form-item>
      <el-form-item label="城市代码" prop="city"> 
      </el-form-item>
      <el-form-item label="状态" prop="status">
         <el-radio-group v-model="ruleForm.status">
          <el-radio label="上架"></el-radio>
          <el-radio label="下架"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="结算类型" prop="settle">
         <el-radio-group v-model="ruleForm.settle">
          <el-radio label="自动结算"></el-radio>
          <el-radio label="手动结算"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="可售渠道" prop="channel">
        <el-radio-group v-model="ruleForm.channel">
          <el-radio label="web渠道"></el-radio>
          <el-radio label="H5渠道"></el-radio>
          <el-radio label="app渠道"></el-radio>
          <el-radio label="其他渠道"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="订单占位时长" prop="minute">
        <el-input v-model="ruleForm.minute"></el-input>
      </el-form-item>
      <el-form-item label="商品描述" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'addGoods',
  data () {
    return {
      labelPosition: 'center',
      ruleForm: {
        name: '',
        provider: '',
        kind: '',
        price: '',
        days: '',
        keyWords: '',
        parent: '',
        status: '',
        date1: '',
        city: '',
        settle: '',
        channel: '',
        minute: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入商品名', trigger: 'blur' },
          { min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur' }
        ],
        provider: [
          { required: true, message: '请输入供应商', trigger: 'blur' }
        ],
        kind: [
          { required: true, message: '请输入商品类别', trigger: 'blur' },
          { min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur' }
        ],
        price: [
          { required: true, message: '请输入建议售价', trigger: 'blur' }
        ],
        days: [
          { required: true, message: '请输入行程天数', trigger: 'blur' }
        ],
        keyWords: [
          { required: true, message: '请输入商品关键字,不同关键字用,分隔开', trigger: 'blur' }
        ],
        parent: [
          { trigger: 'blur' }
        ],
        status: [
          { required: true, message: '请选择商品状态', trigger: 'change' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        city: [
          { required: true, message: '请选择时间', trigger: 'change' }
        ],
        settle: [
          { required: true, message: '请选择结算类型', trigger: 'change' }
        ],
        channel: [
          { required: true, message: '请选择可售渠道', trigger: 'change' }
        ],
        minute: [
          { required: true, message: '请选择无订金订单占位时长', trigger: 'blur' }
        ],
        desc: [
          { message: '请输入商品描述', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
        } else {
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style scoped>
.addGoods{
  width: 600px;
  margin: 20px auto;
}
</style>
