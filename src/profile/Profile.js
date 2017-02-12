import React, { PropTypes } from 'react'
import { Topbar } from '../shared'
import Profile from './profile'
import Settings from './settings'


const Menu = props =>
    <div className='menu'>
        <Profile {...props} />
        <Settings {...props} />
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
