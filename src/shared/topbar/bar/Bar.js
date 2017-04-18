import React, { PropTypes } from 'react'


const MenuButton = ({showMenu}) =>
    <span onClick={showMenu} > 
        <i className='topbar-bar-menu fa fa-bars'></i>
    </span>


const BrandButton = () =>
    <a href='/' className='topbar-bar-brand'>
        <i className='topbar-bar-brand-icon fa fa-home'></i>
        <span className='topbar-bar-brand-label'>
            didactar
        </span>
    </a>


const Bar = ({theme, showMenu}) =>
    <div className={ theme === 'dark' ? 'topbar-bar-dark' : 'topbar-bar-light' } >
        <div className='topbar-bar'>
            <BrandButton />
            <MenuButton showMenu={showMenu} />
        </div>
    </div>


Bar.propTypes = {
    showMenu: PropTypes.func.isRequired,
    theme: PropTypes.string,
}

export default Bar
