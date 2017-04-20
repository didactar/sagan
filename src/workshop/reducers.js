import { 
    REQUEST_WORKSHOP, 
    RECEIVE_WORKSHOP,
    SHOW_CALENDAR, 
    SHOW_COMMUNITY, 
    SHOW_RESOURCES_FILTER, 
    SHOW_PUBLISH, 
    SHOW_SUBSCRIBE,
    HIDE_SUBHEADER,
} from './actions'


const defaultState = {
    activeTab: 'guide',
    fetching: true, 
    workshop: {},
    subheaderContent: 'calendar',
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

    case SHOW_CALENDAR:
      return {
        ...state,
        subheaderContent: 'calendar'
      }

    case SHOW_COMMUNITY:
      return {
        ...state,
        subheaderContent: 'community'
      }

    case SHOW_PUBLISH:
      return {
        ...state,
        subheaderContent: 'publish'
      }

    case SHOW_SUBSCRIBE:
      return {
        ...state,
        subheaderContent: 'subscribe'
      }

    case SHOW_RESOURCES_FILTER:
      return {
        ...state,
        subheaderContent: 'resources'
      }

    case HIDE_SUBHEADER:
      return {
        ...state,
        subheaderContent: null
      }

    default:
      return state

  }

}
