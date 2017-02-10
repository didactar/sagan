import React, { PropTypes } from 'react'
import { Input, Submit } from '../../shared'


const LoginButton = ({onClick}) =>
    <Submit
        label='log in'
        onClick={onClick}
    />


const Username = () =>
    <Input 
        type='text'
        label='username'
        defaultValue='username'
    />


const Password = () =>
    <Input 
        type='password'
        label='password'
        defaultValue='password'
    />


const LogIn = ({logIn}) =>
    <div className='profile-login'>
        <form>
            <div className='form-section'>
                <Username />
                <Password />
                <LoginButton onClick={logIn} />
            </div>
        </form>
    </div>


LogIn.propTypes = {
    logIn: PropTypes.func.isRequired,
}


export default LogIn
