import { 
    REQUEST_WORKSHOP, 
    RECEIVE_WORKSHOP,
    SHOW_COMMUNITY, 
    SHOW_RESOURCES,
    SHOW_EVENT,
    SHOW_HOME,
} from './actions'


const defaultState = {
    activeTab: 'guide',
    fetching: true, 
    workshop: {},
    bodyContent: 'home',
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

    case SHOW_HOME:
      return {
        ...state,
        bodyContent: 'home'
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

    case SHOW_EVENT:
      return {
        ...state,
        bodyContent: 'event'
      }

    default:
      return state

  }

}
