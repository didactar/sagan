import React, { PropTypes } from 'react'
import { Topbar } from '../shared'
import Login from './Login'
import Personal from './Personal'


const Profile = props =>
    props.loggedIn 
        ? <Personal {...props} />
        : <Login {...props} />


const ProfileWrapper = props =>
    <div className='profile'>
        <Topbar theme='light' /> 
        <Profile {...props} />
    </div>


ProfileWrapper.propTypes = {
    loggedIn: PropTypes.bool.isRequired,
    logIn: PropTypes.func.isRequired,
}


export default ProfileWrapper
