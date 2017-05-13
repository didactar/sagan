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
    selectedTab: 'resources',
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
        selectedTab: 'resources'
      }

    case SHOW_COMMUNITY:
      return {
        ...state,
        selectedTab: 'community'
      }

    case SHOW_CALENDAR:
      return {
        ...state,
        selectedTab: 'calendar'
      }

    default:
      return state

  }

}
