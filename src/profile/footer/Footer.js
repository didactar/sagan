import React, { PropTypes } from 'react'


const FooterLink = ({link, icon, label}) =>
    <a 
        className='profile-footer-button'
        href={link}
    >
        <i className={'profile-footer-button-icon fa ' + icon}></i>
        <span className='profile-footer-button-label'>
            {label}
        </span>
    </a>


const LogOut = ({logOut}) =>
    <span 
        className='profile-footer-button'
        onClick={logOut}
    >
        <i className={'profile-footer-button-icon fa fa-sign-out'}></i>
        <span className='profile-footer-button-label'>
            Log Out
        </span>
    </span>


const Footer = ({loggedIn, logOut}) =>
    <div className='profile-footer'>
        <FooterLink 
            label='about'
            icon='fa-hashtag'
            link='/about'
        />
        <FooterLink 
            label='help'
            icon='fa-support'
            link='/help'
        />
        <FooterLink 
            label='contact'
            icon='fa-envelope'
            link='/contact'
        />
        {loggedIn 
            ? <LogOut logOut={logOut} /> 
            : null
        }
    </div>


Footer.propTypes = {
    loggedIn: PropTypes.bool.isRequired,
    logOut: PropTypes.func.isRequired,
}


export default Footer
