<template>
  <div id="app">
    <el-button type="success">el-button</el-button>
    <el-button type="primary">el-button</el-button>
    <div>
      <el-button @click="showInfo">el-button</el-button>
    </div>
    <ul
      class="infinite-list list"
      style="overflow: auto"
      v-infinite-scroll="load"
      :infinite-scroll-distance="10"
      :infinite-scroll-delay="1000"
      :infinite-scroll-disabled="count >= 30"
    >
      <li v-for="i in count" class="infinite-list-item" :key="i">{{ i }}</li>
    </ul>
    <!-- 普通用的树 -->
    <el-tree
      :data="data"
      :props="defaultProps"
      @node-click="handleNodeClick"
    ></el-tree>
    <!-- 懒加载的树 -->
    <el-tree :props="props" :load="loadNode" lazy> </el-tree>
    <hr />
    <hr />
    <ArticleList />
    <hr />
    <hr />
    <EditTable />
    <hr />
    <hr />
    <Box />
    <hr>
    <hr>
    <div class="block">
    <span class="demonstration">默认</span>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  </div>
  </div>
</template>

<script>
// const articles = [{ id: "1", title: "asgdkjg" }];
import ArticleList from "./components/ArticleList";
import EditTable from "./components/EditTable";
import Box from "./components/Box";
export default {
  name: "app",
  components: {
    EditTable,
    ArticleList,
    Box
  },
  data() {
    return {
      count: 10,
      value1: '',
      data: [],
      // 设置目录文字和子目录对应的属性名
      defaultProps: {
        children: "tabs",
        label: "text"
      },
      props: {
        label: "name",
        children: "zones",
        isLeaf: "leaf"
      }
    };
  },
  created() {
    setTimeout(() => {
      this.data = [
        {
          text: "一级 1",
          tabs: [
            {
              text: "二级 1-1",
              tabs: [
                {
                  text: "三级 1-1-1"
                }
              ]
            }
          ]
        },
        {
          text: "一级 2",
          tabs: [
            {
              text: "二级 2-1",
              tabs: [
                {
                  text: "三级 2-1-1"
                }
              ]
            },
            {
              text: "二级 2-2",
              tabs: [
                {
                  text: "三级 2-2-1"
                }
              ]
            }
          ]
        },
        {
          text: "一级 3",
          tabs: [
            {
              text: "二级 3-1",
              tabs: [
                {
                  text: "三级 3-1-1"
                }
              ]
            },
            {
              text: "二级 3-2",
              tabs: [
                {
                  text: "三级 3-2-1"
                }
              ]
            }
          ]
        }
      ];
    }, 1000);
  },
  methods: {
    showInfo() {
      this.$message({
        message: "恭喜，成功了",
        type: "success"
      });
    },
    load() {
      console.log("加载");
      if (this.count < 30) {
        setTimeout(() => {
          this.count += 5;
        }, 1000);
      }
    },
    handleNodeClick(currentData) {
      console.log("点击了 tree 的某个节点的非三角部分");
      // 我们要判断当前点击的节点是不是当前目录的最后一层，如果是需要发送请求获取数据
      if (!currentData[this.defaultProps.children]) {
        console.log("修改页面地址，发送请求获取数据");
      }
    },
    // 只要节点前有三角(非叶子节点)点击就会触发 loadNode 方法
    // 而且该方法内需要调用 resolve(loadNode 的第二个参数) 函数，给函数传递当前目录的数组
    loadNode(node, resolve) {
      // console.log("加载节点方法触发了", node);
      if (node.level === 0) {
        resolve([{ name: "region" }]);
      }
      if (node.level === 2) {
        setTimeout(() => {
          resolve([{ name: "a" }, { name: "b" }]);
        }, 500);
      }

      if (node.level === 1) {
        setTimeout(() => {
          console.log(11111);
          const data = [
            {
              name: "leaf",
              leaf: true
            },
            {
              name: "zone"
            }
          ];
          resolve(data);
        }, 500);
      }
      if (node.level > 2) {
        resolve([]);
      }
    }
  }
};
</script>

<style>
.list {
  padding-left: 0;
  width: 400px;
  height: 300px;
  border: 1px solid red;
  list-style: none;
}
.list li {
  width: 200px;
  margin: 0 auto;
  line-height: 30px;
  text-align: center;
  background-color: #007fff;
  margin-bottom: 5px;
}
</style>
