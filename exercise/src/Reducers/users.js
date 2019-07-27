import { ACTION } from '../Actions/users'

const initState = {
  data: null,
  error: null,
  // selectedUser: null,
  status: 0
}

export const users = (state = initState, action) => {
  switch (action.type) {
    case ACTION.STATUS_START:
      return { ...state, status: 1 }
    case ACTION.STATUS_SUCCESS:
      return { ...state, status: 2, data: action.data }
    case ACTION.STATUS_ERROR:
      return { ...state, status: 3, error: action.error }
    // case ACTION.SELECT_USER:
      // return { ...state, selectedUser: action.user }
    default:
      return state
  }
}
