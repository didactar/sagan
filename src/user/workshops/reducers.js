import { REQUEST_WORKSHOPS, RECEIVE_WORKSHOPS } from './actions'


const defaultState = {
    fetching: false, 
    workshops: []
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
        workshops: action.items
      }

    default:
      return state

  }

}
