import { combineReducers } from 'redux'
import { calendarReducer, eventReducer, relatedReducer } from './body'


import { SHOW_GUIDE, SHOW_CALENDAR, SHOW_COMMUNITY, SHOW_RELATED, SHOW_EVENT } from './actions'
import { REQUEST_WORKSHOP, RECEIVE_WORKSHOP } from './actions'


const defaultState = {
    activeTab: 'guide',
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
