import { combineReducers } from 'redux'
import { reducer as homeReducer } from './home'
import { reducer as workshopReducer } from './workshop'
import { reducer as profileReducer } from './profile'
import { reducer as settingsReducer } from './settings'
import { topbarReducer } from './shared'


export default combineReducers({
    home: homeReducer, 
    workshop: workshopReducer, 
    profile: profileReducer,
    settings: settingsReducer,
    topbar: topbarReducer,
})
