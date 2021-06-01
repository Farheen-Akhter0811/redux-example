import { FETCH_POSTS } from "../actions/types"
import { NEW_POST } from "../actions/types"

const initialState = {
  items: [],
  item: {},
}
export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload,
      }
    case NEW_POST:
      return {
        ...state,
        item: action.payload,
        ...state.items.push(state.item),
      }
    default:
      console.log(state)
      return state
  }
}
