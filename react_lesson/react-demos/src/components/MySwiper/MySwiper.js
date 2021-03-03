import { Component } from 'react'
import './myswiper.css'
class MySwiper extends Component {
  state = {
    imgArr: [
      {
        id: 1,
        src: 'https://imgcps.jd.com/ling4/10020956724904/5Lqs6YCJ5aW96LSn/5L2g5YC85b6X5oul5pyJ/p-5bd8253082acdd181d02fa0f/0869bdbc/cr/s/q.jpg'
      },
      {
        id: 2,
        src: 'https://img11.360buyimg.com/da/s590x470_jfs/t1/107981/19/12483/76308/5e988a74E0e10832c/2d5480ccc59c0064.jpg.webp'
      },
      {
        id: 3,
        src: 'https://img13.360buyimg.com/pop/s590x470_jfs/t1/157169/30/8874/54663/6039b8a5Eab9e956e/c78aad41240d8782.jpg.webp'
      },
      {
        id: 4,
        src: 'https://img10.360buyimg.com/pop/s590x470_jfs/t1/168467/29/8567/100562/60377e4cE5d135772/c29bc71c53672214.jpg.webp'
      }
    ],
    activeIndex: 0
  }
  // 实现自动播放
  render() {
    const { imgArr, activeIndex } = this.state
    const imgList = imgArr.map((img, index) => (
      // <div className={ index === 0 ? 'img-item active' : 'img-item'} key={img.id}>
      <div className={`img-item${index === activeIndex ? ' active' : ''}`} key={img.id}>
        <img src={img.src} alt="" />
      </div>
    ))
    const paginationList = imgArr.map((ele, index) => <li className={`pagination-item${index === activeIndex ? ' active' : ''}`} onClick={() => {
      this.handlePaginationClick(index)
    }} key={ele.id}></li>)
    return (
      <div className='my-swiper' onMouseEnter={this.enter} onMouseLeave={this.leave}>
        <div className="img-wrap">
          {imgList}
        </div>
        <ul className='pagination'>
          {paginationList}
        </ul>
        <div onClick={this.leftClick} className="left-arrow">{'<'}</div>
        <div onClick={this.rightClick} className="right-arrow">{'>'}</div>
      </div>
    )
  }
  componentDidMount() {
    // 在类的函数内想要使用 this 那么这个函数需要使用箭头函数(生命周期函数除外)，其内部的其他函数也想要使用这个 this 同样需要创建成箭头函数
    // this.loop 相当在类里面创建了全局的变量 loop
    this.autoPlay()
  }
  enter = () => {
    clearInterval(this.loop)
  }
  leave = () => {
    this.autoPlay()
  }
  autoPlay = () => {
    this.loop = setInterval(() => {
      const { activeIndex, imgArr } = this.state
      const length = imgArr.length
      this.setState({
        activeIndex: activeIndex === length - 1 ? 0 : activeIndex + 1
      })
    }, 1000);
  }
  handlePaginationClick = index => {
    // console.log(index)
    this.setState({
      activeIndex: index
    })
  }
  leftClick = () => {
    const { activeIndex, imgArr } = this.state
    const length = imgArr.length
    this.setState({
      activeIndex: activeIndex === 0 ? length - 1 : activeIndex - 1
    })
  }
  rightClick = () => {
    const { activeIndex, imgArr } = this.state
    const length = imgArr.length
    this.setState({
      activeIndex: activeIndex === length - 1 ? 0 : activeIndex + 1
    })
  }
}
export default MySwiper