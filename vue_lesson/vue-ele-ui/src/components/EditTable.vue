<template>
  <div>
    <h2>可编辑的表格</h2>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column label="地址" width="440">
        <template slot-scope="scope">
          <div v-if="!scope.row.editState">{{ scope.row.address }}</div>
          <div v-else>
            <el-input
              v-model="scope.row.address"
              placeholder="请输入内容"
            ></el-input>
            <el-button
              @click="handleCancel(scope.row)"
              size="small"
              type="warning"
              >cancle</el-button
            >
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            v-if="!scope.row.editState"
            icon="el-icon-edit"
            @click="handleEdit(scope.row)"
            size="small"
            type="primary"
            >Edit</el-button
          >
          <el-button
            v-else
            @click="handleOk(scope.row)"
            size="small"
            type="success"
            >Ok</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: "EditTable",
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          editState: false
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          editState: false
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          editState: false
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          editState: false
        }
      ],
      currentRowAddress: ""
    };
  },
  methods: {
    handleEdit(row) {
      console.log("点击了编辑按钮", row);
      row.editState = true;
      this.currentRowAddress = row.address;
      //获取对应数据
    },
    handleOk(row) {
      console.log("点击了Ok按钮");
      row.editState = false;
    },
    handleCancel(row) {
      console.log("点击了取消按钮");
      row.editState = false;
      row.address = this.currentRowAddress;
    }
  }
};
</script>
<style></style>
