import React, { PropTypes } from 'react'


const MenuButton = ({showMenu}) =>
    <i 
        className='topbar-bar-menu fa fa-bars'
        onClick={showMenu} 
    ></i>


const LogoButton = () =>
    <a href='/' className='topbar-bar-logo'>
    </a>


const Brand = () =>
    <span className='topbar-bar-brand'>
        didactar
    </span>


const Bar = ({theme, showMenu}) =>
    <div className={ theme === 'dark' ? 'topbar-bar-dark' : 'topbar-bar-light' } >
        <div className='topbar-bar'>
            <LogoButton />
            <Brand />
            <MenuButton showMenu={showMenu} />
        </div>
    </div>


Bar.propTypes = {
    showMenu: PropTypes.func.isRequired,
    theme: PropTypes.string,
}

export default Bar
