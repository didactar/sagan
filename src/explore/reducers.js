import { REQUEST_WORKSHOPS, RECEIVE_WORKSHOPS } from './actions'


const defaultState = {
    fetching: false, 
    items: []
}


export default (state = defaultState, action) => {

  switch (action.type) {

    case REQUEST_WORKSHOPS:
      return {
        ...state,
        fetching: true
      }

    case RECEIVE_WORKSHOPS:
      return {
        ...state,
        fetching: false,
        items: action.items
      }

    default:
      return state

  }

}
