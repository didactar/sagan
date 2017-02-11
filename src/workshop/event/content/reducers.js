import { REQUEST_EVENT, RECEIVE_EVENT } from './actions'


const defaultState = {
    fetching: true, 
    event: {}
}


export default (state = defaultState, action) => {

  switch (action.type) {

    case REQUEST_EVENT:
      return {
        ...state,
        fetching: true,
      }

    case RECEIVE_EVENT:
      return {
        ...state,
        fetching: false,
        event: action.event
      }

    default:
      return state

  }

}
