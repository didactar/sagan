import React from 'react'


const Notifications = () =>
    <a href='/'>
        <i className='topbar-icon fa fa-bell'></i>
    </a>


const Favorites = () =>
    <a href='/'>
        <i className='topbar-icon fa fa-heart'></i>
    </a>


const Explore = () =>
    <a href='/explore'>
        <i className='topbar-icon fa fa-search'></i>
    </a>


const Home = () =>
    <a href='/'>
        <i className='topbar-icon fa fa-home'></i>
    </a>


const TopbarWrapper = () =>
    <div className='topbar'>
        <div className='main-column'>
            <Home />
            <Explore />
            <Favorites />
            <Notifications />
        </div>
    </div>


export default TopbarWrapper
