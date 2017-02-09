import React, { PropTypes } from 'react'
import Topbar from '../shared/topbar/container'
import User from './user/User'
import Settings from './settings/Settings'
import Footer from './footer/Footer'


const Profile = props =>
    <div className='profile'>
        <User {...props} />
        <Settings {...props} />
        <Footer {...props} />
    </div>


const ProfileWrapper = props =>
    <div>
        <Topbar /> 
        <Profile {...props} />
    </div>


ProfileWrapper.propTypes = {
    loggedIn: PropTypes.bool.isRequired,
}


export default ProfileWrapper
