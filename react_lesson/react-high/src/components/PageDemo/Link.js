
const Link = ({user, avatarSize}) => {
  return ( <a href={user.permalink}>
    <img style={{width: avatarSize +'px'}} src={user.avatarUrl} alt=""/>
  </a> );
}
 
export default Link;