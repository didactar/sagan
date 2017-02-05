import { REQUEST_EVENTS, RECEIVE_EVENTS } from './actions'


const defaultState = {
    fetching: true, 
    events: []
}


export default (state = defaultState, action) => {

  switch (action.type) {

    case REQUEST_EVENTS:
      return {
        ...state,
        fetching: true
      }

    case RECEIVE_EVENTS:
      return {
        ...state,
        fetching: false,
        events: action.items
      }

    default:
      return state

  }

}
