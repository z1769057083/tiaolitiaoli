<template>
  <div class="commodyManage">
    <el-input class="commody-search" placeholder="请输入搜索条件" icon="search"  :on-icon-click="handleIconClick">
    </el-input>
    <el-button class="commody-btn"><router-link to="/supplier/addGoods">添加商品</router-link></el-button>  
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="ware_code" label="商品编码" sortable width="120"></el-table-column>
      <el-table-column prop="ware_name" label="商品名" width="100"></el-table-column>
      <el-table-column prop="provider_id" label="供应商" width="180"></el-table-column>
      <el-table-column prop="create_time" label="创建时间" sortable width="180"></el-table-column>
      <el-table-column prop="ware_kind" label="商品类别" width="100"></el-table-column>
      <el-table-column prop="suggested_price" label="建议售价" width="140"></el-table-column>
      <el-table-column prop="key_words" label="商品关键字" width="140"></el-table-column>
      <el-table-column prop="status" label="状态" width="100"></el-table-column>
      <el-table-column prop="address" label="" ></el-table-column>
      <el-table-column fixed="right" label="操作" width="140">
      <template scope="scope">
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
    </el-table>
    <div class="block commody-page">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>
  </div>

</template>

<script>
export default {
  name: 'commodyManage',
  methods: {
    handleSizeChange (val) {
    },
    handleCurrentChange (val) {
      this.currentPage = val
    }
  },
  data () {
    return {
      msg: '添加商品',
      tableData: [{
        ware_code: '01',
        ware_name: '三亚旅拍',
        provider_id: '上海巴黎',
        create_time: '2017-06-02',
        ware_kind: '独立类型',
        suggested_price: '10,000,000',
        key_words: '三亚,旅拍',
        status: '上架',
        verify_status: '待审核'
      }, {
        ware_code: '02',
        ware_name: '三亚旅拍',
        provider_id: '上海巴黎',
        create_time: '2017-04-02',
        ware_kind: '独立类型',
        suggested_price: '10,000,000',
        key_words: '三亚,旅拍',
        status: '上架',
        verify_status: '未通过'
      }, {
        ware_code: '03',
        ware_name: '三亚旅拍',
        provider_id: '上海巴黎',
        create_time: '2017-05-02',
        ware_kind: '独立类型',
        suggested_price: '10,000,000',
        key_words: '三亚,旅拍',
        status: '上架',
        verify_status: '通过'
      }, {
        ware_code: '03',
        ware_name: '三亚旅拍',
        provider_id: '上海巴黎',
        create_time: '2017-05-02',
        ware_kind: '独立类型',
        suggested_price: '10,000,000',
        key_words: '三亚,旅拍',
        status: '上架',
        verify_status: '待审核'
      }, {
        ware_code: '03',
        ware_name: '三亚旅拍',
        provider_id: '上海巴黎',
        create_time: '2017-05-02',
        ware_kind: '独立类型',
        suggested_price: '10,000,000',
        key_words: '三亚,旅拍',
        status: '上架',
        verify_status: '待审核'
      }, {
        ware_code: '04',
        ware_name: '三亚旅拍',
        provider_id: '上海巴黎',
        create_time: '2017-12-02',
        ware_kind: '独立类型',
        suggested_price: '10,000,000',
        key_words: '三亚,旅拍',
        status: '上架',
        verify_status: '待审核'
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.commody-search{
  width:200px;
  float: left;
}
.commody-btn{
  float: right;
  margin-bottom: 20px;
}
.commody-page{
  float: left;
  margin-top: 50px;
}
</style>
