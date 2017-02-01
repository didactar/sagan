import { REQUEST_WORKSHOP, RECEIVE_WORKSHOP } from './actions'


const defaultState = {
    fetching: false, 
    workshop: {}
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
        workshop: action.workshop
      }

    default:
      return state

  }

}
