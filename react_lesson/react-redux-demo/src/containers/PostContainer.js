import { connect } from "react-redux";
import EditPost from "../components/EditPost";
import { getPost, clearPost, editPost, createPost } from '../actions'
const PostContainer = props => {
  // console.log(props)
  return (
    <EditPost {...props} />
  );
}

const mapStateToProps = state => ({ post: state.post })

export default connect(mapStateToProps, { getPost, clearPost, editPost, createPost })(PostContainer);