import Api from '../Api'
import { GOREST_URL } from '../Constants'

// export const ACTION = {
//   STATUS_START: 'START',
//   STATUS_SUCCESS: 'SUCCESS',
//   STATUS_ERROR: 'ERROR'
// SELECT_USER: 'SELECT_USER'
// }

export const USERS_API_REQUEST = 'USERS_API_REQUEST'
export const USERS_API_SUCCESS = 'USERS_API_SUCCESS'
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
export const USER_API_REQUEST = 'USER_API_REQUEST'
export const USER_API_SUCCESS = 'USER_API_SUCCESS'
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'

// export const actionStart = () => {
//   return {
//     type: ACTION.STATUS_START
//   }
// }

// export const actionSuccess = data => {
//   return {
//     type: ACTION.STATUS_SUCCESS,
//     data
//   }
// }

// export const actionError = error => {
//   return {
//     type: ACTION.STATUS_ERROR,
//     error
//   }
// }

export const actionRequestUsers = () => {
  return dispatch => {
    dispatch({ type: USERS_API_REQUEST })
    Api.call(GOREST_URL + '/public-api/users', 'GET')
      .then(data => {
        dispatch({ type: USERS_API_SUCCESS })
        if (data && data._meta && data._meta.success) {
          dispatch({ type: GET_USERS_SUCCESS, data: data.result })
        }
      })
      .catch(error => {
        throw error
      })
  }
}

export const actionRequestUser = (id) => {
  return dispatch => {
    dispatch({ type: USER_API_REQUEST })
    Api.call(GOREST_URL + '/public-api/users/' + id, 'GET')
      .then(data => {
        dispatch({ type: USER_API_SUCCESS })
        if (data && data._meta && data._meta.success) {
          dispatch({ type: GET_USER_SUCCESS, data: data.result })
        }
      })
      .catch(error => {
        throw error
      })
  }
}

// export const actionSelectUser = user => {
//   return {
//     type: ACTION.SELECT_USER,
//     user
//   }
// }
