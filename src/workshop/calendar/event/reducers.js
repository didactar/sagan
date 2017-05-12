import { 
    REQUEST_USERS, 
    RECEIVE_USERS 
} from './actions'


const defaultState = {
    fetching: false, 
    users: []
}


export default (state = defaultState, action) => {

  switch (action.type) {

    case REQUEST_USERS:
      return {
        ...state,
        fetching: true
      }

    case RECEIVE_USERS:
      return {
        ...state,
        fetching: false,
        users: action.users.data
      }

    default:
      return state

  }

}
