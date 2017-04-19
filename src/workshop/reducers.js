import { combineReducers } from 'redux'
//import { calendar as calendarReducer } from './header/calendar'
import { reducer as relatedReducer } from './related'


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

    default:
      return state

  }

}


export default combineReducers({
    workshop, 
    //calendar: calendarReducer,
    related: relatedReducer,
})
