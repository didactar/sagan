import { combineReducers } from 'redux'
import { reducer as homeReducer } from './home'
import { reducer as workshopReducer } from './workshop'
import { reducer as userReducer } from './user'
import { topbarReducer } from './shared'
import { reducer as communityReducer } from './workshop/body/community'


export default combineReducers({
    home: homeReducer, 
    workshop: workshopReducer, 
    user: userReducer,
    topbar: topbarReducer,
    community: communityReducer,
})
