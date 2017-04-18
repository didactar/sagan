import React from 'react'


const UserItem = ({user}) =>
    <div className='user-item'>
        <div className='user-item-picture'>
        </div>
        <div className='user-item-name'>
            {user.name}
        </div>
    </div>


export default ({users}) =>
    <div className='users'>
        {users.map((user, i) =>
            <UserItem
                key={i} 
                user={user.user} 
            />
        )}
    </div>
