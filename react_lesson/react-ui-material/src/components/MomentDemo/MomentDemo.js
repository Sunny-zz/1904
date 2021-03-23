// import Moment from 'react-moment'
import moment from 'moment'
import 'moment/locale/zh-cn'
const MomentDemo = () => {
  const dateToFormat = '2021-03-01T12:59-0800';
  return (
    <div>
      <h3> moment 插件的使用</h3>
      <span>{moment(dateToFormat).format('MMMM Do YYYY, h:mm:ss a')}</span>
    </div>
  );
}

export default MomentDemo;