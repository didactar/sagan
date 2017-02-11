import { combineReducers } from 'redux'
import { reducer as calendarReducer } from './calendar'
import { reducer as eventReducer } from './event'
import { reducer as relatedReducer } from './related'


import { SHOW_GUIDE, SHOW_CALENDAR, SHOW_COMMUNITY, SHOW_INDEX, SHOW_EVENT } from './actions'
import { REQUEST_WORKSHOP, RECEIVE_WORKSHOP } from './actions'


const defaultState = {
    activeTab: 'index',
    fetching: true, 
    workshop: {},
    eventSlug: '',
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

    case SHOW_INDEX:
      return {
        ...state,
        activeTab: 'index'
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

    case SHOW_EVENT:
      return {
        ...state,
        activeTab: 'event',
        eventSlug: action.eventSlug
      }

    default:
      return state

  }

}


export default combineReducers({
    workshop, 
    event: eventReducer, 
    calendar: calendarReducer, 
    related: relatedReducer
})
