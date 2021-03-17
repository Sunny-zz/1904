import { SearchOutlined } from '@ant-design/icons'
import { Input, Tree } from 'antd'
import { useState } from 'react'
import './tree-demo.css'
const { Search } = Input

const treeList = [{ title: "0-0", key: "0-0", children: [{ title: "0-0-0", key: "0-0-0", children: [{ title: "0-0-0-0", key: "0-0-0-0" }, { title: "0-0-0-1", key: "0-0-0-1" }, { title: "0-0-0-2", key: "0-0-0-2" }] }, { title: "0-0-1", key: "0-0-1", children: [{ title: "0-0-1-0", key: "0-0-1-0" }, { title: "0-0-1-1", key: "0-0-1-1" }, { title: "0-0-1-2", key: "0-0-1-2" }] }, { title: "0-0-2", key: "0-0-2" }] }, { title: "0-1", key: "0-1", children: [{ title: "0-1-0", key: "0-1-0", children: [{ title: "0-1-0-0", key: "0-1-0-0" }, { title: "0-1-0-1", key: "0-1-0-1" }, { title: "0-1-0-2", key: "0-1-0-2" }] }, { title: "0-1-1", key: "0-1-1", children: [{ title: "0-1-1-0", key: "0-1-1-0" }, { title: "0-1-1-1", key: "0-1-1-1" }, { title: "0-1-1-2", key: "0-1-1-2" }] }, { title: "0-1-2", key: "0-1-2" }] }, { title: "0-2", key: "0-2" }]

//getParentKey 是一个  从扁平化数组中 根据查询的关键字 获取 父节点 key 的函数， 返回值就是一个 key
// 根据一个 子级 key 获取树形数据中的 父级 key
const getParentKey = (key, tree) => {
  let parentKey;
  for (let i = 0; i < tree.length; i++) {
    const node = tree[i];
    if (node.children) {
      if (node.children.some(item => item.key === key)) {
        parentKey = node.key;
      } else if (getParentKey(key, node.children)) {
        parentKey = getParentKey(key, node.children);
      }
    }
  }
  return parentKey;
};

// dataList  是 treeList 的扁平化数组
const dataList = [];
// generateList 就是将 treeList 实现扁平化的函数
const generateList = data => {
  for (let i = 0; i < data.length; i++) {
    const node = data[i];
    const { key } = node;
    dataList.push({ key, title: key });
    if (node.children) {
      generateList(node.children);
    }
  }
};
generateList(treeList);



const TreeDemo = () => {
  // 查询的值
  const [searchValue, setSearchValue] = useState('')
  // expandedKeys 所有需要展开的父节点的key值， 设置了之后默认所有相关的父节点自动会打开
  const [expandedKeys, setExpandedKeys] = useState([])
  // loop 函数的作用 就是根据标题 searchValue 生成新的树形数组，并且将 标题中于查询值相同的字标记出来换颜色
  const loop = data =>
    data.map(item => {
      // 例如  标题是  我有一个梦想   查询字符串是  一个 
      // index 就是 2， beforeStr 就是 我有   afterStr 就是梦想
      // 获取匹配的下标
      const index = item.title.indexOf(searchValue);
      // 标题中匹配之前的字符
      const beforeStr = item.title.substring(0, index);
      // 标题中匹配之后的字符
      const afterStr = item.title.substring(index + searchValue.length);

      const title =
        index > -1 ? (
          <span>
            {beforeStr}
            {/* 匹配的标题文字 */}
            <span className="site-tree-search-value">{searchValue}</span>
            {afterStr}
          </span>
        ) : (
          <span>{item.title}</span>
        );
      if (item.children) {
        return { title, key: item.key, children: loop(item.children) };
      }

      return {
        title,
        key: item.key,
      };
    });

  // const onSearch = value => {
  //   console.log(value)
  //   setSearchValue(value)
  // }
  // 搜索按钮的输入事件  1. 修改查询的值  2. 根据查询结果展开父节点
  const onChange = e => {
    const { value } = e.target;
    
    const expandedKeys = dataList
    //  map 函数是根据扁平化数组内的 title 和 查询的值，那么就使用 getParentKey 从 treeList 获取对应的父节点的 key 
      .map(item => {
        if (item.title.indexOf(value) > -1) {
          return getParentKey(item.key, treeList);
        }
        return null;
      })
      // 找不到的返回的都是 null 所以需要将 null 删除  ？  如何将数组中的数组项  null 删除 
      .filter((item, i, self) => item && self.indexOf(item) === i);
    setSearchValue(value)
    setExpandedKeys(expandedKeys)
  };
  // 点击节点的时候的事件,需要点击箭头
  const onExpand = expandedKeys => {
    // expandedKeys 获取的是点击的节点的所有的(包括祖先) key
    setExpandedKeys(expandedKeys)
  };
  return (
    <div>
      <h3> tree 组件练习</h3>
      <Search
        style={{ width: 400 }}
        placeholder="input search title"
        allowClear
        enterButton="Search"
        size="large"
        // onSearch={onSearch}
        value={searchValue}
        onChange={onChange}
        suffix={<SearchOutlined />}
      />
      <Tree
        onExpand={onExpand}
        treeData={loop(treeList)}
        expandedKeys={expandedKeys}
      />
    </div>
  );
}

export default TreeDemo;