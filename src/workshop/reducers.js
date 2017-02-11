import { combineReducers } from 'redux'
import { reducer as calendarReducer } from './calendar'
import { reducer as relatedReducer } from './related'


import { SHOW_GUIDE, SHOW_COMMUNITY, SHOW_INDEX } from './actions'
import { REQUEST_WORKSHOP, RECEIVE_WORKSHOP } from './actions'


const defaultState = {
    activeTab: 'index',
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

    case SHOW_INDEX:
      return {
        ...state,
        activeTab: 'index'
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

    default:
      return state

  }

}


export default combineReducers({
    workshop, 
    calendar: calendarReducer, 
    related: relatedReducer,
})
