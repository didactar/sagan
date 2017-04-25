import React from 'react'


const UserItem = ({user}) =>
    <a 
        className='user-item'
        href={'/user/' + user.username}
    >
        <div className='user-item-picture'>
        </div>
        <div className='user-item-name'>
            {user.name}
        </div>
    </a>


export default ({users}) =>
    <div className='users'>
        {users.map((user, i) =>
            <UserItem
                key={i} 
                user={user.user} 
            />
        )}
    </div>
