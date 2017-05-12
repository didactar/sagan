import React  from 'react'
import Navbar  from './Navbar'
import { Users } from '../../shared'


const Join = ({users}) =>
    <div className='workshop-community-join'>
        <div className='workshop-community-join-button'>
            join workshop
        </div>
    </div>


const CommunityUsers = ({users}) =>
    <div className='workshop-community-users'>
        <Users users={users} />
    </div>


const Community = ({users, showCommunity}) =>
    <div className='workshop-community'>
        <Navbar showCommunity={showCommunity} />
        <CommunityUsers users={users} />
        <Join />
    </div>


export default Community
