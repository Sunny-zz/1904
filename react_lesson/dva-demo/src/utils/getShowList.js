const getShowList = (list, type) => {
  return list.filter(item => type === 'all' ? true : type==='active' ? !item.isCompleted : item.isCompleted)
}
export default getShowList