import { combineReducers } from 'redux'
import calendar from './body/calendar/reducers'
import event from './body/event/reducers'

import { SHOW_GUIDE, SHOW_CALENDAR, SHOW_EVENT, SHOW_COMMUNITY } from './actions'
import { REQUEST_WORKSHOP, RECEIVE_WORKSHOP } from './actions'


const defaultState = {
    content: 'guide',
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
        content: 'calendar'
      }

    case SHOW_EVENT:
      return {
        ...state,
        content: 'event'
      }

    case SHOW_GUIDE:
      return {
        ...state,
        content: 'guide'
      }

    case SHOW_COMMUNITY:
      return {
        ...state,
        content: 'community'
      }

    default:
      return state

  }

}



export default combineReducers({
    workshop, calendar, event
})
