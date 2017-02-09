import React, { PropTypes } from 'react'
import Topbar from '../shared/topbar/container'
import Profile from './profile/Profile'
import Settings from './settings/Settings'
import Footer from './footer/Footer'


const Menu = props =>
    <div className='menu'>
        <Profile {...props} />
        <Settings {...props} />
        <Footer {...props} />
    </div>


const MenuWrapper = props =>
    <div>
        <Topbar /> 
        <Menu {...props} />
    </div>


MenuWrapper.propTypes = {
    loggedIn: PropTypes.bool.isRequired,
}


export default MenuWrapper
