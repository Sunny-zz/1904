import { useEffect } from "react";
import { connect } from "react-redux";
import Posts from "../components/Posts";
import { getPosts, delPost } from '../actions'
const PostsContainer = (props) => {
  const {getPosts} = props
  useEffect(() => {
    getPosts()
  }, [getPosts])
  return (
    <Posts {...props} />
  );
}
const mapStateToProps = state => ({ posts: state.posts })
export default connect(mapStateToProps, { getPosts, delPost })(PostsContainer);