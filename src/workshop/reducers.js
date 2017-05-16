import { combineReducers } from 'redux'
import { reducer as resourcesReducer } from './resources'
import { reducer as communityReducer } from './community'
import { reducer as calendarReducer } from './calendar'
import { reducer as relatedReducer } from './related'

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


const workshopReducer = (state = defaultState, action) => {

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


export default combineReducers({
    workshop: workshopReducer, 
    resources: resourcesReducer, 
    calendar: calendarReducer, 
    community: communityReducer, 
    related: relatedReducer, 
})
