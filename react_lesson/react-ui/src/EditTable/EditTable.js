import React, { useState } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form, Typography } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
const { Search } = Input
// 初始数据
const originData = [];

// 循环向数组添加数据
for (let i = 0; i < 100; i++) {
  originData.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}

// EditableCell 是一个可编辑的单元格组件 (两种状态 编辑 非编辑)
const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `请输入正确的内容!`,
              validator: (_, value) => {
                // console.log(_, value)
                return _.field === 'age' ? (value > 16 && value < 40 ? Promise.resolve() : Promise.reject(new Error('输入有误'))) : (value.length > 0 && value.length < 20 ? Promise.resolve() : Promise.reject(new Error('输入有误')))
              }
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

// 最大的编辑表格组件
const EditTable = () => {
  // form 主要作用是对表单的数据进行操控，可以借助 form 获取或修改表单的内容
  const [form] = Form.useForm();
  // 表格数据 data
  const [data, setData] = useState(originData);
  // 编辑状态下的表格 Key
  const [editingKey, setEditingKey] = useState('');
  // 搜索的 value 值
  const [searchValue, setSearchValue] = useState('');
  // 查询的等待
  const [searchLoading, setSearchLoading] = useState(false);
  // isEditing 检测函数 某一条数据逇 key 和 编辑的 key 是否相同
  const isEditing = (record) => record.key === editingKey;
  // edit 函数作用是将单一条数据展示到可编辑的表格内，并且更新可编辑的 key，说白了就是点击编辑按钮做的事
  const edit = (record) => {
    // form.setFieldsValue 的作用是修改表单内的某个输入框的内容
    form.setFieldsValue({
      // name: '',
      // age: '',
      // address: '',
      ...record,
    });
    // 将对应的 可编辑的数据的 key 修改
    setEditingKey(record.key);
  };

  // Popconfirm 确定按钮事件
  const cancel = () => {
    setEditingKey('');
  };

  // 保存按钮事件
  const save = async (key) => {
    // try 的语句就是检测 form.item 的验证的，如果验证失败直接执行 catch
    try {
      // form.validateFields()  是一个异步操作 ，成功返回的是所有表单的输入内容对象
      console.log('表单验证成功执行')
      const row = await form.validateFields();
      // 数组的拷贝
      const newData = [...data];
      // 找到对应的那条数据的索引
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        // 数组将输入好的替换掉原来的
        newData.splice(index, 1, { ...item, ...row });
        // 修改 data 
        setData(newData);
        // 清空编辑的 key
        setEditingKey('');
      } else {
        // 点击编辑的时候不会点到数据之外的数据
        // newData.push(row);
        // setData(newData);
        // setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };
  // 每一列的属性， 设置表格的 header 
  const columns = [
    // 姓名
    {
      title: 'name1',
      dataIndex: 'name',
      width: '25%',
      editable: true,
    },
    // 年龄栏
    {
      title: 'age',
      dataIndex: 'age',
      width: '15%',
      editable: true,
    },
    // 地址栏
    {
      title: 'address',
      dataIndex: 'address',
      width: '40%',
      editable: true,
    },
    // 操作栏
    {
      title: 'operation',
      dataIndex: 'operation',
      // render 就是渲染的节点
      render: (_, record) => {
        // record 是具体的一条数据信息
        const editable = isEditing(record);
        return editable ? (
          // 可编辑状态 有 save 和 calcel
          <span>
            <span
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
                cursor: 'pointer'
              }}
            >
              Save
            </span>
            {/* cancle 会出现一个提示框就是 Popconfim */}
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <span style={{ cursor: 'pointer' }}>Cancel</span>
            </Popconfirm>
          </span>
        ) : (
          //  不可编辑状态
          <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
            Edit
          </Typography.Link>
        );
      },
    },
  ];
  // 制作列 mergedColumns 直接给 Table 组件使用，会根据提供的返回值制作对应的每一列
  const mergedColumns = columns.map((col) => {
    // col 就是具体某一栏的对象
    // 编辑状态如果是 false 的话，就是该栏时不可编辑的(特指的就是 操作栏 )
    if (!col.editable) {
      return col;
    }
    // 下面的这个返回要生成的时可编辑的三列  name  age  address
    return {
      ...col,
      // onCell 返回值就是给单元格组件传递的 prop
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  const onSearch = value => {
    // console.log(value)
    setSearchLoading(true)
    setTimeout(() => {
      setSearchValue(value)
      setSearchLoading(false)
    }, 1000);
  }
  const showData = data.filter(info => info.address.includes(searchValue))
  
  return (
    <div>
      <Search
        style={{ width: '400px' }}
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
        // prefix={<SearchOutlined />}
        suffix={<SearchOutlined />}
        // 不写 value 写了的话必须使用 onChange 但是我们要的是点击才修改， 使用 onSearch 获取输入内容
        defaultValue={searchValue}
      />

      <Form form={form} component={false}>
        <Table
          components={{
            body: {
              // 让单元格使用 EditableCell 展示
              cell: EditableCell,
            },
          }}
          loading={searchLoading}
          bordered
          dataSource={showData}
          columns={mergedColumns}
          rowClassName="editable-row"
          // 分页器自带的基本功能都是默认的
          pagination={{
            onChange: cancel,
            pageSize: 10
          }}
        />
      </Form>
    </div>

  );
};
export default EditTable
