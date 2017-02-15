import { combineReducers } from 'redux'
import { reducer as calendarReducer } from './body/calendar'
import { reducer as relatedReducer } from './related'


import { SHOW_GUIDE, SHOW_CALENDAR } from './actions'
import { REQUEST_WORKSHOP, RECEIVE_WORKSHOP } from './actions'


const defaultState = {
    activeTab: 'guide',
    fetching: true, 
    workshop: {},
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

    default:
      return state

  }

}


export default combineReducers({
    workshop, 
    calendar: calendarReducer, 
    related: relatedReducer,
})
