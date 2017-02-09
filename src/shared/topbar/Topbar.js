import React from 'react'


const Menu = () =>
    <a href='/menu'>
        <i className='topbar-menu fa fa-bars'></i>
    </a>


const Brand = () =>
    <a href='/' className='topbar-brand'>
        <i className='topbar-brand-icon fa fa-home'></i>
        <span className='topbar-brand-label'>
            didactar
        </span>
    </a>


const Topbar = ({theme}) =>
    <div className={'topbar ' + theme } >
        <div className='topbar-content'>
            <Brand />
            <Menu />
        </div>
    </div>


const TopbarWrapper = ({color}) =>
    color === 'dark'
        ? <Topbar theme='topbar-dark' />
        : <Topbar theme='topbar-white' />


export default TopbarWrapper
