import { ACTION } from '../Actions/app'

const initState = {
  navbar: {
    collapsed: true,
    width: 200,
    collapsedWidth: 80
  }
}

export const app = (state = initState, action) => {
  // switch (action.type) {
  //   case ACTION.SELECT_MENU:
  //     return { ...state, currentMenu: action.menuKey }
  //   default:
  //     return state
  // }
  return state
}
