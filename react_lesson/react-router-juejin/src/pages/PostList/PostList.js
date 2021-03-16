import { useState, useEffect, useRef } from "react";
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
  const location = useLocation()
  const { search } = location
  const [postList, setPostList] = useState([])
  // const locationRef = useRef()
  const locationStateRef = useRef()
  // console.log(location)
  const stateDefault = location.state ? location.state.default : type ? type : 'recommended'
  useEffect(() => {
    // 如何获取上一次的地址栏的信息
    const getPost = async () => {
      const sort = search === '' ? 'popular' : search.replace('?sort=', '')
      const url = (type === 'recommended' || type === undefined) ? `http://localhost:3008/posts?recommended=true&sort=${sort}` : `http://localhost:3008/posts?postType=${type}&sort=${sort}`
      const res = await axios.get(url)
      // console.log(res.data)
      console.log('发送请求，更新数据', search)
      setPostList(res.data)
    }
    // console.log(location)
    // const nowLocationUrl = location.pathname + location.search
    // let recommendedUrl = ['/', '/recommended', '/recommended?sort=popular', '/?sort=popular']
    // let frontEndUrl = ['/frontend', '/frontend?sort=popular']
    // let backEndUrl = ['/backend', '/backend?sort=popular']
    // let isAllRecommended = recommendedUrl.includes(nowLocationUrl) && recommendedUrl.includes(locationRef.current)
    // let isAllFrontEnd = frontEndUrl.includes(nowLocationUrl) && frontEndUrl.includes(locationRef.current)
    // let isAllBackEnd = backEndUrl.includes(nowLocationUrl) && backEndUrl.includes(locationRef.current)
    // if (!(isAllRecommended || isAllFrontEnd || isAllBackEnd)) {
    //   getPost()
    // } 
    // console.log(stateDefault, locationStateRef.current)
    if (!(stateDefault === locationStateRef.current)) {
      getPost()
    }
    // locationRef.current = location.pathname + location.search
    locationStateRef.current = stateDefault
  }, [type, search])
  return (
    <div>
      <div>
        <NavLink isActive={() => search.includes('popular') || search === ''} to={{ search: '?sort=popular', state: { default: type ? type : 'recommended' } }}>热门</NavLink>
        <NavLink isActive={() => search.includes('newest')} to={{search:'?sort=newest',state:{default: 'newest'}}}>最新</NavLink>
        <NavLink isActive={() => search.includes('hotest')} to={{search:'?sort=hotest',state:{default: 'hotest'}}}>热榜</NavLink>
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