// 可以借助 vuex-module-decorators 去创建 store 的模块

import { VuexModule, Module, getModule, Mutation, Action } from 'vuex-module-decorators'
import store from '../index'


// 假装做一个请求
const getList = () => new Promise<Array<number>>(resolve => {
  setTimeout(() => {
    resolve([1, 2, 3, 4, 5, 6, 7, 8])
  }, 1000);
})

//ICompanyInfo 是 company 里面的某一个 state 数据的接口
interface ICompanyInfo {
  name: string,
  created_at: string,
  info: string
}

// ICompany 表示的是我的整个 company 模块内 state 的接口
export interface ICompany {
  companyInfo: ICompanyInfo
  arr: Array<number>
}
// @Module 装饰器 内可以直接将 这个模块添加到 store 内 不需要在创建 store 的时候 导入模块，再添加到 modules 内
// 用法
// 1. 先导入 store 
// 2. 在装饰器内 写上store 并且添加 dynamic 属性 属性值为 true

// 如果是动态创建的 模块 vue 组件内获取模块的方式就和之前不一样了
// 要通过 vuex-module-decorators 装饰器下的 getModule 方法将所创建的模块导出，组件内再导入即可

@Module({
  name: 'company',
  store,
  // 动态创建模块 将模块自动添加到 store 内
  dynamic: true
})
class Company extends VuexModule {
  companyInfo: ICompanyInfo = {
    name: '第嘉',
    created_at: '2020-12-11',
    info: '前端学习营地'
  }
  arr: Array<number> = []

  @Mutation
  getArr (payload: Array<number>) {
    this.arr = payload
  }

  @Action
  async fetchArr () {
    const newArr = await getList()
    this.getArr(newArr)
  }

  get len () {
    return this.arr.length
  }
}

// 导出模块给组件使用
export const CompanyStore = getModule(Company)


