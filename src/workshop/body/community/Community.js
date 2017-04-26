import React  from 'react'
import { Users } from '../../../shared'


const Community = ({users}) =>
    <div className='workshop-community'>
        <Users users={users} />
    </div>


export default Community
