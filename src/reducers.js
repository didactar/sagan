import { combineReducers } from 'redux'
import explore from './explore/reducers'
import workshop from './workshop/reducers'


export default combineReducers({
    explore, workshop
})
