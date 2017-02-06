import React from 'react'
import Topbar from '../shared/topbar/container'
import Login from './login/Login'
import Settings from './settings/Settings'
import Footer from './footer/Footer'


const Profile = () =>
    <div className='profile'>
        <Login />
        <Settings />
        <Footer />
    </div>


export default () =>
    <div>
        <Topbar /> 
        <Profile />
    </div>
