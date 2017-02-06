import React from 'react'


export default () =>
    <div className='profile-login'>
        <form>
            <input  
                className='profile-input'
                name='email' 
                maxLength='200' 
                type='text' 
                defaultValue='username' 
            />
            <input  
                className='profile-input'
                name='username' 
                maxLength='200' 
                type='password' 
                defaultValue='password' 
            />
        </form>
    </div>
