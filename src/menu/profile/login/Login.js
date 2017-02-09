import React, { PropTypes } from 'react'


const LoginButton = ({logIn}) =>
    <div>
        <span
            className='profile-login-button'
            onClick={logIn}
        >
            Log in
        </span>
    </div>


const Username = () =>
    <input  
        className='profile-input'
        name='email' 
        maxLength='200' 
        type='text' 
        defaultValue='username' 
    />


const Password = () =>
    <input  
        className='profile-input'
        name='username' 
        maxLength='200' 
        type='password' 
        defaultValue='password' 
    />


const LogIn = ({logIn}) =>
    <div className='profile-login'>
        <form>
            <Username />
            <Password />
            <LoginButton logIn={logIn} />
        </form>
    </div>


LogIn.propTypes = {
    logIn: PropTypes.func.isRequired,
}


export default LogIn
