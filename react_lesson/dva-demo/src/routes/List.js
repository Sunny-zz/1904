import { connect } from "dva";
// import { useEffect } from "react";

const List = ({ list, dispatch }) => {
  // useEffect(() => {
  //   dispatch({ type: 'list/getList', list: [1, 2, 3] })
  // }, [])
  return (
    <div>
      <h4>我是列表</h4>
      {
        list.map(post => <div key={post.id}>{post.title}</div> )
      }
    </div>
  );
}
const mapStateToProps = state => ({ list: state.list })
export default connect(mapStateToProps)(List);