import { ADD, SUB } from "../constants/ActionTypes"

// store 中的新数据 count 
const count =  (state = 1000, action) => {
  switch (action.type) {
    case ADD:
      return state + 1
    case SUB:
      return state - 1
    default:
      return state
  }
}
export default count