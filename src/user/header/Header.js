import React, { PropTypes } from 'react'


const Text = ({user}) =>
    <div>
        <div className='user-username'>
            {user.name}
        </div>
        <div className='user-about'>
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
        </div>
    </div>


const Picture = ({user}) =>
    <div 
        className='user-picture'
        style={{'backgroundImage': 'url(/images/avatars/' + user.avatar + '.jpg)'}}
    >
    </div>


const UserHeader = ({user}) =>
    <div className='user-header'>
        <div className='user-header-inner-wrapper'>
            <Picture user={user} />
            <Text user={user} />
        </div>
    </div>


UserHeader.propTypes = {
    user: PropTypes.object.isRequired,
}


export default UserHeader
