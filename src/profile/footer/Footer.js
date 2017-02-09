import React, { PropTypes } from 'react'


const About = () =>
    <a 
        className='profile-footer-link'
        href='/about'
    >
        About Didactar
    </a>


const LogoutButton = ({logOut}) =>
    <span 
        className='profile-footer-link'
        onClick={logOut}
    >
        Log Out
    </span>


const Logout = ({loggedIn, logOut}) =>
    loggedIn 
        ? <LogoutButton logOut={logOut} /> 
        : null


const Footer = ({loggedIn, logOut}) =>
    <div className='profile-footer'>
        <About />
        <Logout 
            loggedIn={loggedIn} 
            logOut={logOut}
        />
    </div>


Footer.propTypes = {
    loggedIn: PropTypes.bool.isRequired,
    logOut: PropTypes.func.isRequired,
}


export default Footer
