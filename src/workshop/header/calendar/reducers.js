import { combineReducers } from 'redux'
import { reducer as participationsReducer } from './event'
import { REQUEST_EVENTS, RECEIVE_EVENTS, EXPAND_EVENT } from './actions'


const defaultState = {
    fetching: true, 
    events: [],
    expandedEvent: {}
}


const calendar = (state = defaultState, action) => {

  switch (action.type) {

    case REQUEST_EVENTS:
      return {
        ...state,
        fetching: true
      }

    case RECEIVE_EVENTS:
      return {
        ...state,
        fetching: false,
        events: action.items
      }

    case EXPAND_EVENT:
      return {
        ...state,
        expandedEvent: action.event.slug === state.expandedEvent.slug 
                            ? {} : action.event
      }

    default:
      return state

  }

}


export default combineReducers({
    calendar,
    participations: participationsReducer,
})
