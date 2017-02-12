import { SHOW_MENU, HIDE_MENU } from './actions'


const defaultState = {
    menuIsVisible: false
}


export default (state = defaultState, action) => {

  switch (action.type) {

    case SHOW_MENU:
      return {
        ...state,
        menuIsVisible: true
      }

    case HIDE_MENU:
      return {
        ...state,
        menuIsVisible: false
      }

    default:
      return state

  }

}
