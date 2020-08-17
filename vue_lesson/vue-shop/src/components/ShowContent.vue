<template>
  <div class="show-content">
    <div class="titles">
      <span>Name</span>
      <span>Price</span>
    </div>
    <!-- <GoodsList v-for="" :goodsType="" :goodsList="" /> -->
    <GoodsList
      v-for="item in typeList"
      :key="item"
      :goodsType="item"
      :goodsList="arr.filter(goods => goods.category === item)"
    />
    <!-- 将类别固定了 给定了类别字符串 -->
    <!-- arr  ===>  [ 'S','E' ] -->

    <div></div>
  </div>
</template>

<script>
// const arr = [
//   {
//     id: "1abc1",
//     category: "Sporting Goods",
//     price: "$49.99",
//     stocked: true,
//     name: "Football"
//   },
//   {
//     id: "1abc2",
//     category: "Sporting Goods",
//     price: "$9.99",
//     stocked: true,
//     name: "Baseball"
//   },
//   {
//     id: "1abc3",
//     category: "Sporting Goods",
//     price: "$29.99",
//     stocked: false,
//     name: "Basketball"
//   },
//   {
//     id: "1abc4",
//     category: "Electronics",
//     price: "$99.99",
//     stocked: true,
//     name: "iPod Touch"
//   },
//   {
//     id: "1abc5",
//     category: "Electronics",
//     price: "$399.99",
//     stocked: false,
//     name: "iPhone 5"
//   },
//   {
//     id: "1abc6",
//     category: "Electronics",
//     price: "$199.99",
//     stocked: true,
//     name: "Nexus 7"
//   }
// ];
// const newArr = new Set(arr.map(item => item.category));
// console.log([...newArr]);
// const newArr = arr.reduce((res, item) => {
//   if (!res.includes(item.category)) {
//     res.push(item.category);
//   }
//   return res;
// }, []);
// console.log(newArr);

import GoodsList from "./GoodsList";
export default {
  name: "ShowContent",
  data() {
    return {
      arr: [
        {
          id: "1abc1",
          category: "Sporting Goods",
          price: "$49.99",
          stocked: true,
          name: "Football"
        },
        {
          id: "1abc2",
          category: "Sporting Goods",
          price: "$9.99",
          stocked: true,
          name: "Baseball"
        },
        {
          id: "1abc3",
          category: "Sporting Goods",
          price: "$29.99",
          stocked: false,
          name: "Basketball"
        },
        {
          id: "1abc4",
          category: "Electronics",
          price: "$99.99",
          stocked: true,
          name: "iPod Touch"
        },
        {
          id: "1abc5",
          category: "Electronics",
          price: "$399.99",
          stocked: false,
          name: "iPhone 5"
        },
        {
          id: "1abc6",
          category: "Electronics",
          price: "$199.99",
          stocked: true,
          name: "Nexus 7"
        }
      ]
    };
  },
  // 计算属性
  // 计算属性是一个函数该函数比如返回一个值，这个值就是计算过的属性值，用法和 data 一样
  // 计算属性函数不可以传递参数
  computed: {
    typeList() {
      return this.arr.reduce((res, item) => {
        if (!res.includes(item.category)) {
          res.push(item.category);
        }
        return res;
      }, []);
    }
  },
  components: {
    GoodsList
  },
  methods: {
    // 该做法 vue 提供了更好的方案
    // 当你想要对现有的 data 进行数据操作转换成其他数据的时候，可以使用函数处理，但是推荐使用 vue 组件的计算属性
    // getTypeList() {
    //   return this.arr.reduce((res, item) => {
    //     if (!res.includes(item.category)) {
    //       res.push(item.category);
    //     }
    //     return res;
    //   }, []);
    // }
  }
};
</script>

<style>
.show-content {
  margin-top: 10px;
}
.titles {
  width: 100%;
}
.titles span {
  display: block;
  width: 50%;
  float: left;
}
</style>
