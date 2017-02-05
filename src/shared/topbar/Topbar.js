import React from 'react'


const UserButton = () =>
    <a href='/profile'>
        <i 
            className='topbar-menu-button fa fa-user'
        ></i>
    </a>


const Brand = () =>
    <span className='topbar-brand'>
        didactar
    </span>


const HomeButton = () =>
    <a href='/'>
        <i className='topbar-home-button fa fa-home'></i>
    </a>


const Topbar = ({theme}) =>
    <div className={'topbar ' + theme } >
        <div className='topbar-content'>
            <HomeButton />
            <Brand />
            <UserButton />
        </div>
    </div>


const TopbarWrapper = ({color}) =>
    color === 'dark'
        ? <Topbar theme='topbar-dark' />
        : <Topbar theme='topbar-white' />


export default TopbarWrapper
