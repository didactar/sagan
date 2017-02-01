import { REQUEST_WORKSHOP, RECEIVE_WORKSHOP } from './actions'


const defaultState = {
    fetching: true, 
    event: {}
}


export default (state = defaultState, action) => {

  switch (action.type) {

    case REQUEST_WORKSHOP:
      return {
        ...state,
        fetching: true,
      }

    case RECEIVE_WORKSHOP:
      return {
        ...state,
        fetching: false,
        event: action.event
      }

    default:
      return state

  }

}
