import { combineReducers } from 'redux'
import { reducer as workshopsReducer } from './workshops'
import { 
    REQUEST_USER, 
    RECEIVE_USER,
    SHOW_WORKSHOPS,
    SHOW_CALENDAR, 
    SHOW_ABOUT,
} from './actions'


const defaultState = {
    fetching: true,
    user: {},
    selectedTab: 'workshops',
}


const userReducer = (state = defaultState, action) => {

  switch (action.type) {

    case REQUEST_USER:
      return {
        ...state,
        fetching: true,
      }

    case RECEIVE_USER:
      return {
        ...state,
        fetching: false,
        user: action.user
      }

    case SHOW_WORKSHOPS:
      return {
        ...state,
        selectedTab: 'workshops'
      }

    case SHOW_CALENDAR:
      return {
        ...state,
        selectedTab: 'calendar'
      }

    case SHOW_ABOUT:
      return {
        ...state,
        selectedTab: 'about'
      }

    default:
      return state

  }

}


export default combineReducers({
    user: userReducer,
    workshops: workshopsReducer, 
})
