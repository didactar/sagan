import React, { PropTypes } from 'react'
import Navbar from './Navbar'


const Name = ({user}) =>
    <div className='user-username'>
        {user.name}
    </div>


const Picture = ({user}) =>
    <div 
        className='user-picture'
        style={{'backgroundImage': 'url(/images/avatars/' + user.avatar + '.jpg)'}}
    >
    </div>


const UserHeader = props =>
    <div className='user-header'>
        <div className='user-header-inner-wrapper'>
            <Picture {...props} />
            <Name {...props} />
            <Navbar {...props} />
        </div>
    </div>


UserHeader.propTypes = {
    user: PropTypes.object.isRequired,
}


export default UserHeader
