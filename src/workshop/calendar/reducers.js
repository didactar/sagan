import { combineReducers } from 'redux'
import { reducer as datesReducer } from './dates'
import { reducer as eventReducer } from './event'


export default combineReducers({
    dates: datesReducer, 
    event: eventReducer, 
})
