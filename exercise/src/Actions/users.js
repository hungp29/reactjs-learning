import Api from '../Api'
import { GOREST_URL } from '../Constants'

export const ACTION = {
  STATUS_START: 'START',
  STATUS_SUCCESS: 'SUCCESS',
  STATUS_ERROR: 'ERROR'
}

export const actionStart = () => {
  return {
    type: ACTION.STATUS_START
  }
}

export const actionSuccess = data => {
  return {
    type: ACTION.STATUS_SUCCESS,
    data
  }
}

export const actionError = error => {
  return {
    type: ACTION.STATUS_ERROR,
    error
  }
}

export const actionRequestUsers = () => {
  return dispatch => {
    dispatch(actionStart())
    Api.call(GOREST_URL + '/public-api/users', 'GET')
      .then(data => dispatch(actionSuccess(data)))
      .catch(error => dispatch(actionError(error)))
  }
}
