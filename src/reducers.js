import { combineReducers } from 'redux'
import home from './home/reducers'
import workshop from './workshop/reducers'
import profile from './profile/reducers'


export default combineReducers({
    home, workshop, profile
})
