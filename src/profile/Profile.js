import React, { PropTypes } from 'react'
import { Topbar } from '../shared'
import Login from './Login'
import Personal from './Personal'


const Profile = props =>
    props.loggedIn 
        ? <Personal {...props} />
        : <Login {...props} />


const ProfileWrapper = props =>
    <div>
        <Topbar theme='light' /> 
        <div className='profile'>
            <Profile {...props} />
        </div>
    </div>


ProfileWrapper.propTypes = {
    loggedIn: PropTypes.bool.isRequired,
    logIn: PropTypes.func.isRequired,
}


export default ProfileWrapper
