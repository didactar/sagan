import { REQUEST_COMMUNITY, RECEIVE_COMMUNITY } from './actions'


const defaultState = {
    fetching: true, 
    community: {}
}


export default (state = defaultState, action) => {

  switch (action.type) {

    case REQUEST_COMMUNITY:
      return {
        ...state,
        fetching: true,
      }

    case RECEIVE_COMMUNITY:
      return {
        ...state,
        fetching: false,
        community: action.community
      }

    default:
      return state

  }

}
