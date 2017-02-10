import { combineReducers } from 'redux'
import { calendarReducer, relatedReducer } from './body'


import { SHOW_GUIDE, SHOW_CALENDAR, SHOW_COMMUNITY, SHOW_RELATED } from './actions'
import { REQUEST_WORKSHOP, RECEIVE_WORKSHOP } from './actions'


const defaultState = {
    activeTab: 'guide',
    fetching: true, 
    workshop: {}
}


const workshop = (state = defaultState, action) => {

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
        activeTab: 'calendar'
      }

    case SHOW_GUIDE:
      return {
        ...state,
        activeTab: 'guide'
      }

    case SHOW_COMMUNITY:
      return {
        ...state,
        activeTab: 'community'
      }

    case SHOW_RELATED:
      return {
        ...state,
        activeTab: 'related'
      }

    default:
      return state

  }

}


export default combineReducers({
    workshop, 
    calendar: calendarReducer, 
    related: relatedReducer
})
