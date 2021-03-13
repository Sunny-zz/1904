import { Prompt } from 'react-router-dom'
const About = () => {
  return (
    <div>
      <h2>我是关于页</h2>
      {/* 当离开页面的提示 */}
      <Prompt message="Are you sure you want to leave?" />
    </div>
  );
}

export default About;