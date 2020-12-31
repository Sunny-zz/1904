export default {
  render () {
    return <div>
      {
        this.show1 ? <h1 style={{ width: '200px', display: this.show2 ? 'block' : 'none' }} class={this.show2 ? 'active' : ''} onClick={this.clickFun}>{this.title} <span>111</span></h1> : <h1>不存在</h1>
      }
      <hr />
      <ul>
        {this.arr.map(item => <li>{item}</li>)}
      </ul>
    </div>
  },
  data () {
    return {
      show1: true,
      show2: true,
      arr: [1, 2, 3]
    }
  },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  methods: {
    clickFun () {
      console.log(11111)
    }
  }
}


// document.querySelector('.xxx').onclick = function(){
//   console.log()
// }
// document.querySelector('.xxx').addEventListener('click',function(){

// })

// 在 html 标签内   <h1 onclick='fun()'></h1>    原生事件传递参数 参数必须是字符串格式的