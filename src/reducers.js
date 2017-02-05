import { combineReducers } from 'redux'
import home from './home/reducers'
import workshop from './workshop/reducers'


export default combineReducers({
    home, workshop
})
