import { useState, useEffect } from "react";
import axios from 'axios'
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
// const PostList = ({ path }) => {
//   const [postList, setPostList] = useState([])
//   useEffect(() => {
//     const getPost = async () => {
//       const type = path.replace('/', '')
//       const url = (type === 'recommended' || type === '') ? 'http://localhost:3008/posts?recommended=true' : `http://localhost:3008/posts?postType=${type}`
//       const res = await axios.get(url)
//       // console.log(res.data)
//       setPostList(res.data)
//     }
//     getPost()
//   }, [path])
//   return (
//     <div className='post-list'>
//       {
//         postList.length ? postList.map(post => <div key={post.id}>
//           <h3>{post.title}</h3>
//         </div>) : '请稍等..'
//       }
//     </div>
//   );
// }
const PostList = () => {
  const { type } = useParams()
  const { search } = useLocation()
  // console.log(location)
  // console.log(type)
  const [postList, setPostList] = useState([])
  useEffect(() => {
    // console.log('发送请求，更新数据', search)
    const getPost = async () => {
      const sort = search === '' ? 'popular' : search.replace('?sort=', '')
      const url = (type === 'recommended' || type === undefined) ? `http://localhost:3008/posts?recommended=true&sort=${sort}` : `http://localhost:3008/posts?postType=${type}&sort=${sort}`
      const res = await axios.get(url)
      // console.log(res.data)
      setPostList(res.data)
    }
    getPost()
  }, [type, search])
  return (
    <div>
      <div>
        <NavLink isActive={() => search.includes('popular') || search === ''} to='?sort=popular'>热门</NavLink>
        <NavLink isActive={() => search.includes('newest')} to='?sort=newest'>最新</NavLink>
        <NavLink isActive={() => search.includes('hotest')} to='?sort=hotest'>热榜</NavLink>
      </div>
      <div className='post-list'>
        {
          postList.length ? postList.map(post => <div key={post.id}>
            <h3>
              <Link to={`/post/${post.id}`}>{post.title}</Link>
              {/* <a target='true' href={`/post/${post.id}`}>{post.title}</a> */}
            </h3>
          </div>) : '请稍等..'
        }
      </div>
    </div>
  );
}

export default PostList;