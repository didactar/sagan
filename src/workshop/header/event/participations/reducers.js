import { REQUEST_PARTICIPATIONS, RECEIVE_PARTICIPATIONS } from './actions'


const defaultState = {
    fetching: true, 
    participations: []
}


export default (state = defaultState, action) => {

  switch (action.type) {

    case REQUEST_PARTICIPATIONS:
      return {
        ...state,
        fetching: true,
      }

    case RECEIVE_PARTICIPATIONS:
      return {
        ...state,
        fetching: false,
        participations: action.participations.data
      }

    default:
      return state

  }

}
