import React, { PropTypes } from 'react'


const MenuTab = ({link, icon, label}) =>
    <a 
        className='menu-tab'
        href={link}
    >
        <i className={'menu-tab-icon fa ' + icon}></i>
        <span className='menu-tab-label'>
            {label}
        </span>
    </a>


const LogOut = ({logOut}) =>
    <span 
        className='menu-tab'
        onClick={logOut}
    >
        <i className={'menu-tab-icon fa fa-sign-out'}></i>
        <span className='menu-tab-label'>
            Log Out
        </span>
    </span>


const MenuContent = ({loggedIn, logOut}) =>
    <div className='menu-content'>
        <MenuTab 
            label='profile'
            icon='fa-user'
            link='/profile'
        />
        <MenuTab 
            label='settings'
            icon='fa-cog'
            link='/settings'
        />
        <MenuTab 
            label='about'
            icon='fa-hashtag'
            link='/about'
        />
        <MenuTab 
            label='help'
            icon='fa-support'
            link='/help'
        />
        <MenuTab 
            label='contact'
            icon='fa-envelope'
            link='/contact'
        />
        {loggedIn 
            ? <LogOut logOut={logOut} /> 
            : null
        }
    </div>


const Menu = props =>
    <div 
        className={props.menuIsVisible ? 'menu menu-visible' : 'menu menu-invisible' } 
        onMouseDown={props.menuMouseDown}
        onMouseUp={props.menuMouseUp}
    >
        <MenuContent {...props} />
    </div>


Menu.propTypes = {
    menuIsVisible: PropTypes.bool.isRequired,
    menuMouseUp: PropTypes.func.isRequired,
    menuMouseDown: PropTypes.func.isRequired,
    loggedIn: PropTypes.bool.isRequired,
    logOut: PropTypes.func.isRequired,
}

export default Menu
