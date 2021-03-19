// import Button from '@material-ui/core/Button';
import { Button, ButtonGroup, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import clsx from 'clsx'
// clsx 是一个类名处理方法，类似 vue 中的 class 绑定
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// makeStyles 是一个方法用来制作覆盖 material 组件原有样式的样式方法
// 用法 
// 1. 传递一个对象给 makeStyles, 该对象下的属性都是样式对象
const useStyles = makeStyles({
  list: {
    width: 500,
  },
  fullList: {
    width: 300,
  },
});
function App() {
  // 2. makeStyles 调用的返回值再次调用，会得到一个 classes 对象，该对象下的属性其实就是 class 名
  const classes = useStyles()
  const [show, setShow] = useState(false)
  const [direction, setDirection] = useState('left')
  // list 是抽屉的展示列表，有可能展示在上面有可能在左面
  // const list = <div className={ direction === 'left' ? classes.list : classes.fullList}>
  const list = <div className={clsx(classes.list, {[classes.fullList]: direction === 'top' })}>
    {/* clsx 里面第一个参数 classes.list  意思就是这个 class 生效， 第二个参数是一个对象 ，对象的和属性就是 class 名，属性值是 true class 就生效  */}
    <List>
      {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
        <ListItem button key={text} onClick={() => console.log(text)}>
          <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  </div>
  const close = () => {
    setShow(false)
  }
  return (
    <div className="App">
      <Button style={{ backgroundColor: 'red' }} variant="outlined" color="primary" component='a' fullWidth={false}>
        hello，world
      </Button>
      <Divider className='xian' style={{ margin: '20px 0' }} />
      <ButtonGroup variant="outlined" color="primary"  >
        <Button>
          hello，world
        </Button>
        <Button>
          hello，world1
        </Button>
        <Button>
          hello，world2
        </Button>
      </ButtonGroup>
      <Divider className='xian' style={{ margin: '20px 0' }} />
      <Button color="primary" variant="contained" onClick={() => {setShow(true);setDirection('left')}} >Left Drawer</Button>
      <Button color="primary" variant="contained" onClick={() => {setShow(true); setDirection('top')}} >Top Drawer</Button>
      <Drawer anchor={direction} open={show} onClose={close}>
        {/* 设置抽屉展示的内容 */}
        {list}
      </Drawer>
    </div>
  );
}

export default App;
