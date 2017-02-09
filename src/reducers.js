import { combineReducers } from 'redux'
import home from './home/reducers'
import workshop from './workshop/reducers'
import menu from './menu/reducers'


export default combineReducers({
    home, workshop, menu
})
