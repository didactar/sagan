import { LOGIN, LOGOUT } from './actions'


const defaultState = {
    loggedIn: false, 
    user: {}
}


export default (state = defaultState, action) => {

  switch (action.type) {

    case LOGIN:
        console.log('login!!!!!')
      return {
        ...state,
        loggedIn: true
      }

    case LOGOUT:
        console.log('logout!!!!!')
      return {
        ...state,
        loggedIn: false
      }

    default:
      return state

  }

}
