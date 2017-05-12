import { combineReducers } from 'redux'
import { reducer as homeReducer } from './home'
import { reducer as workshopReducer } from './workshop'
import { reducer as userReducer } from './user'
import { topbarReducer } from './shared'
import { reducer as communityReducer } from './workshop/community'
import { reducer as relatedReducer } from './workshop/related'


export default combineReducers({
    home: homeReducer, 
    workshop: workshopReducer, 
    user: userReducer,
    topbar: topbarReducer,
    community: communityReducer,
    related: relatedReducer,
})
