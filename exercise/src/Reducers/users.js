import { USERS_API_REQUEST, USERS_API_SUCCESS, GET_USERS_SUCCESS, USER_API_REQUEST, USER_API_SUCCESS, GET_USER_SUCCESS } from '../Actions/users'

const initState = {
  users: null,
  error: null,
  // selectedUser: null,
  loading: false
}

export const users = (state = initState, action) => {
  switch (action.type) {
    case USERS_API_REQUEST:
    case USER_API_REQUEST:
      return { ...state, loading: true }
    case USERS_API_SUCCESS:
    case USER_API_SUCCESS:
      return { ...state, loading: false }
    case GET_USERS_SUCCESS:
      return { ...state, users: action.data }
    case GET_USER_SUCCESS:
      return { ...state, user: action.data }
    // case ACTION.SELECT_USER:
    // return { ...state, selectedUser: action.user }
    default:
      return state
  }
}
