import Mock from "mockjs";

const baseUrl = 'http://localhost:3000'
// 模拟文章列表数据

// 一次性创建好初始的文章列表数据
const postsData = Mock.mock({
  "posts|2000": [
    {
      'id': '@id',
      "author": "@cname",
      "title": '@ctitle(3,5)',
      "content": '@cparagraph(1,3)'
    }
  ]
})

const posts = postsData.posts

// 请求所有的文章列表数据
// Mock.mock(baseUrl + '/posts', 'get', () => posts)

// 设计分页请求
// 'http://www.test.com/posts'   post    {limit:10, page: 1}
Mock.mock(baseUrl + '/posts', 'post', options => {
  const limit = JSON.parse(options.body).limit || 10
  const page = JSON.parse(options.body).page || 1
  // 1 0-10   2 10-20   3 20-30
  const currentPagePosts = posts.slice((page - 1) * limit, page * limit)
  return currentPagePosts
})


// 发请求的时候需要使用 post 传递 id 作为参数
// Mock.mock(baseUrl + '/post', 'post', options => {
//   // 删除 postsData 中的某一项
//   const { id } = JSON.parse(options.body)
//   posts.splice(posts.findIndex(post => post.id === id), 1)
//   // posts = posts.filter(post => post.id !== id)
//   return {
//     success: '删除成功'
//   }
// })

// 发请求的时候需要使用 'http://www.test.com/post/id'
// '^' + baseUrl + '/post/' + '[0-9]+' + '$'
Mock.mock(new RegExp(`^${baseUrl}/post/\\w+$`), 'delete', options => {
  // 删除 postsData 中的某一项
  const id = options.url.replace('http://localhost:3000', '')
  posts.splice(posts.findIndex(post => post.id === id), 1)
  // posts = posts.filter(post => post.id !== id)
  return {
    success: '删除成功'
  }
})

// 请求文章总数 
Mock.mock(baseUrl + '/posts/total', 'get', () => ({ total: posts.length }))

//根据 id 请求单独文章详情 'http://www.test.com/post/xxxid'
Mock.mock(new RegExp(`^${baseUrl}/post/\\w+$`), 'get', options => {
  const id = options.url.replace('http://localhost:3000/post/', '')
  return posts.find(post => post.id === id)
})

// 根据新的文章内容更新单独的文章详情  需要传递参数 post    http://localhost:3000/post/xxxid
Mock.mock(new RegExp(`^${baseUrl}/post/\\w+$`), 'post', options => {
  const newPost = JSON.parse(options.body).post
  const index = posts.findIndex(post => post.id === newPost.id)
  posts[index] = newPost
  return { success: '编辑成功' }
})

// 根据新的文章内容实现新建文章 需要传递参数 post (无 id)  http://localhost:3000/posts
Mock.mock(baseUrl + '/posts/create', 'post', options => {
  const newPost = JSON.parse(options.body).post
  const id = Mock.mock({"id": "@id"}).id
  // console.log(id)
  posts.push({...newPost, id})
  // 将创建好的文章 return
  return {...newPost, id}
})