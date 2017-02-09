import { combineReducers } from 'redux'
import eventList from './eventList/reducers'
import eventDetail from './eventDetail/reducers'
import { SHOW_EVENT_DETAIL } from './actions'
import { SHOW_CALENDAR } from '../../actions'


const defaultState = {
    calendarTab: 'eventList',
    selectedEvent: ''
}


const calendarTab = (state = defaultState, action) => {

  switch (action.type) {

    case SHOW_CALENDAR:
      return {
        ...state,
        calendarTab: 'eventList',
        selectedEvent: action.selectedEvent
      }

    case SHOW_EVENT_DETAIL:
      return {
        ...state,
        calendarTab: 'eventDetail',
        selectedEvent: action.selectedEvent
      }

    default:
      return state

  }

}


export default combineReducers({
    calendarTab, eventList, eventDetail
})
