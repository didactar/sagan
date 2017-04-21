import React from 'react'
import { Topbar } from '../shared'
import Header from './header'
import Workshops from './workshops'


const Profile = props =>
    <div>
        <Topbar theme='light' /> 
        <div className='profile'>
            <Header {...props} />
            <Workshops {...props} />
        </div>
    </div>


export default Profile
