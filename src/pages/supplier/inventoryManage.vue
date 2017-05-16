<template>
  <div class="inventoryManage">
    <el-input class="commody-search" placeholder="请输入搜索条件" icon="search" :on-icon-click="handleIconClick">
    </el-input> 
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="warehouse_code" label="仓库编码" sortable width="120"></el-table-column>
      <el-table-column prop="storage_num" label="可售库存量" width="110"></el-table-column>
      <el-table-column prop="sold_num" label="已售出量" width="100"></el-table-column>
      <el-table-column prop="alert_num" label="报警阈值" width="100"></el-table-column>
      <el-table-column prop="update_time" label="更新时间" width="140"></el-table-column>
      <el-table-column prop="update_by" label="更新操作者" width="140"></el-table-column>
      <el-table-column prop="create_by" label="创建者" width="140"></el-table-column>
      <el-table-column prop="create_time" label="创建时间" width="140"></el-table-column>
      <el-table-column prop="status" label="库存状态" width="100"></el-table-column>
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
  name: 'inventoryManage',
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
        warehouse_code: '01',
        storage_num: '34',
        sold_num: '54',
        alert_num: '2',
        update_time: '2017-04-18',
        update_by: '上海巴黎',
        create_by: '三亚',
        create_time: '2017-02-18',
        status: '可操作'
      }, {
        warehouse_code: '02',
        storage_num: '43',
        sold_num: '12',
        alert_num: '0',
        update_time: '2017-04-18',
        update_by: '薇薇新娘',
        create_by: '三亚',
        create_time: '2017-02-18',
        status: '可操作'
      }, {
        warehouse_code: '03',
        storage_num: '32',
        sold_num: '0',
        alert_num: '0',
        update_time: '2017-04-18',
        update_by: '薇薇新娘',
        create_by: '三亚',
        create_time: '2017-02-18',
        status: '可操作'
      }, {
        warehouse_code: '04',
        storage_num: '112',
        sold_num: '8',
        alert_num: '1',
        update_time: '2017-04-18',
        update_by: '薇薇新娘',
        create_by: '三亚',
        create_time: '2017-02-18',
        status: '可操作'
      }, {
        warehouse_code: '05',
        storage_num: '12',
        sold_num: '6',
        alert_num: '1',
        update_time: '2017-04-18',
        update_by: '薇薇新娘',
        create_by: '三亚',
        create_time: '2017-02-18',
        status: '可操作'
      }, {
        warehouse_code: '06',
        storage_num: '11',
        sold_num: '45',
        alert_num: '0',
        update_time: '2017-04-18',
        update_by: '薇薇新娘',
        create_by: '三亚',
        create_time: '2017-02-18',
        status: '不可操作'
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.commody-search{
  width: 200px;
  float: left;
  margin-bottom: 20px;
}
.commody-page{
  float: left;
  margin-top: 50px;
}
</style>
