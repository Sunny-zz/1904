import React, { Component } from 'react';
class SearchForm extends Component {
  // 父子组件之间的交互
  // 子组件的 state 父组件想要使用
  // 1. 将状态提升到父组件
  
  render() {
    const {searchText, isSelectedStocked, onChange} = this.props
    return (
      <div>
        <input name='searchText' value={searchText} onChange={onChange} placeholder='Search...' type="text" />
        {/* <button>查询</button> */}
        <br />
        <input name='isSelectedStocked' checked={isSelectedStocked} onChange={onChange} style={{marginTop: '15px'}} type="checkbox" id="hasStock" />
        <label htmlFor="hasStock">On show products in stock</label>
      </div>
    );
  }
}

export default SearchForm;