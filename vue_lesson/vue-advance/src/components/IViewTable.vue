<template>
  <div class="iview-table-demo">
    <Table :columns="columns" :data="data">
      <template #name="{ row, index }">
        <h3
          @dblclick="changeCurrentIndex($event, index)"
          v-if="!(currentIndex === index)"
        >
          {{ row.name }}
        </h3>
        <Input v-else @on-blur="handleBlur($event, index)" :value="row.name" />
      </template>
      <!-- <template slot-scope="{ row }" slot="name">
        <h3>{{ row.name }}</h3>
      </template> -->
    </Table>
  </div>
</template>
<script>
export default {
  name: 'IViewTable',
  data() {
    return {
      currentIndex: -1,
      columns: [
        {
          title: 'Name',
          key: 'name',
          slot: 'name'
          // render(h, { row }) {
          //   // console.log(row)
          //   return <h2>{row.name}</h2>
          // }
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        }
      ],
      data: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ]
    }
  },
  methods: {
    changeCurrentIndex(e, index) {
      this.currentIndex = index
      // 修改完 data 之后就想要获取对应的真实 dom 节点，不能直接获取需要使用 $nextTick
      // 在这获取对应的 input 的 ref 并且使用原生 focus 方法让其获得焦点
      const el = e.target.parentNode
      // 需要在之前获取 h3 对应的父级节点，因为在 $nextTick 之后 h3 消失了获取不到，多以先获取父级节点
      this.$nextTick(() => {
        // document.querySelector('xxx')
        el.querySelector('input').focus()
      })
    },
    handleBlur(e, index) {
      console.log('失去焦点事件触发')
      this.currentIndex = -1
      this.data[index].name = e.target.value
    }
  }
}
</script>

<style >
.iview-table-demo {
  margin: 40px 40px 400px;
}
</style>