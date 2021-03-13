const Cat = ({ mouse, imgSrc }) => {
  const { pointX, pointY } = mouse
  return (
    <img style={{ position: 'fixed', left: pointX + 10, top: pointY + 10 }} src={imgSrc} alt="" />
  );
}
export default Cat;