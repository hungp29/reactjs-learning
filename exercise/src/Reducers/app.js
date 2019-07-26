import { ACTION } from '../Actions/app'

const initState = {
  currentMenu: 'users'
}

export const app = (state = initState, action) => {
  switch (action.type) {
    case ACTION.SELECT_MENU:
      return { ...state, currentMenu: action.menuKey }
    default:
      return state
  }
}
