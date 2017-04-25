import { combineReducers } from 'redux'
import { reducer as homeReducer } from './home'
import { reducer as workshopReducer } from './workshop'
import { reducer as userReducer } from './user'
import { topbarReducer } from './shared'


export default combineReducers({
    home: homeReducer, 
    workshop: workshopReducer, 
    user: userReducer,
    topbar: topbarReducer,
})
