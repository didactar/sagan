import { combineReducers } from 'redux'
import { reducer as contentReducer } from './content'
import { reducer as participationsReducer } from './participations'


export default combineReducers({
    content: contentReducer, 
    participations: participationsReducer, 
})
