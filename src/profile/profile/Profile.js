import React, { PropTypes } from 'react'
import Login from './Login'
import Personal from './Personal'


const Profile = props =>
    props.loggedIn 
        ? <Personal {...props} />
        : <Login {...props} />


Profile.propTypes = {
    loggedIn: PropTypes.bool.isRequired,
    logIn: PropTypes.func.isRequired,
}


export default Profile
