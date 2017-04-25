import { combineReducers } from 'redux'
import { reducer as headerReducer } from './header'
import { reducer as workshopsReducer } from './workshops'


export default combineReducers({
    user: headerReducer,
    workshops: workshopsReducer, 
})
