import React from 'react'


const UserItem = ({user}) =>
    <div className='user-item'>
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

