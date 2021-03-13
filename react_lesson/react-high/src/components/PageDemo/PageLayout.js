import NavigationBar from "./NavigationBar"

const PageLayout = (props) => {
  return (
    <div>
      <div className="nav">
        <NavigationBar {...props} />
      </div>
      <div>我是内容</div>
    </div>
  );
}
 
export default PageLayout;