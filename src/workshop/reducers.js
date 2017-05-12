import { 
    REQUEST_WORKSHOP, 
    RECEIVE_WORKSHOP,
    SHOW_RESOURCES,
    SHOW_COMMUNITY, 
    SHOW_CALENDAR,
} from './actions'


const defaultState = {
    fetching: true, 
    workshop: {},
    bodyContent: 'resources',
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

    case SHOW_RESOURCES:
      return {
        ...state,
        bodyContent: 'resources'
      }

    case SHOW_COMMUNITY:
      return {
        ...state,
        bodyContent: 'community'
      }

    case SHOW_CALENDAR:
      return {
        ...state,
        bodyContent: 'calendar'
      }

    default:
      return state

  }

}
