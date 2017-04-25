import { 
    REQUEST_USER, 
    RECEIVE_USER,
} from './actions'


const defaultState = {
    user: {},
    fetching: true,
}


export default (state = defaultState, action) => {

  switch (action.type) {

    case REQUEST_USER:
      return {
        ...state,
        fetching: true,
      }

    case RECEIVE_USER:
      return {
        ...state,
        fetching: false,
        user: action.user
      }

    default:
      return state

  }

}
