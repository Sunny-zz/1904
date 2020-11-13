import data from '../data/data.json'

export default function fetchData (pid) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const res = data.filter(item => item.pid === pid.toString())
      resolve(res)
    }, 100);
  })
}


// 测试  
// fetchData(0).then(res => {
//   console.log(res);
// })

// async function fun () {
//   const res = await fetchData(5)
//   console.log(res);
// }
// fun()

// const old = [{
//   label: '河北',
//   children: [
//     {
//       lebel: '秦皇岛',
//       children
//     }
//   ]
// }, {
//   label: '一级 2',

// }, {
//   label: '一级 3',

// }]