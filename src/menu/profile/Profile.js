import React, { PropTypes } from 'react'
import Login from './login/Login'
import Personal from './personal/Personal'


const UserWrapper = props =>
    props.loggedIn 
        ? <Personal {...props} />
        : <Login {...props} />


UserWrapper.propTypes = {
    loggedIn: PropTypes.bool.isRequired,
    logIn: PropTypes.func.isRequired,
}


export default UserWrapper
