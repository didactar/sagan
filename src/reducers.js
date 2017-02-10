import { combineReducers } from 'redux'
import { reducer as homeReducer } from './home'
import { reducer as workshopReducer } from './workshop'
import { reducer as menuReducer } from './menu'


export default combineReducers({
    home: homeReducer, 
    workshop: workshopReducer, 
    menu: menuReducer,
})
